import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         Here, it's all about Link
         <img src="https://media.giphy.com/media/144Q1gg0FkTEVG/giphy.gif" alt="Dam link, where are you?"/>
        </p>
      </div>
    );
  }
}

export default App;
