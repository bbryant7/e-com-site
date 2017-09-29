import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">

                <NavLink activeClassName="selected"  activeStyle={{color: "#260468"}} className="nav-link" exact to='/'> <span className="splash">Online Furniture</span></NavLink>
                <NavLink activeClassName="selected"  activeStyle={{backgroundColor: "black", color:"white"}} className="nav-link" to='/garden'> Garden</NavLink>
                <NavLink activeClassName="selected"  activeStyle={{backgroundColor: "black", color:"white"}} className="nav-link" to='/kitchen'>Kitchen</NavLink>
                <NavLink activeClassName="selected"  activeStyle={{backgroundColor: "black", color:"white"}} className="nav-link" to='/living'>Living </NavLink>
                <NavLink activeClassName="selected"  activeStyle={{backgroundColor: "black",color:"white"}} className="nav-link" exact to='/about'> About Us</NavLink>
                <NavLink activeClassName="selected"  activeStyle={{backgroundColor: "black", color:"white"}} className="nav-link" to='/contact'> Contact</NavLink>

            </div>
          </div>
        </nav>
        {this.props.children}
        <footer>
        <p> Online Furniture </p>

        </footer>
      </div>
    );
  }
}
