'use strict';

var express = require('express') // llamamos a express

var app = express()

var port = process.env.PORT  || 8080 // establecemos nuestro puerto


app.get('/',function(req,res){
    res.json({mensaje : 'hola mundo'})
})

app.get('/cervezas',function(req,res){
    res.json({mensaje: 'vamos a tomar cerveza'})
})

app.post('/', function(req,res){
    res.json({mensaje: 'Metodo Post'})
})

app.delete('/', function(req, res){
    res.json({mensaje : 'metodo delete'})
})

// iniciamos nuestro servidor

app.listen(port)
console.log('API escuchando en el puerto ' + port)




