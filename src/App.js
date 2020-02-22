import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Bookshelf from './Bookshelf'
import SearchBooks from './SearchBooks'

const bookshelves = [
  { key: 'currentlyReading', name: "Currently Reading"},
  { key: 'wantToRead', name: "Want to Read"},
  { key: 'read', name: "Read"},
];

class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    if (shelf === 'none') {
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id)
      }));
    }
    else{
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }));
    }
  }

  searchForBooks = query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({searchBooks: [] });
    }
  }

  resetSearch = () => {
    this.setState({searchBooks: []});
  }

  render() {
    const {books, searchBooks} = this.state

    return (

      <div className="app">
        <Route exact path='/' render={() => (
          <Bookshelf 
            bookshelves={bookshelves}
            books={books}
            onMove={this.moveBook}
          />
        )} />

        <Route 
          exact path ='/search' 
          render={() => (
            <SearchBooks
              searchBooks={searchBooks}
              books={books}
              onSearch={this.searchForBooks}
              onMove={this.moveBook}
              onResetSearch={this.resetSearch}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
