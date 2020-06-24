import React, { Component } from 'react';
import Inicio from "./inicio";

class Categorias extends Component {
    render(){
        return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">BINGO APRENDE INGLÉS</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item active">
        <a className="nav-link" href="index.html">HOME<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="ayuda.html">HELP!</a>
        </li>
        </ul>
        </div>
        </nav>


        <div className="d-flex justify-content-center p-5 border border-warning">

        <div className="border border-secondary p-5 bg-light">
        <h1>CHOOSE THE CATEGORY</h1>

        <div className="d-flex flex-nowrap">

        <div className="col px-md-5 p-2 "><img src="img/family_96px.png" className="rounded float-left"
        alt="10"></img>
        <div className="p-5 border bg-light"><a href="tipo.html"
        className="btn btn-warning stretched-link">FAMILY</a></div>
        </div>
        <div className="col px-md-5 p-2"><img src="img/numbers_96px.png" className="rounded float-left"
        alt="10"></img>
        <div className="p-5 border bg-light"><a href="tipo.html"
        className="btn btn-warning stretched-link">NUMBERS</a></div>
        </div>

        </div>

        <div className="d-flex flex-nowrap">
        <div className="col px-md-5 p-2"><img src="img/valet_parking_96px.png" className="rounded float-left"
        alt="10"></img>
        <div className="p-5 border bg-light"><a href="tipo.html"
        className="btn btn-warning stretched-link">VEHICLES</a>
        </div></div>
        <div className="col px-md-5 p-2"><img src="img/flounder_fish_96px.png" className="rounded float-left"
        alt="10"></img>
        <div className="p-5 border bg-light"><a href="tipo.html"
        className="btn btn-warning stretched-link">ANIMALS</a></div>
        </div>

        </div>

        <div className="d-flex flex-nowrap">
        <div className="col px-md-5 p-3"><img src="img/business_96px.png" className="rounded float-left"
        alt="10"></img>
        <div className="p-5 border bg-light"><a href="tipo.html"
        className="btn btn-warning stretched-link">BUSINESS</a>
        </div></div>
        <div className="col px-md-5 p-3"><img src="img/shirt_96px.png" className="rounded float-left" alt="10"></img>
        <div className="p-5 border bg-light"><a href="tipo.html"
        className="btn btn-warning stretched-link">CLOTHES</a></div>
        </div>

        </div>


        </div>
        </div>
        </div>
        );
    }
}

export default Categorias;