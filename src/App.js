import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import Search from './Search'
import { Route, Link } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {this.updateAllBooks()})
  }

  updateAllBooks = () => {
    BooksAPI.getAll()
      .then((result) => this.setState( () => ({books: result})))
  }

  componentDidMount() {
    this.updateAllBooks()
  }

  // Used to populate BookList
  // [key, value] where key=shelf, value=[books]
  getBooksByShelves = (books) => {
    return {
      'currentlyReading' : books.filter((b) => (b.shelf === 'currentlyReading')),
      'read' : books.filter((b) => (b.shelf === 'read')),
      'wantToRead' : books.filter((b) => (b.shelf === 'wantToRead')),
    }
  }

  // Used as props to Search -- helps ShelfChanger its 'selected' value
  // [key, value] where key=shelf, value=[books]
  getBooksById = (books) => {
    let ret = {}
    books.map((book) => ret[book.id] = book)
    return ret
  }

  render() {
    const booksByShelves = this.getBooksByShelves(this.state.books)
    const booksById = this.getBooksById(this.state.books)

    return (
      <div className="app">
        <Route exact path='/search' render={() =>
          <Search booksById={booksById} updateBook={(book, shelf) => this.updateBook(book, shelf)} />}
        />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookList shelves={booksByShelves} updateBook={(book, shelf) => this.updateBook(book, shelf)}/>
            <div className="open-search">
              <Link to='/search'>
                <button>Add a book</button>
            </Link>
            </div>
          </div>)}
        />
    </div>
    )}
}

export default BooksApp
