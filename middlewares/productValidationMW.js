const {check, body} = require ("express-validator")


let productValidationMiddleware = [
    check ("name")
        .isLength({min : 1})
        .withMessage("El producto debe tener nombre")
        .isLength({max : 25})
        .withMessage("El nombre del producto no debe tener mas de 16 caracteres"),
    check ("price")
        .isLength({min : 8, max : 50})
        .withMessage("El producto debe tener un precio")
        .isNumeric()
        .withMessage("El precio solo puede tener números")
        .not().isIn(["$"])
        .withMessage("El simbolo $ se agrega automáticamente"),
    check("description")
        .isLength({min : 1})
        .withMessage("El producto debe tener una descripción")
]
module.exports = productValidationMiddleware