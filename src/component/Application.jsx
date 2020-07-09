import React, { Component } from 'react';
import axios from 'axios';
import storage from './Firebase/firebase'

class Application extends Component {
    
    constructor(){
        super();
        this.state = {
            content : [],
            Animals1: '',
            Animals2: '',
            Animals3: '',
            Animals4: '',
            Animals5: '',
            Animals6: '',
            Animals7: '',
            Animals8: '',
            Animals9: '',
            Animals10: '',
            Jobs1: '',
            Jobs2: '',
            Jobs3: '',
            Jobs4: '',
            Jobs5: '',
            Jobs6: '',
            Jobs7: '',
            Jobs8: '',
            Jobs9: '',
            Jobs10: '',
        };
        this.getImage('Animals1');
        this.getImage('Animals2');
        this.getImage('Animals3');
        this.getImage('Animals4');
        this.getImage('Animals5');
        this.getImage('Animals6');
        this.getImage('Animals7');
        this.getImage('Animals8');
        this.getImage('Animals9');
        this.getImage('Animals10');
        this.getImage('Jobs1');
        this.getImage('Jobs2');
        this.getImage('Jobs3');
        this.getImage('Jobs4');
        this.getImage('Jobs5');
        this.getImage('Jobs6');
        this.getImage('Jobs7');
        this.getImage('Jobs8');
        this.getImage('Jobs9');
        this.getImage('Jobs10');
        this.getImage('Numbers1');
        this.getImage('Numbers2');
        this.getImage('Numbers3');
        this.getImage('Numbers4');
        this.getImage('Numbers5');
        this.getImage('Numbers6');
        this.getImage('Numbers7');
        this.getImage('Numbers8');
        this.getImage('Numbers9');
        this.getImage('Numbers10');
    }

    getImage (image) {    
        let { state } = this
        storage.child(`${image}.jpg`).getDownloadURL().then((url) => {
          state[image] = url
          this.setState(state)
        }).catch((error) => {
          // Handle any errors
        })
    }

    componentDidMount() {
        this.showElements();
    }

    showElements(){
        axios.get('http://localhost:8080/content/')
            .then(response => response.data)
            .then(data => {
                this.setState({content: data});
            });
    }

    start(){
        axios.get('http://localhost:8080/elements/start');
    }no

    render() {
        return (
           <div id="content" className="d-flex flex-column">
               
               

                <table id="bingotable">
                    <tr>
                        <td id="square0"><img src={this.state.Jobs1} width="100%"/></td>
                        <td id="square1"><img src={this.state.Numbers2} width="100%"/></td>
                        <td id="square2"><img src={this.state.Animals6} width="100%"/></td>
                        <td id="square3"><img src={this.state.Animals4} width="100%"/></td>
                        <td id="square4"><img src={this.state.Animals5} width="100%"/></td>
                    </tr>
                    <tr>
                        <td id="square5"><img src={this.state.Animals2} width="100%"/></td>
                        <td id="square6"><img src={this.state.Animals10} width="100%"/></td>
                        <td id="square7"><img src={this.state.Animals8} width="100%"/></td>
                        <td id="square8"><img src={this.state.Animals10} width="100%"/></td>
                        <td id="square9"><img src={this.state.Animals1} width="100%"/></td>
                    </tr>
                    <tr>
                        <td id="square10"><img src={this.state.Animals9} width="100%"/></td>
                        <td id="square11"><img src={this.state.Animals8} width="100%"/></td>
                        <td id="squarefree"> <div id="btn">
                   <input type="submit" value="BINGO" className="btn btn-primary w-auto h-auto"></input>
               </div></td>
                        <td id="square12"><img src={this.state.Animals15} width="100%"/></td>
                        <td id="square13"><img src={this.state.Animals11} width="100%"/></td>
                    </tr>
                    <tr>
                        <td id="square14"><img src={this.state.Animals5} width="100%"/></td>
                        <td id="square15"><img src={this.state.Animals18} width="100%"/></td>
                        <td id="square16"><img src={this.state.Animals5} width="100%"/></td>
                        <td id="square17"><img src={this.state.Animals19} width="100%"/></td>
                        <td id="square18"><img src={this.state.Animals20} width="100%"/></td>
                    </tr>
                    <tr>
                        <td id="square19"><img src={this.state.Animals4} width="100%"/></td>
                        <td id="square20"><img src={this.state.Animals5} width="100%"/></td>
                        <td id="square21"><img src={this.state.Animals4} width="100%"/></td>
                        <td id="square22"><img src={this.state.Animals21} width="100%"/></td>
                        <td id="square23"><img src={this.state.Animals22} width="100%"/></td>
                    </tr>
                </table>
                <div id="btn">
                   <input type="submit" value="Start Game" className="btn btn-primary btn-block m-3" onClick={this.start}></input>
               </div>
               
           </div>
           

        )
    }
}

export default Application;