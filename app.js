// associar as dependências instaladas
const express = require('express');
// inicializar app express
const app = express();
let port = 5000;
// servidor á escuta no porto 5000
// 'process.env.port': caso usemos Heroku
app.listen(process.env.port || port, () =>{
  console.log('Servidor em execução no porto: '+ port);
});