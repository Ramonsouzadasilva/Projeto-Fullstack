const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const router = require("./src/router/routes");

app.use(express.json());
app.use(cors());
app.use(router);
app.use(morgan("dev"));

module.exports = app;
