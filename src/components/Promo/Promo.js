import React from 'react';

import Avatar from '../../images/hijab-woman.png';
import './Promo.css';

const Promo = () => {
	return (
		<>
			<section className="Promo">
				<div className="Promo-text">
					<h1>Quality<br/>Websites services</h1>
					<p>I produce various websites from one-page to multi-page</p>
				</div>
				<div className="Promo-img">
					<img src={Avatar} alt="Woman with hijab"/>
				</div>
			</section>
		</>
	);
};

export default Promo;