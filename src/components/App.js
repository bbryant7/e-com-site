import React, { Component } from 'react';
import '../styles/App.css';
import Display from '../images/Display.jpg';

class App extends Component {
  render() {

  
    return (
      <div className="App">
      <h1>  Let <span className="title"> Online Furniture</span> make all your home decor dreams come true </h1>
        <img src={Display} alt="Livingroom furniture set"></img>

      </div>
    );
  }
}

export default App;
