// import express mongoos and morgan

const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
// set mongodb URI with workout DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

// set default port 3000
const PORT = process.env.PORT || 3000;

const app = express();
// get dev logger
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use static folder as public
app.use(express.static("public"));
//connect to mongo DB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// import all routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}!`);
});

