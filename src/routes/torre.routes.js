
const express = require('express');

// Cria um roteador Express
const router = express.Router();

// Importa o controlador de torres
const torreController = require('../controllers/torre.controller');

// Rota GET /torres
router.get('/', torreController.getAll);

// Rota POST /torres
router.post('/', torreController.create);

// Exporta o roteador para ser usado no app principal
module.exports = router;
