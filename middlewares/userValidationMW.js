const {check} = require ("express-validator")
const passwordValidator = require("password-validator")

let userValidationMiddleware = [
    check ("email")
        .isLength({min : 1})
        .withMessage("El mail es obligatorio")
        .isEmail()
        .withMessage("Tiene que ser un email valido"),
    check ("password")
        .isLength({min : 8, max : 50})
        .withMessage("Tu contraseña debe tener entre 8 y 25 caracteres")
        .isAlphanumeric()
        .withMessage("Tu contraseña debe incluir tanto caracteres como números"),
    check("full_name")
        .isLength({min : 5})
        .withMessage("Debes llenar el formulario con tu nombre completo")
        .isLength({min : 1})
   
       
]
module.exports = userValidationMiddleware