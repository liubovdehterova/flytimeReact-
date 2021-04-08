import React, { Component } from 'react';

import ResultCorporationList from './ResultCorporationList'


class ResultCorporation extends Component {
    render() {
        const { propsCorporationResult, stateCorporationResult} = this.props;
        return(
            <div className="ask__improvement ask__improvement-other">
                <h4 className="ask__improvement__title ask__improvement__title__submenu">
                    Что в результате
                </h4>
                <h1 className="ask__improvement__title ask__improvement__title-other">
                    Современные сайты для
                    усиления позиций
                    компании и брендов
                </h1>

                <ResultCorporationList
                    propsNextResultCorporation={ propsCorporationResult }
                    stateNextResultCorporation={ stateCorporationResult }
                />
            </div>
        )
    }
}
export default ResultCorporation;