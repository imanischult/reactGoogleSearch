import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getRecipes: function(query) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyC0HPX0jRmvf9CebHxxi1Syghmn8Yqo9Dk`
    );
  }
};
