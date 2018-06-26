import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PageTitle from '../components/PageTitle'
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Calendar extends Component {
	state = {
		startDate: null,
		endDate: null,
		focusedInput: 'startDate',
		test: '',
		range: null,
		numberOfMonths: 2
	};

	componentDidMount() {
		if (window.matchMedia("(max-width: 767px)").matches) {
			this.setState({numberOfMonths: 1})
		}
	};

	dateChange = ({startDate, endDate}) => {
		this.setState({startDate, endDate});

		if (startDate && endDate) {
			const firstDate = startDate.toDate().getTime();
			const secondDate = endDate.toDate().getTime();
			const range = Math.ceil(Math.abs(firstDate - secondDate) / (1000 * 3600 * 24));

			this.setState({range: range});
		}
	};

	render() {
		return (
			<CSSTransitionGroup
				transitionName="fade"
				transitionAppear={true}
				transitionAppearTimeout={200}
				transitionEnter={false}
				transitionLeave={false}>
				<section className='calendar'>
					<Container className='md'>
						<Row>
							<Col xs='12'>
								<PageTitle title='Calendar' />
							</Col>
							<Col xs='12'>
								<DateRangePicker
									keepOpenOnDateSelect
									numberOfMonths={this.state.numberOfMonths}
									startDate={this.state.startDate}
									startDateId="startDate"
									endDate={this.state.endDate}
									endDateId="endDate"
									onDatesChange={this.dateChange}
									focusedInput={this.state.focusedInput}
									onFocusChange={focusedInput => this.setState({focusedInput})}
								/>
								<div className='range'>
									<p className='range__text'>Days</p>
									<p className='range__number'>{this.state.range ? this.state.range : '--:--'}</p>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</CSSTransitionGroup>

		)
	}
}