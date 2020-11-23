var express = require("express");
const productController = require("../controllers/productController");
var router = express.Router();

router.get("/", productController.vista);
router.get("/listado", productController.list);
router.get("/:id", productController.detalle);

module.exports = router;
