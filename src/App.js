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

  componentDidMount() {
    BooksAPI.getAll().then((result) =>
      this.setState( () => ({books: result}))
      )
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => <Search />} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookList books={this.state.books}/>
            <div className="open-search">
              <Link to='/search'>
                <button>Add a book</button>
            </Link>
            </div>
          </div>
        )} />
    </div>
    )}
}

export default BooksApp
