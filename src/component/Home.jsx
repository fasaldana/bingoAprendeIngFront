import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    
    onClick(){
        this.getActiveGame();
    }

    getActiveGame(){

    }

    render(){
        return(
            <div class="container" id="contenedor1">
                
                 <div id="logo">
                    <img src="assets/bingonino2.png" width='250px'height='250px'/> 
                </div>
                <Link to="/tipo">
                    <img id="logoStart1" src="assets/start.png" width='250px'height='100px'/>
                </Link>
                <img id="logoStart1" src="assets/join_game.png" width='250px'height='100px' onClick={this.onClick()}></img>
            </div>
        );
    }
}

export default Home;