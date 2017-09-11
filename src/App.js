import React, { Component } from 'react';
import MAppbar from './components/MAppbar.js';
import MNavbar from './components/MNavbar.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MAppbar />

        <MNavbar />

      </div>
    );
  }
}

export default App;
