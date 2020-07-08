import React, { Component } from 'react';
import storage from './Firebase/firebase'

class ImageLoad extends Component {
    constructor(){
        super();
        this.state = {
            Animals1: '',
            Animals2: '',
        }
        this.getImage('Animals1')
        this.getImage('Animals2')
    }

    getImage (image) {    
        let { state } = this
        storage.child(`${image}.jpg`).getDownloadURL().then((url) => {
          state[image] = url
          this.setState(state)
        }).catch((error) => {
          // Handle any errors
        })
    }

    render(){
        return(
            <div>
                A fkn bull<br />
                <img src={ this.state.Animals1} alt="bull image" />
                <br/>
                A fkn whatever<br />
                <img src={ this.state.Animals2} alt="bull image" />
            </div>
        )
    }
}
export default ImageLoad;