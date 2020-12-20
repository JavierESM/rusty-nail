module.exports = (sequelize, dataTypes) => {
    const alias = "Products"

    const cols = {
        id : {
        autoIncrement : true, 
        primaryKey : true, 
        type : dataTypes.INTEGER.NOTNULL
        },
        drink : {
            type : dataTypes.STRING.NOTNULL
        },
        description : {
            type : dataTypes.STRING.NOTNULL
        },
        unit_price : {
            type : dataTypes.DECIMAL(8,2).NOTNULL
        },
        image : {
            type : dataTypes.STRING.NOTNULL
        },
}
const config = {
    timestamps : false
}
Product.associate = function(models){
    Product.belongsTo(models.Categories, {
        as : "categories",
        foreignKey : "category_id"
    })
}
Product.associate = function(models){
    Product.belongsTo(models.Shopping_carts, {
        as : "shopping_carts",
        foreignKey : "product_id"
    })
}
    const Product = sequelize.define(alias, cols, config)
    return Product
}