
const Endereco = require('../models/endereco.model');

// Lista todos os endereços
const getAll = async (req, res) => {
    try {
        const enderecos = await Endereco.findAll();
        res.status(200).json(enderecos);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao listar endereços' });
    }
};

// Cria um novo endereço
const create = async (req, res) => {
    try {
        const novoEndereco = await Endereco.create(req.body);
        res.status(201).json(novoEndereco);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar endereço' });
    }
};


// Exporta os métodos do controlador
module.exports = { getAll, create };