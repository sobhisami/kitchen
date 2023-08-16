import React from 'react'
import './reviewsCard.css'

const ReviewsCard = ({image, name, body}) => {
  return (
    <div className='review_card'>
        <div className="info">
            <div className="image">
                <img src={image} alt="person avater" />
            </div>
            <div className="name">
                <h4>{name}</h4>
                <img src={'../../assets/rate.png'} alt='rate' />
            </div>
        </div>
        <p className="body">{body}</p>
    </div>
  )
}

export default ReviewsCard