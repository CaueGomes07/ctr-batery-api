// Carrega variáveis de ambiente do arquivo .env
require('dotenv').config();

// Importa o app Express configurado
const app = require('./app');

// Importa a instância do Sequelize (conexão com banco)
const sequelize = require('./config/database');

// Define a porta (padrão 3000)
const PORT = process.env.PORT || 3000;

// Testa conexão com o banco antes de subir o servidor
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco estabelecida');

        // Inicia o servidor Express
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Erro ao conectar no banco:', err);
    });
