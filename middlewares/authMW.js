function authMiddleware (req, res, next) {
    if (req.session.usuarioLogueado == undefined) {
        next ();
    } else {
        let error = "invitados"
        res.render("middleware-msg", {error})
    }
}
module.exports = authMiddleware