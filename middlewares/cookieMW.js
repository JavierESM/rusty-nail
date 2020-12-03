var path = require("path");
const fs = require ('fs');  
const usersFilePath = path.join(__dirname, '../data/usersList.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
var cookie = require("cookie-parser");

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
        var usuarioALoguearse
        for (let i = 0; i < users.length; i++) {
            if (users[i].email == req.cookies.recordame) {
                    usuarioALoguearse = users[i]
                    break
                 }
            }
            req.session.usuarioLogueado = usuarioALoguearse
        }
    }
module.exports = cookieMiddleware