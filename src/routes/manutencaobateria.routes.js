


const express = require('express');

// Cria um roteador Express
const router = express.Router();

// Importa o controlador de manutenção de bateria
const manutencaoBateriaController = require('../controllers/manutencaobateria.controller');

// Rota GET /manutencao-baterias
router.get('/', manutencaoBateriaController.getAll);

// Rota POST /manutencao-baterias
router.post('/', manutencaoBateriaController.create);

// Exporta o roteador para ser usado no app principal
module.exports = router;

// Este arquivo define as rotas para gerenciar manutenções de baterias