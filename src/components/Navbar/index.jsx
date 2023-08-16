import React, { Component } from 'react';
import './navbar.css';
import Logo from '../Logo'
import Button from '../Button'

class Navbar extends Component {
  render() {
    return (
      <nav>
        <Logo/>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#About_us">About us </a></li>
          <li><a href="#Special">Special</a></li>
          <li><a href="#Menu">Menu</a></li>
          <li><a href="#Blogs">Blogs</a></li>
        </ul>
        <img src={"../../assets/search.png"} alt="Search Icon" />
        <Button title="Book now" customClassName="btn_navabar" />
      </nav>
    );
  }
}

export default Navbar;