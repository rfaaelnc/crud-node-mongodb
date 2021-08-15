// Associar as dependências instaladas
const express = require('express');

// Inicializar app express
const app = express();

let port = 5000;

// servidor na porta 5000
// 'process.env.port': caso use heroku
app.listen(process.env.port || port, () => {
  console.log('Servidor em execução na porta:' + port);
});


const bodyParser = require('body-parser');

// this middleware must be aboce the routes handlers 
app.use(bodyParser.json());


// END POINT INVÁLIDO
app.get('/', function(req, res) {
  res.send('end point inválido');
});

// url starting with '/api' calls routes in './routes/api'
const routes = require('./routes/api');
app.use('/api',routes);
