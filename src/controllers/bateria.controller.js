

const Bateria = require('../models/bateria.model');
// Importa o modelo Bateria

const sequelize = require('../config/database'); // Importa a instância do Sequelize


// Lista todas as baterias
const getAll = async (req, res) => {
    try {
        const baterias = await Bateria.findAll(); // Busca todas as baterias
        res.json(baterias); // Retorna como JSON
    } catch (err) {
        console.error(err);
        // Se ocorrer um erro, retorna status 500 com mensagem de erro
        res.status(500).json({ error: 'Erro ao buscar baterias' });
    }
};
// Cria uma nova bateria com os dados enviados no corpo da requisição
const create = async (req, res) => {
    try {
        const novaBateria = await Bateria.create(req.body); // Cria bateria no banco
        res.status(201).json(novaBateria); // Retorna a nova bateria criada
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar bateria' });
    }
};


// Desativa uma bateria via procedure MySQL
const desativar = async (req, res) => {
    const idBateria = req.params.id;
    const { descricao } = req.body;

    try {
        await sequelize.query('CALL desativar_bateria(:id, :descricao)', {
            replacements: { id: idBateria, descricao }
        });

        res.status(200).json({ message: 'Bateria desativada com sucesso' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao desativar bateria' });
    }
};

module.exports = { getAll, create, desativar };

// Exporta as funções para uso nas rotas
//module.exports = { getAll, create };
