import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults'

class SearchBooks extends Component{
	render() {
		const {searchBooks, books, onSearch, onResetSearch, onMove} = this.props;

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/">
						<button className="close-search" onClick={onResetSearch}>
							Close
						</button>
					</Link>
					<SearchInput onSearch={onSearch} />
				</div>
				<SearchResults
					searchBooks={searchBooks}
					books={books}
					onMove={onMove}
				/>
			</div>
		);
	}
}

export default SearchBooks;