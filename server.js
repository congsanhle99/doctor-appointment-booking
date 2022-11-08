const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("port", port));
console.log(process.env.MONGO_URL);
