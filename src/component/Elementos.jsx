import React from 'react';
import axios from 'axios';

export default class Elementos extends React.Component{

    state = {
        elementos : [],
    };

    componentDidMount() {
        this.showElements();
    }

    showElements(){
        axios.get('http://localhost:8080/elements/')
            .then(response => {
                console.log(response);
                this.setState({elementos: response.data});
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
                <div id="elementBar">
                    <div>
                        <section>
                            <p><label id="Elements">New Element:</label>{this.state.elementos.map(Elements => <input key={Elements.id} type="text" name="elementBar" disabled value={Elements.eleName}/>)}</p>
                        </section>
                    </div>
                    <div>
                        <section>
                            <ul>
                                <li>{this.state.elementos.length}</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}