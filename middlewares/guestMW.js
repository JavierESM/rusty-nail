function guestMiddleware (req, res) {
    if (req.session.usuarioLogueado == undefined) {
        next ();
    } else {
        res.redirect("regulares")
    }
}
module.exports = guestMiddleware