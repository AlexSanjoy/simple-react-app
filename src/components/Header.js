import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Container,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem
} from 'reactstrap';

export default class Header extends Component {
	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	};

	render() {
		return (
			<header>
				<Navbar dark expand="md">
					<Container>
						<NavbarBrand href="/">
							<div className="nav-icon">AK</div>
							Alexander Klimik
						</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<Link to="/">How it works</Link>
								</NavItem>
								<NavItem>
									<Link to="/calendar">Calendar</Link>
								</NavItem>
								<NavItem>
									<Link to="/contacts">Contact us</Link>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</header>
		)
	}
}