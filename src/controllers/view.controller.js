// src/controllers/view.controller.js
const sequelize = require('../config/database');

/**
 * Função genérica para consultar qualquer view SQL via Sequelize.
 * Utiliza sequelize.query() para executar um SELECT direto sobre a view.
 * 
 * @param {string} viewName - Nome da view a ser consultada.
 * @param {object} res - Objeto de resposta do Express para retornar o resultado ou erro.
 */
async function consultarView(viewName, res) {
  try {
    // Executa a consulta direta na view
    const [result] = await sequelize.query(`SELECT * FROM ${viewName}`);
    res.status(200).json(result);
  } catch (error) {
    console.error(`Erro ao consultar ${viewName}:`, error);
    res.status(500).json({ error: 'Erro ao consultar a view.' }); // Erro genérico em caso de falha
  }
}

//Endpoint para consultar baterias com mais de 3 anos de uso (alerta).
exports.getBateriasAlertaTresAnos = (req, res) => {
  consultarView('baterias_alerta_tres_anos', res);
};

//Endpoint para consultar baterias vencidas (mais de 5 anos).
exports.getBateriasVencidas = (req, res) => {
  consultarView('view_baterias_vencidas', res);
};

//Endpoint para listar baterias que precisam ser repostas (vencidas ou >4 anos).
exports.getBateriasParaRepor = (req, res) => {
  consultarView('baterias_para_repor', res);
};


//Endpoint para obter a quantidade de baterias vencidas agrupadas por marca. 
exports.getBateriasVencidasPorMarca = (req, res) => {
  consultarView('baterias_vencidas_por_marca', res);
};

//Endpoint para obter a quantidade total de baterias por torre.
exports.getTotalBateriasPorTorre = (req, res) => {
  consultarView('total_baterias_por_torre', res);
};
