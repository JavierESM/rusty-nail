const {Product, User, sequelize} = require("../database/models")
const db = require("../database/models")
const { Op } = require('sequelize');
var toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const {
  check,
  validationResult,
  body
} = require("express-validator")
const carritoControllers= {
  show: function (req, res, next) {
  
    db.Shopping_carts.findAll({where : {user_id : req.session.usuarioLogueado.id},
      include : ["users", "products"]}).then(carrito => 
      
      res.render("cart", {
        carrito, toThousand})
        ).catch(function (errors) {
          console.log(errors)
      })
      },
  checkout: function (req, res, next) {
    Promise.all([
    db.Shopping_carts.findAll({where : {user_id : req.session.usuarioLogueado.id},
      include : ["users", "products"]}),
    db.Shopping_carts.sum("total_price", {where : {user_id : req.session.usuarioLogueado.id}}),
    db.Users.findOne({where : {id : req.session.usuarioLogueado.id}})
    ]).then(resultado =>   
      res.render("checkout", {
        resultado, toThousand})
        ).catch(function (errors) {
          console.log(errors)
      })
      },
  bill : function (req, res, next) {
    let total = req.body.total_price
    const now = new Date();
    const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    var isoDateString = utc.toISOString();
    db.Shopping_carts.findOne({where : {user_id : req.session.usuarioLogueado.id}})
    .then(resultado => {
      console.log(req.body)
      db.Bills.create({
      date_bought : isoDateString,
      total_price : total,
      user_id : req.session.usuarioLogueado.id,
      payment_method_id : req.body.payment_method
      }).then(
        db.Shopping_carts.destroy({where : {user_id : req.session.usuarioLogueado.id}})
        .then(res.redirect("/thanks")).catch(function (errors) {
          console.log(errors)
      })
        ).catch(function (errors) {
          console.log(errors)
      })
      }).catch(function (errors) {
        console.log(errors)
    })
  },
  create : function (req, res, next) {
   console.log(req.body)
   let cantidad = req.body.realQuantity
   console.log(cantidad)
   if (req.session.usuarioLogueado) {
   db.Products.findOne({where : { id : req.params.id}}).then(producto =>
    db.Shopping_carts.create({
    quantity : cantidad,
    product_id : req.params.id, 
    total_price : cantidad*producto.unit_price,
    user_id : req.session.usuarioLogueado.id
    }).then(res.redirect("/cart")).catch(function (errors) {
      console.log(errors)
  })
  ).catch(function (errors) {
    console.log(errors)
})
   } else {
     res.render("middleware-msg", {error : "cart"})
   }
  },
  destroy: function (req, res, next) {
    db.Shopping_carts.destroy({
      where: {
          id: req.params.id
      }
  }).then(function(){res.redirect("/cart")})
  .catch(function (errors) {
      console.log(errors)
  })
}
}
    
    module.exports = carritoControllers;
    