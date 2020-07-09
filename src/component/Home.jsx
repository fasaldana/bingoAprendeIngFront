import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render(){
        return(
           
            
            <div >
                 <div id="logo">
                    <img src="assets/bingonino.png" width='550px'height='250px'/> 
                </div>
                <Link to="/tipo" id="logo">
                    <img src="assets/start.png" width='550px'height='250px'/>
                </Link>
            </div>
        );
    }
}

export default Home;