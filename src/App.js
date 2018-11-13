import React, { Component } from 'react';
import Greeting from './components/Greeting';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="content">
          <Greeting />
        </div>
      </div>
    );
  }
}

export default App;
