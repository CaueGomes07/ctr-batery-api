
const express = require('express');
const router = express.Router();
const viewController = require('../controllers/view.controller');

// Endpoint para consultar baterias com mais de 3 anos de uso (alerta)
router.get('/baterias/alerta-tres-anos', viewController.getBateriasAlertaTresAnos);

// Endpoint para listar baterias que precisam ser repostas (vencidas ou >4 anos)
router.get('/baterias/para-repor', viewController.getBateriasParaRepor);

// Endpoint para consultar baterias vencidas (mais de 5 anos)
router.get('/baterias/vencidas', viewController.getBateriasVencidas);

// Endpoint para obter a quantidade de baterias vencidas agrupadas por marca
router.get('/baterias/vencidas-por-marca', viewController.getBateriasVencidasPorMarca);

// Endpoint para obter a quantidade total de baterias por torre
router.get('/baterias/total-por-torre', viewController.getTotalBateriasPorTorre);

// Exporta as rotas para serem usadas no app principal
module.exports = router;