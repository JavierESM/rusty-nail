var express = require('express');
const { editor } = require('../controllers/usersControllers');
const usersController = require('../controllers/usersControllers');
var router = express.Router();
var controller = require('../controllers/usersControllers')
const multer = require("multer");
const {check, validationResult, body} = require("express-validator")
const guestMiddleware = require("../middlewares/guestMW")
const authMiddleware = require ("../middlewares/authMW")
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
router.get("/registro", usersController.creator)
router.get("/login", usersController.login)
router.get("/bienvenido", usersController.welcome)
router.get("/:id", usersController.detail);
router.get("/:id/edit", usersController.editor)
router.post("/", upload.any(), usersController.create)
router.post("/login-process", [check("email").isEmail()], usersController.processLogin)
router.put("/:id", upload.any(), usersController.edit)
router.delete("/:id", usersController.destroy)
module.exports = router;
