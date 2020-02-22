import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookshelfChanger extends Component{
	state = {
		shelf: this.props.shelf
	};

	handleChange = event => {
		const { value } = event.target;
		this.setState({value});
		this.props.onMove(this.props.book, value);
	};

	render () {
		return (
			<div className='book-shelf-changer'>
				<select value={this.state.shelf} onChange={this.handleChange}>
					<option value="Move" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</ select>
			</div>
		);
	}
}

export default BookshelfChanger;