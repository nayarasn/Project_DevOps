# 📝 Aplicação Web de Cadastro de Curso

Esta é uma aplicação fullstack com **React no frontend**, **Node.js no backend** e **PostgreSQL como banco de dados**.

## ✅ Funcionalidades

- Cadastro de novos usuários com:
  - Nome
  - Idade
  - Localização
  - Tipo de curso: Tecnólogo ou Bacharel
- Armazenamento das informações no banco PostgreSQL
- Integração via API RESTful
- Interface simples e responsiva
- Deploy e execução via Docker Compose

---

## 📷 Captura de Tela

Tela de Cadastro[alt text](image.png)

---

## 📁 Estrutura do Projeto

```
Project_DevOps/
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

Depois, crie a tabela executando:

```sql
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  idade INT,
  localizacao VARCHAR(100),
  pretensao VARCHAR(20)
);
```

Variáveis padrão:

- DB_USER: `postgres`
- DB_PASSWORD: `nayara`
- DB_HOST: `localhost`
- DB_PORT: `5432`

---

## 🔧 Como rodar o projeto localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/nayarasn/Project_DevOps.git
cd Project_DevOps
```

### 2. Backend

```bash
cd backend
npm install

# Crie o .env:
echo "DB_USER=postgres
DB_PASSWORD=nayara
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=devops_work" > .env

npm start
```

Acesse: http://localhost:5000

### 3. Frontend

```bash
cd ../frontend
npm install
npm start
```

Acesse: http://localhost:3000

---

## 🐳 Rodando com Docker Compose

```bash
docker compose up -d
```

Acesse:
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)

Para parar os containers:

```bash
docker compose down
```

---

## 📦 Build para Produção

```bash
cd frontend
npm run build
```

---

## ✅ Teste da API

Via `curl`:

```bash
curl -X POST http://localhost:5000/api/usuarios \
  -H "Content-Type: application/json" \
  -d '{"nome":"Ana","idade":22,"localizacao":"SP","pretensao":"tecnologo"}'
```

---

## 👩‍💻 Autor

Projeto criado por **Nayara Santos** – [santosnay99@gmail.com](mailto:santosnay99@gmail.com)

---

## 📥 Download

Você pode baixar a aplicação clicando [aqui](https://github.com/nayarasn/Project_DevOps/archive/refs/heads/main.zip) *(link de exemplo do GitHub)*.

---

## 📝 Licença

Este projeto está sob a licença MIT.
