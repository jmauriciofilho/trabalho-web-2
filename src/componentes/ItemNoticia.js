import React, { Component } from 'react';

class ItemNoticia extends Component {
  render() {
    let noticia = this.props.noticias.map(function(itemNoticia){
        return(
            <div key={itemNoticia.id} className="p-2 col">
                <div className="card" style={{width: "23rem"}}>
                    <div className="card-body">
                        <h4 className="card-title">{itemNoticia.titulo}</h4>
                        <p className="card-text">{itemNoticia.texto}</p>
                        <a href="#saiba-mais" className="btn btn-primary">Saiba mais....</a>
                    </div>
                </div>
            </div>
        )
    });
  
    return (
        <div className="row">
            {noticia}
        </div>
    );
  }
}

export default ItemNoticia;