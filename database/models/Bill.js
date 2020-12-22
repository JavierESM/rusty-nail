module.exports = (sequelize, dataTypes) => {
    const alias = "Bills"
    const cols = {
        id : {
           autoIncrement : true,
           primaryKey : true,
           type : dataTypes.INTEGER.UNSIGNED
        },
        day_bought : {
           type : dataTypes.DATE,
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
    const Bill = sequelize.define(alias, cols, config)
    Bill.associate = function(models){
        Bill.belongsTo(models.Payment_methods, {
            as : "payment_methods",
            foreignKey : "payment_method_id"
        })
    }
    
    Bill.associate = function(models){
    Bill.hasMany(models.Shopping_carts, {
    as : "shopping_carts",
    foreignKey : "shopping_cart_id"
    })
    }
    return Bill
}

