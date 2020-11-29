function authMiddleware (req, res) {
    if (req.session.usuarioLogueado == undefined) {
        next ();
    } else {
        res.redirect("invitados")
    }
}
module.exports = authMiddleware