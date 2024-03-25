const express = require("express");
const usersController = require("./users.controller");
const { errorWrapper } = require("../lib/errorHandler");
const {
  authRefreshToken,
  authenticateRefreshToken,
  authenticateToken,
} = require("../lib/jwt.js");

const router = express.Router();

router.post("/signUp", errorWrapper(usersController.signUp));

router.post("/signIn", errorWrapper(usersController.signIn));

router.post( "/updateUser", authenticateToken, errorWrapper(usersController.udpateUser));

router.post("/refreshToken", authRefreshToken, errorWrapper(usersController.refreshToken));

module.exports = router;
