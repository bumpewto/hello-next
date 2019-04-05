const request = require("request");

function addSubscriber(req, res) {
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

  request(options, (err, response, body) => {
    err
      ? res.send(false) //res.send('false') ou simplement false
      : response.statusCode === 200
      ? res.send(true) // console.log("Succeed !")
      : res.send(false); //res.send('POST query to the /signup')
  });
}

function getPage(req, res) {
  const query = async (req, res) => {
    try {
      await console.log(req.url);
      await req.pipe(request(`http://localhost:3001${req.url}`)).pipe(res);
    } catch (err) {
      console.log(err);
    }
  };
  query(req, res);
}

module.exports = () => {
  addSubscriber(), getPage();
};
