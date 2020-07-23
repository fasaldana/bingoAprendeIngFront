import React, { Component } from 'react';
import './App.css';


import Categorias from './component/categorias';
import Application from "./component/Application";
import Tipo from './component/Tipo';
import Home from './component/Home';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import ImageLoad from "./component/ImageLoad";

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact component={Home}/>
                <Route path="/tipo" component={Tipo}/>
                <Route path="/categorias" component={Categorias}/>
                <Route path="/game" component={Application}/>
            </div>
        </Router>
    );
}

export default App;
