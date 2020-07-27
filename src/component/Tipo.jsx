import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Tipo extends Component {

    constructor(){
        super();
        this.state = {
            tipo: 0
        };
    }

     onClick1(){
        var request = `http://localhost:8080/juego/save_data/1`;
        axios.get(request)
        .catch(error => {
            console.log(error);
        });
     }

     onClick2(){
        var request = `http://localhost:8080/juego/save_data/2`;
         axios.get(request)
         .catch(error => {
             console.log(error);
         });
    }

    onClick3(){
        var request = `http://localhost:8080/juego/save_data/3`;
         axios.get(request)
         .catch(error => {
             console.log(error);
         });
    }


    render(){
        return(
            <div>
                
                <div id="contenedor2" className="container" >

                        
                    <div className=" p-5" >
                        <div className="d-flex align-items-center">
                            <Link to="/"><a> <img src="assets/back_75px.png" id="return" height="100" width="100" alt="Botón"></img></a></Link>
                        <h1 id = "typeOfBingo">TYPE OF BINGO</h1>
                        </div>


                        <div className="row" >
                            
                            <div className="col" id="look">
                                <img id = "logotipo" src="assets/tipo_center.png" />
                                <Link to="/categorias">
                                    <button id="botonesTipo" className="btn btn-warning stretched-link border border-danger" onClick = {this.onClick1}>ROW</button>
                                </Link>
                            </div>
                            <div className="col-sm">
                                <img id = "logotipo" src="assets/tipo_diagonal.png" ></img>
                                <Link to="/categorias">
                                    <button id="botonesTipo" className="btn btn-info stretched-link border border-danger" onClick = {this.onClick2} >DIAGONAL</button>
                                </Link>
                            </div>
                            <div className="col-sm">
                                <img id = "logotipo" src="assets/tipo_full.png"></img>
                                <Link to="/categorias">   
                                    <button id="botonesTipo" className="btn btn-success stretched-link border border-danger" onClick = {this.onClick3} >FULL</button>
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