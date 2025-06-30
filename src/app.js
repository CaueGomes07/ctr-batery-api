
// Importa e inicializa o framework Express
const express = require('express');

// Cria uma instância do Express
const app = express();

// Middleware para entender JSON no corpo das requisições
app.use(express.json());

// Importa e usa as rotas de torre, prefixadas em /torres
const torreRoutes = require('./routes/torre.routes');
app.use('/torres', torreRoutes);

// Exporta o app para ser usado pelo server.js
module.exports = app;