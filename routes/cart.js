const express = require("express");
let cartController = require("../controllers/cartController");
const router = express.Router();

const cartMW = require("../middlewares/cartMW")

router.get("/", cartMW, cartController.show);
router.get("/checkout", cartController.checkout)
router.post("/checkout", cartController.bill)
router.post("/:id", cartController.create)
router.delete("/:id", cartController.destroy)
module.exports = router;
