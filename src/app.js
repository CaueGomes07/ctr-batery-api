
// Importa e inicializa o framework Express
const express = require('express');

// Cria uma instância do Express
const app = express();

// Middleware para entender JSON no corpo das requisições
app.use(express.json());

// Rotas das entidades do sistema 
// Importa e usa as rotas de torre, prefixadas em /torres
const torreRoutes = require('./routes/torre.routes');
app.use('/api/torres', torreRoutes);

// Importa e usa as rotas de banco de baterias, prefixadas em /bancos
const bancoBateriaRoutes = require('./routes/bancobateria.routes');
app.use('/api/bancos', bancoBateriaRoutes);

// Importa e usa as rotas de bateria, prefixadas em /baterias
const bateriaRoutes = require('./routes/bateria.routes');
app.use('/api/baterias', bateriaRoutes);

// Importa e usa as rotas de manutenção de bateria, prefixadas em /manutencao-baterias
const manutencaoBateriaRoutes = require('./routes/manutencaobateria.routes');
app.use('/api/manutencoes', manutencaoBateriaRoutes);

// Importa e usa as rotas de pedidos de bateria, prefixadas em /pedidos-bateria
const pedidoBateriaRoutes = require('./routes/pedidobateria.routes');
app.use('/api/pedidos', pedidoBateriaRoutes);

// Importa e usa as rotas de marcas, prefixadas em /marcas
const marcaRoutes = require('./routes/marca.routes');
app.use('/api/marcas', marcaRoutes);

// Importa e usa as rotas de endereços, prefixadas em /enderecos
const enderecoRoutes = require('./routes/endereco.routes');
app.use('/api/enderecos', enderecoRoutes);

// Importa e usa as rotas de baterias desativadas, prefixadas em /baterias-desativadas
const bateriaDesativadaRoutes = require('./routes/bateriadesativada.routes');
app.use('/api/baterias-desativadas', bateriaDesativadaRoutes);

// Rotas de views
const viewRoutes = require('./routes/view.routes');
app.use('/api/views', viewRoutes);

// Exporta o app para ser usado pelo server.js
module.exports = app;