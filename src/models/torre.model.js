// src/models/torre.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define o modelo Torre que representa a tabela Torre no banco de dados
const Torre = sequelize.define('Torre', {
    // ID da torre (chave primária, auto incremento)
    idTorre: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Nome da torre (campo obrigatório e único)
    nomeTorre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    // Referência para o ID do endereço
    idEndereco: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'Torre', // Nome da tabela no banco
    timestamps: false   // Não usa campos createdAt e updatedAt
});

// Exporta o modelo para uso em controllers e serviços
module.exports = Torre;
