import React, { Component } from 'react';


import List from './List';
import CallUs from './CallUs';




class Nuv extends Component {
	render() {
		const { clearFromProps, propsState } = this.props;
		return (			
			<div className="menu">
				<div className="nuv">
					<ul className="nuv__list">
						<List item="Услуги"/>
						<List item="Блог"/>
						<List item="О нас"/>
						<List item="Контакты"/>
					</ul>
					
					<button 
						className="contact__us"
						onClick={clearFromProps}
					>
						Связаться с нами
					</button>
					{
						propsState ? <CallUs 
										propsDeleteFunction={ clearFromProps }
										propsDeleteState={ propsState }
									/> : null
					}
				</div>
			</div>			
		);
	}
} 

export default Nuv;