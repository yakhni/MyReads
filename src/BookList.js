/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import BookShelf from './BookShelf'

class BookList extends Component {

  heading = {
   'read': 'Read',
   'currentlyReading': 'Currently Reading' ,
   'wantToRead': 'Want to Read',
  }

  render() {
    const { shelves, updateBook } = this.props

    return (
      <div className="list-books-content">
        <div>
          {Object.keys(shelves).map((shelf) => (
            <BookShelf
              key={shelf}
              title={this.heading[shelf]}
              books={shelves[shelf]}
              updateBook={updateBook}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BookList;
