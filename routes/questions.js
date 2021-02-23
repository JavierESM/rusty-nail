var express = require("express");
const questionsController = require("../controllers/questionsController");
var router = express.Router();


router.get("/historia", questionsController.historia);
router.get("/howto", questionsController.howto)
module.exports = router;