function cookieMiddleware (req, res, next) {
    next(); 
    if (req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined) {
        let usersJSON = fs.readFileSync(usersFilePath, {
            encoding : "utf-8"
        })
        let users; 
        if (usersJSON == "") {
            users = []
        } else {
            users = JSON.parse(usersJSON)
        }
        for (let i = 0; i < users.length; i++) {
            if (users[i].email == req.cookies.email) {
                if(bcrypt.compareSync(req.body.password, users[i].password)) {
                    var usuarioALoguearse = users[i]
                    break
                }
            }
            req.session.usuarioLogueado = usuarioALoguearse
        }
    } 
}
module.exports = cookieMiddleware