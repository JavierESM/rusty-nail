var path = require("path");
const fs = require("fs")
const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const menuControllers = {
  menu: function (req, res) {
    res.render("menu");
  },
  menuNuestros: function (req, res) {

    res.render("menu", {resultado})
  },
  menuClasicos: function (req, res) {
    res.render("menu", {resultado})
  },
  creator: function (req, res) {
    res.render("create-form")
  },
  create: function (req, res, next) {
		products.push({
			...req.body,
      id : products[products.length-1].id+1,
      img : "images/" + req.files[0].filename
		})
		products = JSON.stringify(products)
		fs.writeFileSync(productsFilePath, products)
		res.redirect("menu")
  },
  detail: function (req, res) {
    res.render("detail")
  },
  editor: function (req, res) {
    res.render("edit-form")
  },
  edit: function (req, res) {
    res.redirect ("menu")
  },
  destroy: function (req, res) {
    res.redirect ("menu")
  }
};

module.exports = menuControllers;
