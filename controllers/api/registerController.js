const db = require("../../database/models");
const {
    Op
} = require('sequelize');
const registerController = {
    check : (req, res, next) => {
        db.Users.findOne({
            where : {
                email : req.query.email
            }
        })
        .then(result => {
            if (result){
                res.status(200).json("Ah")
            } else {
                res.send(404).json({})
            }
            }).catch(err => {
                res.send(err)
        })
    }
}

module.exports = registerController