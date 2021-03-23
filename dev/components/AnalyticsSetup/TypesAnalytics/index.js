import React, { Component } from 'react';

import TypesAnalyticsList from './TypesAnalyticsList'

class TypesAnalytics extends Component {
    render() {
        return(
            <div className="ask__improvement">
                <h1 className="ask__improvement__title">
                    Наш подход
                </h1>
                <TypesAnalyticsList />
            </div>
        )
    }
}
export default TypesAnalytics;