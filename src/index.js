import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.css';
import '../styles/about.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<About />
				<Portfolio />
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));