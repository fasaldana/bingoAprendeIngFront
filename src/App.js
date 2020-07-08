import React, { Component } from 'react';
import './App.css';
import Categorias from './component/categorias';
import Application from "./component/Application";
import Elementos from "./component/Elementos";
import {Switch, Route} from "react-router-dom";
import ImageLoad from "./component/ImageLoad";

function App() {
    return (
        <div className="App">
            <div>
                <Elementos/>
                <Application/>
            </div>
        </div>
    );
}

export default App;
