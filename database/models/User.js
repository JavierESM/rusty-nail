module.exports = (sequelize, dataTypes) => {
    const alias =  "Users"
    const cols = {
        id : {
            autoIncrement : true, 
            primaryKey : true, 
            type : dataTypes.INTEGER.NOTNULL
        }, 
        role : {
            type : dataTypes.STRING.NOTNULL
        }, 
        full_name : {
            type : dataTypes.STRING.NOTNULL
        },
        address : {
            type : dataTypes.STRING.NOTNULL
        },
        phone : {
            type : dataTypes.STRING.NOTNULL
        },
        email : {
            type : dataTypes.STRING.NOTNULL
        }, 
        birthdate : {
            type : dataTypes.DATE
        }
    }
    const config = {timestamps : false}
    User.associate = function(models){
        User.hasMany(models.Permits,{
        as : "permits",
        foreignKey : "permit_id"
        })
    }
    User.associate = function(models){
        User.hasMany(models.Bills,{
        as : "bills",
        foreignKey : "user_id"
        })
    }
    User.associate = function(models){
        User.belongsTo(models.Shopping_carts,{
        as : "shopping_carts",
        foreignKey : "user_id"
        })
    }

    
    const User = sequelize.define(alias, cols, config)
    return User
}