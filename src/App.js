import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StickyNotes from './components/StickyNotes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Sticky Notes</h2>
        </div>
        <div className="App-intro">
          <StickyNotes />
        </div>
      </div>
    );
  }
}

export default App;
