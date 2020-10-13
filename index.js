const express = require ("express")
const app = express()
const path = require ("path")
app.listen(3000, () => console.log("Server up"))
app.get('/', (req, res) => {
    let file = path.resolve('index.html')
    res.sendFile(file)
})
app.get('/registro', (req, res) => {
    let file = path.resolve('register.html')
    res.sendFile(file)
})
app.get('/menu', (req, res) => {
    let file = path.resolve('menu.html')
    res.sendFile(file)
})
app.get('/bartender', (req, res) => {
    let file = path.resolve('bartender.html')
    res.sendFile(file)
})
app.get('/ejemplo', (req, res) => {
    let file = path.resolve('ejemplo.html')
    res.sendFile(file)
})
app.get(`*`, (req, res) => {
    if (req.url.endsWith('.css')) {
        let file = path.resolve('styles' + req.url)
        return res.sendFile(file)
    }

let images = ['jpg', 'jpeg', 'gif', 'png', 'svg', 'gif']
let ext = req.url.split('.')[1]

if (images.includes(ext)) {
    let file = path.resolve('public' + req.url)
    return res.sendFile(file)
}} 
) 
