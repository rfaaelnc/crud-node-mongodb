// Associar as dependências instaladas
const express = require('express');
const bodyParser = require('body-parser');

// Inicializar app express
const app = express();

// Configuring acess the BD
const mongoose = require('mongoose');

let url = 'mongodb+srv://robot:0yVmhc4oztJY0kvO@nodejscluster.9ugyb.mongodb.net/test';
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na ligação ao MongoDB'));

mongoose.connection.on('connected', () => {
  console.log('connected to database ' + 'test');
});

// this middleware must be aboce the routes handlers 
app.use(bodyParser.json());


// END POINT INVÁLIDO
app.get('/', function(req, res) {
  res.send('end point inválido');
});

// url starting with '/api' calls routes in './routes/api'
const routes = require('./routes/api');
app.use('/api',routes);

// error handling middleware
app.use(function(err, req, res, next){
  console.log(err);
  res.status(422).send({error: err.message});
});
// end middleware


// servidor na porta 5000
// 'process.env.port': caso use heroku
let port = 5001;
app.listen(process.env.port || port, () => {
  console.log('Servidor em execução na porta:' + port);
});