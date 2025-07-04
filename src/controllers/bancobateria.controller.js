const BancoBateria = require('../models/bancobateria.model');

// Lista todos os bancos de baterias
const getAll = async (req, res) => {
    try {
        const bancos = await BancoBateria.findAll();
        res.json(bancos);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar bancos de baterias' });
    }
};

// Cria um novo banco de baterias
const create = async (req, res) => {
    try {
        const novoBanco = await BancoBateria.create(req.body);
        res.status(201).json(novoBanco);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar banco de baterias' });
    }
};

module.exports = { getAll, create };
