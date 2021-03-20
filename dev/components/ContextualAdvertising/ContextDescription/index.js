import React, { Component } from 'react'
import CallUs from "./CallUs";

class ContextDescription extends Component {
    render() {
        const { propsFunctionContext, stateFunctionContext } = this.props;
        return(
            <div className="context__call">
                <div className="context__call__inner">
                    <h1 className="context__call__inner__title">
                        Настройка контекстной и
                        таргетинговой рекламы
                    </h1>
                    <p className="context__call__inner____description">
                        С помощью таргетированной и контекстной рекламы Вы сможете привлекать на сайт пользователей,
                        готовых оставить заявку, заказать услугу или приобрести товар.
                        Широкий выбор инструментов и точная настройка позволяют обращаться к наиболее перспективной аудитории.
                    </p>
                    <p className="context__call__inner____description">
                        Детально разработанная стратегия продвижения,
                        качественная настройка рекламных кампаний, регулярная оптимизации и понятная отчетность - все это является залогом успешного продвижения,
                        которые Вы сможете получить благодаря нашим специалистам.
                    </p>
                </div>
                <div className="context__call__form">
                    <button className="context__call__form__button block__main__button"
                            onClick={propsFunctionContext}
                    >
                        Узнать стоимость
                    </button>
                    {
                        stateFunctionContext ? <CallUs
                            propsDeleteFunctionContext={ propsFunctionContext }
                            propsDeleteStateContext={ stateFunctionContext }
                        /> : null
                    }
                </div>
            </div>
        )
    }
}
export default ContextDescription;