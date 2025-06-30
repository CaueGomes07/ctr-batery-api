require('dotenv').config();

const sequelize = require('./config/database');

sequelize.authenticate()
    .then(() => console.log('Conexão com o banco estabelecida'))
    .catch(err => console.error('Erro ao conectar no banco:', err));
