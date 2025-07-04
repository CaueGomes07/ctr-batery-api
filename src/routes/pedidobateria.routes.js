
const express = require('express');

// Cria o roteador
const router = express.Router();

// Importa o controlador de pedidos de bateria
const pedidoBateriaController = require('../controllers/pedidobateria.controller');

// Define as rotas para pedidos de bateria
router.get('/', pedidoBateriaController.getAll); // Lista todos os pedidos de bateria
router.post('/', pedidoBateriaController.create); // Cria um novo pedido de bateria

// Exporta o roteador para ser usado no app principal
module.exports = router;
