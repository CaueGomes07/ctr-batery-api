
const express = require('express');

// Cria um roteador Express
const router = express.Router();

// Importa o controlador de baterias
const bateriaController = require('../controllers/bateria.controller');

// Rota GET /baterias
router.get('/', bateriaController.getAll);

// Rota GET /baterias/:id
router.get('/:id', bateriaController.getById);

// Rota POST /baterias
router.post('/', bateriaController.create);

// Rota POST /baterias/:id/desativar
router.post('/:id/desativar', bateriaController.desativar);

// Rota PUT /baterias/:id
router.put('/:id', bateriaController.update);

// Rota DELETE /baterias/:id
router.delete('/:id', bateriaController.softDelete);


// Exporta o roteador para ser usado no app principal
module.exports = router;

// Este arquivo define as rotas para gerenciar baterias