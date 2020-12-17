import React, { Component } from 'react';

class ShelfChanger extends Component {

  changeShelf = (event) => {
    this.props.updateBook(this.props.book, event.target.value)
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.props.selected} onChange={(event) => this.changeShelf(event)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
