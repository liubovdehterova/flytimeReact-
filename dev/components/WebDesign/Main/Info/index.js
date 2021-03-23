import React, { Component } from 'react';

class Info extends Component {
    render() {
        const { text } = this.props;
        return (
            <p className="option__inner__information__discription">
                {text}
            </p>
        );
    }
}
export default Info;