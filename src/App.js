import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import router from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        { router }
      </div>
    );
  }
}

export default App;
