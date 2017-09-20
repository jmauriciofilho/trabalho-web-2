import React, { Component } from 'react';

class ItemNoticiaImagem extends Component {
  render() {
    return (
        <figure className="figure">
            <img src="../media/coreia.jpg" className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
            <figcaption className="figure-caption text-right">A caption for the above image.</figcaption>
        </figure>
    );
  }
}

export default ItemNoticiaImagem;