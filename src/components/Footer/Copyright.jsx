import React, { Component } from 'react';

const pStyle = {
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '24px',
  color: '#FFFFFF',
  textAlign: 'center'
}

class Copyright extends Component {
  render() {
    return (
      <div style={{ padding: '13px', background: '#101418B2' }}>
        <p style={pStyle}>
          Copyright © 2022 Golden Dine website
          <br />
          All rights reserved
        </p>
      </div>
    );
  }
}

export default Copyright;