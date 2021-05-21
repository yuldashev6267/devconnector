const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
const profileRouter = require("./routes/profileRouter");

app.use(express.json());

app.use((req, res, next) => {
  //to allow cross domain requests to send cookie information.
  res.header("Access-Control-Allow-Credentials", true);

  // origin can not be '*' when crendentials are enabled. so need to set it to the request origin
  res.header("Access-Control-Allow-Origin", req.headers.origin);

  // list of methods that are supported by the server
  res.header("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE");

  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,authorization"
  );
  next();
});
app.use("/api", userRouter);
app.use("/api", profileRouter);
module.exports = app;
