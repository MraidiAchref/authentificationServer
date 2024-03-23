const express = require("express");
const usersController = require("./users.controller");
const {errorWrapper} = require('../lib/errorHandler') ;


const router = express.Router();

router.post("/signUp", errorWrapper(usersController.signUp));

router.post('/signIn',errorWrapper(usersController.signIn) );

router.post('/udpateUser',errorWrapper(usersController.udpateUser) );


module.exports = router;
