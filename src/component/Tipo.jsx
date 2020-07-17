import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tipo extends Component {
    render(){
        return(
            <div>
                
                <div id="contenedor2" className="container" >

                    

                                      
                    <div className=" p-5">
                        <Link to="/"><a> <img src="assets/return2.png" id="return" height="100" width="100" alt="Botón"></img></a></Link>
                        <h1 id = "typeOfBingo">TYPE OF BINGO</h1>

                        <div className="row" >
                            
                            <div className="col" id="look">
                                <img id = "logotipo" src="assets/tipo_center.png" />
                                <Link to="/categorias">    
                                    <a id="botonesTipo" className="btn btn-warning stretched-link border border-danger" >CENTER</a>
                                </Link>
                                    
                            </div>
                            <div className="col-sm" >
                                <img id = "logotipo" src="assets/tipo_diagonal.png" ></img>
                                <Link to="/categorias">
                                    <a id="botonesTipo" className="btn btn-info stretched-link border border-danger">DIAGONAL</a>
                                </Link>
                            </div>
                            <div className="col-sm">
                                <img id = "logotipo" src="assets/tipo_full.png"></img>
                                <Link to="/categorias">   
                                    <a id="botonesTipo" className="btn btn-success stretched-link border border-danger">FULL</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tipo;