module.exports = (sequelize, dataTypes) => {
const alias = "Categories"
const cols = {
    id : {
        autoIncrement : true,
        primaryKey : true,
        type : dataTypes.INTEGER.NOTNULL
    },
    origin : {
        type : dataTypes.STRING.NOTNULL
    },
    flavour : {
        type : dataTypes.STRING.NOTNULL
    },
    fashion : {
        type : dataTypes.STRING.NOTNULL
    }
}
const config = {
    tableName : "categories",
    timestamps : "false"
}
Category.associate = function(models){
    Category.hasMany(models.Products,{
        as : "products",
        foreignKey : "category_id"
    })
}
const Category = sequelize.define(alias, cols, config)
return Category
}