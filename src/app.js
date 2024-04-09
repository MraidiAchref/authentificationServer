const express = require("express");
const cors = require('cors');


const app = express();

const config = require("../database/authDB");
config();

const corsOptions = {
    origin: 'http://127.0.0.1:8000', 
    credentials: true
  };
app.use(cors(corsOptions));


app.use(express.json());

app.use('/users', require('./users/users.routes'));

module.exports = app;
