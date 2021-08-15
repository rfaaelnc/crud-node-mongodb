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