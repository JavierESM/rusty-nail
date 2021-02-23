var express = require('express');
var router = express()
const productsController = require('../../controllers/api/productsController');


router.get("/", productsController.list)
router.get("/detail", productsController.detail)
router.get("/list/:search", productsController.filter)


module.exports = router;