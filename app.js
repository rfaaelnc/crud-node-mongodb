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

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://robot:0yVmhc4oztJY0kvO@nodejscluster.9ugyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  
  console.log(err);

  if(err) {
    console.log('Error in connection', err);
  }

  // console.log(client);

  client.close();
  // app.listen(3001, function() {
  //   console.log('server connected in port 3001');
  // });

});

client.on('connectionReady', ()=> {
  console.log('Server connected');
});


// END POINT INVÁLIDO
app.get('/', function(req, res) {
  res.send('end point inválido');
});

// url starting with '/api' calls routes in './routes/api'
const routes = require('./routes/api');
app.use('/api',routes);
