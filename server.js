const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan")

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitness-tracker-oct2021',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

  app.use(express.static("public"));

  app.use(logger("dev"));

  app.use(require("./routes/html-routes"))
  app.use(require("./routes/api-routes"))

  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });