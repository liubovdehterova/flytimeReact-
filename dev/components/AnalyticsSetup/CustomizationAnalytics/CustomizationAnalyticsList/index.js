import React, { Component } from 'react'

class CustomizationAnalyticsList extends Component {
    render() {
        return(
            <ul className="analytics__list">
                <li className="analytics__list__inner">
                    <h3 className="analytics__list__inner__title">
                        Для интернет-магазинов
                    </h3>
                    <p className="analytics__list__inner__description">
                        Установим модуль е-коммерс для отслеживания эффективности продаж по каналам трафика и категориям продуктов
                    </p>
                </li>
                <li className="analytics__list__inner">
                    <h3 className="analytics__list__inner__title">
                        Для информационных порталов
                    </h3>
                    <p className="analytics__list__inner__description">
                        Для информационных порталов
                        Настроим отслеживание форм подписок, глубину скроллинга и времени чтения статей
                    </p>
                </li>
                <li className="analytics__list__inner">
                    <h3 className="analytics__list__inner__title">
                        Для начинающих сайтов
                    </h3>
                    <p className="analytics__list__inner__description">
                        Будем отслеживать такие лиды как звонки и формы заявок
                    </p>
                </li>
                <li className="analytics__list__inner">
                    <h3 className="analytics__list__inner__title">
                        Проверка настроек
                    </h3>
                    <p className="analytics__list__inner__description">
                        Сделаем аудит аналитики которую вы использовали ранее, оптимизируем ее
                    </p>
                </li>
                <li className="analytics__list__inner">
                    <h3 className="analytics__list__inner__title">
                        Подключение дополнительных сервисов
                    </h3>
                    <p className="analytics__list__inner__description">
                        Настроим не только Google Analytics, но и Facebook Pixel, Yandex.Metrika, а так же HotJar для ведения рекламы и улучшения сайта
                    </p>
                </li>
                <li className="analytics__list__inner">
                    <h3 className="analytics__list__inner__title">
                        Настройка междоменного отслеживания
                    </h3>
                    <p className="analytics__list__inner__description">
                        Будем корректно отслеживать переходы между несколькими доменами в рамках одной аналитики
                    </p>
                </li>
            </ul>
        )
    }
}
export default CustomizationAnalyticsList;