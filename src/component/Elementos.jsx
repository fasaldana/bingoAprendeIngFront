import React from 'react';
import axios from 'axios';

export default class Elementos extends React.Component{

    state = {
        elementos : [],
    };

    componentDidMount() {
        const interval = setInterval(() => {
            this.showElements();
            console.log('Corrio esta mamada');
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
                        <h1>BINGO</h1>
                    </div>
                </div>
                <div id="elementSection">
                    <div class='form-group'>
                        <section>
                            <p><label id="Elements">Elements list:</label>{this.state.elementos.map(Elements => <input id='elementBar' class="form-control form-control-lg" type="text" name="elementBar" disabled value={Elements.eleName}/>)}</p>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}