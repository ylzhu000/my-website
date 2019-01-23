import React, { Component } from 'react';
import '../../styles/footer.css';

export default class Footer extends Component {
	render() {
		return(
			<footer className="page-footer" id="footer-container">
	          <div className="container">
	            <div className="row" id="quote-row-container">
	              <div className="col s12">
	                <p className="grey-text text-lighten-4 right"><i className="material-icons">format_quote</i>TALK IS CHEAP. SHOW ME THE CODE.<i className="material-icons">format_quote</i></p>
	              </div>
	              <p className="right">-- Linus Torvalds</p>
	            </div>
	          </div>
	          <div className="footer-copyright">
	            <div className="container">
	            	© 2019 Copyright YANLIN ZHU
	            	<span className="right" id="footer-email">Email: ylinzhu19@gmail.com</span>
	            </div>
	          </div>
			</footer>
	        
		);
	}
}