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
const userValidationMiddleware = require("../middlewares/userValidationMW")
const userLoginMW = require("../middlewares/userLoginMW")

router.get('/', adminMiddleware, usersController.lista);
router.get("/panel-de-control", adminMiddleware, usersController.panel)
router.get("/registro", authMiddleware , usersController.creator)
router.get("/login", authMiddleware, usersController.login)
router.get("/exito", usersController.welcome)
router.get("/:id", idMiddleware, usersController.detail);
router.get("/:id/edit", idMiddleware, usersController.editor)
router.post("/", userValidationMiddleware, usersController.create)
router.post("/login-process", userLoginMW, authMiddleware, usersController.processLogin)
router.put("/:id", usersController.edit)
router.delete("/:id", usersController.destroy)
module.exports = router;

