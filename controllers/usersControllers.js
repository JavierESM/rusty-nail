var path = require("path");
var bcrypt = require("bcrypt");
const fs = require("fs")
const {
    check,
    validationResult,
    body
} = require("express-validator")
var cookie = require("cookie-parser");
const db = require("../database/models");
const {
    Op
} = require('sequelize');

var usersController = {

    lista: function (req, res) {
        db.Users.findAll().then(listadoUsers =>
            res.render('users/users', {
                listadoUsers
            })
        ).catch(function (errors) {
            console.log(errors)
        })
    },
    vista: function (req, res) {
        res.render('registro')
    },
    processLogin: function (req, res) {
        let errors = validationResult(req)
        console.log(errors)
        if (errors.isEmpty()) {
            
            db.Users.findOne({ where: {email: req.cookies.email ? req.cookies.email : req.body.email}
               }).then(user => {
                var usuarioProceso = user
                if (usuarioProceso == null) {
                    return res.render("users/login", {
                        errors: [{
                            msg: "Este mail no corresponde a ningún usuario"
                        }]
                    })
                }
                var comparison = bcrypt.compareSync(req.body.password, usuarioProceso.password)   
                
                if (comparison) {
                    var usuarioALoguearse = usuarioProceso 
                    req.session.usuarioLogueado = usuarioALoguearse
                    if (req.body.recordame != undefined) {
                         res.cookie("recordame", usuarioALoguearse.email, {
                             maxAge: 60000 * 10 * 340 * 85
                         })}
                        console.log(usuarioALoguearse)
                        res.render("users/exito")
                   
                } else {            
                console.log(errors)
                return res.render("users/login", {
                    errors: [{
                        msg: "La contraseña y el mail no corresponden"
                    }]
                })
              }
            }).catch(function (errors) {
                console.log(errors)
            })

        } else {
            
            res.render("users/login", {
              errors: errors.errors
          })
          console.log(errors.errors)
          }
    },



    login: function (req, res) {
        res.render("users/login", {
            errors: {}
        })
    },

    panel: function (req, res) {
        res.render("control-panel")
    },
    welcome: function (req, res) {
        res.render("users/exito")
    },

    creator: function (req, res) {
        let errors = validationResult(req)
        console.log(errors)
        res.render("users/register", {
            errors
        })
    },

    create: function (req, res, next) {
        if (req.body.age_validator == null || req.body.accept_TOS == null) {
            return res.render("users/register", {
                errors: [{
                    msg: "Debes ser mayor a 18 y aceptar los Términos y Condiciones"
                }]
            })
        }
        else {
        let errors = validationResult(req)
        if (errors.isEmpty()) {

            if (req.body.password == req.body.confirmPassword){
            db.Users.findOne({ where: {email: req.body.email}
            }).then(user => {
            let usuarioRepetido = user
            if (usuarioRepetido == null){
            db.Users.create({
                full_name: req.body.full_name,
                birthdate: null,
                role: "cliente",
                address: req.body.address,
                phone: null,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 11),
                confirmPassword: bcrypt.hashSync(req.body.confirmPassword, 11)
            }).then(function(){res.redirect("/exito")})
            .catch(function (errors) {
                console.log(errors)
            })
        } else {
            return res.render("users/register", {
                errors: [{
                    msg: "El mail introducido ya está en uso"
                }]
            })
        }
        }).catch(function (errors) {
            console.log(errors)
        })
        } else {
            res.render("users/register", {
                errors: errors.errors
            })
            console.log(errors.errors)
        }}
        else {
            return res.render("users/register", {
                errors: [{
                    msg: "Debes introducir la misma contraseña"
                }]
            })
        }
    }
    },
  
    detail: function (req, res) {
        let busqueda = req.params.id;
        db.Users.findByPk(busqueda).then(resultado => {res.render("user", {resultado})}).catch(function(errors){
             console.log(errors)}
           )
    },
    editor: function (req, res) {
        let busqueda = req.params.id
        db.Users.findByPk(busqueda).then(resultado => {res.render("user-edit", {resultado})}).catch(function(errors){
            console.log(errors)}
          )
    },
    edit: function (req, res) {
        db.Users.update({
          
            full_name: req.body.full_name,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 11),
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(){res.redirect("/home")})
        .catch(function (errors) {
            console.log(errors)
        })
    },


    destroy: function (req, res) {
        db.Users.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(){res.redirect("/users")})
        .catch(function (errors) {
            console.log(errors)
        })
        
    },

}



module.exports = usersController