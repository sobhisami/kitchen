import React, { Component } from 'react';
import Copyright from '../../components/Footer/Copyright';
import Links from '../../components/Footer/Links';
import Subscribe from '../../components/Footer/Subscribe';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Links />
        <Subscribe />
        <Copyright />
      </footer>
    );
  }
}

export default Footer;