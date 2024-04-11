/* eslint func-names: "off" */
require('dotenv').config();
const mongoose = require('mongoose');

module.exports = function () {
  
  const mongoConnectionLinkAuthDB = process.env.MONGODB_URL_AUTH_DB;
  const mongoConnectionLinkAnimeDB = process.env.MONGODB_URL_ANIME_DB;

  // Connect to the authentication database
  const connectionAuthDB = mongoose.createConnection(
    mongoConnectionLinkAuthDB ,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  connectionAuthDB.once('open', () => {
    console.log(`Connected to MongoDB AUTH [CLIENT ENVIRONMENT]: ${process.env.NODE_ENV}`);
  }).on('error', (error) => {
    console.log('Connection error to MongoDB AUTH:', error);
  });

  //Connect to the anime database
  const connectionAnimeDB = mongoose.createConnection(mongoConnectionLinkAnimeDB,{ useNewUrlParser: true, useUnifiedTopology: true });
  connectionAnimeDB.once('open', () => {
    console.log(`Connected to MongoDB ANIME [CLIENT ENVIRONMENT]: ${process.env.NODE_ENV}`);
  }).on('error', (error) => {
    console.log('Connection error to MongoDB ANIME:', error);
  });
  
};