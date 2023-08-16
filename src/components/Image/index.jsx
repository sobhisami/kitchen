import React, { Component } from 'react'

export default class index extends Component {
    render() {
        let { src, styles  , custClassName} = this.props;
        return (
            <div>
                <img src={src} className={custClassName} alt={src} style={styles} />
            </div>
        )
    }
}
