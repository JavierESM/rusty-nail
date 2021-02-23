module.exports = (sequelize, dataTypes) => {
    const alias = "Payment_methods"
    const cols = {
        id : {
            autoIncrement : true, 
            primaryKey : true, 
            type : dataTypes.INTEGER,
            allowNull: false
        }, 
        methods : {
            type : dataTypes.STRING,
            allowNull: false
        }, 
    }
    const config = {
        timestamps : false
    }
    const Payment_method = sequelize.define(alias, cols, config)

    Payment_method.associate = function(models){
        Payment_method.hasMany(models.Bills, {
        as : "bills",
        foreignKey : "payment_method_id"
        })
    }
    
    return Payment_method
}