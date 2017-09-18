import React, { Component } from 'react';
import MenuLateral from './MenuLateral';
import NoticiaPrincipal from './NoticiaPrincipal';

class Container extends Component {
  render() {
    return (
        <div className="col-sm-20">
            <div className="row">
                <div className="w-25 p-2 float-md-left">
                    <MenuLateral />
                </div>
                <div className="w-75 p-3 float-md-left">
                    <div>
                        <NoticiaPrincipal />
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Container;