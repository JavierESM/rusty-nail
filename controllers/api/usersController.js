const db = require("../../database/models");
const {
    Op
} = require('sequelize');
const usersController = {
    async count (req, res, next) {
        let usersList = await db.Users.count()
        let respuesta = {
            meta: {
                total: usersList.length,
                url: "api/users"
            },
            data: usersList
        };
        console.log(respuesta.length)
        return res.json(respuesta);
    },
    async list (req, res, next) {
       let users = await db.Users.findAll()
       console.log(users)
        let respuesta = {
            meta: {     
                url: "api/users/list"
            },
            data: {users}}
        return res.json(respuesta);
    },
    async detail (req, res, next) {
        
        let busqueda = await db.Users.max("id")
        let user = await db.Users.findByPk(busqueda)
        let respuesta = {
            meta: {     
                url: "api/users/detail"
            },
            data: user
            
        };
        return res.json(respuesta);
    }
    }


module.exports = usersController