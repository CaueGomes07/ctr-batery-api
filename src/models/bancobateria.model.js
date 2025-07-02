// src/models/bancobateria.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BancoBateria = sequelize.define('BancoBateria', {
    idBancoBateria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeBanco: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    tensaoBanco: {
        type: DataTypes.ENUM('12v', '24v', '48v'),
        allowNull: false
    },
    qtdBaterias: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idTorre: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'BancoBateria',
    timestamps: false
});

module.exports = BancoBateria;
// Associações podem ser definidas aqui, se necessário
// Por exemplo, se BancoBateria tiver uma relação com Torre:
// BancoBateria.belongsTo(Torre, { foreignKey: 'idTorre', as: 'torre' });
