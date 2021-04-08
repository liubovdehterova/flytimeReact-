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
                        Исследуем продукт/услугу бизнеса, анализируем конкурентов и аудиторию компании.
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
                        Делаем сочный дизайн с призывом к действию. Создаем маркетинговые ловушки.
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
                        Запуск и Аналитика
                    </h4>
                    <p className="types__list__info">
                        Следим за конверсией созданного лендинга. Тестируем и улучшаем результат.
                    </p>
                </li>
            </ol>
        )
    }
}
export default TypesCreateLendingPageList;