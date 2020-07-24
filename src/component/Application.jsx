import React, { Component } from 'react';
import axios from 'axios';
import Tipo from "./Tipo";
import { Link } from 'react-router-dom';


class Application extends Component {
    
    constructor(){
        super();
        this.state = {
            elementos: [],
            images: null
        };
        this.getList();
    }

    getList(){
        axios.get('http://localhost:8080/elements/list')
            .then(response => response.data)
            .then(data => {
                this.setState({elementos: data});
            });
    }

    getImage (image) {
        return `categories/numbers/${this.state.elementos[image]}.jpg`
    }

    showElements(){
        axios.get('http://localhost:8080/elements')
            .then(response => response.data)
            .then(data => {
                this.setState({elementos: data});
            });
    }

    start(){
        const interval = setInterval(() => {
            this.showElements();
            //console.log('');
        }, 1000);
    }

    render() {
        return (
           <div id="content" className="container align-items-center">

                <div id = "word" className="d-flex justify-content-center"> 
                    
                    <Link to="/"><a><img src="assets/back_75px.png" id="return" height="100" width="100" alt="Botón"></img></a></Link>
                    <section>
                        <p><label > Word: </label></p> 
                        <ul>
                            { this.state.elementos.map(elementos => <li>{elementos.ing}</li>)}
                        </ul>
                    </section>
                    
                </div>

                <table id="bingotable">
                    <tr>
                        <td id="square0"><img id="imagenes" src={this.getImage(0)} /></td>
                        <td id="square1"><img id="imagenes" src={this.getImage(1)} /></td>
                        <td id="square2"><img id="imagenes" src={this.getImage(2)} /></td>
                        <td id="square3"><img id="imagenes" src={this.getImage(3)} /></td>
                        <td id="square4"><img id="imagenes" src={this.getImage(4)} /></td>
                    </tr>
                    <tr>
                        <td id="square5"><img id="imagenes" src={this.getImage(5)} /></td>
                        <td id="square6"><img id="imagenes" src={this.getImage(6)} /></td>
                        <td id="square7"><img id="imagenes" src={this.getImage(7)} /></td>
                        <td id="square8"><img id="imagenes" src={this.getImage(8)} /></td>
                        <td id="square9"><img id="imagenes" src={this.getImage(9)} /></td>
                    </tr>
                    <tr>
                        <td id="square10"><img id="imagenes" src={this.getImage(10)} /></td>
                        <td id="square11"><img id="imagenes" src={this.getImage(11)} /></td>
                        <td id="squarefree"> <div ><a id='palabraBingo'>BINGO</a></div></td>
                        <td id="square12"><img id="imagenes" src={this.getImage(12)} /></td>
                        <td id="square13"><img id="imagenes" src={this.getImage(13)} /></td>
                    </tr>
                    <tr>
                        <td id="square14"><img id="imagenes" src={this.getImage(14)} /></td>
                        <td id="square15"><img id="imagenes" src={this.getImage(15)} /></td>
                        <td id="square16"><img id="imagenes" src={this.getImage(16)} /></td>
                        <td id="square17"><img id="imagenes" src={this.getImage(17)} /></td>
                        <td id="square18"><img id="imagenes" src={this.getImage(18)} /></td>
                    </tr>
                    <tr>
                        <td id="square19"><img id="imagenes" src={this.getImage(19)} /></td>
                        <td id="square20"><img id="imagenes" src={this.getImage(20)} /></td>
                        <td id="square21"><img id="imagenes" src={this.getImage(21)} /></td>
                        <td id="square22"><img id="imagenes" src={this.getImage(22)} /></td>
                        <td id="square23"><img id="imagenes" src={this.getImage(23)} /></td>
                    </tr>
                </table>
                <div id="btnStart" className="container align-items-center">
                   <input type="submit" value="Start Game" className="btn btn-primary btn-block m-3" onClick={this.start}></input>
               </div>
               
           </div>
           

        )
    }
}

export default Application;