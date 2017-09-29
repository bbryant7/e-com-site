import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1> Contact us </h1>
        <div className="contact-page">
          <div className="contact-box"><a href="https://www.google.com/maps/place/Disneyland+Park/@33.8120962,-117.9211629,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcd7d12b3b5e6b:0x2ef62f8418225cfa!8m2!3d33.8120918!4d-117.9189742">
            <h3>Austin, TX Location </h3>
            <p> 512.555.5555 </p>
            <p> 123 Main St. </p>
            <p> Austin, TX 78711 </p>
            <p> sales@baileysfurniturestore.com </p>
          </a></div>
          <div className="contact-box"> <a href="https://www.google.com/maps/place/Disneyland+Park/@33.8120962,-117.9211629,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcd7d12b3b5e6b:0x2ef62f8418225cfa!8m2!3d33.8120918!4d-117.9189742">
            <h3>Houston, TX Location </h3>
            <p> 512.555.5555 </p>
            <p> 123 Main St. </p>
            <p> Austin, TX 78711 </p>
            <p> sales@baileysfurniturestore.com </p>
          </a></div>
          <div className="contact-box"><a href="https://www.google.com/maps/place/Disneyland+Park/@33.8120962,-117.9211629,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcd7d12b3b5e6b:0x2ef62f8418225cfa!8m2!3d33.8120918!4d-117.9189742">
            <h3>Dallas, TX Location </h3>
            <p> 512.555.5555 </p>
            <p> 123 Main St. </p>
            <p> Austin, TX 78711 </p>
            <p> sales@baileysfurniturestore.com </p>
          </a></div>
          <div className="contact-box"> <a href="https://www.google.com/maps/place/Disneyland+Park/@33.8120962,-117.9211629,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcd7d12b3b5e6b:0x2ef62f8418225cfa!8m2!3d33.8120918!4d-117.9189742">
            <h3>Tulsa, OK Location </h3>
            <p> 512.555.5555 </p>
            <p> 123 Main St. </p>
            <p> Austin, TX 78711 </p>
            <p> sales@baileysfurniturestore.com </p>
          </a></div>
        </div>
      </div>
    );
  }
}
