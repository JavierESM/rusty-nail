module.exports = (sequelize, dataTypes) => {
    const alias = "Products"

    const cols = {
        id : {
        autoIncrement : true, 
        primaryKey : true, 
        type : dataTypes.INTEGER,
        allowNull: false
        },
        drink : {
            type : dataTypes.STRING,
            allowNull: false
        },
        description : {
            type : dataTypes.STRING,
            allowNull: false
        },
        unit_price : {
            type : dataTypes.DECIMAL(8,2),
            allowNull: false
        },
        image : {
            type : dataTypes.STRING,
            allowNull: false
        },
        origin : {
            type : dataTypes.STRING
        },
        flavour : {
            type : dataTypes.STRING
        },
        fashion : {
            type : dataTypes.STRING
        }
}
const config = {
    timestamps : false
}
const Product = sequelize.define(alias, cols, config)

Product.associate = function(models){
    Product.hasMany(models.Shopping_carts, {
        as : "shopping_carts",
        foreignKey : "product_id"
    })
}
    return Product
}