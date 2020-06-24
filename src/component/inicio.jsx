import React, { Component } from 'react';

class Inicio extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">BINGO APRENDE INGLÉS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">HOME<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="ayuda.html">HELP!</a>
            </li>
          </ul>
        </div>
      </nav>
      <h1>CHOOSE THE CATEGORY</h1>
      <div class="d-flex flex-nowrap">
          <div class="col px-md-5 p-2"><img src="img/numbers_96px.png" class="rounded float-left" alt="10"></img><div class="p-5 border bg-light"><a href="#" class="btn btn-warning stretched-link">NUMBERS</a></div></div>

      </div>
      <div class="d-flex flex-nowrap">
                <div class="col px-md-5 p-3"><img src="img/business_96px.png" class="rounded float-left" alt="10"></img><div class="p-5 border bg-light"><a href="tipo.html" class="btn btn-warning stretched-link">BUSINESS</a></div></div>
                <div class="col px-md-5 p-3"><img src="img/shirt_96px.png" class="rounded float-left" alt="10"></img><div class="p-5 border bg-light"><a href="tipo.html" class="btn btn-warning stretched-link">CLOTHES</a></div></div>

            </div>
            <div class="d-flex flex-nowrap">
                <div class="col px-md-5 p-2"><img src="img/valet_parking_96px.png" class="rounded float-left" alt="10"></img><div class="p-5 border bg-light"><a href="tipo.html" class="btn btn-warning stretched-link">VEHICLES</a></div></div>
                <div class="col px-md-5 p-2"><img src="img/flounder_fish_96px.png" class="rounded float-left" alt="10"></img><div class="p-5 border bg-light"><a href="tipo.html" class="btn btn-warning stretched-link">ANIMALS</a></div></div>
                
            </div>
      </div>
    );
  }
}

export default Inicio;