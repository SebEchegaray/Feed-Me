const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/error_handler");
const usersController = require("./controllers/users_controller");


app.use(logger);
app.use(express.static("client"));
app.use(express.json());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users/", usersController);

app.use(errorHandler);
