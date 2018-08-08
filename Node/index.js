/**
 * Node dependencies.
 * **/
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

/**
 * Internal Application dependencies.
 * **/
// const cors = require('./app/filters/app.filter.cors');
const userRoutes = require('./app/routes/app.route.user');
const admin = require('./modules/admin/admin.js');
const cleanRoute = require('./app/routes/app.route.clean');
const googleRoutes = require('./app/routes/app.route.googleAuth')

/**
 * Constants for the app.
 * **/
const API_Port = 8086;

/**
 * Establishing initial connection with the Mongo DB.
 * **/
try {
  mongoose.connect('mongodb://ds115592.mlab.com:15592/mass_db', {
    auth: {
      user: 'richard_admin@uritsolutions',
      password: 'jesus7734'
    },
    useNewUrlParser: true
  }, (error) => {

    if (error) {
      console.log(error);
      console.log('=======================>>>>>> DB CONNECTION FAILED  <<<<<==========================');
      process.exit(1);
    }

    console.log('DB Connection success.');
  });
} catch (error) {
  console.log(error);
  console.log('=======================>>>>>> DB CONNECTION FAILED  <<<<<==========================');
  process.exit(1);
}

/**
 * Middlewares.
 * **/
app.use(cors());              // CORS filter.
app.use(bodyParser.json()); // Support json encoded bodies

app.use(bodyParser.urlencoded({
  extended: true
}));

/**
 * Routes.
 * **/
app.use('/mass/user', userRoutes);
app.use('/mass/clean', cleanRoute);
app.use('/', googleRoutes);

/**
 * Configuration for the application port.
 * **/
app.listen(API_Port, () => {
  console.log(`Listening to port -> ${API_Port}`)
});