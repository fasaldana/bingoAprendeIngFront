import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render(){
        return(
            <div>
                <Link to="/tipo">
                    <button>
                        Create new game
                    </button>
                </Link>
            </div>
        );
    }
}

export default Home;