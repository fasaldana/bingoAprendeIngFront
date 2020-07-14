import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render(){
        return(
 
            
            <div class="container" id="contenedor1">
                
                 <div id="logo">
                    <img src="assets/bingonino2.png" width='250px'height='250px'/> 
                </div>
                <Link to="/tipo" class ="parpadea text">
                    <img id="logoStart" src="assets/start.png" width='250px'height='100px'/>
                </Link>
            </div>
        );
    }
}

export default Home;