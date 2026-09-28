const MODULOS = new Set([
  'alunos', 'professores', 'turmas', 'cursos', 'disciplinas',
  'matriculas', 'responsaveis', 'avaliacoes', 'coordenadores', 'boletins'
]);

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      'cache-control': 'no-store',
      'access-control-allow-origin': '*',
      'access-control-allow-headers': 'content-type',
      'access-control-allow-methods': 'GET,POST,PUT,DELETE,OPTIONS'
    }
  });
}

function validarModulo(modulo) {
  return MODULOS.has(modulo);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS' && url.pathname.startsWith('/api/')) {
      return json({}, 204);
    }

    if (!url.pathname.startsWith('/api/')) {
      return env.ASSETS.fetch(request);
    }

    try {
      const partes = url.pathname.split('/').filter(Boolean);
      const modulo = partes[1];
      const id = partes[2] ? decodeURIComponent(partes[2]) : null;

      if (!validarModulo(modulo)) {
        return json({ erro: 'Módulo inválido.' }, 404);
      }

      if (request.method === 'GET' && !id) {
        const { results } = await env.DB.prepare(
          'SELECT id, dados FROM registros WHERE modulo = ? ORDER BY criado_em ASC'
        ).bind(modulo).all();

        return json(results.map((r) => ({ ...JSON.parse(r.dados), id: r.id })));
      }

      if (request.method === 'POST' && !id) {
        const dados = await request.json();
        const novoId = crypto.randomUUID();
        const registro = { ...dados, id: novoId };
        await env.DB.prepare(
          'INSERT INTO registros (modulo, id, dados) VALUES (?, ?, ?)'
        ).bind(modulo, novoId, JSON.stringify(registro)).run();
        return json(registro, 201);
      }

      if (request.method === 'PUT' && id) {
        const dados = await request.json();
        const registro = { ...dados, id };
        const resultado = await env.DB.prepare(
          'UPDATE registros SET dados = ?, atualizado_em = CURRENT_TIMESTAMP WHERE modulo = ? AND id = ?'
        ).bind(JSON.stringify(registro), modulo, id).run();
        if (!resultado.meta.changes) return json({ erro: 'Registro não encontrado.' }, 404);
        return json(registro);
      }

      if (request.method === 'DELETE' && id) {
        const resultado = await env.DB.prepare(
          'DELETE FROM registros WHERE modulo = ? AND id = ?'
        ).bind(modulo, id).run();
        if (!resultado.meta.changes) return json({ erro: 'Registro não encontrado.' }, 404);
        return json({ ok: true });
      }

      return json({ erro: 'Método não permitido.' }, 405);
    } catch (erro) {
      return json({ erro: erro?.message || 'Erro interno da API.' }, 500);
    }
  }
};
