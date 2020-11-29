var path = require("path");
var bcrypt = require("bcrypt");
const fs = require("fs")
const usersFilePath = path.join(__dirname, '../data/usersList.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const {check, validationResult, body} = require("express-validator")



var usersController = { 
    
    lista: function (req,res){ 
        res.render ('users/users', {listadoUsers:users})
    }, 
    vista: function (req,res){ 
        res.render ('registro')
    }, 
    processLogin: function (req, res){
        let errors = validationResult(req)
        
        if (errors.isEmpty()) {
            let usersJSON = fs.readFileSync("usersList.json", {
                encoding : "UTF-8"
            })
        let users; 
        if (usersJSON == ""){
            users = []
        } else {
            users = JSON.parse(usersJSON)}
        } 
        else for (let i = 0; i < users.length; i++) {
            if (users[i].email == req.body.email) {
                if (bcrypt.compareSync(req.body.password, users[i].password)){
                    usuarioALoguearse = users[i]
                    break
                }
            }
        }
        if (usuarioALoguearse == undefined) {
            return res.render("login", {
                errors:[{msg:"Credenciales invalidas"}]})}

        if (usuarioALoguearse.category == "admin") {
            req.session.AdminLogueado = usuarioALoguearse
        } else req.session.UsuarioLogueado =  usuarioALoguearse;
        res.render("Exito")
    },
    
    login: function (req, res){
        res.render("login")
    },
    
    panel: function (req,res) {
        res.render ("control-panel")
    }, 
   
    creator: function (req,res) {
        res.render ("registro")
    }, 
    
    create: function (req, res, next){
                     
            users.push({
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 11), 
                id: users[users.length - 1].id + 1,
                category: "user"
            });
            users = JSON.stringify(users);
            fs.writeFileSync(usersFilePath, users);
            res.redirect("menu");
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