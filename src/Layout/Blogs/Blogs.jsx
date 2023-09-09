import React, { Component } from 'react'
import {BlogCard, Container, Title} from '../../Component'
import blogs from '../../mock/blogs';
import './style.css'
export default class Blogs extends Component {
  render() {
    const { image, title, body, link, reverse } = this.props;
    return (
      <section className='blogs' id='Blogs'>
                <h2>Blogs</h2>
                <p className="under_title">words from our food lovers</p>
                <div className="content">
                    {blogs.map((item, index) => (
                        <BlogCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            body={item.body}
                            link={item.link}
                            reverse={item.reverse}
                        />
                    ))}
                </div>
            </section>
    )
  }
}
