function adminMiddleware (req, res, next) {
    console.log(req.session.usuarioLogueado)
    if (req.session.usuarioLogueado.role != "admin") {
        let error = "administradores"
        res.render("middleware-msg", {error})
    } else if (req.session.usuarioLogueado.role == "admin"){
       next();
    }
}

module.exports = adminMiddleware