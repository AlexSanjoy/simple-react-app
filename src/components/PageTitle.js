import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PageTitle extends Component {
	render() {
		return (
			<h1 className='page-title'>{this.props.title}</h1>
		)
	}
}

PageTitle.propTypes = {
	title: PropTypes.string.isRequired
}