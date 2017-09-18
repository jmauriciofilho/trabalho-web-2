import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-light bg-dark">
            <a className="navbar-brand text-white" href="#">Notícias Agora!</a>
        </nav>
    );
  }
}

export default Navbar;