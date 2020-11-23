const express = require("express");
const { menu } = require("../controllers/menuControllers");
let menuControllers = require("../controllers/menuControllers");
const router = express.Router();
const path = require("path")
const fs = require("fs")
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
//<< Form para menu >>
router.get("/create", menuControllers.creator);
//<< Editor carta >>
router.get("/editar", menuControllers.menuEdit)
//<< Display para el menu >>
router.get("/:category?", menuControllers.menu);
//<< Detalle de producto >>
router.get("/:id", menuControllers.detail);
//<< Form para editar >>
router.get("/:id/edit", menuControllers.editor)
//<< Accion de crear >>
router.post("/", upload.any(), menuControllers.create);
//<< Accion de editar >>
router.put("/:id", upload.any(), menuControllers.edit)
//<< Accion de borrar >>
router.delete("/:id", menuControllers.destroy)


module.exports = router;