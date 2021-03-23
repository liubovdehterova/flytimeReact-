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
            hrefDesign,
            hrefContext,
            hrefSupport,
            hrefImprovement,
            hrefRedesign,
            hrefAnalytics
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
                        : submenuLink === "Контекстная реклама" ?
                             hrefContext
                        : submenuLink === "Техническая поддержка" ?
                             hrefSupport
                        : submenuLink === "Доработка сайта" ?
                             hrefImprovement
                        : submenuLink === "Редизайн сайта" ?
                             hrefRedesign
                        : submenuLink === "Настройка аналитики" ?
                             hrefAnalytics
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