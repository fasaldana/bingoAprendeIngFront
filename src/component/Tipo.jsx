import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tipo extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand">BINGO APRENDE INGLÉS</a>
                </nav>
                <div className="d-flex justify-content-center p-5 border border-warning" >
                    
                    <div className="border border-secondary p-5 bg-light">
                        <Link to="/"><a> <img src="assets/left_100px.png" height="50" width="100" alt="Botón"></img></a></Link>
                        <h1 className="display-4">TYPE OF BINGO</h1>

                        <div className="d-flex flex-nowrap">
                            
                            <div className="col px-md-5 p-2 ">
                                
                                <img src="assets/center_row_100px.png" class="rounded float-left" alt="10"></img>
                                <div className="p-5 border bg-light">
                                    <ul>
                                        <Link to="/categorias">
                                            <a className="btn btn-warning stretched-link">CENTER</a>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className="col px-md-5 p-2">
                                <img src="assets/diagonal_100px.png" className="rounded float-left" alt="10"></img>
                                <div className="p-5 border bg-light">
                                    <ul>
                                        <Link to="/categorias">
                                            <a className="btn btn-warning stretched-link">DIAGONAL</a>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className="col px-md-5 p-2">
                                <img src="assets/full_100px.png" className="rounded float-left" alt="10"></img>
                                <div className="p-5 border bg-light">
                                    <ul>
                                        <Link to="/categorias">
                                            <a className="btn btn-warning stretched-link">FULL</a>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tipo;