import React, { Component } from "react";
import { Link } from "react-router-dom";
import AboutImage from "../images/aboutimage.jpg";

export default class About extends Component {
  render() {

    return (
      <div>
        <h2 className="about-image"> </h2>

        <h1> About </h1>
        <div className="about-body">
        <h3> Celebrating your home</h3>
        <p>
          Your home is more than a house, it’s the daily moments and experiences
          you share that make it uniquely you. At Online Furniture, we celebrate
          being home with you. Our locally owned and operated stores are
          passionate about being the best and most affordable furniture store
          for your home.
        </p>
        <h3> Our Promise</h3>
        <p>
          Online Furniture offers a zillion things home. With one of the worlds
          largest online selections of furniture, home furnishings, décor and
          goods, including more than eight million products from over 10,000
          suppliers, Wayfair helps people find the perfect product at the right
          price. Our extensive selection and superior customer service coupled
          with the convenience of online shopping, make it easier than ever
          before to find exactly what you want for your home at a price you can
          afford.
        </p>
        <h3> Were Giving Back</h3>
        <p>
          As a global citizen, Online Furniture places great value on the people
          and families who make up a community. Every year, we donate our time,
          money and resources to helping people live a better life.
        </p>
      </div>
      <Link to="/contact">
          <button className="about-button"> Conact Us</button>
        </Link>
      </div>
    );
  }
}
