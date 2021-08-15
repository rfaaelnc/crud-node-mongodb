const express = require('express');
const router  = express.Router();

// importar controlador 'apiController.js'
const apiController = require('../controllers/apiController');

// url teste
router.get('/teste', apiController.test);

module.exports = router;