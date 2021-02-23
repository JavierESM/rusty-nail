var express = require('express');
var router = express()
const usersController = require('../../controllers/api/usersController');


router.get("/", usersController.count)
router.get("/list", usersController.list)
router.get("/detail", usersController.detail)

module.exports = router;