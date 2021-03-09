import React, { Component } from 'react';

class ItemInner extends Component {
    render() {
        const { submenuLink } = this.props;
        return (
            <li className="submenu-item">
                <a 
                    href="#" 
                    className="submenu-link"
                >
                    {
                        submenuLink
                    }
                </a>
            </li>
        );
    }
}

export default ItemInner;