/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import BookShelf from './BookShelf'

class BookList extends Component {

  render() {
    const { books } = this.props
    if (Object.keys(books).length === 0)
      return '' // TODO: improve me! something like a 'Empty Shelves, add some books?'

    // TODO optimize me by doing a simple for loop instead
    const currentlyReading = books.filter((b) => (b.shelf === 'currentlyReading'))
    const read = books.filter((b) => (b.shelf === 'read'))
    const wantToRead = books.filter((b) => (b.shelf === 'wantToRead'))

    return (
      <div className="list-books-content">
        <div>
          <BookShelf title='Currently Reading' books={currentlyReading} />
          <BookShelf title='Read' books={read} />
          <BookShelf title='Want to Read' books={wantToRead} />
        </div>
      </div>
    );
  }
}

export default BookList;
