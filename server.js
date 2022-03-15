const express = require('express')
const nunjucks = require('nunjucks')
const axios = require('axios')

const app = express()

app.use(express.static('static'))
app.use(express.static('assets'))
app.use(express.static('node_modules/bootstrap/dist'))



const fruits = [
    {name: "Banana", img: "banana.png", price: 1490 },
    {name: "Cebollas", img: "cebollas.png", price: 1590 },
    {name: "Lechuga", img: "lechuga.png", price: 990 },
    {name: "Papas", img: "papas.png", price: 2490 },
    {name: "Pimenton", img: "pimenton.png", price: 1290 },
    {name: "Tomate", img: "tomate.png", price: 2790 }
]

nunjucks.configure('views', {
    express: app,
    autoescape: true,
    watch: true
})
app.get('/', function(req, res) {
    res.render('index.html', { fruits });
});
app.listen(3000, () => console.log('Servidor en puerto 3000'))
