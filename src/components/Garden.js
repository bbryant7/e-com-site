import React, { Component } from "react";
import { Link } from "react-router-dom";
import inventory from "../Data/inventory.js";
console.log("hi");




export default class Garden extends Component {



  render() {
    let items = inventory.map((item, index) => {
      if (item.category === "garden"){
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
      <h1> Garden </h1>
      <hr></hr>
      <div className="items">{items}</div>;
      </div>
    )
  }
}


// constructor(props){
//   super(props)
//   this.state = {
//   inventory: inventory,
//   }
//   console.log(this.state.inventory)
// }
