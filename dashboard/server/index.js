require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const { logger, logEvents } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const dbConnect = require("./config/dbConnect");
const PORT = process.env.PORT || 5500;

const app = express();
dbConnect();

app.use(logger);
app.use(cors());
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", require("./routes/studentsRoute"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "/views/404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "Resource does not exist" });
  } else {
    res.type("text").send("Resource does not exist");
  }
});

app.use(errorHandler);

// create a listener for the db connection and error
mongoose.connection.once('open', () => {
  console.log("Successfully connected to mongoDB");
  app.listen(PORT, () => console.log("Server is listening on port " + PORT));
});

mongoose.connection.on('error', (err) => {
  console.log(err);
  logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoDBErrorLog.log');
});