import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




export default class Elementos extends React.Component{

    state = {
        elementos : [],
    };

    componentDidMount() {
        const interval = setInterval(() => {
            this.showElements();
            //console.log('');
        }, 1000);
        
    }

    showElements(){
        axios.get('http://localhost:8080/elements/')
            .then(response => response.data)
            .then(data => {
                this.setState({elementos: data});
            });
    }
    

    render() {
        return (
            <div id = "word" className="d-flex justify-content-center"> 
                 
                 <Link to="/"><a><img src="assets/back_75px_END.png" id="return" height="100" width="100" alt="Botón"></img></a></Link>
                <section>
                    <p><label > Word: </label>{this.state.elementos.map(Elements => <input id='elementBar' class="form-control form-control-lg" type="text" name="elementBar" disabled value={Elements.eleName}/>)}</p>
                </section>
            </div>
        );
    }
}