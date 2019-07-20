// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar/Navbar";
import TitleCard from "./components/TitleCard/TitleCard";
import Searchbar from "./components/Searchbar/Searchbar";
import Searchresultcard from "./components/Searchresultcard/Searchresultcard";
import Savedresultcard from "./components/Savedresultcard/Savedresultcard";

const Book = () => <div>I'm one book</div>;
const Detail = () => <div>Details</div>;
const NoMatch = () => <div>No match! go back!</div>;

class Books extends React.Component {
  state = {
    books: []
  };

  render() {
    return <div>I am multiple books</div>;
  }
}

class SavedBooks extends React.Component {
  state = {
    saved: []
  };

  render() {
    return <div> I am some saved books</div>;
  }
}

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
            <Route exact path="/" component={Books} />
            <Route exact path="/book" component={Books} />
            <Route exact path="/savedbooks" component={SavedBooks} />
            <Route exact path="/books/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

// import React, { Component } from "react";
// import Jumbotron from "./components/Jumbotron";
// import Nav from "./components/Nav";
// import Input from "./components/Input";
// import Button from "./components/Button";
// import API from "./utils/API";
// import { RecipeList, RecipeListItem } from "./components/RecipeList";
// import { Container, Row, Col } from "./components/Grid";

// class App extends Component {
//   state = {
//     recipes: [],
//     recipeSearch: ""
//   };

//   handleInputChange = event => {
//     // Destructure the name and value properties off of event.target
//     // Update the appropriate state
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     // When the form is submitted, prevent its default behavior, get recipes update the recipes state
//     event.preventDefault();
//     API.getRecipes(this.state.recipeSearch)
//       .then(res => this.setState({ recipes: res.data }))
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <div>
//         <Nav />
//         <Jumbotron />
//         <Container>
//           <Row>
//             <Col size="md-12">
//               <form>
//                 <Container>
//                   <Row>
//                     <Col size="xs-9 sm-10">
//                       <Input
//                         name="recipeSearch"
//                         value={this.state.recipeSearch}
//                         onChange={this.handleInputChange}
//                         placeholder="Search For a Recipe"
//                       />
//                     </Col>
//                     <Col size="xs-3 sm-2">
//                       <Button
//                         onClick={this.handleFormSubmit}
//                         type="success"
//                         className="input-lg"
//                       >
//                         Search
//                       </Button>
//                     </Col>
//                   </Row>
//                 </Container>
//               </form>
//             </Col>
//           </Row>
//           <Row>
//             <Col size="xs-12">
//               {!this.state.recipes.length ? (
//                 <h1 className="text-center">No Recipes to Display</h1>
//               ) : (
//                 <RecipeList>
//                   {this.state.recipes.map(recipe => {
//                     return (
//                       <RecipeListItem
//                         key={recipe.title}
//                         title={recipe.title}
//                         href={recipe.href}
//                         ingredients={recipe.ingredients}
//                         thumbnail={recipe.thumbnail}
//                       />
//                     );
//                   })}
//                 </RecipeList>
//               )}
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// export default App;
