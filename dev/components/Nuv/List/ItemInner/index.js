import React, { Component } from 'react';
import {Link, NavLink} from "react-router-dom";

class ItemInner extends Component {
    render() {
        const { submenuLinkBlog, submenuLink, propsItemInner, submenuOur} = this.props;
        let className='submenu-item';
        if(propsItemInner == 'Блог' && submenuLinkBlog == undefined || propsItemInner == 'О нас' && submenuOur == undefined) {
            className += ' not-blog'
        }
        return (
            <li className={className}>
                <a
                    href="#"
                    className="submenu-link"
                >
                    {
                        propsItemInner == 'Услуги' ? submenuLink
                            : propsItemInner == 'Блог' ? submenuLinkBlog
                            : propsItemInner == 'О нас' ? submenuOur
                            : null
                    }

                </a>
            </li>
        );
    }
}

export default ItemInner;