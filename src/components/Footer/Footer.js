import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer className="Footer">
			<div className="Social-block">
				<a href="https://www.facebook.com/janaratolonbaeva83" about="_blank">
					<i className="icon-facebook-circled-1"></i>
				</a>
				<a href="https://twitter.com/Zhanara24174293" about="_blank">
					<i className="icon-twitter-circled-1"></i>
				</a>
				<a href="https://www.instagram.com/zhanaratolonbaeva/" about="_blank">
					<i className="icon-instagram"></i>
				</a>
				<a href="tel: +996700123890">
					<i className="icon-whatsapp"></i>
				</a>
			</div>
			<a className="phone" href="tel: +996700123890">+996 (700) 123-890</a>
		</footer>
	);
};

export default Footer;