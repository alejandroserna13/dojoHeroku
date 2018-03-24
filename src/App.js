import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">¡¡ Hola Mundo React !!</h1>
        </header>
        <header className="App-header1">
        <h1 className="App-title2">Responsables</h1>
          <h1 className="App-title3">Alejandro Serna J.</h1>
          <h1 className="App-title4">Jesus David Gomez</h1>
        </header>
        <header className="App-header2">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
