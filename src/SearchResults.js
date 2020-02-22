import React from 'react'
import Book from './Book'

const SearchResults = props => {
	const {searchBooks, books, onMove } = props;
	
	// TO DO - error handling when search books return empty query

	const currentBooks = searchBooks.map(book => {
		books.map(b => {
			if(b.id === book.id) {
				book.shelf = b.shelf;
			}
			return b;
		});
		return book;
	});

	return (
		<div className="search-books-results">
			<ol className="books-grid">
				{console.log(currentBooks)}
				{currentBooks.length === 0 ? <h2>None found</h2> :
					currentBooks.map(book => (
						<Book
							key={book.id}
							book={book}
							shelf={book.shelf ? book.shelf : 'none'}
							onMove={onMove}
						/>
					))}
			</ol>
		</div>
	);
}

export default SearchResults;