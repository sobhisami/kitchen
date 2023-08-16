import React, { Component } from 'react';
import './services.css';
import ServiceCard from '../../components/Service';
import data from '../../Mocks/Services';

class Services extends Component {
  render() {
    return (
      <section className='services' id='Special'>
        <h2>Special</h2>
        <p className='under_title'>What makes us special</p>
        <div className="services_box">
          {
            data.map(item => <ServiceCard key={item.id} icon={item.icon} title={item.title} description={item.description} />)
          }
        </div>
      </section>
    );
  }
}

export default Services;