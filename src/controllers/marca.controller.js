

const Marca = require('../models/marca.model');

// Lista todas as marcas
const getAll = async (req, res) => {
    try {
        const marcas = await Marca.findAll();
        res.status(200).json(marcas);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao listar marcas' });
    }
}

// Cria uma nova marca
const create = async (req, res) => {
    try {
        const novaMarca = await Marca.create(req.body);
        res.status(201).json(novaMarca);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar marca' });
    }
}

// exporta os métodos do controlador
module.exports = { getAll, create };