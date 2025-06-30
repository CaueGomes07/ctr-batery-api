// Controller para gerenciar operações relacionadas a Torres

// Retorna a lista de todas as torres (futuramente vamos conectar com o banco de dados)
const getAll = (req, res) => {
    res.send('Listar todas as torres');
};

// Cria uma nova torre (por enquanto apenas retorna uma mensagem)
const create = (req, res) => {
    res.send('Criar nova torre');
};

// Exporta as funções para serem usadas nas rotas
module.exports = { getAll, create };