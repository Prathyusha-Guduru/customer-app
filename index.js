const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.listen(3000, () => {
  console.log("server sstarted on port 3000");
});
