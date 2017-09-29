import React, { Component } from 'react';
import '../styles/App.css';
import Display from '../images/Display.jpg';
import { Link } from "react-router-dom";

class App extends Component {
  render() {


    return (
      <div className="App">
      <h1>  Let <span className="title"> Online Furniture</span> make all your home decor dreams come true </h1>
        <img src={Display} alt="Livingroom furniture set"></img>
        <br></br>
        <Link to="/about">
            <button className="splash-button"> About Us</button>
          </Link>
          <Link to="/contact">
              <button className="splash-button"> Contact Us</button>
            </Link>


      </div>
    );
  }
}

export default App;
