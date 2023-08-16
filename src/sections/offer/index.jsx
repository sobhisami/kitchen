import React, { Component } from 'react';
import './offer.css';
import Container from '../../components/container';
import Button from '../../components/Button';
import Image from '../../components/Image'

class Offer extends Component {
  render() {
    return (
      <section className='offer'>
        <Container>
          <div className="content">
            <Image src={"../../assets/offer.png"} />

            <div className="text">
              <h2>Come join us for a lunch this weekend and enjoy</h2>
              <p className="under_title">FLAT 10% OFF</p>
              <Button text="Book Table" />
            </div>

            <Image src={"../../assets/offer.png"} />
          </div>
        </Container>
      </section>
    );
  }
}

export default Offer;