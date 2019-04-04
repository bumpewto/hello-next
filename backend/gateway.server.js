// const express = require("express");
// const fetch = require("isomorphic-unfetch");
// const bodyParser = require("body-parser");
// const path = require("path");

const app = require("./gateway.app");

// Init server

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${PORT}`);
});
