import React, { Component } from 'react'

class TypesCreateLendingPageList extends Component {
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
                        Контент
                    </h4>
                    <p className="types__list__info">
                        Наполняем сайт актуальной информацией о деятельности вашей компании.
                    </p>
                </li>
                <li className="types__list">
                    <h4 className="types__list__title">
                        Запуск
                    </h4>
                    <p className="types__list__info">
                        Поддерживаем сайт, помогаем управлять контентом.
                    </p>
                </li>
            </ol>
        )
    }
}
export default TypesCreateLendingPageList;