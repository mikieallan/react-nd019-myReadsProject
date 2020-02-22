import React from 'react'
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = props => {
	const { shelf, books, onMove } = props

	const booksInThisList = books.filter(book => book.shelf === shelf.key);
	
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelf.name}</h2>
			<div className="bookshelf-books">
				{booksInThisList.length === 0 ? <h3>No books in {shelf.name} list</h3> :
					<ol className="books-grid">
						{booksInThisList.map(book => (
							<Book key={book.id} book={book} shelf={shelf.key} onMove={onMove}/>
						))}
					</ol>
				}	
			</div>
		</div>
	);
};

export default Shelf;