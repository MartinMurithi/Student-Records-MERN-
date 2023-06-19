const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const { logger } = require("./middleware/logger");
const PORT = process.env.PORT || 5500;
require("dotenv").config();

const app = express();
mongoose.connect(process.env.MONGODB_CONNECTION_URI);

app.use(logger);
app.use(cors());
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", require("./routes/router"));

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

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
