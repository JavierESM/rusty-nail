var express = require('express');
const { editor } = require('../controllers/usersControllers');
const usersController = require('../controllers/usersControllers');
var router = express.Router();
var controller = require('../controllers/usersControllers')
const multer = require("multer")
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
var upload = multer ({storage : storage})
router.get('/', usersController.lista);
router.get("/panel-de-control", usersController.panel)
router.get("/registro", usersController.vista)
router.get("/:id", usersController.detail);
router.get("/:id/edit", usersController.editor)
router.post("/", upload.any(), usersController.create)
router.put("/:id", upload.any(), usersController.edit)
router.delete("/:id", usersController.destroy)
module.exports = router;
