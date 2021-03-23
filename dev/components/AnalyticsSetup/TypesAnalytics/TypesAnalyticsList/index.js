import React, { Component } from 'react';

class TypesAnalyticsList extends Component {
    render() {
        return(
            <ul className="ask__improvement__list ask__improvement__list-other ask__improvement__list-analytics">
                <li className="ask__improvement__list__inner ask__improvement__list__inner-analytics">
                    <div className="ask__improvement__list__inner-item">
                        01.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Определяем цели
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Определяем KPI
                            Выбираем сервисы аналитики
                            Обсуждаем дополнительные настройки
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner ask__improvement__list__inner-analytics">
                    <div className="ask__improvement__list__inner-item">
                        02.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Фокус на простоту
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Настроенными системами аналитики легко сможет пользоваться даже человек без опыта
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner ask__improvement__list__inner-analytics">
                    <div className="ask__improvement__list__inner-item">
                        03.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Точность данных
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Гарантируем отсутствие дублирования данных
                            Исключаем потери данных
                            Фильтруем внутренний трафик
                        </p>
                    </div>
                </li>
            </ul>
        )
    }
}
export default TypesAnalyticsList;