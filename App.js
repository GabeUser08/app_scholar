import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';



const CORES = {
  principal: '#087E98',
  escuro: '#155E75',
  fundo: '#F2FAFC',
  texto: '#183B48',
  cinza: '#627D87',
  borda: '#D6E9EE',
  vermelho: '#B42335',
};



const MODULOS = [
  {
    chave: 'alunos',
    titulo: 'Alunos',
    singular: 'Aluno',
    nomeTela: 'Aluno',
    nomeConsulta: 'Alunos',
    campos: [
      { chave: 'nome', titulo: 'Nome completo', obrigatorio: true },
      {
        chave: 'nascimento',
        titulo: 'Data de nascimento',
        tipo: 'data',
        obrigatorio: true,
      },
      { chave: 'cpf', titulo: 'CPF', tipo: 'cpf', obrigatorio: true },
      { chave: 'ra', titulo: 'RA', obrigatorio: true },
      { chave: 'email', titulo: 'E-mail', tipo: 'email' },
      { chave: 'telefone', titulo: 'Telefone', tipo: 'telefone' },
      { chave: 'curso', titulo: 'Curso', lista: 'cursos', obrigatorio: true },
      { chave: 'turma', titulo: 'Turma', lista: 'turmas', obrigatorio: true },
    ],
  },
  {
    chave: 'professores',
    titulo: 'Professores',
    singular: 'Professor',
    nomeTela: 'Professor',
    nomeConsulta: 'Professores',
    campos: [
      { chave: 'nome', titulo: 'Nome completo', obrigatorio: true },
      {
        chave: 'nascimento',
        titulo: 'Data de nascimento',
        tipo: 'data',
        obrigatorio: true,
      },
      { chave: 'cpf', titulo: 'CPF', tipo: 'cpf', obrigatorio: true },
      { chave: 'email', titulo: 'E-mail', tipo: 'email', obrigatorio: true },
      { chave: 'telefone', titulo: 'Telefone', tipo: 'telefone' },
      {
        chave: 'atuacao',
        titulo: 'Disciplina / área de atuação',
        obrigatorio: true,
      },
      { chave: 'formacao', titulo: 'Formação', obrigatorio: true },
      {
        chave: 'admissao',
        titulo: 'Data de admissão',
        tipo: 'data',
        obrigatorio: true,
      },
    ],
  },
  {
    chave: 'turmas',
    titulo: 'Turmas',
    singular: 'Turma',
    nomeTela: 'Turma',
    nomeConsulta: 'Turmas',
    campos: [
      { chave: 'nome', titulo: 'Nome da turma', obrigatorio: true },
      { chave: 'curso', titulo: 'Curso', lista: 'cursos', obrigatorio: true },
      {
        chave: 'periodo',
        titulo: 'Período',
        opcoes: ['Manhã', 'Tarde', 'Noite', 'Integral'],
        obrigatorio: true,
      },
      {
        chave: 'turno',
        titulo: 'Turno',
        opcoes: ['Manhã', 'Tarde', 'Noite', 'Integral'],
        obrigatorio: true,
      },
      {
        chave: 'ano',
        titulo: 'Ano',
        tipo: 'numero',
        inteiro: true,
        minimo: 1900,
        maximo: 2200,
        obrigatorio: true,
      },
      {
        chave: 'capacidade',
        titulo: 'Capacidade de alunos',
        tipo: 'numero',
        inteiro: true,
        minimo: 1,
        obrigatorio: true,
      },
      {
        chave: 'professor',
        titulo: 'Professor responsável',
        lista: 'professores',
      },
      { chave: 'sala', titulo: 'Sala' },
      { chave: 'observacoes', titulo: 'Observações', tipo: 'textoLongo' },
    ],
  },
  {
    chave: 'cursos',
    titulo: 'Cursos',
    singular: 'Curso',
    nomeTela: 'Curso',
    nomeConsulta: 'Cursos',
    campos: [
      { chave: 'nome', titulo: 'Nome do curso', obrigatorio: true },
      {
        chave: 'area',
        titulo: 'Área',
        opcoes: [
          'Tecnologia da Informação',
          'Gestão',
          'Gestão de Pessoas',
          'Saúde',
          'Indústria',
          'Outra',
        ],
        obrigatorio: true,
      },
      { chave: 'descricao', titulo: 'Descrição', tipo: 'textoLongo' },
      { chave: 'duracao', titulo: 'Duração', obrigatorio: true },
      {
        chave: 'carga',
        titulo: 'Carga horária (horas)',
        tipo: 'numero',
        minimo: 1,
        obrigatorio: true,
      },
      {
        chave: 'modalidade',
        titulo: 'Modalidade',
        opcoes: ['Presencial', 'Semipresencial', 'A distância'],
        obrigatorio: true,
      },
      {
        chave: 'status',
        titulo: 'Status',
        opcoes: ['Ativo', 'Inativo'],
        obrigatorio: true,
      },
    ],
  },
  {
    chave: 'disciplinas',
    titulo: 'Disciplinas',
    singular: 'Disciplina',
    nomeTela: 'Disciplina',
    nomeConsulta: 'Disciplinas',
    campos: [
      { chave: 'nome', titulo: 'Nome da disciplina', obrigatorio: true },
      { chave: 'codigo', titulo: 'Código da disciplina', obrigatorio: true },
      { chave: 'curso', titulo: 'Curso', lista: 'cursos', obrigatorio: true },
      { chave: 'descricao', titulo: 'Descrição', tipo: 'textoLongo' },
      {
        chave: 'carga',
        titulo: 'Carga horária (horas)',
        tipo: 'numero',
        minimo: 1,
        obrigatorio: true,
      },
      {
        chave: 'professor',
        titulo: 'Professor responsável',
        lista: 'professores',
        obrigatorio: true,
      },
      {
        chave: 'status',
        titulo: 'Status',
        opcoes: ['Ativo', 'Inativo'],
        obrigatorio: true,
      },
    ],
  },
  {
    chave: 'matriculas',
    titulo: 'Matrículas',
    singular: 'Matrícula',
    nomeTela: 'Matricula',
    nomeConsulta: 'Matriculas',
    campos: [
      { chave: 'aluno', titulo: 'Aluno', lista: 'alunos', obrigatorio: true },
      { chave: 'turma', titulo: 'Turma', lista: 'turmas', obrigatorio: true },
      { chave: 'curso', titulo: 'Curso', lista: 'cursos', obrigatorio: true },
      {
        chave: 'data',
        titulo: 'Data da matrícula',
        tipo: 'data',
        obrigatorio: true,
      },
      {
        chave: 'ano',
        titulo: 'Ano letivo',
        tipo: 'numero',
        inteiro: true,
        minimo: 1900,
        maximo: 2200,
        obrigatorio: true,
      },
      {
        chave: 'situacao',
        titulo: 'Situação',
        opcoes: ['Ativa', 'Cancelada', 'Concluída', 'Trancada'],
        obrigatorio: true,
      },
      { chave: 'observacoes', titulo: 'Observações', tipo: 'textoLongo' },
    ],
  },
  {
    chave: 'responsaveis',
    titulo: 'Responsáveis',
    singular: 'Responsável',
    nomeTela: 'Responsavel',
    nomeConsulta: 'Responsaveis',
    campos: [
      { chave: 'nome', titulo: 'Nome completo', obrigatorio: true },
      { chave: 'cpf', titulo: 'CPF', tipo: 'cpf', obrigatorio: true },
      { chave: 'rg', titulo: 'RG' },
      {
        chave: 'telefone',
        titulo: 'Telefone',
        tipo: 'telefone',
        obrigatorio: true,
      },
      { chave: 'email', titulo: 'E-mail', tipo: 'email' },
      {
        chave: 'parentesco',
        titulo: 'Parentesco',
        opcoes: [
          'Mãe',
          'Pai',
          'Avó',
          'Avô',
          'Tia',
          'Tio',
          'Responsável legal',
          'Outro',
        ],
        obrigatorio: true,
      },
      { chave: 'endereco', titulo: 'Endereço', tipo: 'textoLongo' },
      { chave: 'observacoes', titulo: 'Observações', tipo: 'textoLongo' },
    ],
  },
  {
    chave: 'avaliacoes',
    titulo: 'Avaliações',
    singular: 'Avaliação',
    nomeTela: 'Avaliacao',
    nomeConsulta: 'Avaliacoes',
    campos: [
      { chave: 'aluno', titulo: 'Aluno', lista: 'alunos', obrigatorio: true },
      {
        chave: 'disciplina',
        titulo: 'Disciplina',
        lista: 'disciplinas',
        obrigatorio: true,
      },
      {
        chave: 'tipo',
        titulo: 'Tipo de avaliação',
        opcoes: ['Prova', 'Trabalho', 'Seminário', 'Atividade', 'Recuperação'],
        obrigatorio: true,
      },
      { chave: 'titulo', titulo: 'Título da avaliação', obrigatorio: true },
      {
        chave: 'data',
        titulo: 'Data da avaliação',
        tipo: 'data',
        obrigatorio: true,
      },
      {
        chave: 'maximo',
        titulo: 'Valor máximo',
        tipo: 'numero',
        minimo: 0.01,
        obrigatorio: true,
      },
      {
        chave: 'nota',
        titulo: 'Nota obtida',
        tipo: 'numero',
        minimo: 0,
        obrigatorio: true,
      },
      { chave: 'observacoes', titulo: 'Observações', tipo: 'textoLongo' },
    ],
  },
  {
    chave: 'coordenadores',
    titulo: 'Coordenadores',
    singular: 'Coordenador',
    nomeTela: 'Coordenador',
    nomeConsulta: 'Coordenadores',
    campos: [
      { chave: 'nome', titulo: 'Nome completo', obrigatorio: true },
      { chave: 'email', titulo: 'E-mail', tipo: 'email', obrigatorio: true },
      {
        chave: 'telefone',
        titulo: 'Telefone',
        tipo: 'telefone',
        obrigatorio: true,
      },
      {
        chave: 'departamento',
        titulo: 'Departamento',
        opcoes: [
          'Pedagógico',
          'Administrativo',
          'Tecnologia',
          'Coordenação de curso',
        ],
        obrigatorio: true,
      },
      {
        chave: 'admissao',
        titulo: 'Data de admissão',
        tipo: 'data',
        obrigatorio: true,
      },
      { chave: 'formacao', titulo: 'Formação' },
      { chave: 'observacoes', titulo: 'Observações', tipo: 'textoLongo' },
      {
        chave: 'status',
        titulo: 'Status',
        opcoes: ['Ativo', 'Inativo'],
        obrigatorio: true,
      },
    ],
  },
  {
    chave: 'boletins',
    titulo: 'Boletins',
    singular: 'Boletim',
    nomeTela: 'Boletim',
    nomeConsulta: 'Boletins',
    campos: [
      { chave: 'aluno', titulo: 'Aluno', lista: 'alunos', obrigatorio: true },
      { chave: 'turma', titulo: 'Turma', lista: 'turmas', obrigatorio: true },
      { chave: 'periodo', titulo: 'Período', obrigatorio: true },
      {
        chave: 'data',
        titulo: 'Data de emissão',
        tipo: 'data',
        obrigatorio: true,
      },
      {
        chave: 'media',
        titulo: 'Média geral',
        tipo: 'numero',
        minimo: 0,
        maximo: 10,
        obrigatorio: true,
      },
      {
        chave: 'justificadas',
        titulo: 'Faltas justificadas',
        tipo: 'numero',
        inteiro: true,
        minimo: 0,
      },
      {
        chave: 'faltas',
        titulo: 'Faltas não justificadas',
        tipo: 'numero',
        inteiro: true,
        minimo: 0,
      },
      { chave: 'observacoes', titulo: 'Observações', tipo: 'textoLongo' },
    ],
  },
];

// Telas de ini, sobre, consulta, cadastro e edição

const TELAS = {
  HomeScreen: { tipo: 'inicio', titulo: 'Início' },
  SobreScreen: { tipo: 'sobre', titulo: 'Sobre' },
};

for (const modulo of MODULOS) {
  modulo.cadastro = `Cadastro${modulo.nomeTela}Screen`;
  modulo.consulta = `Consulta${modulo.nomeConsulta}Screen`;
  modulo.edicao = `Editar${modulo.nomeTela}Screen`;

  TELAS[modulo.cadastro] = {
    tipo: 'formulario',
    titulo: `Cadastro de ${modulo.singular}`,
    modulo,
  };

  TELAS[modulo.consulta] = {
    tipo: 'lista',
    titulo: modulo.titulo,
    modulo,
  };

  TELAS[modulo.edicao] = {
    tipo: 'formulario',
    titulo: `Editar ${modulo.singular}`,
    modulo,
  };
}


function criarDadosVazios() {
  return {
    alunos: [],
    professores: [],
    turmas: [],
    cursos: [],
    disciplinas: [],
    matriculas: [],
    responsaveis: [],
    avaliacoes: [],
    coordenadores: [],
    boletins: [],
  };
}

// Funções auxiliar

function normalizarTexto(texto) {
  return String(texto ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function converterNumero(valor) {
  return Number(String(valor).replace(',', '.'));
}

function buscarNome(dados, lista, id) {
  const registro = dados[lista].find((item) => item.id === id);

  if (registro) {
    return registro.nome;
  }

  return '';
}

function mostrarValor(dados, campo, valor) {
  if (campo.lista) {
    return buscarNome(dados, campo.lista, valor);
  }

  return String(valor ?? '');
}

function tituloDoRegistro(dados, modulo, registro) {
  if (modulo.chave === 'avaliacoes') {
    return registro.titulo;
  }

  if (registro.aluno) {
    return buscarNome(dados, 'alunos', registro.aluno);
  }

  return registro.nome || modulo.singular;
}

function resumoDoRegistro(dados, modulo, registro) {
  const camposResumo = {
    alunos: ['ra', 'curso', 'turma'],
    professores: ['atuacao', 'email'],
    turmas: ['curso', 'turno', 'ano'],
    cursos: ['area', 'duracao', 'status'],
    disciplinas: ['codigo', 'curso', 'carga'],
    matriculas: ['turma', 'ano', 'situacao'],
    responsaveis: ['telefone', 'parentesco'],
    avaliacoes: ['aluno', 'disciplina', 'nota'],
    coordenadores: ['departamento', 'status'],
    boletins: ['turma', 'periodo', 'media'],
  };

  const partes = [];

  for (const chave of camposResumo[modulo.chave]) {
    const campo = modulo.campos.find((item) => item.chave === chave);
    const valor = mostrarValor(dados, campo, registro[chave]);

    if (valor) {
      partes.push(`${campo.titulo}: ${valor}`);
    }
  }

  return partes.join('\n');
}

function criarFormularioVazio(modulo) {
  const formulario = {};

  for (const campo of modulo.campos) {
    formulario[campo.chave] = '';
  }

  return formulario;
}

function tipoDeTeclado(campo) {
  if (campo.tipo === 'email') {
    return 'email-address';
  }

  if (campo.tipo === 'telefone') {
    return 'phone-pad';
  }

  if (campo.tipo === 'cpf') {
    return 'number-pad';
  }

  if (campo.tipo === 'numero') {
    return 'decimal-pad';
  }

  return 'default';
}

// Validações dos forme

function validarFormulario(modulo, valores, dados, idRegistro) {
  for (const campo of modulo.campos) {
    const valor = String(valores[campo.chave] ?? '').trim();

    if (campo.obrigatorio && !valor) {
      return `Preencha o campo: ${campo.titulo}.`;
    }

    if (!valor) {
      continue;
    }

    if (campo.lista) {
      const existe = dados[campo.lista].some((item) => item.id === valor);

      if (!existe) {
        return `Selecione uma opção válida em ${campo.titulo}.`;
      }
    }

    if (campo.opcoes && !campo.opcoes.includes(valor)) {
      return `Selecione uma opção válida em ${campo.titulo}.`;
    }

    if (campo.tipo === 'email') {
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);

      if (!emailValido) {
        return 'Digite um e-mail válido.';
      }
    }

    if (campo.tipo === 'cpf') {
      const numeros = valor.replace(/\D/g, '');

      if (numeros.length !== 11) {
        return 'O CPF deve ter 11 números.';
      }
    }

    if (campo.tipo === 'telefone') {
      const numeros = valor.replace(/\D/g, '');

      if (numeros.length !== 10 && numeros.length !== 11) {
        return 'Informe o telefone com DDD.';
      }
    }

    if (campo.tipo === 'numero') {
      const numero = converterNumero(valor);
      const formatoValido = /^\d+([.,]\d+)?$/.test(valor);

      if (!formatoValido || !Number.isFinite(numero)) {
        return `Digite um número válido em ${campo.titulo}.`;
      }

      if (campo.inteiro && !Number.isInteger(numero)) {
        return `${campo.titulo} deve ser um número inteiro.`;
      }

      if (campo.minimo !== undefined && numero < campo.minimo) {
        return `${campo.titulo} deve ser pelo menos ${campo.minimo}.`;
      }

      if (campo.maximo !== undefined && numero > campo.maximo) {
        return `${campo.titulo} deve ser no máximo ${campo.maximo}.`;
      }
    }

    if (campo.tipo === 'data') {
      const partes = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(valor);

      if (!partes) {
        return `Use dd/mm/aaaa em ${campo.titulo}.`;
      }

      const dia = Number(partes[1]);
      const mes = Number(partes[2]);
      const ano = Number(partes[3]);
      const data = new Date(ano, mes - 1, dia);

      const dataInvalida =
        ano < 1900 ||
        ano > 2200 ||
        data.getFullYear() !== ano ||
        data.getMonth() !== mes - 1 ||
        data.getDate() !== dia;

      if (dataInvalida) {
        return `Data inválida em ${campo.titulo}.`;
      }

      if (campo.chave === 'nascimento' && data > new Date()) {
        return 'A data de nascimento não pode estar no futuro.';
      }
    }
  }

  const turma = dados.turmas.find((item) => item.id === valores.turma);

  if (turma && valores.curso && turma.curso !== valores.curso) {
    return 'A turma selecionada pertence a outro curso.';
  }

  if (modulo.chave === 'avaliacoes') {
    const nota = converterNumero(valores.nota);
    const maximo = converterNumero(valores.maximo);

    if (nota > maximo) {
      return 'A nota não pode superar o valor máximo.';
    }
  }

  // nao deixa repetir umas coisas

  for (const chave of ['cpf', 'ra', 'codigo']) {
    if (!valores[chave]) {
      continue;
    }

    function prepararValor(valor) {
      if (chave === 'cpf') {
        return String(valor ?? '').replace(/\D/g, '');
      }

      return normalizarTexto(valor).trim();
    }

    const repetido = dados[modulo.chave].some((item) => {
      if (item.id === idRegistro) {
        return false;
      }

      return prepararValor(item[chave]) === prepararValor(valores[chave]);
    });

    if (repetido) {
      return `Já existe um registro com este ${chave.toUpperCase()}.`;
    }
  }

  if (modulo.chave === 'matriculas' && valores.situacao === 'Ativa') {
    const matriculaRepetida = dados.matriculas.some((item) => {
      return (
        item.id !== idRegistro &&
        item.aluno === valores.aluno &&
        item.turma === valores.turma &&
        item.ano === valores.ano &&
        item.situacao === 'Ativa'
      );
    });

    if (matriculaRepetida) {
      return 'Este aluno já tem uma matrícula ativa nesta turma e ano.';
    }
  }

  if (modulo.chave === 'boletins') {
    const boletimRepetido = dados.boletins.some((item) => {
      return (
        item.id !== idRegistro &&
        item.aluno === valores.aluno &&
        item.turma === valores.turma &&
        normalizarTexto(item.periodo).trim() ===
          normalizarTexto(valores.periodo).trim()
      );
    });

    if (boletimRepetido) {
      return 'Já existe um boletim deste aluno, turma e período.';
    }
  }

  // nao deixa trocar o bagulho

  if (modulo.chave === 'turmas' && idRegistro) {
    for (const lista of ['alunos', 'matriculas']) {
      const possuiVinculo = dados[lista].some((item) => {
        return item.turma === idRegistro && item.curso !== valores.curso;
      });

      if (possuiVinculo) {
        return 'Esta turma possui alunos ou matrículas vinculados ao curso atual.';
      }
    }
  }

  return '';
}

function verificarVinculos(dados, modulo, idRegistro) {
  for (const outroModulo of MODULOS) {
    for (const campo of outroModulo.campos) {
      if (campo.lista !== modulo.chave) {
        continue;
      }

      const possuiVinculo = dados[outroModulo.chave].some((item) => {
        return item[campo.chave] === idRegistro;
      });

      if (possuiVinculo) {
        return outroModulo.titulo;
      }
    }
  }

  return '';
}

// coisas la

function Botao({ texto, onPress, secundario, perigo, style }) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.75}
      onPress={onPress}
      style={[
        estilos.botao,
        secundario && estilos.botaoSecundario,
        perigo && estilos.botaoPerigo,
        style,
      ]}
    >
      <Text
        style={[
          estilos.textoBotao,
          secundario && estilos.textoBotaoSecundario,
        ]}
      >
        {texto}
      </Text>
    </TouchableOpacity>
  );
}

function Janela({ titulo, children, fechar, acoes }) {
  return (
    <Modal
      visible
      transparent
      animationType="fade"
      onRequestClose={fechar}
    >
      <View style={estilos.fundoModal}>
        <View style={estilos.janela} accessibilityViewIsModal>
          <View style={estilos.cabecalhoModal}>
            <Text style={estilos.tituloModal}>{titulo}</Text>

            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel="Fechar janela"
              onPress={fechar}
              style={estilos.fecharModal}
            >
              <Text style={estilos.textoFechar}>×</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={estilos.conteudoModal}
          >
            {children}
          </ScrollView>

          {acoes && (
            <View style={estilos.acoesModal}>
              {acoes}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}

function CampoFormulario({ campo, valor, alterar, valores, dados }) {
  const [aberto, setAberto] = useState(false);

  const temOpcoes = Boolean(campo.lista || campo.opcoes);
  let opcoes = [];

  if (campo.opcoes) {
    opcoes = campo.opcoes.map((item) => {
      return { valor: item, texto: item };
    });
  }

  if (campo.lista) {
    let registros = dados[campo.lista];

    if (campo.lista === 'turmas' && valores.curso) {
      registros = registros.filter((item) => item.curso === valores.curso);
    }

    opcoes = registros.map((item) => {
      return { valor: item.id, texto: item.nome };
    });
  }

  let textoSelecionado = '';

  if (temOpcoes) {
    const selecionado = opcoes.find((item) => item.valor === valor);

    if (selecionado) {
      textoSelecionado = selecionado.texto;
    }
  }

  function selecionar(novoValor) {
    alterar(novoValor);
    setAberto(false);
  }

  return (
    <View style={estilos.campo}>
      <Text style={estilos.rotulo}>
        {campo.titulo}
        {campo.obrigatorio ? ' *' : ' (opcional)'}
      </Text>

      {temOpcoes ? (
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={`Selecionar ${campo.titulo}`}
          onPress={() => setAberto(true)}
          style={estilos.seletor}
        >
          <Text
            style={[
              estilos.valorSeletor,
              !textoSelecionado && estilos.textoCinza,
            ]}
          >
            {textoSelecionado || 'Selecione'}
          </Text>

          <Text style={estilos.seta}>⌄</Text>
        </TouchableOpacity>
      ) : (
        <TextInput
          accessibilityLabel={campo.titulo}
          style={[
            estilos.entrada,
            campo.tipo === 'textoLongo' && estilos.entradaLonga,
          ]}
          value={String(valor ?? '')}
          onChangeText={alterar}
          placeholder={campo.tipo === 'data' ? 'dd/mm/aaaa' : campo.titulo}
          placeholderTextColor={CORES.cinza}
          multiline={campo.tipo === 'textoLongo'}
          textAlignVertical={campo.tipo === 'textoLongo' ? 'top' : 'center'}
          autoCapitalize={campo.tipo === 'email' ? 'none' : 'sentences'}
          autoCorrect={campo.tipo !== 'email'}
          keyboardType={tipoDeTeclado(campo)}
          maxLength={campo.tipo === 'textoLongo' ? 1000 : 180}
        />
      )}

      {aberto && (
        <Janela titulo={campo.titulo} fechar={() => setAberto(false)}>
          <TouchableOpacity
            accessibilityRole="button"
            style={estilos.opcao}
            onPress={() => selecionar('')}
          >
            <Text style={estilos.textoCinza}>Limpar seleção</Text>
          </TouchableOpacity>

          {opcoes.map((opcao) => (
            <TouchableOpacity
              accessibilityRole="button"
              key={opcao.valor}
              style={[
                estilos.opcao,
                opcao.valor === valor && estilos.opcaoSelecionada,
              ]}
              onPress={() => selecionar(opcao.valor)}
            >
              <Text style={estilos.texto}>
                {opcao.texto}
                {opcao.valor === valor ? ' ✓' : ''}
              </Text>
            </TouchableOpacity>
          ))}

          {opcoes.length === 0 && (
            <Text style={estilos.textoCinza}>
              Nenhuma opção disponível. Cadastre os registros relacionados
              primeiro.
            </Text>
          )}
        </Janela>
      )}
    </View>
  );
}

// Tela inicial.

function TelaInicio({ dados, navegar }) {
  return (
    <ScrollView contentContainerStyle={estilos.conteudo}>
      <Text style={estilos.nomeApp}>APP Scholar</Text>

      <View style={estilos.atalhos}>
        <Botao
          texto="Cadastrar aluno"
          onPress={() => navegar('CadastroAlunoScreen')}
          style={estilos.flex}
        />

        <Botao
          texto="Consultar alunos"
          secundario
          onPress={() => navegar('ConsultaAlunosScreen')}
          style={estilos.flex}
        />
      </View>

      <Text style={estilos.titulo}>Cadastros</Text>

      <View style={estilos.grade}>
        {MODULOS.map((modulo) => (
          <TouchableOpacity
            accessibilityRole="button"
            key={modulo.chave}
            activeOpacity={0.75}
            style={estilos.cartaoModulo}
            onPress={() => navegar(modulo.consulta)}
          >
            <Text style={estilos.nomeModulo}>{modulo.titulo}</Text>

            <Text style={estilos.quantidade}>
              {dados[modulo.chave].length} registros
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

// consulta

function TelaLista({
  modulo,
  dados,
  navegar,
  pedirExclusao,
  mostrarDetalhes,
}) {
  const [pesquisa, setPesquisa] = useState('');

  const textoPesquisado = normalizarTexto(pesquisa.trim());

  const registros = dados[modulo.chave].filter((registro) => {
    let textoDoRegistro = '';

    for (const campo of modulo.campos) {
      textoDoRegistro += mostrarValor(
        dados,
        campo,
        registro[campo.chave]
      );

      textoDoRegistro += ' ';
    }

    return normalizarTexto(textoDoRegistro).includes(textoPesquisado);
  });

  return (
    <ScrollView
      contentContainerStyle={estilos.conteudo}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={estilos.titulo}>{modulo.titulo}</Text>

      <TextInput
        accessibilityLabel={`Pesquisar ${modulo.titulo}`}
        style={[estilos.entrada, estilos.pesquisa]}
        placeholder="Pesquisar..."
        placeholderTextColor={CORES.cinza}
        value={pesquisa}
        onChangeText={setPesquisa}
      />

      <Botao
        texto={`Cadastrar ${modulo.singular}`}
        onPress={() => navegar(modulo.cadastro)}
      />

      <View style={estilos.lista}>
        {registros.map((registro) => (
          <View key={registro.id} style={estilos.cartaoRegistro}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel={`Editar ${tituloDoRegistro(
                dados,
                modulo,
                registro
              )}`}
              style={estilos.corpoRegistro}
              onPress={() => navegar(modulo.edicao, registro.id)}
            >
              <Text style={estilos.nomeRegistro}>
                {tituloDoRegistro(dados, modulo, registro)}
              </Text>

              <Text style={estilos.resumoRegistro}>
                {resumoDoRegistro(dados, modulo, registro)}
              </Text>
            </TouchableOpacity>

            <View style={estilos.acoesRegistro}>
              {['matriculas', 'boletins'].includes(modulo.chave) && (
                <TouchableOpacity
                  accessibilityRole="button"
                  style={estilos.acao}
                  onPress={() => mostrarDetalhes(modulo, registro)}
                >
                  <Text style={estilos.link}>Detalhes</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                accessibilityRole="button"
                style={estilos.acao}
                onPress={() => navegar(modulo.edicao, registro.id)}
              >
                <Text style={estilos.link}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                accessibilityRole="button"
                style={estilos.acao}
                onPress={() => pedirExclusao(modulo, registro)}
              >
                <Text style={estilos.textoErro}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {registros.length === 0 && (
          <View style={estilos.cartao}>
            <Text style={estilos.textoCinza}>
              {pesquisa.trim()
                ? 'Nenhum resultado encontrado.'
                : 'Nenhum registro cadastrado.'}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

//cadastro e edição

function TelaFormulario({
  modulo,
  idRegistro,
  dados,
  salvarRegistro,
  voltar,
  pedirExclusao,
}) {
  const registro = dados[modulo.chave].find((item) => {
    return item.id === idRegistro;
  });

  const [valores, setValores] = useState(() => {
    return {
      ...criarFormularioVazio(modulo),
      ...(registro || {}),
    };
  });

  const [erro, setErro] = useState('');

  function alterarCampo(campo, valor) {
    setErro('');

    setValores((anteriores) => {
      const novosValores = {
        ...anteriores,
        [campo.chave]: valor,
      };

      if (campo.chave === 'curso' && novosValores.turma) {
        const turma = dados.turmas.find((item) => {
          return item.id === novosValores.turma;
        });

        if (!turma || turma.curso !== valor) {
          novosValores.turma = '';
        }
      }

      if (
        campo.chave === 'turma' &&
        'curso' in novosValores &&
        valor
      ) {
        const turma = dados.turmas.find((item) => item.id === valor);

        if (turma) {
          novosValores.curso = turma.curso;
        }
      }

      return novosValores;
    });
  }

  function salvar() {
    const valoresLimpos = {};

    for (const chave of Object.keys(valores)) {
      valoresLimpos[chave] = String(valores[chave]).trim();
    }

    const mensagem = validarFormulario(
      modulo,
      valoresLimpos,
      dados,
      idRegistro
    );

    if (mensagem) {
      setErro(mensagem);
      return;
    }

    salvarRegistro(modulo, valoresLimpos, idRegistro);
  }

  return (
    <KeyboardAvoidingView
      style={estilos.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={estilos.conteudo}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={estilos.titulo}>
          {idRegistro ? 'Editar' : 'Cadastrar'} {modulo.singular}
        </Text>

        <Text style={estilos.avisoCampos}>
          Campos com * são obrigatórios.
        </Text>

        <View style={estilos.cartao}>
          {modulo.campos.map((campo) => (
            <CampoFormulario
              key={campo.chave}
              campo={campo}
              valor={valores[campo.chave]}
              alterar={(valor) => alterarCampo(campo, valor)}
              valores={valores}
              dados={dados}
            />
          ))}

          {!!erro && (
            <View style={estilos.caixaErro} accessibilityRole="alert">
              <Text style={estilos.textoErro}>{erro}</Text>
            </View>
          )}

          <View style={estilos.linhaBotoes}>
            <Botao
              texto="Cancelar"
              secundario
              onPress={voltar}
              style={estilos.flex}
            />

            <Botao
              texto="Salvar"
              onPress={salvar}
              style={estilos.flex}
            />
          </View>

          {!!registro && (
            <Botao
              texto={`Excluir ${modulo.singular}`}
              perigo
              onPress={() => pedirExclusao(modulo, registro)}
              style={estilos.botaoExcluir}
            />
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// matriculas e boletins

function Detalhes({ modulo, registro, dados }) {
  return (
    <View>
      <Text style={estilos.titulo}>
        {tituloDoRegistro(dados, modulo, registro)}
      </Text>

      {modulo.campos.map((campo) => (
        <View key={campo.chave} style={estilos.linhaDetalhe}>
          <Text style={estilos.rotuloDetalhe}>{campo.titulo}</Text>

          <Text style={estilos.texto}>
            {mostrarValor(dados, campo, registro[campo.chave]) ||
              'Não informado'}
          </Text>
        </View>
      ))}

      {modulo.chave === 'boletins' && (
        <View style={estilos.historico}>
          <Text style={estilos.titulo}>Histórico de boletins</Text>

          {dados.boletins
            .filter((item) => item.aluno === registro.aluno)
            .map((item) => (
              <View key={item.id} style={estilos.linhaDetalhe}>
                <Text style={estilos.texto}>{item.periodo}</Text>

                <Text style={estilos.link}>
                  Média: {item.media}
                </Text>
              </View>
            ))}
        </View>
      )}
    </View>
  );
}

function TelaSobre() {
  return (
    <ScrollView contentContainerStyle={estilos.conteudo}>
      <Text style={estilos.titulo}>Sobre</Text>

      <View style={estilos.cartao}>
        <Text style={estilos.texto}>
          Aplicativo de cadastro e consulta de informações escolares.
        </Text>

        <Text style={estilos.avisoSobre}>
          Os dados ficam somente na memória do aplicativo. Ao recarregar,
          os cadastros são apagados. Não há conexão com uma API ou banco
          de dados.
        </Text>
      </View>
    </ScrollView>
  );
}

// principal

export default function App() {
  const [dados, setDados] = useState(criarDadosVazios);

  const [historico, setHistorico] = useState([
    { nome: 'HomeScreen', chave: 'inicio' },
  ]);

  const [janela, setJanela] = useState(null);
  const [aviso, setAviso] = useState('');

  const telaAtual = historico[historico.length - 1];
  const tela = TELAS[telaAtual.nome];

  function navegar(nome, idRegistro) {
    setAviso('');

    if (nome === 'HomeScreen') {
      setHistorico([{ nome: 'HomeScreen', chave: 'inicio' }]);
      return;
    }

    setHistorico((anterior) => [
      ...anterior,
      {
        nome,
        idRegistro,
        chave: `${nome}-${Date.now()}-${anterior.length}`,
      },
    ]);
  }

  function voltar() {
    setAviso('');

    setHistorico((anterior) => {
      if (anterior.length > 1) {
        return anterior.slice(0, -1);
      }

      return anterior;
    });
  }

  function voltarParaLista(modulo) {
    setHistorico([
      { nome: 'HomeScreen', chave: 'inicio' },
      {
        nome: modulo.consulta,
        chave: `${modulo.consulta}-${Date.now()}`,
      },
    ]);
  }

  // Faz o botão voltar la 

  useEffect(() => {
    if (Platform.OS !== 'android') {
      return;
    }

    const evento = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (historico.length > 1) {
          voltar();
          return true;
        }

        return false;
      }
    );

    return () => evento.remove();
  }, [historico.length]);

  // Apaga a mensagem

  useEffect(() => {
    if (!aviso) {
      return;
    }

    const temporizador = setTimeout(() => setAviso(''), 4500);

    return () => clearTimeout(temporizador);
  }, [aviso]);

  function salvarRegistro(modulo, valores, idRegistro) {
    const registroSalvo = {
      ...valores,
      id:
        idRegistro ||
        `${modulo.chave}-${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 8)}`,
    };

    setDados((anteriores) => {
      let listaAtualizada;

      if (idRegistro) {
        listaAtualizada = anteriores[modulo.chave].map((item) => {
          if (item.id === idRegistro) {
            return registroSalvo;
          }

          return item;
        });
      } else {
        listaAtualizada = [
          ...anteriores[modulo.chave],
          registroSalvo,
        ];
      }

      return {
        ...anteriores,
        [modulo.chave]: listaAtualizada,
      };
    });

    voltarParaLista(modulo);

    setAviso(
      idRegistro
        ? 'Alterações salvas.'
        : 'Cadastro realizado com sucesso.'
    );
  }

  function pedirExclusao(modulo, registro) {
    const vinculo = verificarVinculos(dados, modulo, registro.id);

    if (vinculo) {
      setJanela({
        tipo: 'mensagem',
        titulo: 'Registro vinculado',
        mensagem:
          `Este registro é utilizado em ${vinculo}. ` +
          'Edite ou exclua os vínculos antes de removê-lo.',
      });

      return;
    }

    setJanela({
      tipo: 'exclusao',
      titulo: `Excluir ${modulo.singular}`,
      modulo,
      registro,
    });
  }

  function excluirRegistro() {
    const { modulo, registro } = janela;

    setDados((anteriores) => {
      const listaAtualizada = anteriores[modulo.chave].filter((item) => {
        return item.id !== registro.id;
      });

      return {
        ...anteriores,
        [modulo.chave]: listaAtualizada,
      };
    });

    setJanela(null);
    voltarParaLista(modulo);
    setAviso('Registro excluído.');
  }

  function mostrarDetalhes(modulo, registro) {
    setJanela({
      tipo: 'detalhes',
      titulo: `Detalhes de ${modulo.singular}`,
      modulo,
      registro,
    });
  }

  return (
    <SafeAreaView style={estilos.areaSegura}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={CORES.principal}
      />

      <View style={estilos.app}>
        <View style={estilos.cabecalho}>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Voltar"
            style={estilos.botaoVoltar}
            onPress={voltar}
            disabled={historico.length === 1}
          >
            <Text style={estilos.iconeVoltar}>
              {historico.length > 1 ? '‹' : ''}
            </Text>
          </TouchableOpacity>

          <Text style={estilos.tituloCabecalho}>
            {tela.titulo}
          </Text>

          <View style={estilos.botaoVoltar} />
        </View>

        {!!aviso && (
          <View style={estilos.caixaSucesso} accessibilityRole="alert">
            <Text style={estilos.textoSucesso}>{aviso}</Text>
          </View>
        )}

        <View style={estilos.flex} key={telaAtual.chave}>
          {tela.tipo === 'inicio' && (
            <TelaInicio dados={dados} navegar={navegar} />
          )}

          {tela.tipo === 'sobre' && <TelaSobre />}

          {tela.tipo === 'lista' && (
            <TelaLista
              modulo={tela.modulo}
              dados={dados}
              navegar={navegar}
              pedirExclusao={pedirExclusao}
              mostrarDetalhes={mostrarDetalhes}
            />
          )}

          {tela.tipo === 'formulario' && (
            <TelaFormulario
              modulo={tela.modulo}
              idRegistro={telaAtual.idRegistro}
              dados={dados}
              salvarRegistro={salvarRegistro}
              voltar={voltar}
              pedirExclusao={pedirExclusao}
            />
          )}
        </View>

        <View style={estilos.menuInferior}>
          <TouchableOpacity
            accessibilityRole="button"
            style={estilos.itemMenu}
            onPress={() => navegar('HomeScreen')}
          >
            <Text
              style={[
                estilos.textoMenu,
                tela.tipo === 'inicio' && estilos.menuAtivo,
              ]}
            >
              Início
            </Text>
          </TouchableOpacity>

          {!!tela.modulo && (
            <TouchableOpacity
              accessibilityRole="button"
              style={estilos.itemMenu}
              onPress={() => voltarParaLista(tela.modulo)}
            >
              <Text style={[estilos.textoMenu, estilos.menuAtivo]}>
                {tela.modulo.titulo}
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            accessibilityRole="button"
            style={estilos.itemMenu}
            onPress={() => {
              if (telaAtual.nome !== 'SobreScreen') {
                navegar('SobreScreen');
              }
            }}
          >
            <Text
              style={[
                estilos.textoMenu,
                tela.tipo === 'sobre' && estilos.menuAtivo,
              ]}
            >
              Sobre
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {!!janela && (
        <Janela
          titulo={janela.titulo}
          fechar={() => setJanela(null)}
          acoes={
            janela.tipo === 'exclusao' ? (
              <View style={estilos.linhaBotoes}>
                <Botao
                  texto="Cancelar"
                  secundario
                  onPress={() => setJanela(null)}
                  style={estilos.flex}
                />

                <Botao
                  texto="Excluir"
                  perigo
                  onPress={excluirRegistro}
                  style={estilos.flex}
                />
              </View>
            ) : (
              <Botao
                texto="Fechar"
                secundario
                onPress={() => setJanela(null)}
              />
            )
          }
        >
          {janela.tipo === 'mensagem' && (
            <Text style={estilos.texto}>{janela.mensagem}</Text>
          )}

          {janela.tipo === 'exclusao' && (
            <Text style={estilos.texto}>
              Deseja excluir{' '}
              {tituloDoRegistro(dados, janela.modulo, janela.registro)}?
            </Text>
          )}

          {janela.tipo === 'detalhes' && (
            <Detalhes
              modulo={janela.modulo}
              registro={janela.registro}
              dados={dados}
            />
          )}
        </Janela>
      )}
    </SafeAreaView>
  );
}

// deixa bonito

const estilos = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: CORES.principal,
    alignItems: 'center',
    paddingTop:
      Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0,
  },

  app: {
    flex: 1,
    width: '100%',
    maxWidth: 620,
    backgroundColor: CORES.fundo,
  },

  flex: {
    flex: 1,
  },

  cabecalho: {
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CORES.principal,
  },

  botaoVoltar: {
    width: 48,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconeVoltar: {
    color: '#FFFFFF',
    fontSize: 34,
  },

  tituloCabecalho: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: 10,
  },

  conteudo: {
    padding: 18,
    paddingBottom: 30,
  },

  nomeApp: {
    color: CORES.escuro,
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 26,
  },

  titulo: {
    color: CORES.escuro,
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 16,
  },

  texto: {
    color: CORES.texto,
    fontSize: 14,
    lineHeight: 22,
  },

  textoCinza: {
    color: CORES.cinza,
    fontSize: 14,
    lineHeight: 21,
  },

  atalhos: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 26,
  },

  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  cartaoModulo: {
    width: '48%',
    minHeight: 100,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
  },

  nomeModulo: {
    color: CORES.escuro,
    fontSize: 16,
    fontWeight: '700',
  },

  quantidade: {
    color: CORES.cinza,
    fontSize: 13,
    marginTop: 8,
  },

  botao: {
    minHeight: 48,
    backgroundColor: CORES.principal,
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },

  botaoSecundario: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: CORES.borda,
  },

  textoBotaoSecundario: {
    color: CORES.escuro,
  },

  botaoPerigo: {
    backgroundColor: CORES.vermelho,
  },

  cartao: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 14,
    padding: 18,
  },

  campo: {
    marginBottom: 18,
  },

  rotulo: {
    color: CORES.texto,
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
  },

  entrada: {
    minHeight: 48,
    backgroundColor: '#FCFEFF',
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 11,
    color: CORES.texto,
    fontSize: 15,
  },

  entradaLonga: {
    minHeight: 100,
  },

  seletor: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FCFEFF',
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 10,
    padding: 12,
  },

  valorSeletor: {
    flex: 1,
    color: CORES.texto,
    fontSize: 15,
  },

  seta: {
    color: CORES.principal,
    fontSize: 20,
    marginLeft: 10,
  },

  pesquisa: {
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
  },

  lista: {
    marginTop: 16,
    gap: 12,
  },

  cartaoRegistro: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: CORES.borda,
    borderRadius: 14,
    overflow: 'hidden',
  },

  corpoRegistro: {
    padding: 16,
  },

  nomeRegistro: {
    color: CORES.texto,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },

  resumoRegistro: {
    color: CORES.cinza,
    fontSize: 13,
    lineHeight: 21,
  },

  acoesRegistro: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderColor: CORES.borda,
    paddingHorizontal: 6,
  },

  acao: {
    minHeight: 44,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },

  link: {
    color: CORES.principal,
    fontSize: 14,
    fontWeight: '600',
  },

  avisoCampos: {
    color: CORES.cinza,
    fontSize: 13,
    marginBottom: 16,
  },

  linhaBotoes: {
    flexDirection: 'row',
    gap: 10,
  },

  botaoExcluir: {
    marginTop: 12,
  },

  caixaErro: {
    backgroundColor: '#FFF0F2',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },

  textoErro: {
    color: CORES.vermelho,
    fontSize: 14,
    lineHeight: 21,
  },

  caixaSucesso: {
    backgroundColor: '#E1F4ED',
    padding: 12,
  },

  textoSucesso: {
    color: '#186549',
    fontSize: 13,
    textAlign: 'center',
  },

  menuInferior: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: CORES.borda,
    paddingVertical: 4,
  },

  itemMenu: {
    flex: 1,
    minHeight: 50,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoMenu: {
    color: CORES.cinza,
    fontSize: 14,
    textAlign: 'center',
  },

  menuAtivo: {
    color: CORES.principal,
    fontWeight: '700',
  },

  fundoModal: {
    flex: 1,
    backgroundColor: 'rgba(15, 40, 52, 0.45)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  janela: {
    width: '100%',
    maxWidth: 520,
    maxHeight: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    flexShrink: 1,
  },

  cabecalhoModal: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 18,
    borderBottomWidth: 1,
    borderColor: CORES.borda,
  },

  tituloModal: {
    flex: 1,
    color: CORES.escuro,
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 15,
  },

  fecharModal: {
    minWidth: 48,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoFechar: {
    color: CORES.cinza,
    fontSize: 28,
  },

  conteudoModal: {
    padding: 18,
  },

  acoesModal: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: CORES.borda,
  },

  opcao: {
    minHeight: 46,
    justifyContent: 'center',
    borderRadius: 8,
    padding: 12,
    marginBottom: 6,
  },

  opcaoSelecionada: {
    backgroundColor: '#E3F3F7',
  },

  linhaDetalhe: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: CORES.borda,
  },

  rotuloDetalhe: {
    color: CORES.cinza,
    fontSize: 12,
    marginBottom: 4,
  },

  historico: {
    marginTop: 24,
  },

  avisoSobre: {
    color: CORES.cinza,
    fontSize: 14,
    lineHeight: 22,
    marginTop: 16,
  },
});