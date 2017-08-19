import React from 'react';
import Book from './Book';

class Bookshelf extends React.Component{
  render(){
    const books = this.props.books;
    const onChangeBookshelf = this.props.onChangeBookshelf;

    return(  <div className="bookshelf">
    <h2 className="bookshelf-title">{this.props.title}</h2>
    <div className="bookshelf-books">
    <ol className="books-grid">
        {books.map( book => (
          <li key={book.id}> 
            <Book book={book} onChangeBookshelf={onChangeBookshelf}/> 
          </li>
        ))}
    </ol>
    </div>
    </div>
    )
  }
}

export default Bookshelf