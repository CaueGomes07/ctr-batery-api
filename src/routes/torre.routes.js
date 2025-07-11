
const express = require('express');

// Cria um roteador Express
const router = express.Router();

// Importa o controlador de torres
const torreController = require('../controllers/torre.controller');

// Rota GET /torres
router.get('/', torreController.getAll);

// Rota POST /torres
router.post('/', torreController.create);

// Rota GET /torres/:id
//router.get('/:id', torreController.getById);

// Rota PUT /torres/:id
router.put('/:id', torreController.update);

// Rota DELETE /torres/:id
router.delete('/:id', torreController.del);

// // Rota POST /torres/:id/desativar
// router.post('/:id/desativar', torreController.desativar);

// // Rota POST /torres/:id/reativar
// router.post('/:id/reativar', torreController.reativar);



// Exporta o roteador para ser usado no app principal
module.exports = router;
