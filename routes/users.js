var express = require('express');
const usersController = require('../controllers/usersControllers');
var router = express.Router();
var controller = require('../controllers/usersControllers')
const multer = require("multer");
const {check, validationResult, body} = require("express-validator")
const guestMiddleware = require("../middlewares/guestMW")
const idMiddleware = require("../middlewares/idMW")

const authMiddleware = require ("../middlewares/authMW")
const adminMiddleware = require("../middlewares/adminMW")
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer ({storage : storage})
router.get('/', adminMiddleware, usersController.lista);
router.get("/panel-de-control", adminMiddleware, usersController.panel)
router.get("/registro", authMiddleware , usersController.creator)
router.get("/login", authMiddleware, usersController.login)
router.get("/bienvenido", guestMiddleware, usersController.welcome)
router.get("/:id",  idMiddleware, usersController.detail);
router.get("/:id/edit", idMiddleware, usersController.editor)
router.post("/", [check("email").isEmail().withMessage("Por favor, introducí un email válido"), 
check("password").isLength({min : 8, max : 25}).withMessage("Tu contraseña debe tener entre 8 y 25 caracteres"), 
check("password").isHash(), check("password")], usersController.create)
router.post("/login-process", [
check("email").isEmail().withMessage("Por favor, introducí un email válido")]
, usersController.processLogin)
router.put("/:id", upload.any(), usersController.edit)
router.delete("/:id", usersController.destroy)
module.exports = router;
