import React from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger';

const Book = ({book, shelf, onMove}) => (
	<li>
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 193,
						backgroundImage: `	url(${
							book.imageLinks
							? book.imageLinks.thumbnail
							: console.log("error, no image found")
						})`
					}}
				/>
				<BookshelfChanger book={book} shelf={shelf} onMove={onMove} />
			</div>
			<div className="book-title">{book.title}</div>
			<div className="book-authors">
				{book.authors ? book.authors.join(',') : 'Unknown Author'}
			</div>
		</div>
	</li>
);

export default Book