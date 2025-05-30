const express = require('express');
const cors = require('cors');
const app = express();
const usersRoutes = require('./routes/users');

app.use(cors());
app.use(express.json());
app.use('/api/usuarios', usersRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
