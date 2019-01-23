import React, { Component } from 'react';
import '../../styles/portfolio.css';

const projects = [
	{
		"image": require('../../public/images/youtube_project.png'),
		"title": 'Youtube Search Engine',
		"description": `This project uses modern fron-end technologies such as 
						React, Webpack4, Babel and MaterializeCSS to build a Youtube 
						Search Engine by making use of Google Youtube API`,
		"link": 'https://youtubeengine.herokuapp.com/',
		"id": 'youtube-engine-action'
	}, 
	{
		"image": require('../../public/images/shopping_cart_project.png'),
		"title": 'Shopping Cart',
		"description": `The idea of this project is to practice online shopping logic.
						It has functionality to remove, add, and edit any items. The total
						cost including shipping fee will be calculated based on the number of quality
						of the item`,
		"link": 'https://reactshopcart.herokuapp.com/',
		"id": 'shopping-cart-action'
	},
	{
		"image": require('../../public/images/emailer_project.png'),
		"title": 'Emailer',
		"description": `This application is made for start up company who wants to send out emails to the 
						customers for feedback of the products. It's a user-friendly and reliable automatic
						email system to send surveys`,
		"link": 'https://mighty-garden-11586.herokuapp.com',
		"id": 'emailer-action'
	}
]

export default class Portfolio extends Component {
	render() {
		
		return (
			<div className="row container" id="portfolio-conatiner">
				{
					projects.map((project, index) => {
						return (
							<div className="col s12 m4" key={project.title + index}>
								<div className="card">
									<div className="card-image">
										<img src={project.image} key={project.title} alt={project.title}/>
										<span className="card-title orange-text">{project.title}</span>
									</div>
									<div className="card-content">
										<p>{project.description}</p>
									</div>
									<div className="card-action" id={project.id}>
										<a href={project.link}>Check out the live link</a>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		);
	}
}