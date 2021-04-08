import React, { Component } from 'react';
import CallUs from "../CallUs";

class ResultWorkList extends Component {
    render() {
        const { propsFunctionWorkRedesign, stateFunctionWorkRedesign} = this.props;
        return(
            <ul className="ask__improvement__list">
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        1.
                    </div>
                    <div>
                        <h4 className="ask__improvement__list__inner-title">
                            Индивидуально разработанный функционал и mobile first design
                        </h4>
                    </div>

                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        2.
                    </div>
                    <div>
                        <h4 className="ask__improvement__list__inner-title">
                            Собирают необходимые данные для работы с правильной монетизацией клиентов
                        </h4>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        3.
                    </div>
                    <div>
                        <h4 className="ask__improvement__list__inner-title">
                            Обладают высокой безопасностью и скоростью загрузки
                        </h4>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        4.
                    </div>
                    <div>
                        <h4 className="ask__improvement__list__inner-title">
                            Легко масштабируются, интегрируется с любыми crm/erp системами и api сторонних ресурсов
                        </h4>
                    </div>

                </li>
                <li className="ask__improvement__list__inner">
                    <div className="ask__improvement__list__inner-item">
                        5.
                    </div>
                    <div>
                        <h4 className="ask__improvement__list__inner-title">
                            Удобный и интуитивно понятный интерфейс управления сайтом
                        </h4>
                    </div>
                </li>
                <li className="ask__improvement__list__inner">
                    <div className="context__call__other">
                        <button className="block__call__information__link block__call__link__inner"
                                onClick={ propsFunctionWorkRedesign }
                        >
                            Обсудить проект
                        </button>
                        {
                            stateFunctionWorkRedesign ? <CallUs
                                propsDeleteFunctionWorkRedesign={ propsFunctionWorkRedesign }
                                propsDeleteStateWorkRedesign={ stateFunctionWorkRedesign }
                            /> : null
                        }
                    </div>
                </li>
            </ul>
        )
    }
}
export default ResultWorkList;