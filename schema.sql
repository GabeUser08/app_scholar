CREATE TABLE IF NOT EXISTS registros (
  modulo TEXT NOT NULL,
  id TEXT NOT NULL,
  dados TEXT NOT NULL,
  criado_em TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  atualizado_em TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (modulo, id)
);

CREATE INDEX IF NOT EXISTS idx_registros_modulo ON registros(modulo);
