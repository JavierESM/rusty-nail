
const homeController = {

    show : (req, res, next) => {
        res.render("home")
    }, 
    view : (req, res, next) => {
        res.render("historia")
    },
    thanks : (req, res, next) => {
        res.render("users/gracias")
    }
}

module.exports = homeController