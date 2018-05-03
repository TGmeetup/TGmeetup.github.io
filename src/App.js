import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import Header from './components/Header';
import logo from './logo.png';
import './App.css';

/* eslint-disable no-unused-expressions */
injectGlobal`
  a {
    color: #1464e8;
  }
`
/* eslint-enable no-unused-expressions */

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
