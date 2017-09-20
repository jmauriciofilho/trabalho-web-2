import React, { Component } from 'react';

class MenuLateral extends Component {
  render() {
    return (
        <ul className="list-group">
            <li className="list-group-item"><a href="#Home">Home</a></li>
            <li className="list-group-item"><a href="#Últimas">Últimas Notícias</a></li>
            <li className="list-group-item"><a href="#Política">Política</a></li>
            <li className="list-group-item"><a href="#Política">Economia</a></li>
            <li className="list-group-item"><a href="#Política">Esportes</a></li>
            <li className="list-group-item"><a href="#Política">Televisão</a></li>
            <li className="list-group-item"><a href="#Política">Cinema</a></li>
            <li className="list-group-item"><a href="#Política">Tecnologia</a></li>
            <li className="list-group-item"><a href="#Política">Sociedade</a></li>
            <li className="list-group-item"><a href="#Política">Moda</a></li>
            <li className="list-group-item"><a href="#Política">Cultura</a></li>
        </ul>  
    );
  }
}

export default MenuLateral;