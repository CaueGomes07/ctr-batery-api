const express = require('express');
const router = express.Router();
// Importa o controlador de baterias desativadas
const controller = require('../controllers/bateriadesativada.controller');

// Define a rota para obter todas as baterias desativadas
router.get('/', controller.getAll);

// Exporta o roteador para ser usado no app principal
module.exports = router;
