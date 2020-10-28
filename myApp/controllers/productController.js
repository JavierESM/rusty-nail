var listado = require ('../data/listadoDeProductos.json')

const productController = { 

vista: function(req, res,) {
    res.render('product');
  },

 list: function(req,res){
     res.render ('products/list',{
         listado
     })
 }, 
 detalle: function(req,res){
    let resultado = listado.find(function(producto){
        return producto.id == req.params.id
    })

    if (resultado){ 
       return res.send (resultado)
        }   

        res.send ("No se encuentran productos")

    }
}

module.exports = productController