import React, { Component } from 'react';
import './reviews.css';
import reivewsData from '../../Mocks/Reviews';
import ReviewsCard from '../../components/Reviews';

class Reviews extends Component {
  render() {
    return (
      <section className='reviews'>
        <h2>Reviews</h2>
        <p className="under_title">words from our food lovers</p>
        <div className="reviews_box">
          { reivewsData.map((item, index) => <ReviewsCard key={index} image={item.image} name={item.name} body={item.body} />) }
        </div>
      </section>
    );
  }
}

export default Reviews;