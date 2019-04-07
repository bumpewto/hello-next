const express = require("express");

const ssrRouter = express.Router();
const formRouter = express.Router();

const { addSubscriber } = require("./gateway.controllers");
const getPage = require("./gateway.controllers");

// Form

// formRouter.post("*", addSubscriber);

// SSR

ssrRouter.get("*", getPage);

module.exports = () => {
  formRouter, ssrRouter;
};
