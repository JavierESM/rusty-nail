const express = require("express");
let homeController = require("../controllers/homeController");
const router = express.Router();

router.get("/", homeController.view);

module.exports = router;
