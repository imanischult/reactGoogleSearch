// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Navbar from "./Components/Navbar/Navbar";
import TitleCard from "./Components/TitleCard/TitleCard";
import Searchbar from "./Components/Searchbar/Searchbar";
import Searchresultcard from "./Components/Searchresultcard/Searchresultcard";
import Savedresultcard from "./Components/Savedresultcard/Savedresultcard";

const Book = () => <div>I'm one book</div>;
const Books = () => <div>I am multiple books</div>;
const Detail = () => <div>Details</div>;
const NoMatch = () => <div>No match! go back!</div>;

function App() {
  return (
    <div>
      <Navbar />
      <TitleCard />
      <Searchbar />
      <Searchresultcard />
      <Savedresultcard />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Book} />
            <Route exact path="/book" component={Book} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
