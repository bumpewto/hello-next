// Imports

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const formRouter = require("./gateway.routes");
const ssrRouter = require("./gateway.routes");

const app = express();

// Middlewares

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/form", formRouter);
app.use("/", ssrRouter);

module.exports = app;
