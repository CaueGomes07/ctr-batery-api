const BateriaDesativada = require('../models/bateriadesativada.model');

// Lista todas as baterias desativadas
const getAll = async (req, res) => {
    try {
        const historico = await BateriaDesativada.findAll();
        res.json(historico);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar baterias desativadas' });
    }
};

// Exporta as funções do controlador
module.exports = { getAll };
