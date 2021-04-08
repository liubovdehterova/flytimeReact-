import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { button } = this.props;
        return (
            <p className="option__inner__information__link">
                {button}
            </p>
        );
    }
}
export default Button;