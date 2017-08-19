import React from 'react';

class Book extends React.Component{

  render(){
      const ret= <div className="book">
             <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks !== undefined? this.props.book.imageLinks.thumbnail:''})`}}></div>
                  <div className="book-shelf-changer">
                    <select value={this.props.book.shelf} onChange={(e) => this.props.onChangeBookshelf(this.props.book, e)}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
              <div className="book-title">{this.props.book.name}</div>
            <div className="book-authors">{this.props.book.authors}</div>
          </div>

    return ret;

  }
}

export default Book