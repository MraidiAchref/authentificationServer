require("dotenv").config();

const app = require("./app");
const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT_CLIENT || 3000;
const server = require("http").createServer(app);
server.listen(port, () => {
  console.log(`Auth Server started on port ${port}`);
});

module.exports = server;
