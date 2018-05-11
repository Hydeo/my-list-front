import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'material-ui/Grid';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Grid item xs={12} >
          <Grid container justify="center" spacing={4} direction="column">
              <Grid key="1" item>
               <h1>Here, it's all about Link</h1>
              </Grid>
              <Grid key="2" item>
               <img height="150" src="https://media.giphy.com/media/144Q1gg0FkTEVG/giphy.gif" alt="Dam link, where are you?"/>
              </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
