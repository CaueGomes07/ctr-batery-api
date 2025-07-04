

const ManutencaoBateria = require('../models/manutencaobateria.model');
// Importa o modelo ManutencaoBateria

// Lista todas as manutenções de baterias
const getAll = async (req, res) => {
    try {
        const manutencoes = await ManutencaoBateria.findAll(); // Busca todas as manutenções
        res.json(manutencoes); // Retorna como JSON
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar manutenções de baterias' });
    }
};

// Cria uma nova manutenção de bateria com os dados enviados no corpo da requisição
const create = async (req, res) => {
    try {
        const novaManutencao = await ManutencaoBateria.create(req.body); // Cria manutenção no banco
        res.status(201).json(novaManutencao); // Retorna a nova manutenção criada
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar manutenção de bateria' });
    }
};

// Exporta as funções para uso nas rotas
module.exports = { getAll, create };