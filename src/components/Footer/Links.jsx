import React, { Component } from 'react';
import './links.css';
import Container from '../container';
import Logo from '../../components/Logo'
class Links extends Component {
    render() {
        return (
            <section className='footer_links'>
                <Container>
                    <div className="content">
                        <article className='info'>
                            <Logo classNameByMe='logo'/>
                            <h3>Golden View Dine </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
                            <ul className="social">
                                <li><a hred="#"><img src={'../../assets/instagram.svg'} alt="Instagram" /></a></li>
                                <li><a hred="#"><img src={'../../assets/twitter.svg'} alt="Instagram" /></a></li>
                                <li><a hred="#"><img src={'../../assets/youtube.svg'} alt="Instagram" /></a></li>
                            </ul>
                        </article>
                        <article className='links'>
                            <h3>Other Links</h3>
                            <ul className="links">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & conditions</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">our team</a></li>
                                <li><a href="#">Our kitchen</a></li>
                            </ul>
                        </article>
                        <article className='contact'>
                            <h3>Contact Us</h3>
                            <ul className="contact_list">
                                <li><div className='image'><img src={'../../assets/email.png'} alt="email" /></div> <span>Gogreendineservice@gmail.com</span></li>
                                <li><div className='image'><img src={'../../assets/location.png'} alt="location" /></div> <span>AZ complex bylane3 Mandari <br /> Rd Mumbai 1100867 </span></li>
                                <li><div className='image'><img src={'../../assets/phone.png'} alt="phone" /></div> <span>+1800 287 256</span></li>
                            </ul>
                        </article>
                    </div>
                </Container>
            </section>
        );
    }
}

export default Links;