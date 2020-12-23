
const homeController = {

    show : (req, res) => {
        res.render("home")
    }, 
    view : (req, res) => {
        res.render("historia")
    } 
}

module.exports = homeController