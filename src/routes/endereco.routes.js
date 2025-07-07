
const express = require('express');

// cria o roteador
const router = express.Router();

// Importa o controlador de endereços
const enderecoController = require('../controllers/endereco.controller');

// Define as rotas para endereços
router.get('/', enderecoController.getAll); // Lista todos os endereços

router.post('/', enderecoController.create); // Cria um novo endereço

// Exporta o roteador para ser usado no app principal
module.exports = router;