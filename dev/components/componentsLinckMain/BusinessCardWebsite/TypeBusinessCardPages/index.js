import React, { Component } from 'react';

import TypesLendingPagesList from './TypesLendingPagesList'

class TypeBusnessCardPages extends Component {
    render() {
        return(
            <div className="ask__improvement">
                <h1 className="ask__improvement__title">
                    Какие задачи решает Landing page?
                </h1>
                <TypesLendingPagesList />
            </div>
        )
    }
}
export default TypeBusnessCardPages;