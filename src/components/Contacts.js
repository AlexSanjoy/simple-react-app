import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PageTitle from './PageTitle';
import ContactItem from './ContactItem';
import Gmail from 'react-icons/lib/io/email';
import Facebook from 'react-icons/lib/fa/facebook';
import Linkedin from 'react-icons/lib/fa/linkedin';
import Github from 'react-icons/lib/fa/github';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Contacts extends Component {
	render() {
		return (
			<CSSTransitionGroup
				transitionName="fade"
				transitionAppear={true}
				transitionAppearTimeout={200}
				transitionEnter={false}
				transitionLeave={false}>
				<section className='contacts'>
					<Container className="md">
						<Row>
							<Col xs='12'>
									<PageTitle title='Contacts' />
							</Col>
							<Col xs='12'>
								<ContactItem
									name='Email'
									btnText='Contact me'
									iconBackground='#ff123b'
									icon={<Gmail />}
									url='sanyakl242@gmail.com'
								/>
							</Col>
							<Col xs='12'>
								<ContactItem
									name='Facebook'
									iconBackground='#2262b7'
									icon={<Facebook />}
									url='https://www.facebook.com/profile.php?id=100008712907494'
								/>
							</Col>
							<Col xs='12'>
								<ContactItem
									name='Linkedin'
									iconBackground='#213b82'
									icon={<Linkedin />}
									url='https://www.linkedin.com/in/alexander-klimik-38186a146/'
								/>
							</Col>
							<Col xs='12'>
								<ContactItem
									name='Github'
									iconBackground='#0d1110'
									icon={<Github />}
									url='https://github.com/AlexSanjoy'
								/>
							</Col>
						</Row>
					</Container>
				</section>
			</CSSTransitionGroup>
		)
	}
}

