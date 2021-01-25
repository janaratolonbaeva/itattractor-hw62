import React from 'react';

import PortfolioImg1 from '../../images/portfolio-img-1.jpeg';
import PortfolioImg2 from '../../images/portfolio-img-2.jpeg';
import PortfolioImg3 from '../../images/portfolio-img-3.jpeg';
import PortfolioImg4 from '../../images/portfolio-img-4.jpeg';
import PortfolioImg5 from '../../images/portfolio-img-5.jpeg';
import PortfolioImg6 from '../../images/portfolio-img-6.jpeg';

import './Portfolio.css';


const Portfolio = () => {
	return (
			<section className="Portfolio">
				<h2 className="title">Portfolio</h2>
				<div className="Portfolio-row">
					<a href="https://janaratolonbaeva.github.io/delifood/app/index.html" className="Portfolio-item">
						<img src={PortfolioImg1} alt="Project"/>
						<div className="Portfolio-item-text">
							<p>Delifood - fast food and delivery</p>
						</div>
					</a>
					<a href="https://janaratolonbaeva.github.io/moto/app/index.html" className="Portfolio-item">
						<img src={PortfolioImg2} alt="Project"/>
						<div className="Portfolio-item-text">
							<p>Moto - shop selling motorcycles and parts</p>
						</div>
					</a>
					<a href="https://janaratolonbaeva.github.io/ducer-nicel/index.html" className="Portfolio-item">
						<img src={PortfolioImg3} alt="Project"/>
						<div className="Portfolio-item-text">
							<p>Ducer & Nicel - installation of gas appliances</p>
						</div>
					</a>
					<a href="https://janaratolonbaeva.github.io/skyDreams-master/index.html" className="Portfolio-item">
						<img src={PortfolioImg4} alt="Project"/>
						<div className="Portfolio-item-text">
							<p>SkyDreams-master - installation of stretch ceilings</p>
						</div>
					</a>
					<a href="https://janaratolonbaeva.github.io/timyan_-_rozmarin/app/index.html" className="Portfolio-item">
						<img src={PortfolioImg5} alt="Project"/>
						<div className="Portfolio-item-text">
							<p>Timyan & Rozmarin - fast food and delivery</p>
						</div>
					</a>
					<a href="https://janaratolonbaeva.github.io/music/app/index.html" className="Portfolio-item">
						<img src={PortfolioImg6} alt="Project"/>
						<div className="Portfolio-item-text">
							<p>Music - school of music for children</p>
						</div>
					</a>
				</div>
			</section>
	);
};

export default Portfolio;