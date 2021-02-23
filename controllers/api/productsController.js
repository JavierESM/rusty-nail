const db = require("../../database/models");
const {
    Op
} = require('sequelize');
const { query } = require("express-validator");
const { get } = require("../../routes/cart");
const productsController = {
    async list (req, res, next) {
        let productsList = await db.Products.count()
        let respuesta = {
            meta: {
                total: productsList.length,
                url: "api/products"
            },
            data: productsList
        };
        return res.json(respuesta);
    },
    async filter (req, res, next) {
        let query = req.params.search
        let products = await db.Products.findAll({where : {flavour : query}})
       console.log(products)
        let respuesta = {
            meta: {     
                url: "api/products/list"
            },
            data: {products}}
        return res.json(respuesta);
        
        
    }, 
    async detail (req, res, next) {
        let id = req.params.id
        let product = await db.Products.findByPk(id)
        let respuesta = {
            meta: {     
                url: "api/products/" + id
            },
            data: product
            
        };
        return res.json(respuesta);
    },
    async detail (req, res, next) {
        
        let busqueda = await db.Products.max("id")
        let product = await db.Products.findByPk(busqueda)
        let respuesta = {
            meta: {     
                url: "api/products/detail"
            },
            data: product
            
        };
        return res.json(respuesta);
    }
}

module.exports = productsController