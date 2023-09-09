import React, { Component } from 'react'
import './stye.css'
import Container from '../Container/Container'
import Button from '../Button/Button'


export default class Header extends Component {
  render() {
    return (
      <header className='overlay'>
       <Container>
          <ul>
            <li><a href=""><img className='logoHeader' src={"../../images/logoHeader.svg"} alt="logoHeader" /></a></li>
            <li><a href="">Home</a></li>
            <li><a href="">About US</a></li>
            <li><a href="">Spacial</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Blogs</a></li>
            <li><a href=""><img src={"../../images/iconSearch.svg"} alt="iconSearch" /></a></li>
            <li><a href=""><img src={"../../images/Book.png"} alt="" /></a></li>
          </ul>
          <div className='header-bottom'>
            <p>Welcome To <br /> Golden View Dine </p>
            <span>Explore the authentic vegan dishes with your friends and family</span>
            <Button>Read more</Button>
          </div>
       </Container>
      </header>
    )
  }
}
