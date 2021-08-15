// importar modelo
const PI = require('../models/PImodel');

exports.test = function(req, res) {
  res.send('Olá! Teste ao Controller');
};

// TODO: list points from the BD
exports.details = function (req, res) {
  res.send({type: 'GET'});
};

// TODO: add new point of interest
exports.add = function (req, res, next) {
  // CREATE
  PI.create(req.body).then(function(pi){
    res.send(pi);
  }).catch(next);
};

// TODO: update of point interest
exports.update = function (req, res) {
  res.send({type: 'PUT'});
};

// TODO: delete of point interest
exports.delete = function (req, res) {
  res.send({type: 'DELETE'});
};


// importar modelo
// const PI = require('../models/PImodel');
// adicionar novo ponto de interesse
exports.create = function (req, res) {
  // cria novo ‘pi’ na BD a partir do request, depois, devolve o
  //‘pi’ criado ao cliente
  PI.create(req.body).then(function(pi){
  res.send(pi);
  });
};