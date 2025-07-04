const express = require('express');
const router = express.Router();
const bancoController = require('../controllers/bancobateria.controller');

// Rota GET para listar todos os bancos de baterias
router.get('/', bancoController.getAll);

// Rota POST para criar um novo banco de baterias
router.post('/', bancoController.create);

module.exports = router;

