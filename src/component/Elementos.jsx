import React from 'react';
import axios from 'axios';




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
            <div class="container">
                <div id="logo">
                    <img src="assets/logoAPP.png" width='550px'height='250px'/>   
                </div>
                <section>
                          
                    <p><label id="Elements"><img src="assets/word1.png" width='100px'height='100px'/> </label>{this.state.elementos.map(Elements => <input id='elementBar' class="form-control form-control-lg" type="text" name="elementBar" disabled value={Elements.eleName}/>)}</p>
                </section>
            </div>
        );
    }
}