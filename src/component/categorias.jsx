import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Categorias extends Component {

    constructor(){
        super();
        this.state = {
            tipo: 0
        };
    }


    onClick1(){
        var request = `http://localhost:8080/juego/save_cat/1`;
        axios.get(request)
        .catch(error => {
            console.log(error);
        });
     }

     onClick2(){
        var request = `http://localhost:8080/juego/save_cat/2`;
         axios.get(request)
         .catch(error => {
             console.log(error);
         });
    }

    onClick3(){
        var request = `http://localhost:8080/juego/save_cat/3`;
         axios.get(request)
         .catch(error => {
             console.log(error);
         });
    }
    onClick4(){
        var request = `http://localhost:8080/juego/save_cat/4`;
         axios.get(request)
         .catch(error => {
             console.log(error);
         });
    }
    onClick5(){
        var request = `http://localhost:8080/juego/save_cat/5`;
         axios.get(request)
         .catch(error => {
             console.log(error);
         });
    }

    render(){
        return(
            <div id="contenedor3" className="container">

                <div className="d-flex align-items-center">
                    <Link to="/tipo"><a><img src="assets/back_75px.png" id="return" height="100" width="100" alt="Botón"></img></a></Link>
                    <h1 id = "chooseCategorytxt">CHOOSE THE CATEGORY</h1>
                </div>

                <div className="d-flex justify-content-center p-1">
                    <div>

                        <div className="d-flex justify-content-around">

                            <div className="d-flex" id = "botonEleccion">
                                <div className="col px-md-1 p-1">
                                    <div className="p-3 border bg-light" id="borderRed">
                                        <Link to="/game">
<<<<<<< HEAD
                                        
                                            <a className="btn btn-light stretched-link"><img src="assets/numbers_96px.png" width='50px'height='50px'></img>NUMBERS</a>
=======

                                            <a className="btn btn-warning stretched-link" onClick = {this.onClick1}><img src="assets/numbers_96px.png" width='50px'height='50px'></img>NUMBERS</a>
>>>>>>> 9504ddf4746bb1fc5e6e36669898a2f8a6c8ae14
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    
                            <div className="d-flex" id = "botonEleccion">
                                <div className="col px-md-1 p-1">
                                    <div className="p-3 border bg-light" id="borderRed">
                                        <Link to="/game">
<<<<<<< HEAD
                                            <a className="btn btn-light stretched-link"> <img src="assets/valet_parking_96px.png" width='50px'height='50px'></img>VEHICLES</a>
=======
                                            <a className="btn btn-warning stretched-link" onClick = {this.onClick2}> <img src="assets/valet_parking_96px.png" width='50px'height='50px'></img>VEHICLES</a>
>>>>>>> 9504ddf4746bb1fc5e6e36669898a2f8a6c8ae14
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-around">

                            <div className="d-flex" id = "botonEleccion">
                                <div className="col px-md-1 p-1">
                                    <div className="p-3 border bg-light " id="borderRed">
                                        <Link to="/game">
<<<<<<< HEAD
                                            
                                            <a className="btn btn-light stretched-link"><img src="assets/elephant_200px.png" width='50px'height='50px'></img>ANIMALS</a>
=======

                                            <a className="btn btn-warning stretched-link" onClick = {this.onClick3}><img src="assets/elephant_200px.png" width='50px'height='50px'></img>ANIMALS</a>
>>>>>>> 9504ddf4746bb1fc5e6e36669898a2f8a6c8ae14
                                        </Link>
                                    </div>

                                </div>
                            </div>

                            <div className="d-flex" id = "botonEleccion">
                                <div className="col px-md-1 p-1">
                            
                                    <div className="p-3 border bg-light" id="borderRed">
                                        <Link to="/game">
<<<<<<< HEAD
                                            
                                            <a className="btn btn-light stretched-link"><img src="assets/business_96px.png" width='50px'height='50px'></img>BUSINESS</a>
=======

                                            <a className="btn btn-warning stretched-link" onClick = {this.onClick4}><img src="assets/business_96px.png" width='50px'height='50px'></img>BUSINESS</a>
>>>>>>> 9504ddf4746bb1fc5e6e36669898a2f8a6c8ae14
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-around">

                            <div className="d-flex" id = "botonEleccion">
                                <div className="col px-md-1 p-1">
                                    <div className="p-3 border bg-light" id="borderRed">
                                        <Link to="/game">
<<<<<<< HEAD
                                            <a className="btn btn-light stretched-link"><img src="assets/shirt_96px.png" width='50px'height='50px'></img>CLOTHES</a>
=======
                                            <a className="btn btn-warning stretched-link" onClick = {this.onClick5}><img src="assets/shirt_96px.png" width='50px'height='50px'></img>CLOTHES</a>
>>>>>>> 9504ddf4746bb1fc5e6e36669898a2f8a6c8ae14
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categorias;