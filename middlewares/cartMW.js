function cartMW (req, res, next) {
    if (req.session.usuarioLogueado == undefined) {
        let error = "cart"
        res.render("middleware-msg", {error})
    } else {next()}
}


module.exports = cartMW