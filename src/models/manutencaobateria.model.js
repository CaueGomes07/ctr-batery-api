const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ManutencaoBateria = sequelize.define('ManutencaoBateria', {
    idManutencao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idBateria: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data_manutencao: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    tipo_manutencao: {
        type: DataTypes.ENUM('Preventiva', 'Corretiva', 'Substituicao'),
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'ManutencaoBateria',
    timestamps: false
});

module.exports = ManutencaoBateria;
