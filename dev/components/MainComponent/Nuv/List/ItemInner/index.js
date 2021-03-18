import React, { Component } from 'react';

class ItemInner extends Component {
    render() {
        const {
            submenuLinkBlog,
            submenuLink,
            propsItemInner,
            submenuOur,
            hrefDev,
            hrefSEO,
            hrefDesign
        } = this.props;
        let className='submenu-item';
        if(propsItemInner === 'Блог' && submenuLinkBlog === undefined || propsItemInner === 'О нас' && submenuOur === undefined) {
            className += ' not-blog'
        }

        return (
            <li className={className}>
                <a
                    href={
                        submenuLink === "Разработка сайтов" ?
                            hrefDev
                        : submenuLink === "SEO-продвижение сайта" ?
                            hrefSEO
                        : submenuLink === "Веб дизайн" ?
                            hrefDesign
                        : null
                    }
                    className="submenu-link"
                >
                    {
                        propsItemInner === 'Услуги' ? submenuLink
                            : propsItemInner === 'Блог' ? submenuLinkBlog
                            : propsItemInner === 'О нас' ? submenuOur
                            : null
                    }

                </a>
            </li>
        );
    }
}

export default ItemInner;