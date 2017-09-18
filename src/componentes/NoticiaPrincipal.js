import React, { Component } from 'react';

class NoticiaPrincipal extends Component {
  render() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-3">Rock in Rio</h1>
                            <p className="lead">Protesto e tributo a Cássia Eller levantam público em show de Frejat no RiR...</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-3">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-3">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
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