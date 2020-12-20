module.exports = (sequelize, dataTypes) => {
    const alias = "Shopping_carts"
    const cols = {
        id : {
            autoIncrement : true, 
            primaryKey : true, 
            type : dataTypes.INTEGER.NOTNULL
        },

        quantity : {
            type : dataTypes.TINYINT.NOTNULL
        }, 
        total_price : {
            type : dataTypes.DECIMAL(8,2).NOTNULL
        }, 
    }
    const config = {
        timestamps : false
    }
    Shopping_cart.associate = function(models){
        Shopping_cart.belongsTo(models.Bills, {
            as : "bills",
            foreignKey : "shopping_cart_id"
        })
    }
    Shopping_cart.associate = function(models){
        Shopping_cart.hasMany(models.Products, {
            as : "products",
            foreignKey : "product_id"
        })
    }
    Shopping_cart.associate = function(models){
        Shopping_cart.hasMany(models.Users, {
            as : "users",
            foreignKey : "user_id"
        })
    }
    const Shopping_cart = sequelize.define(alias, cols, config)
    return Shopping_cart
}