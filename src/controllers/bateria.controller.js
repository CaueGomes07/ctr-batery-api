

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

// GET /baterias/:id
// Busca uma bateria pelo ID
const getById = async (req, res) => {
  try {
    const bateria = await Bateria.findByPk(req.params.id);
    if (!bateria) return res.status(404).json({ error: 'Bateria não encontrada' }); // Se não encontrar, retorna 404
    return res.json(bateria);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar bateria', details: error.message }); // Se ocorrer um erro, retorna 500 com mensagem de erro
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

// PUT /baterias/:id
// Atualiza uma bateria existente com os dados enviados no corpo da requisição
const update = async (req, res) => {
  try {
    const { descricao, modelo, situacao } = req.body;
    const bateria = await Bateria.findByPk(req.params.id);
    if (!bateria) return res.status(404).json({ error: 'Bateria não encontrada' }); // Se não encontrar, retorna 404

    await bateria.update({ descricao, modelo, situacao });
    return res.json({ message: 'Bateria atualizada com sucesso', bateria }); // Retorna a bateria atualizada
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar bateria', details: error.message }); // Se ocorrer um erro, retorna 500 com mensagem de erro
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

        res.status(200).json({ message: 'Bateria desativada com sucesso' }); // Retorna mensagem de sucesso
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao desativar bateria' }); // Se ocorrer um erro, retorna 500 com mensagem de erro
    }
};

// DELETE /baterias/:id → soft-delete via procedure
const softDelete = async (req, res) => {
  try {
    const { descricao } = req.body;
    if (!descricao) return res.status(400).json({ error: 'Descrição obrigatória para desativação' }); // Verifica se a descrição foi enviada

    const bateria = await Bateria.findByPk(req.params.id);
    if (!bateria) return res.status(404).json({ error: 'Bateria não encontrada' }); // Se não encontrar, retorna 404

    await sequelize.query('CALL desativar_bateria(:id, :desc)', {
      replacements: { id: req.params.id, desc: descricao },
    });

    return res.json({ message: 'Bateria desativada com sucesso' }); 
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao desativar bateria', details: error.message }); // Se ocorrer um erro, retorna 500 com mensagem de erro
  }
};

// Exporta as funções para uso nas rotas
module.exports = { getAll, getById, create, update, desativar, softDelete };

