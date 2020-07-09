import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <a className="nav-link" href="#">HOME<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">HELP!</a>
        </li>
        </ul>
        </div>
        </nav>


        <div className="d-flex justify-content-center p-5 border border-warning">

        <div className="border border-secondary p-5 bg-light">
        <h1>CHOOSE THE CATEGORY</h1>

        <div className="d-flex flex-nowrap">

        <div className="col px-md-5 p-2"><img src="assets/numbers_96px.png" className="rounded float-left"
        alt="10"></img>
        <div className="p-5 border bg-light"><a href="#"
        className="btn btn-warning stretched-link">NUMBERS</a></div>
        </div>

        </div>

        <div className="d-flex flex-nowrap">
        <div className="col px-md-5 p-2"><img src="assets/valet_parking_96px.png" className="rounded float-left"
        alt="10"></img>
        <div className="p-5 border bg-light"><a href="#"
        className="btn btn-warning stretched-link">VEHICLES</a>
        </div></div>
        <div className="col px-md-5 p-2"><img src="assets/elephant_200px.png" className="rounded float-left"
        alt="10"></img>
        <div className="p-5 border bg-light"><Link to="/game"><a className="btn btn-warning stretched-link">ANIMALS</a></Link></div>
        </div>

        </div>

        <div className="d-flex flex-nowrap">
        <div className="col px-md-5 p-3"><img src="assets/business_96px.png" className="rounded float-left"
        alt="10"></img>
        <div className="p-5 border bg-light">
            <Link to="/game">
                <a className="btn btn-warning stretched-link">BUSINESS</a>
            </Link>
        </div></div>
        <div className="col px-md-5 p-3"><img src="assets/shirt_96px.png" className="rounded float-left" alt="10"></img>
        <div className="p-5 border bg-light"><a href="#"
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