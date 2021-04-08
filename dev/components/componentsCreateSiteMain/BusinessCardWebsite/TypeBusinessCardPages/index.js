import React, { Component } from 'react';

import TypeBusinessCardPagesList from './TypeBusinessCardPagesList'

class TypeBusinessCardPages extends Component {
    render() {
        return(
            <div className="ask__improvement">
                <h1 className="ask__improvement__title">
                    Какие задачи решает сайт визитка?
                </h1>
                <TypeBusinessCardPagesList />
            </div>
        )
    }
}
export default TypeBusinessCardPages;