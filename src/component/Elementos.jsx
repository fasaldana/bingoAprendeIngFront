import React, {useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




export default class Elementos extends React.Component{

    state = {
        elementos : [],
        animals: null
    };

    componentDidMount() {
        const interval = setInterval(() => {
            this.showElements();
            //console.log('');
        }, 1000);
    }

    showElements(){
        axios.get('http://localhost:8080/elements')
            .then(response => response.data)
            .then(data => {
                this.setState({elementos: data});
            });
    }

      

    render() {
        return (
            <div id = "word" className="d-flex justify-content-center"> 
                 
                 <Link to="/"><a><img src="assets/back_75px.png" id="return" height="100" width="100" alt="Botón"></img></a></Link>
                <section>
                    <p><label > Word: </label></p> 
                    <ul>
                        { this.state.elementos.map(elementos => <li>{elementos.ing}</li>)}
                    </ul>
                </section>
                
            </div>
        );
    }
}