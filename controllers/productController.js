
const productController = { 

vista: function(req, res,) {
    res.render("product-detail");
  },

 list: function(req,res){
     res.render ('./listado',{
         listado
     })
 }, 
 detail: function(req,res){
    let resultado = listado.find(function(producto){
        return producto.id == req.params.id
    })

    if (resultado){ 
       return res.render ("product-detail", {resultado})
        }   

        res.send ("No se encuentran productos")

    }
}

module.exports = productController