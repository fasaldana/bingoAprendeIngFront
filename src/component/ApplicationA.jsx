import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import storage from './Firebase/firebase'


class ApplicationA extends Component {

    constructor(){
        super();
        this.state = {
            content : 0,
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
        this.getImage('Jobs11');
        this.getImage('Jobs12');
        this.getImage('Jobs13');
        this.getImage('Jobs14');
        this.getImage('Jobs15');
        this.getImage('Jobs16');
        this.getImage('Jobs17');
        this.getImage('Jobs18');
        this.getImage('Jobs19');
        this.getImage('Jobs20');
        this.getImage('Jobs21');
        this.getImage('Jobs22');
        this.getImage('Jobs23');
        this.getImage('Jobs24');
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

    getContent(){
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
           <div id="content" className='m-3'>
                <table id="bingotable">
                    <tr>
                        <td id="square0"><img src={this.state.Jobs24} width="100%"/></td>
                        <td id="square1"><img src={this.state.Jobs7} width="100%"/></td>
                        <td id="square2"><img src={this.state.Jobs6} width="100%"/></td>
                        <td id="square3"><img src={this.state.Jobs4} width="100%"/></td>
                        <td id="square4"><img src={this.state.Jobs5} width="100%"/></td>
                    </tr>
                    <tr>
                        <td id="square5"><img src={this.state.Jobs2} width="100%"/></td>
                        <td id="square6"><img src={this.state.Jobs10} width="100%"/></td>
                        <td id="square7"><img src={this.state.Jobs8} width="100%"/></td>
                        <td id="square8"><img src={this.state.Jobs10} width="100%"/></td>
                        <td id="square9"><img src={this.state.Jobs1} width="100%"/></td>
                    </tr>
                    <tr>
                        <td id="square10"><img src={this.state.Jobs9} width="100%"/></td>
                        <td id="square11"><img src={this.state.Jobs8} width="100%"/></td>
                        <td id="squarefree"> FREE</td>
                        <td id="square12"><img src={this.state.Jobs7} width="100%"/></td>
                        <td id="square13"><img src={this.state.Jobs9} width="100%"/></td>
                    </tr>
                    <tr>
                        <td id="square14"><img src={this.state.Jobs5} width="100%"/></td>
                        <td id="square15"><img src={this.state.Jobs15} width="100%"/></td>
                        <td id="square16"><img src={this.state.Jobs5} width="100%"/></td>
                        <td id="square17"><img src={this.state.Jobs21} width="100%"/></td>
                        <td id="square18"><img src={this.state.Jobs17} width="100%"/></td>
                    </tr>
                    <tr>
                        <td id="square19"><img src={this.state.Jobs4} width="100%"/></td>
                        <td id="square20"><img src={this.state.Jobs5} width="100%"/></td>
                        <td id="square21"><img src={this.state.Jobs4} width="100%"/></td>
                        <td id="square22"><img src={this.state.Jobs13} width="100%"/></td>
                        <td id="square23"><img src={this.state.Jobs11} width="100%"/></td>
                    </tr>
                </table>
               <div id="btn">
                   <input type="submit" value="BINGO" className="btn btn-primary btn-block m-3"></input>
               </div>
               <div id="btn">
                   <input type="submit" value="Start Game" className="btn btn-primary btn-block m-3" onClick={this.start}></input>
               </div>
           </div>
        )
    }
}

export default ApplicationA;