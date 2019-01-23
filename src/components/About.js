import React, { Component } from 'react';
 
const iconSize = {
	fontSize: '30px'
}

export default class About extends Component {
	render() {
		return (
			<div className="row container" id="about-container">
				<div className="col s12">
					{/* <h3 className="header" style={{color: '#ee6e73'}}>About</h3> */}
					<div className="card horizontal" id="profile-container">
						<div className="card-image" id="profile-image-container">
							<img src={require('../../public/images/me.jpg')} id="profile-pic"/>
							<div className="card-action" id="media-icons-container">
								<a href="https://www.linkedin.com/in/yanlzhu/" alt="Linkedin" title="Yanlin Linkedin Page">
	          						<i className="fa fa-linkedin" style={iconSize}></i>
	          					</a>
	          					<a href="https://www.github.com/ylzhu000" alt="Github" title="Yanlin Github Page">
	          						<i className="fa fa-github" style={iconSize}></i>
	          					</a>
	          					<a href={require('../../public/YanlinZhuResume_12_21_2018.pdf')} download="YanlinZhuResume" alt="Resume" title="Yanlin Resume">
	          						<i className="fa fa-file" style={iconSize}></i>
	          					</a>
	          				</div>
						</div>
						<div className="card-stacked">
							<div className="card-content">
								<p>A computer engineering graduate who possess excellent technical, quantitative, and analytical skills who is seeking <b>FULL STACK DEVELOPER</b> full time position.</p>
								<hr />	
								<p><span className="blue-text">Front-End Development:</span> HTML5, CSS3, Javascript, JQuery, and ReactJS </p>
								<hr />
								<p><span className="blue-text">Back-End Development:</span> Python, and NodeJS </p>
								<hr />
								<p><span className="blue-text">Database:</span> PostgreSQL and MongoDB (NoSQL) </p>
								<hr />
								<p><span className="blue-text">Cloud Platforms:</span> Heroku and AWS</p>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		);
	}
}