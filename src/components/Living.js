import React, { Component } from "react";
import { Link } from "react-router-dom";
import inventory from "../Data/inventory.js";




export default class Living extends Component {


  render() {
    let items = inventory.map((item, index) => {
      if (item.category === "living"){
      return (

        <div key={index} className="furniture">
          <img src={item.image} alt="" />
          <p>{item.description}</p>
          <p>{item.price}</p>
            <button>Purchase</button>
        </div>

      );
    }
    });

    return (
      <div>
      <h1>Living</h1>
      <hr></hr>
      <div className="items">{items}</div>;
      </div>
    )
  }
}
