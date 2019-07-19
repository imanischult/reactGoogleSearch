// const path = require("path");
// const router = require("express").Router();
// const apiRoutes = require("./api");

// // API Routes
// router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// module.exports = router;

const axios = require("axios");
const router = require("express").Router();

router.get("/recipes", (req, res) => {
  axios
    .get("http://www.recipepuppy.com/api/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;

// api key = AIzaSyC0HPX0jRmvf9CebHxxi1Syghmn8Yqo9Dk
// https://www.googleapis.com/books/v1/volumes?q=barackobama&key=AIzaSyC0HPX0jRmvf9CebHxxi1Syghmn8Yqo9Dk
