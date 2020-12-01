var path = require("path");
var bcrypt = require("bcrypt");
const fs = require("fs")
const usersFilePath = path.join(__dirname, '../data/usersList.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const {check, validationResult, body} = require("express-validator")
var cookie = require("cookie-parser")







var usersController = { 
    
    lista: function (req,res){ 
        res.render ('users/users', {listadoUsers:users})
    }, 
    vista: function (req,res){ 
        res.render ('registro')
    }, 
    processLogin: function (req, res){
        let errors = validationResult (req)
        console.log(errors)
        
        if (errors.isEmpty()) {
            let usersJSON = fs.readFileSync(usersFilePath, {
                encoding : "utf-8"
            })
           
            users = JSON.parse(usersJSON)
            
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == req.cookies.email) {
                   
                        var usuarioALoguearse = users[i]
                        break
                    
                }
            }
            if (usuarioALoguearse == undefined) {
                return res.redirect("users/login", {errors : [{
                    msg : "Credenciales inválidas"
                }]})
            } 
            
            req.session.usuarioLogueado = usuarioALoguearse
            if (req.body.recordame != undefined) {
                res.cookie("recordame", usuarioALoguearse.id, {
                    maxAge : 60000 * 10 * 340 * 85
                })
            }
            console.log(usuarioALoguearse)
            res.render("Exito")
        }
        else 
        {return res.render("users/login", {errors: errors.errors})}
        
    },
    
    login: function (req, res){
        res.render("users/login", {errors: {}})
    },
    
    panel: function (req,res) {
        res.render ("control-panel")
    }, 
    welcome: function (req, res) {
        res.render("bienvenido")
    },
    
    creator: function (req,res) {
        let errors = req.flash("errors")
        console.log(errors)
        res.render ("users/register", {errors})
    }, 
    
    create: function (req, res, next){
        let errors = validationResult (req)
        if (errors.isEmpty()){
        users.push({
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 11), 
            id: users[users.length - 1].id + 1,
            category: "user"
        });
        users = JSON.stringify(users);
        fs.writeFileSync(usersFilePath, users);
        res.render("users/bienvenido");} 
        else {
            req.flash("errors", errors.mapped())
            res.redirect("/users/registro")
        }
    },
    detail: function (req, res) {
        let idUser = req.params.id
        let resultado = users.find((user) => user.id == idUser);
        res.render("user", {resultado});    
    },
    editor: function (req, res) {
        let idUser = req.params.id;
        let resultado = users.find((user) => user.id == idUser);
        res.render("edit-user", {resultado});
    },
    edit: function (req, res) {
        users.forEach(function (user) {
            if (user.id == req.params.id) {
                user.name = req.body.name
                user.email = req.body.email
                user.password = bcrypt.hashSync(req.body.password, 11)
                user.card = req.body.card
                user.adress = req.body.adress
                user.phone_number = req.body.phone_number
            }
        }
        )
        let newContentJSON = JSON.stringify(users);
        fs.writeFileSync(usersFilePath, newContentJSON);
        res.redirect("/menu")
    },
    destroy: function (req, res) {
        let userId = req.params.id;
        console.log(userId);
        let newContent = users.filter((user) => {
            return user.id != userId;
        });
        newContentJSON = JSON.stringify(newContent);
        fs.writeFileSync(usersFilePath, newContentJSON);
        
        res.redirect("/users");
    },
    
}



module.exports = usersController