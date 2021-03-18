import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { button } = this.props;
        return (
            <a className="option__inner__information__link" href="#">
                {button}
            </a>
        );
    }
}
export default Button;