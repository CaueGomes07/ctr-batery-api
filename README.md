# 📦 Projeto: Controle Operacional de Bancos de Baterias

Este projeto é um sistema completo para gerenciamento de bancos de baterias em torres de telecomunicações, construído com **Node.js**, **Express**, **Sequelize** e **MySQL**.

---

## ✅ Funcionalidades Implementadas até Aqui

### 🗂️ Entidades e CRUD básico
- **Torre**: GET, POST
- **Banco de Baterias**: GET, POST
- **Bateria**: GET, POST
- **Bateria Desativada**: GET
- **Marca**: GET, POST
- **Endereço**: GET, POST
- **Manutenção de Bateria**: GET, POST
- **Pedido de Bateria**: GET, POST

### ⚙️ Funcionalidades especiais
- **Desativar bateria** via procedure (`POST /baterias/:id/desativar`)
  - Executa `CALL desativar_bateria(id, descricao)`
  - Move a bateria para a tabela de histórico `BateriaDesativada`
- **Conexão segura via Sequelize**
- **Estrutura organizada por camadas** (controllers, routes, models, config)

---

## 📁 Estrutura de diretórios

```
src/
├── controllers/       # Lógica de negócios
├── models/            # Models Sequelize (tabelas)
├── routes/            # Endpoints Express
├── config/            # Configuração do Sequelize/MySQL
├── app.js             # Inicializa o Express e aplica rotas
├── server.js          # Inicializa o servidor após conexão com banco
```

---

## 🧪 Testes e Integrações Realizadas

- Testes manuais via Postman para todos os endpoints
- Banco populado com registros iniciais de `Torre`, `Endereco`, `Marca`
- CRUD testado com sucesso (criação, listagem)
- Testes de integridade com chaves estrangeiras (validação de `idTorre`, `idMarca` etc.)

---

## 🔄 Próximos Passos

- Criar endpoints de leitura para **views SQL** operacionais:
  - `/baterias/alerta-tres-anos`
  - `/baterias/vencidas`
  - `/baterias/para-repor`
  - `/relatorios/baterias-vencidas-por-marca`
- Criar endpoint `GET /baterias/:id`
- Implementar `PUT` e `DELETE` onde aplicável
- Documentar API com Swagger
- Adicionar autenticação JWT e controle de usuários (futuro)

---

## 🧠 Aprendizados e Padrões Aplicados

- Organização modular com Express
- Uso eficiente de Sequelize para CRUD e procedures
- Separação clara entre camadas de rota, controle e modelo
- Implementação segura de chamadas diretas ao MySQL (`sequelize.query`)
- Uso de `.env` e `dotenv` para variáveis de ambiente
- Uso de `git branch` para desenvolvimento incremental (`feature/primeira-rota`, etc.)

---

## 📚 Dependências principais

- express
- sequelize
- mysql2
- dotenv
- nodemon (dev)
- jest (dev)

---

Pronto para evoluir o sistema com endpoints para views, autenticação e testes automatizados.
