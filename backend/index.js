const express = require("express")
// const bodyParser = require("body-parser");
const mongoose = require("mongoose")
// const cors = require("cors");
// const isAuthorized = require("./middleware/auth");
require("dotenv").config()

// set up express app
const app = express()

// connect to mongoDB
// mongoose.connect(
//   "mongodb+srv://apiuser:sascha5262@themovielib-7zind.mongodb.net/themovielib?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
//   }
// );
// mongoose.Promise = global.Promise;

// app.use(cors());
// app.use(express.static("public"));
// app.use("/uploads/", express.static("uploads"));
// app.use(bodyParser.json())

// routes
// app.use("/users", require("./routes/users"));
// app.use("/movie", require("./routes/movie"));
// app.use("/lib", require("./routes/library"));
app.use("/tmdb", require("./routes/tmdb"))

// error handling middleware
app.use((err, req, res, next) => {
  res.status(400).send({
    error: err.message,
  })
})

// port
const port = process.env.PORT || 4000
// listen for requests
app.listen(port, function () {
  console.log(`Server now listening on port ${port}`)
})
