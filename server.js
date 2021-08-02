const express = require("express");
const app = express();
const session = require('express-session');
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/error_handler");
const usersController = require("./controllers/users_controller");
const sessionsController = require('./controllers/sessions_controller')

const sess = {
    secret : process.env.SESSION_SECRET || "secret",
    cookie : {}
}

<<<<<<< HEAD
app.use(logger);
app.use(express.static("client"));
app.use(express.json());
app.use(session(sess));

=======
>>>>>>> 06b096016b7819f618079415ccde5fbf12a09be7
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.use(logger);
app.use(express.json());
app.use(express.static("client"));

app.get("/", (req, res) => {
  res.send("Hello World!")
});

app.use("/api/users/", usersController);
app.use("/api/sessions/", sessionsController);


app.use(errorHandler);