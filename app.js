const express = require("express");

const app = express();
app.use(express.json());

const config = require("./database/authDB");
config();

module.exports = app;
