import React, { Component } from "react";
import axios from "axios";

class Saved extends Component {
  state = {
    saved: []
  };

  componentDidMount() {
    console.log("it is mounted");
    this.fetchSaved();
  }

  fetchSaved = () => {
    axios.get("/api/books").then(res => {
      this.setState({ saved: res.data });
    });
  };

  render() {
    return (
      <div>
        <p> Saved Books </p>
        {this.state.saved.map(book => {
          return <div key={book._id}>{book.title}</div>;
        })}
      </div>
    );
  }
}

export default Saved;
