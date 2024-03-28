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

router.get("/refreshToken", authenticateRefreshToken, errorWrapper(usersController.refreshToken));

router.post("/forgotPassword", errorWrapper(usersController.forgotPassword));

router.patch("/resetPassword/", errorWrapper(usersController.resetPassword));


module.exports = router;
