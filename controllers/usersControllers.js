var listadoUsers = require('../data/usersList.json');

var usersController = { 

lista: function (req,res){ 
    res.render ('users/users', { listadoUsers})
},
creado: function(req,res){
  res.render("user/user",{usuariocreado})
},
}
module.exports = usersController