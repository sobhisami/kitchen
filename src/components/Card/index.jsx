import React, { Component } from 'react';
import './blogCard.css';

class BlogCard extends Component {
    render() {
        const { image, title, body, link, reverse } = this.props;
        return (
            <div className='blog_card'>
                {reverse ? (
                    <>
                        <div className="text">
                            <h3>{title}</h3>
                            <p>{body}</p>
                            <a href={link}>Read More</a>
                        </div>
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="text">
                            <h3>{title}</h3>
                            <p>{body}</p>
                            <a href={link}>Read More</a>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export default BlogCard;