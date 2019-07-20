import React from "react";
import Axios from "axios";

class Search extends React.Component {
  state = {
    books: [],
    query: ""
  };

  handleInputChange = event => {
    this.setState({ query: event.target.value });
  };

  fetchbooks = e => {
    e.preventDefault();

    Axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}`
    )
      .then(res => {
        this.setState({
          books: res.data.items
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  saveBook = book => {
    Axios.post("/api/books", {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumInfo.imageLinks.thumbnail,
      link: book.volumeInfo.previewLink
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.fetchbooks}>
          <label htmlFor="search">Search</label>
          <input id="search" type="text" onChange={this.handleInputChange} />
          <button type="submit">Search</button>
        </form>

        <hr />

        {this.state.books.map(result => {
          return (
            <div key={result.id}>
              <h2>{result.volumInfo.title}</h2>
              {result.volumeInfo.authors &&
                result.volumInfo.authors.map(author => {
                  return <p key={author}>{author}</p>;
                })}
              <p>{result.volumeInfo.description}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={result.volumInfo.previewLink}
              >
                View
              </a>
              <button onClick={() => this.saveBook(result)}>Save</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Search;
