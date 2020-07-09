import React from 'react';
import axios from 'axios';
import logoAPP from '../img/logoAPP.png';



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
            <div>
                <div id="header">
                    <div>
                        <img src={logoAPP} width='500px'height='500px'/>
                    </div>
                </div>
                <div id="elementSection">
                    <div class='form-group'>
                        <section>
                            <p><label id="Elements">Word:</label>{this.state.elementos.map(Elements => <input id='elementBar' class="form-control form-control-lg" type="text" name="elementBar" disabled value={Elements.eleName}/>)}</p>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}