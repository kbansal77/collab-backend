const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const User = require('./api/models/user')
const College = require('./api/models/college')
const Post = require('./api/models/post')

const app = express();

const collegesRoute = require('./api/routes/colleges')
// console.log(process.env.MONGO_ATLAS_PWD)
mongoose.connect(
    "mongodb+srv://collab:" +
    process.env.MONGO_ATLAS_PWD +
    "@cluster0.qlblf.mongodb.net/collab?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/colleges",collegesRoute)

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
