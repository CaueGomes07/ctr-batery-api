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

// Atualiza uma torre existente com os dados enviados no corpo da requisição
const update = async (req, res) => {
     try {
    const torre = await Torre.findByPk(req.params.id);
    if (!torre) return res.status(404).json({ error: 'Torre não encontrada' });

    await torre.update(req.body);
    return res.json({ message: 'Torre atualizada com sucesso', torre });
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao atualizar torre', details: err.message });
  }
};

// DELETE /torres/:id
const del = async (req, res) => {
  try {
    const torre = await Torre.findByPk(req.params.id);
    if (!torre) return res.status(404).json({ error: 'Torre não encontrada' });

    await torre.destroy(); // cascade em bancos, baterias, pedidos
    return res.json({ message: 'Torre removida com sucesso' });
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao remover torre', details: err.message });
  }
};


// Exporta as funções para uso nas rotas
module.exports = { getAll, create, update, del };