const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define o modelo PedidoBateria
const PedidoBateria = sequelize.define('PedidoBateria', {
    idPedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idTorre: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data_pedido: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Solicitado', 'Recebido', 'Cancelado'),
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'PedidoBateria',
    timestamps: false
});


module.exports = PedidoBateria;
