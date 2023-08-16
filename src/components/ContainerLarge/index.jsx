import React, { Component } from 'react';
import './containerLarge.css';

class ContainerLarge extends Component {
  render() {
    return (
      <div className='container_large'>
        {this.props.children}
      </div>
    );
  }
}

export default ContainerLarge;