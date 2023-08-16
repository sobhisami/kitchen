import React, { Component } from 'react'
import About from '../../sections/About'
import Blog from '../../sections/Blog'
import Footer from '../../sections/Footer'
import Ingredients from '../../sections/Ingredients'
import HeroSection from '../../sections/TopSection'
import Menu from '../../sections/Menu'
import Offer from '../../sections/offer'
import Reviews from '../../sections/Reviews'
import Services from '../../sections/Services'
import Statistics from '../../sections/Statistics'



export default class Home extends Component {
  render() {
    return (
      <div>
        <HeroSection />
        <About />
        <Services />
        <Menu />
        <Offer />
        <Ingredients />
        <Statistics />
        <Reviews />
        <Blog />
        <Footer />
      </div>
    )
  }
}
