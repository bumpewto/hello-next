//
//
//
// A transformer en React.Component ? 
//
//
//

const express = require('express');
const request = require('request'); //https://github.com/request/request-promise-native
// const bodyParser = require('body-parser'); inclus dans express
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));

app.post('/signup', (req, res) =>{
  const { email } = req.body;

  const data ={
    email_adress: email,
    status: subscribed
  }

  const postData = JSON.stringify(data);

  const options = {
    url: 'https://us17.api.mailchimp.com/3.0/lists/c437870873/members', // mailchimp api
    method: 'POST',
    headers:{
      Authorization: `auth ${API_KEY_MAILCHIMP}`
    },
    body: postData
  }

  request(options, (err, response, body) => {
    err ? (
      console.log('error:', err); //res.send('false') ou simplement false 
    ) : response.statusCode === 200 ? (
      console.log('Succeed !'); // res.send('true')
    ) : (
      console.log('error:', err); //res.send('POST request to the /signup')
    );
  })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Started on ${PORT}`)