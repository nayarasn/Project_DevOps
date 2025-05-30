const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { nome, idade, localizacao, pretensao } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO usuarios (nome, idade, localizacao, pretensao) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, idade, localizacao, pretensao]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao salvar no banco de dados' });
  }
});

module.exports = router;
