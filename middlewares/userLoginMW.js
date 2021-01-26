const {check, body} = require ("express-validator")


let userLoginMW = [
    check ("email")
        .isLength({min : 1})
        .withMessage("El mail es necesario"),
    check ("password")
        .isLength({min : 1}) 
        .withMessage("La contraseña es necesaria")   
]
module.exports = userLoginMW