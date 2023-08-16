import React, { Component } from 'react';
import './subscribe.css';
import Container from '../container';
import Button from '../Button';

class Subscribe extends Component {
    render() {
        return (
            <div className='subscribe'>
                <Container>
                    <div className="content">
                        <div className="text">
                            <img src={'../../assets/email-outline.png'} alt="email outline" />
                            <p>Subscribe to our Newsletter</p>
                        </div>
                        <form action="">
                            <input type="text" placeholder='Your Email Id' />
                            <Button text="Subscribe" />
                        </form>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Subscribe;