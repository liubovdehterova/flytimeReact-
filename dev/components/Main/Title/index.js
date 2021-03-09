import React, { Component } from 'react';

class Title extends Component {
    render() {
        const { title } = this.props;
        return (
            <h6 className="option__inner__information__titel">
                {title}
            </h6>
        );
    }
}
export default Title;