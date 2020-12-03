var express = require("express");
const productController = require("../controllers/productController");
var router = express.Router();


router.get("/listado", productController.list);

module.exports = router;
