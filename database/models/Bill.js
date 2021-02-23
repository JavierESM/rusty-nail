module.exports = (sequelize, dataTypes) => {
    const alias = "Bills"
    const cols = {
        id : {
           autoIncrement : true,
           primaryKey : true,
           type : dataTypes.INTEGER.UNSIGNED
        },
        date_bought : {
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
    
    
    
    Bill.belongsTo(models.Users, {
    as : "users",
    foreignKey : "user_id"
    })
    }
    return Bill
}

