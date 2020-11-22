const express = require("express");
let contactosController = require("../controllers/contactosController");

const router = express.Router();

router.get("/", contactosController.usuario);

module.exports = router;
