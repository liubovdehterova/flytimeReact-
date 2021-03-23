import React, { Component } from 'react';


import ItemInner from '../ItemInner';

class Item extends Component {
    render() {
        const { propsItem } = this.props;
        return (
            <ul className="submenu">
                <ItemInner
                    submenuLink="Разработка сайтов"
                    submenuLinkBlog="Дизайн"
                    submenuOur="Вакансии"
                    propsItemInner={propsItem}
                    hrefDev = '/DevelopSite'

                />
                <ItemInner
                    submenuLink="SEO-продвижение сайта"
                    submenuLinkBlog="WEB"
                    submenuOur="Отзывы"
                    propsItemInner={propsItem}
                    hrefSEO = '/SeoPage'
                />
                <ItemInner
                    submenuLink="Веб дизайн"
                    submenuLinkBlog="SEO"
                    submenuOur="Офис"
                    propsItemInner={propsItem}
                    hrefDesign = '/WebDesign'
                />
                <ItemInner
                    submenuLink="Техническая поддержка"
                    submenuLinkBlog="Интернет-маркетинг"
                    propsItemInner={propsItem}
                    hrefSupport = '/TechnicalSupport'
                />
                <ItemInner
                    submenuLink="Доработка сайта"
                    submenuLinkBlog="Стартапы и бизнес"
                    propsItemInner={propsItem}
                    hrefImprovement = '/WebsiteImprovement'
                />
                <ItemInner
                    submenuLink="Редизайн сайта"
                    propsItemInner={propsItem}
                    hrefRedesign="/WebsiteRedesign"
                />
                <ItemInner
                    submenuLink="Контекстная реклама"
                    propsItemInner={propsItem}
                    hrefContext='/ContextualAdvertising'
                />
                <ItemInner
                    submenuLink="Настройка аналитики"
                    propsItemInner={propsItem}
                    hrefAnalytics="/AnalyticsSetup"
                />
            </ul>

        );
    }
}

export default Item;