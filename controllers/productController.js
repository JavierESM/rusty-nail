const db = require("../database/models")

const { Op } = require('sequelize');
const { menu } = require("./menuControllers");
var toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const productController = { 

 list: function(req, res, next){
     res.render ('./listado',{
         listado
     })
 }, 
 async detail (req, res, next) {
     let id = req.params.id 
     let resultado = await db.Products.findByPk(id)  
     res.render(resultado, toThousand)     
  
    }
}

module.exports = productController