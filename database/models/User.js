module.exports = (sequelize, dataTypes) => {
    const alias =  "Users"
    const cols = {
        id : {
            autoIncrement : true, 
            primaryKey : true, 
            type : dataTypes.INTEGER,
            allowNull : false
        }, 
        role : {
            type : dataTypes.STRING,
            allowNull : false
        }, 
        full_name : {
            type : dataTypes.STRING,
            allowNull : false
        },
        address : {
            type : dataTypes.STRING,
            allowNull : false
        },
        phone : {
            type : dataTypes.STRING,
            
        },
        email : {
            type : dataTypes.STRING,
            allowNull : false
        }, 
        birthdate : {
            type : dataTypes.DATE
        }, 
        password : {
            type : dataTypes.STRING,
            allowNull : false 
        }
    }
    const config = {timestamps : false}
    const User = sequelize.define(alias, cols, config)

    User.associate = function(models){
        
    
        User.hasMany(models.Shopping_carts,{
        as : "shopping_carts",
        foreignKey : "user_id"
        })
    }

    
    return User
}