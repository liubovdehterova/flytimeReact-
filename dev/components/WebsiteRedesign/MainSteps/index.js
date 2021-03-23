import React, { Component } from 'react';

import MainStepsList from './MainStepsList'

class MainSteps extends Component {
    render() {
        return(
            <div className="ask__improvement ask__improvement-other">
                <h1 className="ask__improvement__title">
                    Основные этапы редизайна сайта
                </h1>
                <MainStepsList />
            </div>
        )
    }
}
export default MainSteps;