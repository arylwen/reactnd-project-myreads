import React from 'react';
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class BookSearch extends React.Component{
  state = {
    query: ''
  }

  performSearch = (query) => {
    if(query){
      this.setState({query})
      this.props.onSearchBooks(query)
    }else{
      this.setState({query:''})
    }
  }

  render(){
    const {query} = this.state;  
    //do not display anything for an empty query
    let searchResults = (query === "")?[]:this.props.books;
    return(
        <div className="app">
          <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className='close-search'>Close</Link>
              <div className="search-books-input-wrapper">
                <input
                      type="text"
                      placeholder="Search books"
                      value={query}
                      onChange={(event) => this.performSearch(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <Bookshelf 
                title="Add a book..." 
                books={searchResults} 
                onChangeBookshelf={this.props.onChangeBookshelf}
              />           
            </div>
          </div>
        </div>
      )
    }
}

export default BookSearch