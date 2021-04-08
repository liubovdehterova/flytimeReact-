import React, { Component } from 'react';

import TypeBusinessSitePagesList from './TypeBusinessSitePagesList'

class TypeBusinessSitePages extends Component {
    render() {
        return(
            <div className="ask__improvement">
                <h1 className="ask__improvement__title">
                    Какие задачи решает Бизнес сайт?
                </h1>
                <TypeBusinessSitePagesList />
            </div>
        )
    }
}
export default TypeBusinessSitePages;