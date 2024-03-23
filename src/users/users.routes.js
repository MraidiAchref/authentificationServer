const express = require("express");
const usersController = require("./users.controller");

const router = express.Router();

router.post("/signUp", usersController.signUp);

router.post('/signIn',usersController.signIn );


module.exports = router;
