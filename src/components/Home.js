import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Accordion from './Accordion';
import PageTitle from './PageTitle';
import Clipboard from 'react-icons/lib/io/clipboard';
import Question from 'react-icons/lib/fa/question';
import Smile from 'react-icons/lib/fa/smile-o';
import Flag from 'react-icons/lib/md/flag';
import Eye from 'react-icons/lib/go/eye';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Home extends Component {
	render() {
		return (
			<CSSTransitionGroup
				transitionName="fade"
				transitionAppear={true}
				transitionAppearTimeout={200}
				transitionEnter={false}
				transitionLeave={false}>
				<section className="home">
					<Container className='md'>
						<Row>
							<Col xs='12'>
								<PageTitle title='Ameen Merchant App' />
							</Col>
							<Col xs='12'>
								<Accordion name='How to Setup' icon={<Clipboard />} iconBackground='#1367d7'>
									<ul>
										<li className='home__list-item'>
											<b>Step 1:</b> git clone this repo;
										</li>
										<li className='home__list-item'>
											<b>Step 2:</b> cd to the cloned repo;
										</li>
										<li className='home__list-item'>
											<b>Step 3:</b> install the Application with <code className='home__code'>yarn</code> or <code className='home__code'>npm i</code>
										</li>
									</ul>
								</Accordion>
							</Col>
							<Col xs='12'>
								<Accordion name='How to Run App' icon={<Question />} iconBackground='#24b1e7'>
									<p>Start the Application with <code className='home__code'>yarn start</code> or <code className='home__code'>npm run start</code></p>
								</Accordion>
							</Col>
							<Col xs='12'>
								<Accordion name='Standard Compliant' icon={<Flag />} iconBackground='#00c2a5'>
									<ul className='home__list'>
										<li className="home__list-item">
											React (ES6), React Router
										</li>
										<li className="home__list-item">
											HTML5
										</li>
										<li className="home__list-item">
											CSS3 (SCSS, SASS, Flexbox)
										</li>
										<li className="home__list-item">
											Webpack, Babel
										</li>
										<li className="home__list-item">
											Reactstrap, React-dates, Moment, React-icons
										</li>
									</ul>
								</Accordion>
							</Col>
							<Col xs='12'>
								<Accordion name='Secrets' icon={<Eye />} iconBackground='#ecbf00'>
									<p>This App has no secrets <Smile /></p>
								</Accordion>
							</Col>
						</Row>
					</Container>
				</section>
			</CSSTransitionGroup>
		)
	}
}