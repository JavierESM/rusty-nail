function guestMiddleware (req, res, next) {
    if (req.session.usuarioLogueado != undefined) {
        next ();
    } else {
        let error = "regulares"
        res.render("middleware-msg", {error})
    }
}
module.exports = guestMiddleware