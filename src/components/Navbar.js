import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.js';
import '../../styles/navbar.css';

export default class Navbar extends Component {
	componentDidMount() {
		M.Sidenav.init(this.sidenav);
	}

	navCode() {
		<ul id="nav-mobile" className="right hide-on-med-and-down">
			<li><a href="#about-container">About</a></li>
			<li><a href="#portfolio-conatiner">Portfolio</a></li>
			<li><a href="#footer-container">Contact</a></li>
		</ul>
	}

	render() {
		return (
			<div className="navbar-fixed">
				<nav id="nav-container">
					<div className="nav-wrapper center">
						<h4 id="nav-header">Yanlin Zhu (Eric)</h4>
					</div>
				</nav>
			</div>
		);
	}
}