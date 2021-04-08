import React, { Component } from 'react'

import QuetionsLandingList from './QuetionsLandingList'

class QuetionsLanding extends Component {
    render() {
        return(
            <div className="ask__store">
                <h1 className="ask__store__title">
                    Частые вопросы по разработке Landing Page
                </h1>
                <QuetionsLandingList />
            </div>
        )
    }
}
export default QuetionsLanding;