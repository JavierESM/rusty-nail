const db = require("../database/models")

const bartenderController = {
    show : (req, res) => {
       
        res.render("bartender")
    }, 
   
}

module.exports = bartenderController