import React, { Component } from 'react';


import ItemInner from '../ItemInner';

class Item extends Component {
    render() {
        const { propsItem } = this.props;
        return (
            <ul className="submenu">
                <ItemInner submenuLink="Интернет магазин"
                           submenuLinkBlog="Дизайн"
                           submenuOur="Вакансии"
                           propsItemInner={propsItem}

                />
                <ItemInner submenuLink="Корпоративные сайты"
                           submenuLinkBlog="WEB"
                           submenuOur="Отзывы"
                           propsItemInner={propsItem}
                />
                <ItemInner submenuLink="Landing page"
                           submenuLinkBlog="SEO"
                           submenuOur="Офис"
                           propsItemInner={propsItem}
                />
                <ItemInner submenuLink="Бизнес сайт"
                           submenuLinkBlog="Интернет-маркетинг"
                           propsItemInner={propsItem}
                />
                <ItemInner submenuLink="Дизайн сайта"
                           submenuLinkBlog="Стартапы и бизнес"
                           propsItemInner={propsItem}
                />
                <ItemInner submenuLink="Сайт визитка"
                           propsItemInner={propsItem}
                />
                <ItemInner submenuLink="Доработка сайта"
                           propsItemInner={propsItem}
                />
                <ItemInner submenuLink="Редизайн сайта"
                           propsItemInner={propsItem}
                />
                <ItemInner submenuLink="SEO-продвижение сайта"
                           propsItemInner={propsItem}
                />
                <ItemInner submenuLink="Контекстная реклама"
                           propsItemInner={propsItem}
                />
                <ItemInner submenuLink="Настройка аналитики"
                           propsItemInner={propsItem}

                />
            </ul>

        );
    }
}

export default Item;