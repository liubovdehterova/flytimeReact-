import React, { Component } from 'react';

import TypesAdeptDesignPagesList from './TypesAdeptDesignPagesList'

class TypesAdeptDesignPages extends Component {
    render() {
        return(
            <div className="ask__improvement">
                <h1 className="ask__improvement__title">
                    Этапы разработки web-дизайна
                </h1>
                <p className="ask__improvement__title__submenu">
                    Создание дизайна интернет-сайтов требует тщательной проработки каждой детали. Работа предусматривает:
                </p>
                <TypesAdeptDesignPagesList />
            </div>
        )
    }
}
export default TypesAdeptDesignPages;