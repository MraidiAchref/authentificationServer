const express = require("express");
const cors = require('cors');


const app = express();

const config = require("./database/authDB");
config();

app.use(cors());


app.use(express.json());

app.use('/users', require('./src/users/users.routes'));

module.exports = app;
