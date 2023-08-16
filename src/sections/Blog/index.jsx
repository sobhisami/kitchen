import React, { Component } from 'react';
import './blog.css';
import BlogCard from '../../components/Card';
import blogs from '../../Mocks/BlogData';

class Blog extends Component {
    render() {
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
        );
    }
}

export default Blog;