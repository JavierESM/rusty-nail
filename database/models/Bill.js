module.exports = (sequelize, dataTypes) => {
    const alias = "Bills"
    const cols = {
        id : {
           autoIncrement : true,
           primaryKey : true,
           type : dataTypes.INTEGER.NOTNULL
        },
        day_bought : {
           type : dataTypes.DATE.NOTNULL
        },
        total_price : {
            type : dataTypes.DECIMAL(8,2).NOTNULL
        },
    }
    const config = {
        timestamps : false
    }
    Bill.associate = function(models){
        Bill.belongsTo(models.Payment_methods, {
            as : "payment_methods",
            foreignKey : "payment_method_id"
        })
    }
    Bill.associate = function(models){
        Bill.hasMany(models.Rusty_users , {
            as : "users",
            foreignKey : "user_id"
        })
    }
    Bill.associate = function(models){
    Bill.hasMany(models.Shopping_carts, {
    as : "shopping_carts",
    foreignKey : "shopping_cart_id"
    })
}   
    const Bill = sequelize.define(alias, cols, config)
    return Bill
}