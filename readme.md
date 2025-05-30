
# Aplicação Web de Cadastro de Usuários

Esta é uma aplicação fullstack com **React no frontend**, **Node.js no backend** e **PostgreSQL como banco de dados**.
Ela permite que usuários insiram seus dados pessoais e sua pretensão de curso (tecnólogo ou bacharel) para cadastro.

---

## 📁 Estrutura do Projeto

```
Web_Work/
├── backend/
│   ├── routes/
│   │   └── users.js
│   ├── index.js
│   ├── db.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── Form.js
│   │   └── App.js
│   └── package.json
└── README.md
```

---

## 🚀 Tecnologias Utilizadas

- Frontend: React (com axios)
- Backend: Node.js + Express + pg
- Banco de dados: PostgreSQL
- Comunicação HTTP: REST API
- Ferramentas: VSCode, Postman, pgAdmin

---

## 🛠️ Pré-requisitos

- Node.js (v18+)
- PostgreSQL (v13+)
- npm ou yarn

---

## 🐘 Configuração do PostgreSQL

Crie um banco de dados chamado:

```
devops_work
```

Depois crie a tabela executando no pgAdmin ou terminal SQL:

```sql
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  idade INT,
  localizacao VARCHAR(100),
  pretensao VARCHAR(20)
);
```

Usuário padrão do banco:

- user: `postgres`
- senha: `junior`
- host: `localhost`
- porta: `5432`

---

## 🔧 Como rodar o projeto localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd Web_Work
```

### 2. Rodar o backend

```bash
cd backend
npm install
cp .env.example .env  # ou crie manualmente .env com as variáveis abaixo

# Conteúdo do .env
DB_USER=postgres
DB_PASSWORD=junior
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=devops_work

node index.js

npm start 
```

Você deve ver:
```
Servidor rodando em http://localhost:5000
Conectado ao banco de dados PostgreSQL
```

### 3. Rodar o frontend

```bash
cd ../frontend
npm install
npm start
```

A aplicação será aberta automaticamente em: `http://localhost:3000`

---

## 📷 Captura de tela

> Formulário simples com campos: Nome, Idade, Localização e Pretensão (tecnólogo/bacharel), com botão para salvar.

---

## 📦 Build para produção

```bash
cd frontend
npm run build
```

Os arquivos estáticos prontos estarão em `frontend/build/`.

---

## ✅ Teste da API (Opcional)

Você pode testar com `Postman` ou `curl`:

```bash
curl -X POST http://localhost:5000/api/usuarios   -H "Content-Type: application/json"   -d '{"nome":"Ana","idade":22,"localizacao":"SP","pretensao":"tecnologo"}'
```

---

## 🙋‍♂️ Autor

Projeto criado por [Edilson].

---

## 📝 Licença

Este projeto está sob a licença MIT.
