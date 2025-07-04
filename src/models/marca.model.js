
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Marca = sequelize.define('Marca', {
    idMarca: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeMarca: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'Marca',
    timestamps: false
});

module.exports = Marca;
