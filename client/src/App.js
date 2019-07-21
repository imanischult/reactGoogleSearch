import React, { Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Searchresult from "./components/Searchresult/Searchresult";

import Savedresult from "./components/Savedresult/Savedresult";


class App extends Component {
  render() {
  return (
      <Router>
      <nav>
      <ul>
        <li className="">Google Books</li>
        <li className="">
          <Link to="/">Search</Link>
        </li>
        <li className="">
          <Link to="/books">Saved</Link>
        </li>
      </ul>
      </nav>
        <div>
          <h1>Google Books Search with React</h1>
          <p> Search and Save Books of Interest</p>
          </div>
            <Route exact path="/" component={Searchresult} />
            <Route exact path="/search" component={Searchresult} />
            <Route exact path="/books" component={Savedresult} />
      </Router>
   );
  }
}

export default App;
