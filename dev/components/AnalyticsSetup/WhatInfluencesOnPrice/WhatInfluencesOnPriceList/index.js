import React, { Component } from 'react';

class WhatInfluencesOnPriceList extends Component {
    render() {
        return(
            <ul className="ask__improvement__list
                           ask__improvement__list-other
                           ask__improvement__list-analytics"
            >
                <li className="ask__improvement__list__inner ask__improvement__list__inner-analytics">
                    <div className="ask__improvement__list__inner-item">
                        01.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Размер сайта
                        </h4>
                    </div>
                </li>
                <li className="ask__improvement__list__inner ask__improvement__list__inner-analytics">
                    <div className="ask__improvement__list__inner-item">
                        02.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Тип сайта
                        </h4>
                    </div>
                </li>
                <li className="ask__improvement__list__inner ask__improvement__list__inner-analytics">
                    <div className="ask__improvement__list__inner-item">
                        03.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Количество подключаемых систем аналитики
                        </h4>
                    </div>
                </li>
                <li className="ask__improvement__list__inner ask__improvement__list__inner-analytics">
                    <div className="ask__improvement__list__inner-item">
                        04.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Объем отслеживаемых ключевых действий
                        </h4>
                    </div>
                </li>
                <li className="ask__improvement__list__inner ask__improvement__list__inner-analytics">
                    <div className="ask__improvement__list__inner-item">
                        05.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Необходимость подключения базового или расширенного модуля е-коммерс
                        </h4>
                    </div>
                </li>
            </ul>
        )
    }
}
export default WhatInfluencesOnPriceList;