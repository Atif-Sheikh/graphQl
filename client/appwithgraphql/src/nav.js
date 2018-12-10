import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './nav.css'

class Nav extends Component {
  render() {
    return (
        <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jeans">Jeans</Link></li>
        <li><Link to="/t-shirt">T-Shirt</Link></li>
        <li><Link to="/sunglasses">Sunglasses</Link></li>
        </ul>
        <ul>
          <li id="addItems"><Link to="/add-items">&#43;</Link></li>
        </ul>
        </nav>
    );
  }
}

export default Nav;