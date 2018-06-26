import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowDownIcon from 'react-icons/lib/io/ios-arrow-down';
import ArrowUpIcon from 'react-icons/lib/io/ios-arrow-up';

export default class Accordion extends Component {
	state = {
		isOpen: false
	};

	handleClick = (e) => {
		const currentInnerBlock = e.target.nextSibling;
		this.setState({isOpen: !this.state.isOpen});
		currentInnerBlock.classList.toggle('active');
	};

	render() {
		return (
			<div className="accordion-item">
				<header className='accordion-item__outer' onClick={this.handleClick}>
					<div className='accordion-item__icon' style={{background: this.props.iconBackground}}>
						{this.props.icon}
					</div>
					<h3 className='accordion-item__name'>{this.props.name}</h3>
					<div className='accordion-item__arrow'>{this.state.isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</div>
				</header>
				<div className='accordion-item__inner'>
					{this.props.children}
				</div>
			</div>
		)
	}
}

Accordion.propTypes = {
	name: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	iconBackground: PropTypes.string,
	icon: PropTypes.object
};