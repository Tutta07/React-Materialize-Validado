import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Livros from './Pages/Livros/livros';
import Autores from './Pages/Autores/autores';
import Sobre from './Pages/Sobre/sobre';
import NotFound from './Pages/NotFound/notfound';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/sobre' component={Sobre} />
          <Route path='/livros' component={Livros} />
          <Route path='/autores' component={Autores} />
          <Route component={NotFound} />

      </Switch>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();