import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
//import DataTable from '../../components/DataTable/datatable';
import ApiService from '../../util/ApiService/ApiService';
import PopUp from '../../util/PopUp/PopUp';
import Tabla from '../../components/Tabla/Tabla';

class Autores extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nomes: []
            
        };
    }

    componentDidMount(){
        ApiService.ListaNomes()
                .then(res => {
                    if(res.message === 'success'){
                        PopUp.exibeMensagem('success', 'Autores Listados com sucesso');
                        this.setState({nomes: [...this.state.nomes, ...res.data]});
                    }
                })
                .catch(err => PopUp.exibeMensagem('error', 'Falha na comunicação com a API ao listar os autores'));
    }

    render() {
        const campos =[{titulo:'Autores', dado:'nome'}]
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Página de Autores</h1>
                    <Tabla dados={this.state.nomes} campos={campos}  />
                </div>
            </Fragment>
        );
    }

}
export default Autores;