import React, { Component } from 'react'

export default class index extends Component {
    render() {
        const {classNameByMe} = this.props;
        return (
            <div>
                <img src="../../../assets/logo.svg" className={classNameByMe}/>
            </div>
        )
    }
}
