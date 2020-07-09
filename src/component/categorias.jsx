import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Categorias extends Component {
    render(){
        return(
        <div>
            <div className="d-flex justify-content-center p-5 border border-warning">
                <div className="border border-secondary p-5 bg-light">
                    <h1>CHOOSE THE CATEGORY</h1>
                    <div className="d-flex flex-nowrap">
                        <div className="col px-md-5 p-2">
                            <div className="p-5 border bg-light">
                                <img src="assets/numbers_96px.png" className="rounded float-left" width='100'height='100'></img>
                                <a href="#"className="btn btn-warning stretched-link">NUMBERSS</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="d-flex flex-nowrap">
                        <div className="col px-md-5 p-2">
                            <div className="p-5 border bg-light">
                                <img src="assets/valet_parking_96px.png" className="rounded float-left" width='100'height='100'></img>
                                <a href="#"className="btn btn-warning stretched-link">VEHICLES</a>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-nowrap">
                        <div className="col px-md-5 p-2">
                            
                            <div className="p-5 border bg-light"><Link to="/game">
                                <img src="assets/elephant_200px.png" className="rounded float-left"width='100'height='100'></img>
                                <a className="btn btn-warning stretched-link">ANIMALS</a></Link>
                            </div>
                            
                        </div>
                    </div>

                    <div className="d-flex flex-nowrap">
                        <div className="col px-md-5 p-2">
                            
                            <div className="p-5 border bg-light">
                                <Link to="/game">
                                    <img src="assets/business_96px.png" className="rounded float-left" width='100'height='100'></img>
                                    <a className="btn btn-warning stretched-link">BUSINESS</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-nowrap">
                    <div className="col px-md-5 p-2">
                        
                            <div className="p-5 border bg-light">
                                <img src="assets/shirt_96px.png" className="rounded float-left" width='100'height='100'></img>
                                <a href="#"className="btn btn-warning stretched-link">CLOTHES</a></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Categorias;