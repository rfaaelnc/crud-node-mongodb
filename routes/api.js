const express = require('express');
const router  = express.Router();

// importar controlador 'apiController.js'
const apiController = require('../controllers/apiController');

// url teste
router.get('/teste', apiController.test);

// TODO: list points of interest from the BD
router.get('/details', apiController.details);

// TODO: add new point of interest
router.post('/interest', apiController.add);

// TODO: update point of interest
router.put('/interest/:id', apiController.update);

// TODO: delete point of interest
router.delete('/interest/:id', apiController.delete);

module.exports = router;