// Imports

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

// const formRouter = require("./gateway.routes");
// const ssrRouter = require("./gateway.routes");

const app = express();

// Middlewares

app.use(bodyParser.json());

app.post("/signup", (req, res) => {
  console.log(req.body);

  const { email } = req.body;

  let data = {
    email_address: email,
    status: "subscribed"
  };

  // const postData = JSON.stringify(data);

  const options = {
    url: "https://us17.api.mailchimp.com/3.0/lists/c437870873/members",
    method: "POST",
    headers: {
      Authorization: `apikey ${process.env.API_KEY_MAILCHIMP}`,
      "Content-Type": "application/json"
    },
    body: data,
    json: true
  };
  console.log(options);

  request(options, (err, response) => {
    err
      ? console.log(err)
      : response.statusCode === 200
      ? res.sendStatus(response.statusCode)
      : console.log(response.body);
  });
});

app.use("/", (req, res) => {
  const query = async (req, res) => {
    try {
      await req
        .pipe(request(`http://localhost:8000${req.url}`))
        .on("error", er => console.log(er))
        .pipe(res);
    } catch (err) {
      console.log(err);
    }
  };
  query(req, res);
});

module.exports = app;
