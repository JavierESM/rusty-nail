var listadoUsers = require('../data/usersList.json');

var usersController = { 

lista: function (req,res){ 
    res.render ('users/users', { listadoUsers})
}

}

module.exports = usersController