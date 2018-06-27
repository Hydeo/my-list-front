import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import randomColor from 'randomcolor'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor : randomColor({luminosity: 'dark'})}}>
        <Link to="/about-us">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </Link>
      </div>
    );
  }
}

export default App;
