import React, { Component } from 'react'

import QuetionsOnlineCreateList from './QuetionsOnlineCreateList'

class QuetionsOnlineCreate extends Component {
    render() {
        return(
            <div className="ask__store">
                <h1 className="ask__store__title">
                    Часто задаваемые вопросы
                </h1>
                <QuetionsOnlineCreateList />
            </div>
        )
    }
}
export default QuetionsOnlineCreate;