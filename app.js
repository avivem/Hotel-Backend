//Use express as our minimal web server.
const express = require('express');
//Use morgan to log requests to console.
const logger = require('morgan');
//Use body-parser to parse requests and pass to morgan
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//Load our routes into app.
require('./server/routes')(app);

module.exports = app;