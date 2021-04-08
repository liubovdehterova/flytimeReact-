import React, { Component } from 'react';
import TypeBusinessSitePages from "../index";

class TypeBusinessSitePagesList extends Component {
    render() {
        return(
            <ul className="ask__improvement__list ask__improvement__list-other">
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        01.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Позиционирование
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Сайт создаёт первое впечатление и транслирует философию компании, улучшая имидж на рынке.
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        02.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Маркетинг
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            С помощью сайта возможна рекламная кампания по продвижению вашего бизнеса в интернете.
                        </p>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        03.
                    </div>
                    <div className="ask__improvement__list__inner-item">
                        <h4 className="ask__improvement__list__inner-item__title" >
                            Масштаб
                        </h4>
                        <p className="ask__improvement__list__inner-item__text">
                            Вы имеете возможность привлечь новых клиентов и партнеров с других регионов и стран, тем самым масштабируя свой бизнес.
                        </p>
                    </div>
                </li>
            </ul>
        )
    }
}
export default TypeBusinessSitePagesList;