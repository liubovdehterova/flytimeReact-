import React, { Component } from 'react'

import QuetionsBusinessCardList from './QuetionsBusinessCardList'

class QuetionsBusinessCard extends Component {
    render() {
        return(
            <div className="ask__store">
                <h1 className="ask__store__title">
                    Частые вопросы по разработке сайта-визитки
                </h1>
                <QuetionsBusinessCardList />
            </div>
        )
    }
}
export default QuetionsBusinessCard;