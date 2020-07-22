import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Categorias extends Component {
    render(){
        return(
            <div id="contenedor3" className="container">

                <div className=" p-3 d-flex justify-content-center">
                    <Link to="/tipo"><a> <img src="assets/return2.png" id="return" height="50px" width="50px" alt="Botón atrás"></img></a><h1 id = "chooseCategorytxt">CHOOSE THE CATEGORY</h1></Link>
                    
                </div>

                <div className="d-flex justify-content-center p-1">
                    <div>
                    
                        <div className="d-flex justify-content-around">

                            <div className="d-flex" id = "botonEleccion">
                                <div className="col px-md-1 p-1">
                                    <div className="p-3 border bg-light" id="borderRed">
                                        <Link to="/game">
                                        
                                            <a className="btn btn-warning stretched-link"><img src="assets/numbers_96px.png" width='50px'height='50px'></img>NUMBERS</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    
                            <div className="d-flex" id = "botonEleccion">
                                <div className="col px-md-1 p-1">
                                    <div className="p-3 border bg-light" id="borderRed">
                                        <Link to="/game">
                                            <a className="btn btn-warning stretched-link"> <img src="assets/valet_parking_96px.png" width='50px'height='50px'></img>VEHICLES</a>
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
                                            
                                            <a className="btn btn-warning stretched-link"><img src="assets/elephant_200px.png" width='50px'height='50px'></img>ANIMALS</a>
                                        </Link>
                                    </div>
                            
                                </div>
                            </div>

                            <div className="d-flex" id = "botonEleccion">
                                <div className="col px-md-1 p-1">
                            
                                    <div className="p-3 border bg-light" id="borderRed">
                                        <Link to="/game">
                                            
                                            <a className="btn btn-warning stretched-link"><img src="assets/business_96px.png" width='50px'height='50px'></img>BUSINESS</a>
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
                                            <a className="btn btn-warning stretched-link"><img src="assets/shirt_96px.png" width='50px'height='50px'></img>CLOTHES</a>
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