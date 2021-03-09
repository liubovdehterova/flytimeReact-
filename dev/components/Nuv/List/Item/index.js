import React, { Component } from 'react';


import ItemInner from '../ItemInner';

class Item extends Component {
    render() {
        return (
            <ul className="submenu">
                <ItemInner submenuLink="Пункт меню"/>
                <ItemInner submenuLink="Пункт меню"/>
                <ItemInner submenuLink="Пункт меню"/>
                <ItemInner submenuLink="Пункт меню"/>
                <ItemInner submenuLink="Пункт меню"/>
            </ul>
        );
    }
}

export default Item;