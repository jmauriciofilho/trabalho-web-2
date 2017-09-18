import React, { Component } from 'react';
import Navbar from './componentes/Navbar';
import Container from './componentes/Container';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <div  className="p-2">
          <Container />
        </div>
      </div>
    );
  }
}

export default App;
