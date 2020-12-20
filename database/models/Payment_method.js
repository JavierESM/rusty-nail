module.exports = (sequelize, dataTypes) => {
    const alias = "Payment_methods"
    const cols = {
        id : {
            autoIncrement : true, 
            primaryKey : true, 
            type : dataTypes.INTEGER.NOTNULL
        }, 
        methods : {
            type : dataTypes.STRING.NOTNULL
        }, 
    }
    Payment_method.associate = function(models){
        Payment_method.hasMany(models.Bill, {
        as : "bills",
        foreignKey : "payment_method_id"
        })
    }
    config = {
        timestamps : false
    }
    const Payment_method = sequelize.define(alias, cols, config)
    return Payment_method
}