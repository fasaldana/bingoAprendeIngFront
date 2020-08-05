import React, { Component } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';


class Application extends Component {
    
    constructor(){
        super();
        this.state = {
            elementos: [],
            images: null,
            words: [],
            estadoElem :[],
            imagesMarked: [],
            juego: null,
            estado: 0,
            nmbrPlayers: 0
        };
        this.getGame();
        this.getList();
    }

    getList(){
        var request = 'http://localhost:8080/elements/list';
        axios.get(request).then(response => response.data)
        .then(data => {
            this.setState({elementos: data});
        })
        .catch(error => {
            console.log(error);
        });
    }

    getGame(){
        var request = 'http://localhost:8080/juego/get_game';
        axios.get(request).then(response => response.data)
        .then(data => {
            this.setState({juego: data});
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.getData();
            this.nmbrPlayers();
            this.checkBingoStatus();
            if(this.state.estado == 1){
                window.open("/lose","_self");
            }
        }, 2000);   

    }

    componentWillUnmount () {
        clearInterval(this.interval)
    }

    getData(){
        var request = 'http://localhost:8080/elements/word';
        axios.get(request)
        .then(response => response.data)
            .then(data => {
                this.setState({words: data});
            });
          }

    getImage (image) {
        var idCat = 0;
        if(this.state.juego){
            idCat = this.state.juego.idcategoria;
        }
        if(idCat==1){
            return {0:`categories/animals/${this.state.elementos[image]}.jpg`,
        1:`categories/animals/${this.state.elementos[image]}x.jpg`}
        }else if(idCat == 2){
            return {0:`categories/clothes/${this.state.elementos[image]}.jpg`,
        1:`categories/clothes/${this.state.elementos[image]}x.jpg`}
        }else if(idCat == 3){
            return {0:`categories/numbers/${this.state.elementos[image]}.jpg`,
        1:`categories/numbers/${this.state.elementos[image]}x.jpg`}
        }else if(idCat == 4){
            return {0:`categories/verbos/${this.state.elementos[image]}.jpg`,
        1:`categories/vehicles/${this.state.elementos[image]}x.jpg`}
        }else{
            return {0:`categories/jobs/${this.state.elementos[image]}.jpg`,
        1:`categories/jobs/${this.state.elementos[image]}x.jpg`}
        }
        
    } 

    start(){
        axios.get('http://localhost:8080/elements/start');
    }

    onClick (id) {
        var request = `http://localhost:8080/elements/data_img/${this.state.elementos[id]}`;
        axios.get(request)
        .then(response => {
            const obj = {id:response.data.id, response:response.data.response};
            const newArray = this.state.estadoElem.slice();
            newArray.push(obj);
            this.setState({estadoElem:newArray});
        })
        .catch(error => {
            console.log(error);
        });
    }

    checkBingoStatus(){
        var request = `http://localhost:8080/elements/bingo_check`;
        axios.get(request)
        .then(response => response.data)
            .then(data => {
                this.setState({estado: data});
            });
          
    }    

    nmbrPlayers(){
        var request = `http://localhost:8080/elements/nro_players`;
        axios.get(request)
        .then(response => response.data)
            .then(data => {
                this.setState({nmbrPlayers: data});
            });
    }

    getImagePos(id){
        const pos = this.state.elementos[id];
        for(const data of this.state.estadoElem){
            if(data.id == pos){
                /*if(data.response == 1){
                    if(!this.state.imagesMarked.includes(id)){
                        const obj = this.state.imagesMarked.slice();
                        obj.push(data.id);
                        this.setState({imagesMarked: obj});
                    } 
                }*/

                return data.response;                
            }
        }
        return 0;
    }

    bingo(){
        var markedImages = '';
        markedImages = markedImages+this.addMarkedImage(0, this.refs.img0.src);
        markedImages = markedImages+this.addMarkedImage(1, this.refs.img1.src);
        markedImages = markedImages+this.addMarkedImage(2, this.refs.img2.src);
        markedImages = markedImages+this.addMarkedImage(3, this.refs.img3.src);
        markedImages = markedImages+this.addMarkedImage(4, this.refs.img4.src);
        markedImages = markedImages+this.addMarkedImage(5, this.refs.img5.src);
        markedImages = markedImages+this.addMarkedImage(6, this.refs.img6.src);
        markedImages = markedImages+this.addMarkedImage(7, this.refs.img7.src);
        markedImages = markedImages+this.addMarkedImage(8, this.refs.img8.src);
        markedImages = markedImages+this.addMarkedImage(9, this.refs.img9.src);
        markedImages = markedImages+this.addMarkedImage(10, this.refs.img10.src);
        markedImages = markedImages+this.addMarkedImage(11, this.refs.img11.src);
        markedImages = markedImages+this.addMarkedImage(12, this.refs.img12.src);
        markedImages = markedImages+this.addMarkedImage(13, this.refs.img13.src);
        markedImages = markedImages+this.addMarkedImage(14, this.refs.img14.src);
        markedImages = markedImages+this.addMarkedImage(15, this.refs.img15.src);
        markedImages = markedImages+this.addMarkedImage(16, this.refs.img16.src);
        markedImages = markedImages+this.addMarkedImage(17, this.refs.img17.src);
        markedImages = markedImages+this.addMarkedImage(18, this.refs.img18.src);
        markedImages = markedImages+this.addMarkedImage(19, this.refs.img19.src);
        markedImages = markedImages+this.addMarkedImage(20, this.refs.img20.src);
        markedImages = markedImages+this.addMarkedImage(21, this.refs.img21.src);
        markedImages = markedImages+this.addMarkedImage(22, this.refs.img22.src);
        markedImages = markedImages+this.addMarkedImage(23, this.refs.img23.src);

        axios.get(`http://localhost:8080/elements/get_images/${markedImages}`)
        .then(response => {
            const obj = response.data;
            if(obj == 1){
                window.open("/win","_self")
            }
        })
        .catch(error => {
            console.log(error);
        });

    }

    addMarkedImage(id, imageName){
        if(imageName && imageName.includes("x.jpg")){
            return id+'-_-';
        }else{
            return '';
        }
    }

    render() {
        const image1 = this.getImagePos(0);
        const image2 = this.getImagePos(1);
        const image3 = this.getImagePos(2);
        const image4 = this.getImagePos(3);
        const image5 = this.getImagePos(4);
        const image6 = this.getImagePos(5);
        const image7 = this.getImagePos(6);
        const image8 = this.getImagePos(7);
        const image9 = this.getImagePos(8);
        const image10 = this.getImagePos(9);
        const image11 = this.getImagePos(10);
        const image12 = this.getImagePos(11);
        const image13 = this.getImagePos(12);
        const image14 = this.getImagePos(13);
        const image15 = this.getImagePos(14);
        const image16 = this.getImagePos(15);
        const image17 = this.getImagePos(16);
        const image18 = this.getImagePos(17);
        const image19 = this.getImagePos(18);
        const image20 = this.getImagePos(19);
        const image21 = this.getImagePos(20);
        const image22 = this.getImagePos(21);
        const image23 = this.getImagePos(22);
        const image24 = this.getImagePos(23);
        return (
            <div id="content" className="flex-lg-column">
                <div className="container d-flex justify-content-center">

                    <table id="bingotable">
                        <tr>
                            <td id="square0"><img id="imagenes" ref="img0" src={this.getImage(0)[image1]} onClick = {() => this.onClick(0)}/></td>
                            <td id="square1"><img id="imagenes" ref="img1" src={this.getImage(1)[image2]} onClick = {() => this.onClick(1)}/></td>
                            <td id="square2"><img id="imagenes" ref="img2" src={this.getImage(2)[image3]} onClick = {() => this.onClick(2)}/></td>
                            <td id="square3"><img id="imagenes" ref="img3" src={this.getImage(3)[image4]} onClick = {() => this.onClick(3)}/></td>
                            <td id="square4"><img id="imagenes" ref="img4" src={this.getImage(4)[image5]} onClick = {() => this.onClick(4)}/></td>
                        </tr>
                        <tr>
                            <td id="square5"><img id="imagenes" ref="img5" src={this.getImage(5)[image6]} onClick = {() => this.onClick(5)}/></td>
                            <td id="square6"><img id="imagenes" ref="img6" src={this.getImage(6)[image7]} onClick = {() => this.onClick(6)}/></td>
                            <td id="square7"><img id="imagenes" ref="img7" src={this.getImage(7)[image8]} onClick = {() => this.onClick(7)}/></td>
                            <td id="square8"><img id="imagenes" ref="img8" src={this.getImage(8)[image9]} onClick = {() => this.onClick(8)}/></td>
                            <td id="square9"><img id="imagenes" ref="img9" src={this.getImage(9)[image10]} onClick = {() => this.onClick(9)}/></td>
                        </tr>
                        <tr>
                            <td id="square10"><img id="imagenes" ref="img10" src={this.getImage(10)[image11]} onClick = {() => this.onClick(10)}/></td>
                            <td id="square11"><img id="imagenes" ref="img11" src={this.getImage(11)[image12]} onClick = {() => this.onClick(11)}/></td>
                            <td id="squarefree"> <div ><button id='palabraBingo' onClick={() => this.bingo()}>BINGO</button></div></td>
                            <td id="square12"><img id="imagenes" ref="img12" src={this.getImage(12)[image13]} onClick = {() => this.onClick(12)}/></td>
                            <td id="square13"><img id="imagenes" ref="img13" src={this.getImage(13)[image14]} onClick = {() => this.onClick(13)}/></td>
                        </tr>
                        <tr>
                            <td id="square14"><img id="imagenes" ref="img14" src={this.getImage(14)[image15]} onClick = {() => this.onClick(14)}/></td>
                            <td id="square15"><img id="imagenes" ref="img15" src={this.getImage(15)[image16]} onClick = {() => this.onClick(15)}/></td>
                            <td id="square16"><img id="imagenes" ref="img16" src={this.getImage(16)[image17]} onClick = {() => this.onClick(16)}/></td>
                            <td id="square17"><img id="imagenes" ref="img17" src={this.getImage(17)[image18]} onClick = {() => this.onClick(17)}/></td>
                            <td id="square18"><img id="imagenes" ref="img18" src={this.getImage(18)[image19]} onClick = {() => this.onClick(18)}/></td>
                        </tr>
                        <tr>
                            <td id="square19"><img id="imagenes" ref="img19" src={this.getImage(19)[image20]} onClick = {() => this.onClick(19)}/></td>
                            <td id="square20"><img id="imagenes" ref="img20" src={this.getImage(20)[image21]} onClick = {() => this.onClick(20)}/></td>
                            <td id="square21"><img id="imagenes" ref="img21" src={this.getImage(21)[image22]} onClick = {() => this.onClick(21)}/></td>
                            <td id="square22"><img id="imagenes" ref="img22" src={this.getImage(22)[image23]} onClick = {() => this.onClick(22)}/></td>
                            <td id="square23"><img id="imagenes" ref="img23" src={this.getImage(23)[image24]} onClick = {() => this.onClick(23)}/></td>
                        </tr>
                    </table>
                   <div id = "word" className="d-flex flex-column">
                       <section>
                            <p>Total de jugadores: {this.state.nmbrPlayers}</p>
                           <p><label ><img id = "img_word" src="assets/word.png"  alt="volver al home"></img> </label></p>
                           <ul id="lista_elementos" className="">
                               { this.state.words.map(words => <li>{words.ing}</li>)}
                           </ul>
                       </section>
                   </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div>
                        <Link to="/"><a><img id = "boton_home" src="assets/back_75px_END.png"  alt="volver al home"></img></a></Link>
                    </div>
                    <div id="btnStart">
                        <input type="submit" value="Start Game" className="btn btn-primary btn-block m-3" onClick={this.start}></input>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default Application;