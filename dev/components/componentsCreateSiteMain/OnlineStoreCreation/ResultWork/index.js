import React, { Component } from 'react';

import ResultWorkList from './ResultWorkList'


class ResultWork extends Component {
    render() {
        const { propsResultWork, stateResultWork} = this.props;
        return(
            <div className="ask__improvement ask__improvement-other">
                <h1 className="ask__improvement__title ask__improvement__title-other">
                    Функциональный IT-инструмент
                    для эффективной работы
                    в Ecommerce
                </h1>

                <ResultWorkList
                    propsNextResultWork={ propsResultWork }
                    stateNextResultWork={ stateResultWork }
                />
            </div>
        )
    }
}
export default ResultWork;