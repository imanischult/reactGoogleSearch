import React, { Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import TitleCard from "./components/TitleCard/TitleCard";
import Searchbar from "./components/Searchbar/Searchbar";
// import Searchresultcard from "./components/Searchresultcard/Searchresultcard";
import Savedresultcard from "./components/Savedresultcard/Savedresultcard";


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
            <Route exact path="/" component={Searchbar} />
            <Route exact path="/search" component={Searchbar} />
            <Route exact path="/saved" component={Savedresultcard} />
      </Router>
   );
  }
}

export default App;
