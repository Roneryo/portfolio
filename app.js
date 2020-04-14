const  express = require('express');
const  http    = require('http');
const  reload  = require('reload');
const  app     = express();
app.set('view engine', 'pug');
app.use(express.static('public'));



app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});


app.use(function(req, res, next) {
  res.status(404).render('error');
});
const server = http.createServer(app);
server.listen(3000,()=> {
  console.log('Servidor en el puerto 3000!');
});
reload(app);
/**
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
*/