const express = require("express");
const fetch = require("isomorphic-unfetch");
const request = require("request");

const ssrRouter = express.Router();
const formRouter = express.Router();

const addSubscriber = require("./gateway.controllers");
const getPage = require("./gateway.controllers");

// Form

formRouter.post("/signup", (req, res) => addSubscriber(req, res));

// SSR

ssrRouter.get("*", (req, res) => {
  const query = async (req, res) => {
    try {
      await console.log(req.url);
      await req
        .pipe(
          // fetch(`http://localhost:3001/${req.url}`, {
          //   method: req.method,
          //   headers: req.headers
          // })
          request(`http://localhost:3001${req.url}`)
        )
        .pipe(res);
    } catch (err) {
      console.log(err);
    }
  };

  query(req, res);
});

module.exports = () => {
  formRouter, ssrRouter;
};
