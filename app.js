
var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));



app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});


app.use(function(req, res, next) {
  res.status(404).render('error');
});
app.listen(3000, function () {
  console.log('Servidor en el puerto 3000!');
});

/**
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
*/