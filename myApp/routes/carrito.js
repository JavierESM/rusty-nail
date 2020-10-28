const express = require("express");
let carritoController = require("../controllers/carritoController");
const router = express.Router();

router.get("/", carritoController.compra);

module.exports = router;
