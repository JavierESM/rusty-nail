function idMiddleware (req, res, next) {
    if (req.session.usuarioLogueado == undefined) {
        let error = "usuarios"
        res.render("middleware-msg", {error})
    }  else if (req.session.usuarioLogueado.id == req.params.id){
        next();
     } else {
         let error = "para otra persona"
         res.render("middleware-msg", {error})
        }
}
module.exports = idMiddleware