CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  idade INT,
  localizacao VARCHAR(100),
  pretensao VARCHAR(20)
);
