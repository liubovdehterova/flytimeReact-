import React, { Component } from 'react';

import Item from './Item';

class List extends Component {
	render() {
        const { item } = this.props;
		return (
            <li className="nuv__list__inner">
                <p className="nuv__list__inner__link">
                    {item}
                </p>
                <Item />
            </li>	
		);
	}
} 

export default List;