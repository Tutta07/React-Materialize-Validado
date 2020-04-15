import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './Pages/Home/Home';
import Sobre from './Pages/Sobre/sobre';
import Livros from './Pages/Livros/livros';
import Autores from './Pages/Autores/autores';
import NotFound from './Pages/NotFound/notfound';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/sobre' component={Sobre} />
            <Route path='/livros' component={Livros} />
            <Route path='/autores' component={Autores} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'))