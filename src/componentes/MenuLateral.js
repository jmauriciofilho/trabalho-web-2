import React, { Component } from 'react';

class MenuLateral extends Component {
  render() {
    return (
        <ul className="list-group">
            <li className="list-group-item bg-secondary">Home</li>
            <li className="list-group-item">Últimas Notícias</li>
            <li className="list-group-item">Política</li>
            <li className="list-group-item">Economia</li>
            <li className="list-group-item">Esportes</li>
            <li className="list-group-item">Televisão</li>
            <li className="list-group-item">Cinema</li>
            <li className="list-group-item">Tecnologia</li>
            <li className="list-group-item">Sociedade</li>
            <li className="list-group-item">Moda</li>
            <li className="list-group-item">Cultura</li>
        </ul>  
    );
  }
}

export default MenuLateral;