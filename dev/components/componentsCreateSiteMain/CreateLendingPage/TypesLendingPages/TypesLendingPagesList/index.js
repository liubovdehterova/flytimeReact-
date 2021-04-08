import React, { Component } from 'react';

class TypesLendingPagesList extends Component {
    render() {
        return(
            <ul className="ask__improvement__list ask__improvement__list-other">
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        01.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Быстрый старт
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Запуск лендинга обеспечит получение заявок/продаж максимально быстро, по сравнению с запуском интернет-магазина или бизнес сайта.
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        02.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Конверсия
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Лендинг прекрасно работает на продажи. Страница полностью концентрирует внимание на продукте или услуге.
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        03.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Увеличение прибыли
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            С помощью лендинга, вы можете запускать новые продукты или услуги отдельно от основного сайта.
                        </p>
                    </div>
                </li>
            </ul>
        )
    }
}
export default TypesLendingPagesList;