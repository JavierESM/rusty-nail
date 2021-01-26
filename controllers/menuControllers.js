
let db = require("../database/models")
const { Op } = require('sequelize');
var toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const {
  check,
  validationResult,
  body
} = require("express-validator")
const menuControllers = {
  menu: function (req, res) {
    let query = req.params.category
    if (query == undefined){
      db.Products.findAll().then(
       resultado => {
         res.render("menu", {resultado})
       })
       .catch(function(errors){
       console.log(errors)
     })
    } else {
    db.Products.findAll({ 
       where: { origin : {[Op.like] : `${query}`}}}
    ).then(
      resultado => {
        res.render("menu", {resultado, toThousand, query})
      })
      .catch(function(errors){
      console.log(errors)
    }) }
    
  },
  creator: function (req, res) {
    res.render("create-form");
  },
  create: function (req, res, next) {
    let errors = validationResult(req)
        console.log(errors)
        if (errors.isEmpty()) {
    db.Products.create({
      drink : req.body.name,
      description : req.body.description,
      unit_price : req.body.price, 
      image : req.files[0].filename,
      origin : req.body.category,
      flavour : req.body.flavour,
      fashion: req.body.fashion
    }).then(function(){res.redirect("/menu")})
    .catch(function (errors) {
        console.log(errors)
    })
    res.redirect("/");
  }
  else {
    let resultado = req.params.id
    res.render("create-form", {
      errors: errors.errors, resultado  
  })
  console.log(errors.errors)
  }
  },
    detail: function(req,res){
    let busqueda = req.params.id
    db.Products.findByPk(busqueda).then(function(resultado){
     res.render ("products/product-detail", {resultado})
    }).catch(function(errors){
      console.log(errors)}
    )
  },
    menuEditar : function(req, res){
    
    db.Products.findAll().then(function(resultado){
      res.render ("menu-edit", {resultado})
    }).catch(function(errors){
      console.log(errors)
    })
    },
    editor: function (req,res) {
    let busqueda = req.params.id
    db.Products.findByPk(busqueda).then(function(resultado){
      res.render("edit-form", {resultado})
    }).catch(function(errors){
      console.log(errors)}
    )
  },
  
  edit: function (req, res) {
    let resultado = req.params.id
    let errors = validationResult(req)
        console.log(errors)
        if (errors.isEmpty()) {
      db.Products.update({
        drink : req.body.name,
        description : req.body.description,
        unit_price : req.body.price, 
        image : req.files[0].filename,
        origin : req.body.category,
        flavour : req.body.flavour,
        fashion: req.body.fashion
      }, {
        where : {id : resultado}
      })
    res.redirect("/menu");
  }
    else {
      let resultado = req.params.id
      res.render("edit-form", {
        errors: errors.errors, resultado  
    })
    console.log(errors.errors)
    }
  },

  destroy: function (req, res) {
    db.Products.destroy({
      where: {
          id: req.params.id
      }
  }).then(function(){res.redirect("/menu")})
  .catch(function (errors) {
      console.log(errors)
  })
  },
};

module.exports = menuControllers;
