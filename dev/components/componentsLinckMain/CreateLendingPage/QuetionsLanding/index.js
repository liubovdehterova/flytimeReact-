import React, { Component } from 'react'

import QuetionsCorporationList from './QuetionsCorporationList'

class QuetionsCorporation extends Component {
    render() {
        return(
            <div className="ask__store">
                <h1 className="ask__store__title">
                    Частые вопросы по разработке Landing Page
                </h1>
                <QuetionsCorporationList />
            </div>
        )
    }
}
export default QuetionsCorporation;