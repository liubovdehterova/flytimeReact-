import React, { Component } from 'react';

import TypesRedesignList from './TypesRedesignList'

class TypesRedesign extends Component {
    render() {
        return(
            <div className="ask__improvement">
                <h1 className="ask__improvement__title">
                    Виды редизайна: какой заказать?
                </h1>
                <p className="ask__improvement__description">
                    Прежде чем редизайн сайта заказать, нужно определиться с тем, какой именно вам нужен. Всего различают 4 разных вида, каждый из которых имеет свои особенности:
                </p>
                <TypesRedesignList />
                <p className="ask__improvement__description">
                    Цены на редизайн сайта напрямую зависят от выбранного варианта. Ведь каждый из них включает в себя конкретный перечень работ разной сложности.
                </p>
            </div>
        )
    }
}
export default TypesRedesign;