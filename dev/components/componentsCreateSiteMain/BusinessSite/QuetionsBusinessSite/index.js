import React, { Component } from 'react'

import QuetionsBusinessSiteList from './QuetionsBusinessSiteList'

class QuetionsBusinessSite extends Component {
    render() {
        return(
            <div className="ask__store">
                <h1 className="ask__store__title">
                    Частые вопросы по разработке Бизнес сайта
                </h1>
                <QuetionsBusinessSiteList />
            </div>
        )
    }
}
export default QuetionsBusinessSite;