const express = require("express");
let menuControllers = require("../controllers/menuControllers");
const router = express.Router();

router.get("/", menuControllers.menu);

module.exports = router;
