var express = require('express');
var router = express()
const registerController = require('../../controllers/api/registerController');


router.get('/check', registerController.check)

module.exports = router;