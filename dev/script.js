import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nuv from './components/Nuv';
import Buner from './components/Buner';
import Main from './components/Main';
import Communication from './components/Communication';
import Footer from './components/Footer';


class App extends Component {
	render() {
		return (
			<>
				<Nuv />
				<Buner />
				<Main />
				<Communication />
				<Footer />
			</>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);