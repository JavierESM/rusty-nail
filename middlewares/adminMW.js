function adminMiddleware (req, res, next) {
    if (req.session.usuarioLogueado == undefined) {
        let error = "administradores"
        res.render("middleware-msg", {error})
    } else if (req.session.usuarioLogueado.category == "admin"){
       next();
    }
}
module.exports = adminMiddleware