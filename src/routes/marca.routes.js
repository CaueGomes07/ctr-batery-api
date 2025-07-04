
const express = require('express');

// cria o roteador
const router = express.Router();

// Importa o controlador de marcas
const marcaController = require('../controllers/marca.controller');

// Define as rotas para marcas
router.get('/', marcaController.getAll); // Lista todas as marcas

router.post('/', marcaController.create); // Cria uma nova marca

// Exporta o roteador para ser usado no app principal
module.exports = router;