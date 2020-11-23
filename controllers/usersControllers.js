var path = require("path");
var bcrypt = require("bcrypt");
const fs = require("fs")
const usersFilePath = path.join(__dirname, '../data/usersList.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));





var usersController = { 
    
    lista: function (req,res){ 
        res.render ('users/users', {listadoUsers:users})
    }, 
    vista: function (req,res){ 
        res.render ('register')
    }, 
    
    panel: function (req,res) {
        res.render ("control-panel")
    }, 
    
    
    create: function (req, res, next){
        let errorMail 
        if (users.includes(req.body.email)) {errorMail = true} else {
            users.push({
                ...req.body,
                password: bcrypt.hashsync(req.body.password, 11), 
                id: users[users.length - 1].id + 1,
                category: "user"
            });
            users = JSON.stringify(users);
            fs.writeFileSync(usersFilePath, users);
            res.redirect("menu", {errorMail});
        }},
        detail: function (req, res) {
            let idUser = req.params.id
            let resultado = users.find((user) => user.id == idUser);
            res.render("user", {resultado});    
        },
        editor: function (req, res) {
            let idUser = req.params.id;
            let resultado = users.find((user) => user.id == idUser);
            res.render("edit-user-form", {resultado});
        },
        edit: function (req, res) {
            users.forEach(function (user) {
                if (user.id == req.params.id) {
                    user.name = req.body.name;
                    user.email = req.body.email
                    user.password = bcrypt.hashSync(req.body.password, 11);
                    user.card = req.body.card
                    user.adress = req.body.adress
                    user.phone_number = req.body.phone_number
                    
                }
            }
            )
            let newContentJSON = JSON.stringify(users);
            fs.writeFileSync(usersFilePath, newContentJSON);
            res.redirect("/users")
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