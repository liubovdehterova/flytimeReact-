import React, { Component } from 'react';
import CallUs from "../CallUs";

class ResultCorporationList extends Component {
    render() {
        const { propsNextResultCorporation, stateNextResultCorporation} = this.props;
        return(
            <ul className="ask__improvement__list">
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        1.
                    </div>
                    <div>
                        <h4 className="ask__improvement__list__inner-title">
                            Брендовый дизайн, который дополняет маржу
                        </h4>
                    </div>

                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        2.
                    </div>
                    <div>
                        <h4 className="ask__improvement__list__inner-title">
                            Усиливает коммуникацию за счет 3d-анимации и интерактивных элементов
                        </h4>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        3.
                    </div>
                    <div>
                        <h4 className="ask__improvement__list__inner-title">
                            Собирают правильные данные для системной работы с пользователями
                        </h4>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        4.
                    </div>
                    <div>
                        <h4 className="ask__improvement__list__inner-title">
                            Легко масштабируются и интегрируется с любыми crm/erp системами и api сторонних ресурсов
                        </h4>
                    </div>

                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        5.
                    </div>
                    <div>
                        <h4 className="ask__improvement__list__inner-title">
                            Обладают высокой безопасностью и скоростью загрузки с удобным интерфейсом управления
                        </h4>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="context__call__other context__call__other-item">
                        <div>
                            <button className="context__call__form__button block__main__button block__main__button-other"
                                    onClick={ propsNextResultCorporation }
                            >
                                <h4 className="ask__improvement__list__inner-title ask__improvement__list__inner-title-other">
                                    У вас остались вопросы?
                                </h4>
                                <p className="analytics__list__inner__description analytics__list__inner__description-other">
                                    Оставьте Ваши контактные данные. Мы свяжемся и проконсультирем Вас.
                                </p>
                            </button>
                        </div>
                        {
                            stateNextResultCorporation ? <CallUs
                                propsDeleteFunctionResultWork={ propsNextResultCorporation }
                                propsDeleteStateResultWork={ stateNextResultCorporation }
                            /> : null
                        }
                    </div>
                </li>
            </ul>
        )
    }
}
export default ResultCorporationList;