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

const adminMiddleware = require("../middlewares/adminMW")
const productValidationMiddleware = require("../middlewares/productValidationMW")

//<< Form para menu >>
router.get("/create", adminMiddleware, menuControllers.creator);

router.get("/editar", menuControllers.menuEditar)

//<< Display para el menu >>
router.get("/cocktails/:category?/:flavour?", menuControllers.menu);
//<< Detalle de producto >>
router.get("/cocktail/:id", menuControllers.detail);
//<< Display para el menu >>
router.get("/:category?", menuControllers.menu);


//<< Form para editar >>
router.get("/:id/edit", adminMiddleware, menuControllers.editor)
//<< Accion de crear >>
router.post("/", upload.any(), productValidationMiddleware, menuControllers.create);
//<< Accion de editar >>
router.put("/:id", upload.any(), productValidationMiddleware, menuControllers.edit)
//<< Accion de borrar >>
router.delete("/:id", menuControllers.destroy)



module.exports = router;