const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const helmet = require("helmet");

const port = parseInt(process.env.PORT, 10) || 8000;
const dev = process.env.NODE_ENV !== "production";

const app = express();

app.use(helmet());
app.use(bodyParser.json());

app.post("/signup", (req, res) => {
  console.log(req.body);

  const { email } = req.body;

  let data = {
    email_address: email,
    status: "subscribed"
  };

  const options = {
    url: "https://us17.api.mailchimp.com/3.0/lists/c437870873/members",
    method: "POST",
    headers: {
      Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: data,
    json: true
  };
  console.log(options);
  const query = async (req, res) => {
    try {
      await request(req, (err, response) => {
        err ? console.log(err) : res.sendStatus(response.statusCode);
      });
    } catch (err) {
      console.log(err);
    }
  };
  query(options, res);
});

if (dev)
  app.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });

module.exports = app;
