module.exports = (sequelize, dataTypes) => {
    const alias = "Shopping_carts"
    const cols = {
        id : {
            autoIncrement : true, 
            primaryKey : true, 
            type : dataTypes.INTEGER,
            allowNull : false
        },

        quantity : {
            type : dataTypes.TINYINT,
            allowNull : false
        }, 
        total_price : {
            type : dataTypes.DECIMAL(8,2),
            allowNull : false
        }, 
    }
    const config = {
        timestamps : false
    }
    const Shopping_cart = sequelize.define(alias, cols, config)

    Shopping_cart.associate = function(models){
        Shopping_cart.belongsTo(models.Bills, {
            as : "bills",
            foreignKey : "shopping_cart_id"
        })
        Shopping_cart.belongsTo(models.Products, {
            as : "products",
            foreignKey : "product_id"
        })
        Shopping_cart.belongsTo(models.Users, {
            as : "users",
            foreignKey : "user_id"
        })
    }
    return Shopping_cart
}