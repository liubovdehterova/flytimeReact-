import React, { Component } from 'react'

import CustomizationAnalyticsList from "./CustomizationAnalyticsList";


class CustomizationAnalytics extends Component {
    render() {
        return(
            <div className="analytics">
                <h1 className="analytics__title">
                    Настройка аналитики любой сложности
                </h1>
                <CustomizationAnalyticsList />
            </div>
        )
    }
}
export default CustomizationAnalytics