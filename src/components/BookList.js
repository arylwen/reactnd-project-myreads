import React from 'react';
import Bookshelf from './Bookshelf';

class BookList extends React.Component{
    render(){
        const currentlyReading = this.props.books.filter(book => book.shelf === 'currentlyReading');
        const wantToRead = this.props.books.filter(book => book.shelf === 'wantToRead');
        const read = this.props.books.filter(book => book.shelf === 'read');
            
        return (
          <div className="app">
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Bookshelf title="Currently Reading" books={currentlyReading} onChangeBookshelf={this.props.onChangeBookshelf}/>
                  <Bookshelf title="Want to Read" books={wantToRead} onChangeBookshelf={this.props.onChangeBookshelf}/>
                  <Bookshelf title="Read" books={read} onChangeBookshelf={this.props.onChangeBookshelf}/>
                </div>
              </div>
            </div>  
          </div>                
        )
    }
}

export default BookList