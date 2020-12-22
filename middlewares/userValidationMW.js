const {check} = require ("express-validator")


let userValidarionMiddleware = [
    check ("email")
        .isLength({min : 1})
        .withMessage("Este campo es obligatorio")
        .isEmail()
        .withMessage("Tiene que ser un email valido"),
    check ("password")
        .isLength({min : 8, max : 50})
        .withMessage("Tu contraseña debe tener entre 8 y 25 caracteres"),
    check("full_name")
        .isLength({min : 4})
        .withMessage("Este campo es obligatorio")
]
module.exports = userValidarionMiddleware