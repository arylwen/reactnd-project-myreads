import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './components/BookList'

class BooksApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      books: [],
      searchResults: []
    }
    this.changeBookshelf = this.changeBookshelf.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  changeBookshelf(book, event) {
    const shelf = event.target.value;
    console.log("change bookshelf called");
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          searchResults: state.books.filter(b => b.id !== book.id).concat([book])
        }))
      })
    }
  }

  render() {
    return(
      <BookList books={this.state.books} onChangeBookshelf={this.changeBookshelf}/>
    )
  }
}

export default BooksApp