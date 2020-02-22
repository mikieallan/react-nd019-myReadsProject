import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf';
import { Link } from 'react-router-dom'

class Bookshelf extends Component{
	render () {
		const { bookshelves, books, onMove } = this.props;

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						{bookshelves.map(shelf => (
							<Shelf
								key={shelf.key}
								shelf={shelf}
								books={books}
								onMove={onMove}
							/>
						))}
					</div>
				</div>
				<div className="open-search">
					<Link to="search">
						<button>Add a book</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Bookshelf;