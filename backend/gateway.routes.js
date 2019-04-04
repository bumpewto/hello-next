const express = require("express");
const fetch = require("isomorphic-unfetch");

const ssrRouter = express.Router();
const formRouter = express.Router();

// Form

formRouter.post("/signup", (req, res) => {
  const { email } = req.body;

  const data = {
    email_adress: email,
    status: subscribed
  };

  const postData = JSON.stringify(data);

  const options = {
    url: "https://us17.api.mailchimp.com/3.0/lists/c437870873/members", // mailchimp api
    method: "POST",
    headers: {
      Authorization: `auth ${API_KEY_MAILCHIMP}`
    },
    body: postData
  };

  fetch(options, (err, response, body) => {
    err
      ? res.send(false) //res.send('false') ou simplement false
      : response.statusCode === 200
      ? res.send(true) // console.log("Succeed !")
      : res.send(false); //res.send('POST query to the /signup')
  });
});

// SSR

ssrRouter.get("*", (req, res) => {
  res.redirect("../frontend/server.js");
  // const request = async () => {
  //   const response = await fetch("../frontend/server.js", req);
  //   res.send(response);
  // };

  // request();
});

module.exports = formRouter;
module.exports = ssrRouter;
