import React, { Component } from 'react';

class TypesRedesignList extends Component {
    render() {
        return(
            <ul className="ask__improvement__list ask__improvement__list-other">
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        01.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Визуальный
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Кардинальные изменения не вносятся, дизайн только слегка освежается.
                            Например, меняется цветовое оформление, добавляются новые картинки, анимированные элементы.
                            При правильном подходе такой редизайн может улучшить конверсию (если новая версия понравится посетителям больше старой).
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        02.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Функциональный

                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Выполняется в тех случаях, когда сайт становится неудобным для посетителей.
                            Например, когда количество информации существенно увеличилось,
                            а юзабилити ни разу не улучшалось, и людям сложно найти нужные разделы или страницы.
                            Функциональный редизайн подразумевает изменение навигации, рубрик, разделов, меню, фильтров.
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        03.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Технический
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Выполняется для оптимизации сайта: ускорения открытия страниц, оптимизации кода и т.д. Также помогает улучшить позиции веб-ресурса в выдаче.
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        04.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Полный
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Затрагивает изменение всех визуальных элементов сайта, функционала, кода. То есть, включает в себя 3 предыдущих вида редизайна
                        </p>
                    </div>
                </li>
            </ul>
        )
    }
}
export default TypesRedesignList;