import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger'


class Book extends Component {
  render() {
    const { book, updateBook, shelf } = this.props;

    let url = '#'
    try {
      url = book.imageLinks.thumbnail ;
    } catch (error) {
      // NOTE: if I search for 'b', BooksAPI returns a book without a thumbnail
      // There's no need to do anything about it, since CSS already creates an empty border for us
    }

    let authors = book.authors
    if (authors === undefined)
      authors = ['Unknown']

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${url}")` }}></div>
          <ShelfChanger book={book} selected={shelf} updateBook={updateBook} />
        </div>
        <div className="book-title">{book.title}</div>
        {authors.map((author) => (
          <div className="book-authors" key={author}>
            {author}
          </div>
        ))}
      </div>
    );
  }
}

export default Book;
