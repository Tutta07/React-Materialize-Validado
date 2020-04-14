import React, { Component, Fragment } from 'react';
import './Home.css';
import 'materialize-css/dist/css/materialize.min.css';
import Tabla from '../../components/Tabla/Tabla';
import Form from '../../components/Formulario/Formulario';
import Header from '../../components/Header/Header';
import PopUp from '../../util/PopUp/PopUp';
import ApiService from '../../util/ApiService/ApiService';// estamos utilizando en el ejemplo de api externa una api de autores, no la de carros pues no funciona.




class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      autores: [],
    };
  }
  
  removeAutor = id => {

    const { autores } = this.state;

    const autoresAtualizado = autores.filter(autor => {
        return autor.id !== id;
    });
    ApiService.RemoveAutor(id)
              .then(res =>{
                if(res.message === 'deleted'){
                  this.setState({autores : [...autoresAtualizado]})
                  PopUp.exibeMensagem("error", "Autor removido com sucesso");
                }
              })
              .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao tentar remover o autor"));
    
  }

  escutadorDeSubmit = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
              .then(res =>{  
                if(res.message === 'success'){
                  this.setState({ autores:[...this.state.autores, res.data] });
                  PopUp.exibeMensagem("success", "Autor adicionado com sucesso");
                }
                
              })
              .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao tentar criar o autor"));

    
  }


  componentDidMount(){
    ApiService.ListaAutores()
                .then(res => {
                  if(res.message === 'success'){
                    this.setState({autores : [...this.state.autores, ...res.data]})
                  }
                  
                })
                .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao tentar listar os autores"));
  }

  render() {

    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
        <h1>Casa do Código</h1>
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
        <Form escutadorDeSubmit={this.escutadorDeSubmit}/>
        </div>
      </Fragment>
    );
  }

}

export default Home;