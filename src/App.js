import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './components/BookList'
import BookSearch from './components/BookSearch'

class BooksApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      books: [],
      searchResults: []
    }
    this.changeBookshelf = this.changeBookshelf.bind(this);
    this.searchBooks = this.searchBooks.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  changeBookshelf(book, event) {
    const shelf = event.target.value;
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          //this will add the book if it does not exist and avoid duplicates
          books: state.books.filter(b => b.id !== book.id).concat([book])
        }))
      })
    }
  }

  searchBooks(query){
    BooksAPI.search(query, 20).then((showingBooks) =>{
        if(showingBooks.error === undefined){
          this.setState(state => ({
            searchResults: 
                //map the state for the books already on bookshelves
                showingBooks.map((book) => {
                  const onTheShelfBook = state.books.filter(b => b.id === book.id)[0];
                  book.shelf = onTheShelfBook?onTheShelfBook.shelf:"none"; 
                  return book
                })
            }))
        }
    })
  }

  render() {
    return(
      <div>
        <Route exact path="/" render={() => (
          <BookList 
            books={this.state.books} 
            onChangeBookshelf={this.changeBookshelf}
          />
        )}/>
        <Route path="/search" render={() => (
          <BookSearch 
            books={this.state.searchResults} 
            onChangeBookshelf={this.changeBookshelf} 
            onSearchBooks={this.searchBooks} 
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp