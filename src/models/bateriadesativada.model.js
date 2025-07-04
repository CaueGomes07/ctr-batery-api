const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BateriaDesativada = sequelize.define('BateriaDesativada', {
    idBateriaDesativada: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idBateriaOriginal: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idMarca: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    corrente: {
        type: DataTypes.ENUM(
            '40Ah', '50Ah', '60Ah', '70Ah', '75Ah', '80Ah', '90Ah',
            '100Ah', '110Ah', '120Ah', '135Ah', '150Ah', '165Ah',
            '180Ah', '200Ah', '220Ah', '240Ah', '260Ah', '280Ah', '300Ah'
        ),
        allowNull: false
    },
    data_fabricacao: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    data_servico: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    situacao: {
        type: DataTypes.ENUM('Defeito'),
        allowNull: false
    },
    idBancoBateria: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    data_migracao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'BateriaDesativada',
    timestamps: false
});

module.exports = BateriaDesativada;
