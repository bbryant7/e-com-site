import React, { Component } from "react";
import { Link } from "react-router-dom";
import Inventory from "../Data/inventory.js";
console.log("property", Inventory);
console.log("hi");

const inventory = [{
  "category": "garden",
  "image": "https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/APG-P655-5FP-10X8-CROP?$AFHS-PDP-Thumb-1X$",
  "description": "Kick back and relax under the stars. The Peachstone 5-piece outdoor fire pit chat set has the woodsy look you love with none of the worries about deteriorating in the outdoor air. Spacious lounge chairs swivel in and out of the conversation. All-weather Nuvella™ cushions stay bright looking in every climate. Fire pit ignites with a simple press of a button.",
  "price": "$400.00"
},
{
  "category": "kitchen",
  "image": "https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/APG-P450-7P-10X8-CROP?$AFHS-PDP-Thumb-1X$",
  "description": "If you're seeking an oasis of comfort, look no further than this 7-piece outdoor sectional set. The all-weather wicker seating is deep and expansive, with plush Nuvella™ cushions and pillows to comfortably entertain a crowd. Cocktail tabletop resembles richly grained wood minus the splinters and upkeep.",
  "price": "$400.00"
},
{
  "category": "living",
  "image": "https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/P600024-921-KO?$AFHS-PDP-Thumb-1X$",
  "description": "Why be limited to a perfectly spaced pair of trees? This double hammock with stand lets you hang out wherever you please. Crafted of heavy duty steel, the hammock stand might be sleek and sculptural, but it’s also exceptionally sturdy. Sporting a brilliantly colored striped fabric, the hammock is made of pure cotton that’s snuggly soft to the touch and a breeze to clean.",
  "price": "$100.00"
}]

export default class Living extends Component {

    constructor(props){
      super(props)
      this.state = {
      inventory: Inventory,
      }
      console.log(this.state.inventory)
    }

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
