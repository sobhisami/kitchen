import React, { Component } from 'react';
import './menuCard.css';
import Image from '../Image';


class MenuCard extends Component {
  render() {
    const { image, name, description, price } = this.props;
    return (
      <div className='menu_card'>
        <div className="image">
          <Image src={image}/>
        </div>
        <div className="text">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
        <span className="line"></span>
        <h3>{price}</h3>
      </div>
    );
  }
}

export default MenuCard;