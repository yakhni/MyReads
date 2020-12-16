import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger'


class Book extends Component {
  render() {
    const book = this.props.book
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
          <ShelfChanger />
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors.map((author) => (
          <div className="book-authors" key={author}>
            {author}
          </div>
        ))}
      </div>
    );
  }
}

export default Book;
