var path = require("path");
const fs = require("fs")
const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

var toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const menuControllers = {
  menu: function (req, res) {
    let query = req.params.category
    if (query) {
    resultado = products.filter(producto => producto.category == query);
    }
    else {
      resultado = [...products]
    }
    res.render("menu", {resultado, toThousand, query}); 
  },
  creator: function (req, res) {
    res.render("create-form");
  },
  menuEdit: function(req, res) {
    let query = req.params.category
    if (query) {
    resultado = products.filter(producto => producto.category == query);
    }
    else {
      resultado = [...products]
    }
    res.render("menu-edit", {products, toThousand, query})
  },
  create: function (req, res, next) {
    products.push({
      ...req.body,
      id: products[products.length - 1].id + 1,
      img: "images/" + req.files[0].filename,
    });
    products = JSON.stringify(products);
    fs.writeFileSync(productsFilePath, products);
    res.redirect("/");
  },
  detail: function (req, res) {
    let idProduct = req.params.id
    let resultado = products.find((product) => product.id == idProduct);
    res.render("product-detail", {resultado}); 

  },
  editor: function (req, res) {
    let idProduct = req.params.id;
    let resultado = products.find((product) => product.id == idProduct);
    res.render("edit-form", {resultado});
  },
  edit: function (req, res) {
    products.forEach(function (product) {
      if (product.id == req.params.id) {
        product.name = req.body.name;
        product.price = req.body.price;
        product.description = req.body.description; 
        product.category = req.body.category;
        console.log(req.files)
        if (typeof req.files != []){
        product.img = "images/placeholder";
      } else {
        product.img = "images/" + req.files[0].filename;
      }
    }});

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
    fs.writeFileSync(productsFilePath, newContentJSON);

    res.redirect("/menu");
  },
};

module.exports = menuControllers;
