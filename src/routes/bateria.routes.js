

// 
const express = require('express');

// Cria um roteador Express
const router = express.Router();

// Importa o controlador de baterias
const bateriaController = require('../controllers/bateria.controller');

// Rota GET /baterias
router.get('/', bateriaController.getAll);

// Rota POST /baterias
router.post('/', bateriaController.create);

// Rota POST /baterias/:id/desativar
router.post('/:id/desativar', bateriaController.desativar);

// Exporta o roteador para ser usado no app principal
module.exports = router;

// Este arquivo define as rotas para gerenciar baterias