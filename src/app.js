
// Importa e inicializa o framework Express
const express = require('express');

// Cria uma instância do Express
const app = express();

// Middleware para entender JSON no corpo das requisições
app.use(express.json());

// Importa e usa as rotas de torre, prefixadas em /torres
const torreRoutes = require('./routes/torre.routes');
app.use('/torres', torreRoutes);

// Importa e usa as rotas de banco de baterias, prefixadas em /bancos
const bancoBateriaRoutes = require('./routes/bancobateria.routes');
app.use('/bancos', bancoBateriaRoutes);

// Importa e usa as rotas de bateria, prefixadas em /baterias
const bateriaRoutes = require('./routes/bateria.routes');
app.use('/baterias', bateriaRoutes);

// Importa e usa as rotas de manutenção de bateria, prefixadas em /manutencao-baterias
const manutencaoBateriaRoutes = require('./routes/manutencaobateria.routes');
app.use('/manutencoes', manutencaoBateriaRoutes);

// Importa e usa as rotas de pedidos de bateria, prefixadas em /pedidos-bateria
const pedidoBateriaRoutes = require('./routes/pedidobateria.routes');
app.use('/pedidos', pedidoBateriaRoutes);

// Importa e usa as rotas de marcas, prefixadas em /marcas
const marcaRoutes = require('./routes/marca.routes');
app.use('/marcas', marcaRoutes);

// Importa e usa as rotas de endereços, prefixadas em /enderecos
const enderecoRoutes = require('./routes/endereco.routes');
app.use('/enderecos', enderecoRoutes);

// Importa e usa as rotas de baterias desativadas, prefixadas em /baterias-desativadas
const bateriaDesativadaRoutes = require('./routes/bateriadesativada.routes');
app.use('/baterias-desativadas', bateriaDesativadaRoutes);



// Exporta o app para ser usado pelo server.js
module.exports = app;