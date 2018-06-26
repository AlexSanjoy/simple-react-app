import React, { Component } from 'react';
import ArrowRight from 'react-icons/lib/io/ios-arrow-right'
import PropTypes from "prop-types";

export default class ContactItem extends Component {
	render() {
		return (
			<div className='contact-item'>
				<div className='contact-item__icon' style={{background: this.props.iconBackground}}>
					{this.props.icon}
				</div>
				<h3 className='contact-item__name'>{this.props.name}</h3>
				<div className='contact-item__btn'>
					<a href={
						this.props.url.indexOf('@') !== -1 ? `mailto: ${this.props.url}` : this.props.url
					} target='_blank'>
						{this.props.btnText ? this.props.btnText : 'Visit page'}
						<ArrowRight className='contact-item__arrow' />
					</a>
				</div>
			</div>
		)
	}
}

ContactItem.propTypes = {
	name: PropTypes.string.isRequired,
	btnText: PropTypes.string,
	iconBackground: PropTypes.string,
	icon: PropTypes.object,
	url: PropTypes.string.isRequired
};