/**
 * Node dependencies.
 * **/
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

/**
 * Internal Application dependencies.
 * **/
const cors = require('./app/filters/app.filter.cors');
const userRoutes = require('./app/routes/app.route.user');
const admin = require('./modules/admin/admin.js');

/**
 * Constants for the app.
 * **/
const API_Port = 8086;
const dbUrl = 'mongodb://localhost:27017/';

/**
 * Establishing initial connection with the Mongo DB.
 * **/
mongoose.connect(dbUrl,()=>{
  console.log('Mongo DB connected.');
});

app.use(cors);              // CORS filter.
app.use(bodyParser.json()); // Support json encoded bodies

app.use(bodyParser.urlencoded({
  extended: true
}));                        // Support url encoded bodies
app.use('/mass/user', userRoutes);

/**
 * Configuration for the application port.
 * **/
app.listen(API_Port, () => {
  console.log(`Listening to port -> ${API_Port}`)
});