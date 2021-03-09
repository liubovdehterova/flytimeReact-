import React, { Component } from 'react';


import List from './List';
import CallUs from '../CallUs';



class Nuv extends Component {
	constructor() {
		super();
		this.state = {
			isShow: false,
		};
		this.toggleShow = this.toggleShow.bind(this);
	}
	toggleShow() {
		const { isShow } = this.state;
		this.setState({
			isShow: !isShow,
		});
	}
	render() {
		const { isShow } = this.state;
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
						onClick={this.toggleShow}
					>
						Связаться с нами
					</button>
					{
						isShow ? (
							<CallUs />
						) : null
					}
				</div>
			</div>			
		);
	}
} 

export default Nuv;