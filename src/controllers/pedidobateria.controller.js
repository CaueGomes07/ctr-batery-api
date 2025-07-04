

const PedidoBateria = require ('../models/pedidobateria.model');

// Lista todos os pedidos de bateria
const getAll = async (req, res) => {
    try {
        const pedidos = await PedidoBateria.findAll();
        res.status(200).json(pedidos);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao listar pedidos de bateria'});
    }
};

// Cria um novo pedido de bateria
const create = async (req, res) => {
    try {
        const novoPedido = await PedidoBateria.create(req.body);
        res.status(201).json(novoPedido);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar pedido de bateria' });
    }
};

// exporta os métodos do controlador
module.exports = { getAll, create};