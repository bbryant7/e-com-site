import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">

                <NavLink activeClassName="selected"  activeStyle={{color: "#FAD334"}} className="nav-link" exact to='/'> <span className="splash">E-Com.COM</span></NavLink>
                <NavLink activeClassName="selected"  activeStyle={{color: "#FAD334"}} className="nav-link" to='/garden'> <span>Garden</span></NavLink>
                <NavLink activeClassName="selected"  activeStyle={{color: "#FAD334"}} className="nav-link" to='/kitchen'> <span>Kitchen</span></NavLink>
                <NavLink activeClassName="selected"  activeStyle={{color: "#FAD334"}} className="nav-link" to='/living'> <span> Living </span></NavLink>
                <NavLink activeClassName="selected"  activeStyle={{color: "#FAD334"}} className="nav-link" exact to='/about'> <span>About Us</span></NavLink>
                <NavLink activeClassName="selected"  activeStyle={{color: "#FAD334"}} className="nav-link" to='/contact'> <span>Contact</span></NavLink>

            </div>
          </div>
        </nav>
        {this.props.children}
        <footer className="col-lg-12">
          <span>
            E-com.COM
          </span>
        </footer>
      </div>
    );
  }
}
