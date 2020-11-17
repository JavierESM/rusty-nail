var path = require("path");
const fs = require("fs")
const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

var toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const menuControllers = {
  menu: function (req, res) {
    res.render("menu", {products, toThousand});
  },
  menuNuestros: function (req, res) {
  
    res.render("menu", {resultado})
  },
  menuClasicos: function (req, res) {
    res.render("menu", { resultado });
  },
  creator: function (req, res) {
    res.render("create-form");
  },
  create: function (req, res, next) {
    products.push({
      ...req.body,
      id: products[products.length - 1].id + 1,
      img: "images/" + req.files[0].filename,
    });
    products = JSON.stringify(products);
    fs.writeFileSync(productsFilePath, products);
    res.redirect("menu");
  },
  detail: function (req, res) {
    let resultado = products.find((products) => product.id == idProduct);
    res.render("product", { resultado }); 

  },
  editor: function (req, res) {
    let idProduct = req.params.id;
    let resultado = products.find((product) => product.id == idProduct);
    res.render("edit-form", { resultado });
  },
  edit: function (req, res) {
    products.forEach(function (product) {
      if (product.id == req.params.id) {
        product.name = req.body.name;
        product.price = req.body.price;
        product.description = req.body.description; 
        product.category = req.body.category;
        product.img = req.files[0].filename;
      }
    });

    let newContentJSON = JSON.stringify(products);

    fs.writeFileSync(productsFilePath, newContentJSON);
    res.redirect("/menu");
  },

  destroy: function (req, res) {
    let productId = req.params.id;
    console.log(productId);
    let newContent = products.filter((producto) => {
      return producto.id != productId;
    });
    newContentJSON = JSON.stringify(newContent);
    //console.log(newContent)
    fs.writeFileSync(productsFilePath, newContentJSON);

    res.redirect("/menu");
  },
};

module.exports = menuControllers;
