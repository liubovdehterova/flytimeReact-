import React, { Component } from 'react'

class TypesCreateBusinessSitePageList extends  Component {
    render() {
        return(
            <ol className="types">
                <li className="types__list">
                    <h4 className="types__list__title">
                        Анализ
                    </h4>
                    <p className="types__list__info">
                        Исследуем тематику вашего бизнеса, анализируем конкурентов.
                    </p>
                </li>
                <li className="types__list">
                    <h4 className="types__list__title">
                        Прототип
                    </h4>
                    <p className="types__list__info">
                        Создаем путь пользователя и его взаимодействие с контентом.
                    </p>
                </li>
                <li className="types__list">
                    <h4 className="types__list__title">
                        Дизайн
                    </h4>
                    <p className="types__list__info">
                        Разрабатываем дизайн, который оставляет яркое впечатление о компании.
                    </p>
                </li>
                <li className="types__list">
                    <h4 className="types__list__title">
                        Разработка
                    </h4>
                    <p className="types__list__info">
                        Делаем сайт с интерактивным дизайном, динамическими элементами и адаптивной версткой.
                    </p>
                </li>
                <li className="types__list">
                    <h4 className="types__list__title">
                        Запуск
                    </h4>
                    <p className="types__list__info">
                        Следим за аналитикой, тестируем, улучшаем и поддерживаем результат.
                    </p>
                </li>
            </ol>
        )
    }
}
export default TypesCreateBusinessSitePageList;