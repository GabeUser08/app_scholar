# App Scholar — Cloudflare

Este projeto foi ajustado para publicar frontend + API no mesmo Cloudflare Worker.
O frontend Expo Web vira arquivos estáticos em `dist/`; o Worker atende `/api/*`; o banco é Cloudflare D1.

## 1. Instalar

```bash
npm install
npx wrangler login
```

## 2. Criar o banco D1

```bash
npx wrangler d1 create app-scholar-db
```

Copie o `database_id` retornado e substitua `COLOQUE_O_DATABASE_ID_AQUI` em `wrangler.jsonc`.

## 3. Criar a tabela

```bash
npx wrangler d1 execute app-scholar-db --remote --file=./schema.sql
```

## 4. Publicar

```bash
npm run cf:deploy
```

O mesmo domínio publicado pelo Worker entrega o app e a API. Não precisa configurar URL externa no frontend: ele usa `/api`.

## Desenvolvimento

```bash
npm run build
npx wrangler d1 execute app-scholar-db --local --file=./schema.sql
npx wrangler dev
```

## Importante sobre os arquivos antigos

Os PHP e o dump MySQL original foram movidos para `legacy-php/`. Cloudflare Workers não executa PHP e D1 não é MySQL/MariaDB. Além disso, a tela do app possui campos e módulos que não correspondem diretamente ao esquema MySQL original. Por isso a versão Cloudflare usa uma tabela D1 de registros JSON, preservando os campos que o app realmente envia.
