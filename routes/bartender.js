var express = require('express');
var router = express()
const bartenderController = require('../controllers/bartenderController');


router.get('/', bartenderController.show)



module.exports = router;