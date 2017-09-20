import React, { Component } from 'react';
import ItemNoticia from './ItemNoticia';
import ItemNoticiaImagem from './ItemNoticiaImagem';

class NoticiasGerais extends Component {
  render() {

    let noticias = [
      {id: 1, titulo: "Mundo", texto: "Terremoto de magnitude 6,1 atinge Nova Zelândia."},
      {id: 2, titulo: "Política", texto: "Câmara rejeita mudança no sistema eleitoral para 'distritão'."},
      {id: 3, titulo: "Nova York", texto: "Na ONU, Trump ameaça 'destruir a Coreia do Norte'."},
      {id: 4, titulo: "Mundo", texto: "Terremoto mata mais de 130 no México."}
    ];

    return (
        <div className="container">
            <ItemNoticia noticias={noticias} />
        </div>
    );
  }
}

export default NoticiasGerais;