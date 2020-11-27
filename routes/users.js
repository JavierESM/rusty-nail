var express = require('express');
const usersController = require('../controllers/usersControllers');
var router = express.Router();
var controller = require('../controllers/usersControllers')

router.get('/', usersController.lista);

module.exports = router;
