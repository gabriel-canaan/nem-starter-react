import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { mosaic } from './nem';

class App extends Component {

  render() {
    console.log(mosaic)
    return (
      <div className="App">
        <Header />
        <h1>{mosaic.mosaicId.name}</h1>
        <h1>{mosaic.mosaicId.namespaceId}</h1>
        <h3>{mosaic.quantity}</h3>
      </div>
    );
  }
}

export default App;
