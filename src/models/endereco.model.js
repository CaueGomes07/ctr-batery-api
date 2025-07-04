const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Endereco = sequelize.define('Endereco', {
    idEndereco: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rua: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    numero: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    complemento: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    bairro: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    estado: {
        type: DataTypes.CHAR(2),
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    localizacaoLink: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'Endereco',
    timestamps: false
});

module.exports = Endereco;
