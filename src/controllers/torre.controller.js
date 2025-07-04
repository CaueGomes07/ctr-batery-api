const Torre = require('../models/torre.model');

// Retorna todas as torres do banco de dados
const getAll = async (req, res) => {
    try {
        const torres = await Torre.findAll(); // Busca todas as torres
        res.json(torres); // Retorna como JSON
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar torres' });
    }
};

// Cria uma nova torre com os dados enviados no corpo da requisição
const create = async (req, res) => {
    try {
        const novaTorre = await Torre.create(req.body); // Cria torre no banco
        res.status(201).json(novaTorre); // Retorna a nova torre criada
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar torre' });
    }
};

// Exporta as funções para uso nas rotas
module.exports = { getAll, create };