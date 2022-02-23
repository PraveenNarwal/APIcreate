const express = require("express");
const request = require("request-promise");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
