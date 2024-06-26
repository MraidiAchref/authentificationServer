const express = require("express");
const animeController = require("./anime.controller");
const {errorWrapper} = require("../lib/error/errorWrapper");

const router = express.Router();

router.post("/create-anime", errorWrapper(animeController.create));

router.post("/delete-anime", errorWrapper(animeController.delete));

router.post("/update-anime", errorWrapper(animeController.update));

router.get("/read-anime/:uid", errorWrapper(animeController.read));

router.get("/readAll/:fromAnimeNumber/:toAnimeNumber", errorWrapper(animeController.readAll));

router.get("/countAnimes", errorWrapper(animeController.countAnimes));

router.get("/readAll-anime/:uid", errorWrapper(animeController.readAllByUid));




module.exports = router;
