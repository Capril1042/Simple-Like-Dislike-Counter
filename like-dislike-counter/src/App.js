import React, { Component } from 'react';
import Counter from './Counter';

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Like-Dislike Component </h1>
        <Counter/>
      </div>
    );
  }
}

export default App;
