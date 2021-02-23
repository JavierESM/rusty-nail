
const questionsController = {

    historia : (req, res, next) => {
        res.render("historia")
    }, 

    howto: (req, res, next) => {
        res.render("howto")
    }
  
}

module.exports = questionsController