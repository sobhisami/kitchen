import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  render() {
    const { title , customClassName} = this.props;
    return (
      <button className={customClassName}>{title}</button>
    );
  }
}

export default Button;