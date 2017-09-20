import React, { Component } from 'react';

class NoticiaPrincipal extends Component {
  render() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-3 text-center">Rock in Rio</h1>
                            <p className="lead text-center">Protesto e tributo a Cássia Eller levantam público em show de Frejat no RiR.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-3 text-center">Política</h1>
                            <p className="lead text-center">Fachin rejeita pedido de Temer para devolver nova denúncia à PGR.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-3 text-center">Mundo</h1>
                            <p className="lead text-center">Furacão Maria causa destruição no Caribe.</p>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
  }
}

export default NoticiaPrincipal;