import React, { Component } from 'react';
import { Container } from 'reactstrap';

export default class Footer extends Component {
	render() {
		return (
			<footer className='footer'>
				<Container>
					<div className="footer__wrap">
						<p className='footer__copy'>&copy; 2018 Something.</p>
						<ul className='footer__nav'>
							<li className='footer__nav-link'><a href="#">Terms</a></li>
							<li className='footer__nav-link'><a href="#">Privacy</a></li>
							<li className='footer__nav-link'><a href="#">Security</a></li>
							<li className='footer__nav-link'><a href="#">Status</a></li>
							<li className='footer__nav-link'><a href="#">Help</a></li>
							<li className='footer__nav-link'><a href="#">Contact</a></li>
						</ul>
					</div>
				</Container>
			</footer>
		)
	}
}