import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render(){
        return(

            <div class="container" >
                
                 <div id="logo">
                    <img src="assets/lose.png" width='200px'height='200px'/> 
                </div>
                <Link to="/tipo" class ="parpadea text">
                    <img  src="assets/start.png" width='250px'height='100px'/>
                </Link>
            </div>
        );
    }
}

export default Home;