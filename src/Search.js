import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book'
import {DebounceInput} from 'react-debounce-input';
import * as BooksAPI from './BooksAPI'

class Search extends Component {
  state = {
    search: '', // the search query that's typed in the search bar
    books:  [], // The books returned as a result of the query
  }

  componentDidMount() {
    this.searchInput.focus();
  }

  updateSearch = (q) => {
    if (!q) {
      this.setState({search: q, books: []})
      return
    }

    BooksAPI.search(q.trim()).then((result) => {
      !result || result.error ? this.setState({search: q, books: []})
                              : this.setState({search: q, books: result})
    })
  }

  render() {
    const { search, books } = this.state;
    const { booksById, updateBook} = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/* Use DebounceInput for a smoother search experience  */}
            <DebounceInput
              placeholder='Search by Title or Author'
              inputRef={(input) => { this.searchInput = input; }}
              minLength={0}
              debounceTimeout={400}
              value={search} onChange={(event) => this.updateSearch(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((b) => (
              <li key={b.id}>
                <Book book={b} updateBook={updateBook}
                      shelf={(Object.keys(booksById).includes(b.id)) ? booksById[b.id].shelf : 'none'}  />
              </li>
            ))}
          </ol>
        </div>
      </div>
      );
    }
}

export default Search;
