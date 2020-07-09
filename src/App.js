import React, { Component } from 'react';
import './App.css';


import Categorias from './component/categorias';
import Application from "./component/Application";
import Elementos from "./component/Elementos";
import {Switch, Route} from "react-router-dom";
import ImageLoad from "./component/ImageLoad";
import ElementosGenerados from './component/ElementosGenerados';

function App() {
    return (
        <div className="App" class="container">
            <div>
                <Elementos/>
            </div>
            
            <div > 
                <Application/>
                <div>
                <ElementosGenerados/>
            </div>
            </div>
        </div>
    );
}

export default App;
