-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 24/09/2026 às 12:44
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `escola`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `aluno`
--

CREATE TABLE `aluno` (
  `id_aluno` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `cpf` char(11) NOT NULL,
  `data_nascimento` date NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `id_endereco` int(11) NOT NULL,
  `STATUS` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `aluno`
--

INSERT INTO `aluno` (`id_aluno`, `nome`, `cpf`, `data_nascimento`, `email`, `id_endereco`, `STATUS`) VALUES
(1, 'Lucas Souza', '11122233001', '2007-01-02', 'aluno01@email.com', 1, ''),
(2, 'Beatriz Martins', '11122233002', '2006-02-04', 'aluno02@email.com', 2, ''),
(3, 'Rafael Andrade', '11122233003', '2007-03-06', 'aluno03@email.com', 3, ''),
(4, 'Isabela Rocha', '11122233004', '2006-04-08', 'aluno04@email.com', 4, ''),
(5, 'Gabriel Nascimento', '11122233005', '2007-05-10', 'aluno05@email.com', 5, ''),
(6, 'Mariana Oliveira', '11122233006', '2006-06-12', 'aluno06@email.com', 6, ''),
(7, 'Pedro Santos', '11122233007', '2007-07-14', 'aluno07@email.com', 7, ''),
(8, 'Ana Clara Lima', '11122233008', '2006-08-16', 'aluno08@email.com', 8, ''),
(9, 'João Ferreira', '11122233009', '2007-09-18', 'aluno09@email.com', 9, ''),
(10, 'Larissa Costa', '11122233010', '2006-10-20', 'aluno10@email.com', 10, ''),
(11, 'Matheus Mendes', '11122233011', '2007-11-22', 'aluno11@email.com', 11, ''),
(12, 'Bianca Alves', '11122233012', '2006-12-24', 'aluno12@email.com', 12, ''),
(13, 'Felipe Torres', '11122233013', '2007-01-26', 'aluno13@email.com', 13, ''),
(14, 'Amanda Gomes', '11122233014', '2006-02-01', 'aluno14@email.com', 14, ''),
(15, 'Gustavo Barbosa', '11122233015', '2007-03-03', 'aluno15@email.com', 15, '');

-- --------------------------------------------------------

--
-- Estrutura para tabela `aluno_responsavel`
--

CREATE TABLE `aluno_responsavel` (
  `id_aluno` int(11) NOT NULL,
  `id_responsavel` int(11) NOT NULL,
  `parentesco` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `aluno_responsavel`
--

INSERT INTO `aluno_responsavel` (`id_aluno`, `id_responsavel`, `parentesco`) VALUES
(1, 1, 'Mãe'),
(2, 2, 'Pai'),
(3, 3, 'Responsável Legal'),
(4, 4, 'Mãe'),
(5, 5, 'Pai'),
(6, 6, 'Mãe'),
(7, 7, 'Pai'),
(8, 8, 'Responsável Legal'),
(9, 9, 'Mãe'),
(10, 10, 'Pai'),
(11, 11, 'Mãe'),
(12, 12, 'Pai'),
(13, 13, 'Responsável Legal'),
(14, 14, 'Mãe'),
(15, 15, 'Pai');

-- --------------------------------------------------------

--
-- Estrutura para tabela `avaliacao`
--

CREATE TABLE `avaliacao` (
  `id_avaliacao` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `id_disciplina` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `avaliacao`
--

INSERT INTO `avaliacao` (`id_avaliacao`, `nome`, `id_disciplina`) VALUES
(1, 'Prova Bimestral 1', 1),
(2, 'Trabalho em Grupo 1', 2),
(3, 'Seminário 1', 3),
(4, 'Projeto Prático 1', 4),
(5, 'Lista de Exercícios 1', 5),
(6, 'Prova Bimestral 2', 6),
(7, 'Trabalho em Grupo 2', 7),
(8, 'Seminário 2', 8),
(9, 'Projeto Prático 2', 9),
(10, 'Lista de Exercícios 2', 10),
(11, 'Prova Bimestral 3', 11),
(12, 'Trabalho em Grupo 3', 12),
(13, 'Seminário 3', 13),
(14, 'Projeto Prático 3', 14),
(15, 'Lista de Exercícios 3', 15);

-- --------------------------------------------------------

--
-- Estrutura para tabela `bairro`
--

CREATE TABLE `bairro` (
  `id_bairro` int(11) NOT NULL,
  `nome_bairro` varchar(100) NOT NULL,
  `id_cidade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `bairro`
--

INSERT INTO `bairro` (`id_bairro`, `nome_bairro`, `id_cidade`) VALUES
(1, 'Centro', 1),
(2, 'Vila Industrial', 2),
(3, 'Jardim América', 3),
(4, 'Copacabana', 4),
(5, 'Savassi', 5),
(6, 'Batel', 6),
(7, 'Pituba', 7),
(8, 'Trindade', 8),
(9, 'Moinhos de Vento', 9),
(10, 'Boa Viagem', 10),
(11, 'Aldeota', 11),
(12, 'Setor Bueno', 12),
(13, 'Praia do Canto', 13),
(14, 'Nazaré', 14),
(15, 'Adrianópolis', 15);

-- --------------------------------------------------------

--
-- Estrutura para tabela `boletim`
--

CREATE TABLE `boletim` (
  `id_boletim` int(11) NOT NULL,
  `id_frequencia` int(11) NOT NULL,
  `id_matricula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `boletim`
--

INSERT INTO `boletim` (`id_boletim`, `id_frequencia`, `id_matricula`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5),
(6, 6, 6),
(7, 7, 7),
(8, 8, 8),
(9, 9, 9),
(10, 10, 10),
(11, 11, 11),
(12, 12, 12),
(13, 13, 13),
(14, 14, 14),
(15, 15, 15);

-- --------------------------------------------------------

--
-- Estrutura para tabela `cidade`
--

CREATE TABLE `cidade` (
  `id_cidade` int(11) NOT NULL,
  `Nome_cidade` varchar(100) NOT NULL,
  `id_estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `cidade`
--

INSERT INTO `cidade` (`id_cidade`, `Nome_cidade`, `id_estado`) VALUES
(1, 'São José dos Campos', 1),
(2, 'Campinas', 1),
(3, 'Rio de Janeiro', 2),
(4, 'Belo Horizonte', 3),
(5, 'Curitiba', 4),
(6, 'Salvador', 5),
(7, 'Florianópolis', 6),
(8, 'Porto Alegre', 7),
(9, 'Recife', 8),
(10, 'Fortaleza', 9),
(11, 'Goiânia', 10),
(12, 'Vitória', 11),
(13, 'Belém', 12),
(14, 'São Luís', 13),
(15, 'Manaus', 14);

-- --------------------------------------------------------

--
-- Estrutura para tabela `coordenador`
--

CREATE TABLE `coordenador` (
  `id_coordenador` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `id_endereco` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `coordenador`
--

INSERT INTO `coordenador` (`id_coordenador`, `nome`, `id_endereco`) VALUES
(1, 'Patrícia Mendes', 1),
(2, 'Henrique Alves', 2),
(3, 'Camila Torres', 3),
(4, 'Ricardo Gomes', 4),
(5, 'Simone Barbosa', 5),
(6, 'André Vieira', 6),
(7, 'Juliana Pinto', 7),
(8, 'Marcos Corrêa', 8),
(9, 'Larissa Nunes', 9),
(10, 'Bruno Cardoso', 10),
(11, 'Renata Freitas', 11),
(12, 'Paulo Ribeiro', 12),
(13, 'Carla Moreira', 13),
(14, 'Eduardo Teixeira', 14),
(15, 'Débora Machado', 15);

-- --------------------------------------------------------

--
-- Estrutura para tabela `curso`
--

CREATE TABLE `curso` (
  `id_curso` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `duracao` int(11) NOT NULL,
  `id_coordenador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `curso`
--

INSERT INTO `curso` (`id_curso`, `nome`, `duracao`, `id_coordenador`) VALUES
(1, 'Técnico em Desenvolvimento de Sistemas', 3, 1),
(2, 'Técnico em Administração', 2, 2),
(3, 'Técnico em Enfermagem', 2, 3),
(4, 'Técnico em Design Gráfico', 2, 4),
(5, 'Ensino Médio Regular', 3, 5),
(6, 'Técnico em Informática', 2, 6),
(7, 'Técnico em Logística', 2, 7),
(8, 'Técnico em Recursos Humanos', 2, 8),
(9, 'Técnico em Eletrônica', 2, 9),
(10, 'Técnico em Mecânica', 2, 10),
(11, 'Técnico em Redes', 2, 11),
(12, 'Técnico em Contabilidade', 2, 12),
(13, 'Técnico em Marketing', 2, 13),
(14, 'Técnico em Segurança do Trabalho', 2, 14),
(15, 'Técnico em Multimídia', 2, 15);

-- --------------------------------------------------------

--
-- Estrutura para tabela `disciplina`
--

CREATE TABLE `disciplina` (
  `id_disciplina` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `Carga_horaria` int(11) NOT NULL,
  `id_curso` int(11) NOT NULL,
  `id_professor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `disciplina`
--

INSERT INTO `disciplina` (`id_disciplina`, `nome`, `Carga_horaria`, `id_curso`, `id_professor`) VALUES
(1, 'Algoritmos e Lógica de Programação', 80, 1, 1),
(2, 'Língua Portuguesa', 60, 2, 2),
(3, 'História Geral', 60, 3, 3),
(4, 'Biologia', 60, 4, 4),
(5, 'Educação Física', 40, 5, 5),
(6, 'Banco de Dados', 80, 6, 6),
(7, 'Matemática', 80, 7, 7),
(8, 'Inglês', 60, 8, 8),
(9, 'Física', 60, 9, 9),
(10, 'Química', 60, 10, 10),
(11, 'Programação Web', 80, 11, 11),
(12, 'Redes de Computadores', 60, 12, 12),
(13, 'Geografia', 60, 13, 13),
(14, 'Sociologia', 40, 14, 14),
(15, 'Artes', 40, 15, 15);

-- --------------------------------------------------------

--
-- Estrutura para tabela `disciplina_turma`
--

CREATE TABLE `disciplina_turma` (
  `id_disciplina` int(11) NOT NULL,
  `id_turma` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `disciplina_turma`
--

INSERT INTO `disciplina_turma` (`id_disciplina`, `id_turma`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15);

-- --------------------------------------------------------

--
-- Estrutura para tabela `endereco`
--

CREATE TABLE `endereco` (
  `id_endereco` int(11) NOT NULL,
  `numero` varchar(10) NOT NULL,
  `complemento` varchar(50) DEFAULT NULL,
  `id_logradouro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `endereco`
--

INSERT INTO `endereco` (`id_endereco`, `numero`, `complemento`, `id_logradouro`) VALUES
(1, '137', 'Apto 1', 1),
(2, '174', 'Apto 2', 2),
(3, '211', NULL, 3),
(4, '248', 'Apto 4', 4),
(5, '285', 'Apto 5', 5),
(6, '322', NULL, 6),
(7, '359', 'Apto 7', 7),
(8, '396', 'Apto 8', 8),
(9, '433', NULL, 9),
(10, '470', 'Apto 10', 10),
(11, '507', 'Apto 11', 11),
(12, '544', NULL, 12),
(13, '581', 'Apto 13', 13),
(14, '618', 'Apto 14', 14),
(15, '655', NULL, 15);

-- --------------------------------------------------------

--
-- Estrutura para tabela `estado`
--

CREATE TABLE `estado` (
  `id_estado` int(11) NOT NULL,
  `nome_estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `estado`
--

INSERT INTO `estado` (`id_estado`, `nome_estado`) VALUES
(1, 'São Paulo'),
(2, 'Rio de Janeiro'),
(3, 'Minas Gerais'),
(4, 'Paraná'),
(5, 'Bahia'),
(6, 'Santa Catarina'),
(7, 'Rio Grande do Sul'),
(8, 'Pernambuco'),
(9, 'Ceará'),
(10, 'Goiás'),
(11, 'Espírito Santo'),
(12, 'Pará'),
(13, 'Maranhão'),
(14, 'Amazonas'),
(15, 'Mato Grosso');

-- --------------------------------------------------------

--
-- Estrutura para tabela `frequencia`
--

CREATE TABLE `frequencia` (
  `id_frequencia` int(11) NOT NULL,
  `percentual_frequencia` decimal(5,2) NOT NULL,
  `id_matricula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `frequencia`
--

INSERT INTO `frequencia` (`id_frequencia`, `percentual_frequencia`, `id_matricula`) VALUES
(1, 79.10, 1),
(2, 80.20, 2),
(3, 81.30, 3),
(4, 82.40, 4),
(5, 83.50, 5),
(6, 84.60, 6),
(7, 85.70, 7),
(8, 86.80, 8),
(9, 87.90, 9),
(10, 89.00, 10),
(11, 90.10, 11),
(12, 91.20, 12),
(13, 92.30, 13),
(14, 93.40, 14),
(15, 94.50, 15);

-- --------------------------------------------------------

--
-- Estrutura para tabela `logradouro`
--

CREATE TABLE `logradouro` (
  `id_logradouro` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `id_bairro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `logradouro`
--

INSERT INTO `logradouro` (`id_logradouro`, `nome`, `id_bairro`) VALUES
(1, 'Rua das Flores', 1),
(2, 'Av. Brasil', 2),
(3, 'Rua Humberto de Campos', 3),
(4, 'Av. Atlântica', 4),
(5, 'Rua da Bahia', 5),
(6, 'Rua XV de Novembro', 6),
(7, 'Av. Beira-Mar', 7),
(8, 'Rua Padre Chagas', 8),
(9, 'Av. Boa Viagem', 9),
(10, 'Av. Santos Dumont', 10),
(11, 'Av. T-63', 11),
(12, 'Av. Nossa Senhora da Penha', 12),
(13, 'Av. Nazaré', 13),
(14, 'Av. dos Holandeses', 14),
(15, 'Av. Djalma Batista', 15);

-- --------------------------------------------------------

--
-- Estrutura para tabela `matricula`
--

CREATE TABLE `matricula` (
  `id_matricula` int(11) NOT NULL,
  `data_matricula` date NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `id_turma` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `matricula`
--

INSERT INTO `matricula` (`id_matricula`, `data_matricula`, `id_aluno`, `id_turma`) VALUES
(1, '2026-02-01', 1, 1),
(2, '2026-02-02', 2, 2),
(3, '2026-02-03', 3, 3),
(4, '2026-02-04', 4, 4),
(5, '2026-02-05', 5, 5),
(6, '2026-02-06', 6, 6),
(7, '2026-02-07', 7, 7),
(8, '2026-02-08', 8, 8),
(9, '2026-02-09', 9, 9),
(10, '2026-02-10', 10, 10),
(11, '2026-02-11', 11, 11),
(12, '2026-02-12', 12, 12),
(13, '2026-02-13', 13, 13),
(14, '2026-02-14', 14, 14),
(15, '2026-02-15', 15, 15);

-- --------------------------------------------------------

--
-- Estrutura para tabela `nota`
--

CREATE TABLE `nota` (
  `id_nota` int(11) NOT NULL,
  `nota` decimal(4,2) NOT NULL,
  `media_final` decimal(4,2) DEFAULT NULL,
  `id_matricula` int(11) NOT NULL,
  `id_avaliacao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `nota`
--

INSERT INTO `nota` (`id_nota`, `nota`, `media_final`, `id_matricula`, `id_avaliacao`) VALUES
(1, 6.70, 6.70, 1, 1),
(2, 7.40, 7.40, 2, 2),
(3, 8.10, 8.10, 3, 3),
(4, 8.80, 8.80, 4, 4),
(5, 9.50, 9.50, 5, 5),
(6, 6.10, 6.10, 6, 6),
(7, 6.80, 6.80, 7, 7),
(8, 7.50, 7.50, 8, 8),
(9, 8.20, 8.20, 9, 9),
(10, 8.90, 8.90, 10, 10),
(11, 9.60, 9.60, 11, 11),
(12, 6.20, 6.20, 12, 12),
(13, 6.90, 6.90, 13, 13),
(14, 7.60, 7.60, 14, 14),
(15, 8.30, 8.30, 15, 15);

-- --------------------------------------------------------

--
-- Estrutura para tabela `professor`
--

CREATE TABLE `professor` (
  `id_professor` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `formacao` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `id_endereco` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `professor`
--

INSERT INTO `professor` (`id_professor`, `nome`, `formacao`, `email`, `id_endereco`) VALUES
(1, 'André Vieira', 'Licenciatura em Matemática', 'prof01@escola.com', 1),
(2, 'Juliana Pinto', 'Licenciatura em Português', 'prof02@escola.com', 2),
(3, 'Marcos Corrêa', 'Licenciatura em História', 'prof03@escola.com', 3),
(4, 'Larissa Nunes', 'Licenciatura em Ciências', 'prof04@escola.com', 4),
(5, 'Bruno Cardoso', 'Licenciatura em Ed. Física', 'prof05@escola.com', 5),
(6, 'Renata Freitas', 'Ciência da Computação', 'prof06@escola.com', 6),
(7, 'Paulo Ribeiro', 'Administração', 'prof07@escola.com', 7),
(8, 'Carla Moreira', 'Enfermagem', 'prof08@escola.com', 8),
(9, 'Eduardo Teixeira', 'Design Gráfico', 'prof09@escola.com', 9),
(10, 'Débora Machado', 'Licenciatura em Física', 'prof10@escola.com', 10),
(11, 'Fábio Martins', 'Licenciatura em Química', 'prof11@escola.com', 11),
(12, 'Aline Souza', 'Licenciatura em Geografia', 'prof12@escola.com', 12),
(13, 'Roberto Lima', 'Licenciatura em Sociologia', 'prof13@escola.com', 13),
(14, 'Vanessa Costa', 'Licenciatura em Artes', 'prof14@escola.com', 14),
(15, 'Diego Alves', 'Engenharia de Software', 'prof15@escola.com', 15);

-- --------------------------------------------------------

--
-- Estrutura para tabela `responsavel`
--

CREATE TABLE `responsavel` (
  `id_responsavel` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `id_endereco` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `responsavel`
--

INSERT INTO `responsavel` (`id_responsavel`, `nome`, `id_endereco`) VALUES
(1, 'Maria Oliveira', 1),
(2, 'João Santos', 2),
(3, 'Ana Lima', 3),
(4, 'Carlos Ferreira', 4),
(5, 'Fernanda Costa', 5),
(6, 'Patrícia Mendes', 6),
(7, 'Henrique Alves', 7),
(8, 'Camila Torres', 8),
(9, 'Ricardo Gomes', 9),
(10, 'Simone Barbosa', 10),
(11, 'André Vieira', 11),
(12, 'Juliana Pinto', 12),
(13, 'Marcos Corrêa', 13),
(14, 'Larissa Nunes', 14),
(15, 'Bruno Cardoso', 15);

-- --------------------------------------------------------

--
-- Estrutura para tabela `turma`
--

CREATE TABLE `turma` (
  `id_turma` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ano_letivo` char(4) NOT NULL,
  `id_curso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `turma`
--

INSERT INTO `turma` (`id_turma`, `nome`, `ano_letivo`, `id_curso`) VALUES
(1, 'TURMA-01', '2026', 1),
(2, 'TURMA-02', '2026', 2),
(3, 'TURMA-03', '2026', 3),
(4, 'TURMA-04', '2026', 4),
(5, 'TURMA-05', '2026', 5),
(6, 'TURMA-06', '2026', 6),
(7, 'TURMA-07', '2026', 7),
(8, 'TURMA-08', '2026', 8),
(9, 'TURMA-09', '2026', 9),
(10, 'TURMA-10', '2026', 10),
(11, 'TURMA-11', '2026', 11),
(12, 'TURMA-12', '2026', 12),
(13, 'TURMA-13', '2026', 13),
(14, 'TURMA-14', '2026', 14),
(15, 'TURMA-15', '2026', 15);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `vw_01_alunos_cursos`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `vw_01_alunos_cursos` (
`codigo_aluno` int(11)
,`nome_aluno` varchar(100)
,`codigo_matricula` int(11)
,`codigo_curso` int(11)
,`nome_curso` varchar(100)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `vw_02_alunos_turmas_cursos`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `vw_02_alunos_turmas_cursos` (
`aluno` varchar(100)
,`turma` varchar(50)
,`curso` varchar(100)
,`ano_letivo` char(4)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `vw_03_disciplinas_professores`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `vw_03_disciplinas_professores` (
`codigo_disciplina` int(11)
,`disciplina` varchar(100)
,`carga_horaria` int(11)
,`codigo_professor` int(11)
,`professor` varchar(100)
,`formacao` varchar(100)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `vw_04_disciplinas_professores_cursos`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `vw_04_disciplinas_professores_cursos` (
`curso` varchar(100)
,`disciplina` varchar(100)
,`carga_horaria` int(11)
,`professor` varchar(100)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `vw_05_alunos_responsaveis`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `vw_05_alunos_responsaveis` (
`aluno` varchar(100)
,`cpf_aluno` char(11)
,`responsavel` varchar(100)
,`parentesco` varchar(50)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `vw_06_alunos_disciplinas_notas`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `vw_06_alunos_disciplinas_notas` (
`aluno` varchar(100)
,`disciplina` varchar(100)
,`nota` decimal(4,2)
,`media_final` decimal(4,2)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `vw_07_alunos_turmas_disciplinas_professores`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `vw_07_alunos_turmas_disciplinas_professores` (
`aluno` varchar(100)
,`turma` varchar(50)
,`curso` varchar(100)
,`disciplina` varchar(100)
,`professor` varchar(100)
,`ano_letivo` char(4)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `vw_08_desempenho_academico`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `vw_08_desempenho_academico` (
`aluno` varchar(100)
,`curso` varchar(100)
,`disciplina` varchar(100)
,`nota` decimal(4,2)
,`media_final` decimal(4,2)
,`frequencia` decimal(5,2)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `vw_09_matriculas`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `vw_09_matriculas` (
`aluno` varchar(100)
,`curso` varchar(100)
,`turma` varchar(50)
,`data_matricula` date
,`ano_letivo` char(4)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `vw_10_relatorio_academico`
-- (Veja abaixo para a visão atual)
--
CREATE TABLE `vw_10_relatorio_academico` (
`aluno` varchar(100)
,`curso` varchar(100)
,`turma` varchar(50)
,`disciplina` varchar(100)
,`professor` varchar(100)
,`nota` decimal(4,2)
,`media_final` decimal(4,2)
,`frequencia` decimal(5,2)
);

-- --------------------------------------------------------

--
-- Estrutura para view `vw_01_alunos_cursos`
--
DROP TABLE IF EXISTS `vw_01_alunos_cursos`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_01_alunos_cursos`  AS SELECT `a`.`id_aluno` AS `codigo_aluno`, `a`.`nome` AS `nome_aluno`, `m`.`id_matricula` AS `codigo_matricula`, `c`.`id_curso` AS `codigo_curso`, `c`.`nome` AS `nome_curso` FROM (((`aluno` `a` join `matricula` `m` on(`a`.`id_aluno` = `m`.`id_aluno`)) join `turma` `t` on(`m`.`id_turma` = `t`.`id_turma`)) join `curso` `c` on(`t`.`id_curso` = `c`.`id_curso`)) ;

-- --------------------------------------------------------

--
-- Estrutura para view `vw_02_alunos_turmas_cursos`
--
DROP TABLE IF EXISTS `vw_02_alunos_turmas_cursos`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_02_alunos_turmas_cursos`  AS SELECT `a`.`nome` AS `aluno`, `t`.`nome` AS `turma`, `c`.`nome` AS `curso`, `t`.`ano_letivo` AS `ano_letivo` FROM (((`aluno` `a` join `matricula` `m` on(`a`.`id_aluno` = `m`.`id_aluno`)) join `turma` `t` on(`m`.`id_turma` = `t`.`id_turma`)) join `curso` `c` on(`t`.`id_curso` = `c`.`id_curso`)) ;

-- --------------------------------------------------------

--
-- Estrutura para view `vw_03_disciplinas_professores`
--
DROP TABLE IF EXISTS `vw_03_disciplinas_professores`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_03_disciplinas_professores`  AS SELECT `d`.`id_disciplina` AS `codigo_disciplina`, `d`.`nome` AS `disciplina`, `d`.`Carga_horaria` AS `carga_horaria`, `p`.`id_professor` AS `codigo_professor`, `p`.`nome` AS `professor`, `p`.`formacao` AS `formacao` FROM (`disciplina` `d` join `professor` `p` on(`d`.`id_professor` = `p`.`id_professor`)) ;

-- --------------------------------------------------------

--
-- Estrutura para view `vw_04_disciplinas_professores_cursos`
--
DROP TABLE IF EXISTS `vw_04_disciplinas_professores_cursos`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_04_disciplinas_professores_cursos`  AS SELECT `c`.`nome` AS `curso`, `d`.`nome` AS `disciplina`, `d`.`Carga_horaria` AS `carga_horaria`, `p`.`nome` AS `professor` FROM ((`disciplina` `d` join `curso` `c` on(`d`.`id_curso` = `c`.`id_curso`)) join `professor` `p` on(`d`.`id_professor` = `p`.`id_professor`)) ;

-- --------------------------------------------------------

--
-- Estrutura para view `vw_05_alunos_responsaveis`
--
DROP TABLE IF EXISTS `vw_05_alunos_responsaveis`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_05_alunos_responsaveis`  AS SELECT `a`.`nome` AS `aluno`, `a`.`cpf` AS `cpf_aluno`, `r`.`nome` AS `responsavel`, `ar`.`parentesco` AS `parentesco` FROM ((`aluno` `a` join `aluno_responsavel` `ar` on(`a`.`id_aluno` = `ar`.`id_aluno`)) join `responsavel` `r` on(`ar`.`id_responsavel` = `r`.`id_responsavel`)) ;

-- --------------------------------------------------------

--
-- Estrutura para view `vw_06_alunos_disciplinas_notas`
--
DROP TABLE IF EXISTS `vw_06_alunos_disciplinas_notas`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_06_alunos_disciplinas_notas`  AS SELECT `a`.`nome` AS `aluno`, `d`.`nome` AS `disciplina`, `n`.`nota` AS `nota`, `n`.`media_final` AS `media_final` FROM ((((`aluno` `a` join `matricula` `m` on(`a`.`id_aluno` = `m`.`id_aluno`)) join `nota` `n` on(`m`.`id_matricula` = `n`.`id_matricula`)) join `avaliacao` `av` on(`n`.`id_avaliacao` = `av`.`id_avaliacao`)) join `disciplina` `d` on(`av`.`id_disciplina` = `d`.`id_disciplina`)) ;

-- --------------------------------------------------------

--
-- Estrutura para view `vw_07_alunos_turmas_disciplinas_professores`
--
DROP TABLE IF EXISTS `vw_07_alunos_turmas_disciplinas_professores`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_07_alunos_turmas_disciplinas_professores`  AS SELECT `a`.`nome` AS `aluno`, `t`.`nome` AS `turma`, `c`.`nome` AS `curso`, `d`.`nome` AS `disciplina`, `p`.`nome` AS `professor`, `t`.`ano_letivo` AS `ano_letivo` FROM ((((((`aluno` `a` join `matricula` `m` on(`a`.`id_aluno` = `m`.`id_aluno`)) join `turma` `t` on(`m`.`id_turma` = `t`.`id_turma`)) join `curso` `c` on(`t`.`id_curso` = `c`.`id_curso`)) join `disciplina_turma` `dt` on(`t`.`id_turma` = `dt`.`id_turma`)) join `disciplina` `d` on(`dt`.`id_disciplina` = `d`.`id_disciplina`)) join `professor` `p` on(`d`.`id_professor` = `p`.`id_professor`)) ;

-- --------------------------------------------------------

--
-- Estrutura para view `vw_08_desempenho_academico`
--
DROP TABLE IF EXISTS `vw_08_desempenho_academico`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_08_desempenho_academico`  AS SELECT `a`.`nome` AS `aluno`, `c`.`nome` AS `curso`, `d`.`nome` AS `disciplina`, `n`.`nota` AS `nota`, `n`.`media_final` AS `media_final`, `f`.`percentual_frequencia` AS `frequencia` FROM (((((((`aluno` `a` join `matricula` `m` on(`a`.`id_aluno` = `m`.`id_aluno`)) join `turma` `t` on(`m`.`id_turma` = `t`.`id_turma`)) join `curso` `c` on(`t`.`id_curso` = `c`.`id_curso`)) join `nota` `n` on(`m`.`id_matricula` = `n`.`id_matricula`)) join `avaliacao` `av` on(`n`.`id_avaliacao` = `av`.`id_avaliacao`)) join `disciplina` `d` on(`av`.`id_disciplina` = `d`.`id_disciplina`)) join `frequencia` `f` on(`m`.`id_matricula` = `f`.`id_matricula`)) ;

-- --------------------------------------------------------

--
-- Estrutura para view `vw_09_matriculas`
--
DROP TABLE IF EXISTS `vw_09_matriculas`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_09_matriculas`  AS SELECT `a`.`nome` AS `aluno`, `c`.`nome` AS `curso`, `t`.`nome` AS `turma`, `m`.`data_matricula` AS `data_matricula`, `t`.`ano_letivo` AS `ano_letivo` FROM (((`aluno` `a` join `matricula` `m` on(`a`.`id_aluno` = `m`.`id_aluno`)) join `turma` `t` on(`m`.`id_turma` = `t`.`id_turma`)) join `curso` `c` on(`t`.`id_curso` = `c`.`id_curso`)) ;

-- --------------------------------------------------------

--
-- Estrutura para view `vw_10_relatorio_academico`
--
DROP TABLE IF EXISTS `vw_10_relatorio_academico`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_10_relatorio_academico`  AS SELECT `a`.`nome` AS `aluno`, `c`.`nome` AS `curso`, `t`.`nome` AS `turma`, `d`.`nome` AS `disciplina`, `p`.`nome` AS `professor`, `n`.`nota` AS `nota`, `n`.`media_final` AS `media_final`, `f`.`percentual_frequencia` AS `frequencia` FROM ((((((((`aluno` `a` join `matricula` `m` on(`a`.`id_aluno` = `m`.`id_aluno`)) join `turma` `t` on(`m`.`id_turma` = `t`.`id_turma`)) join `curso` `c` on(`t`.`id_curso` = `c`.`id_curso`)) join `nota` `n` on(`m`.`id_matricula` = `n`.`id_matricula`)) join `avaliacao` `av` on(`n`.`id_avaliacao` = `av`.`id_avaliacao`)) join `disciplina` `d` on(`av`.`id_disciplina` = `d`.`id_disciplina`)) join `professor` `p` on(`d`.`id_professor` = `p`.`id_professor`)) join `frequencia` `f` on(`m`.`id_matricula` = `f`.`id_matricula`)) ;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `aluno`
--
ALTER TABLE `aluno`
  ADD PRIMARY KEY (`id_aluno`),
  ADD UNIQUE KEY `cpf` (`cpf`),
  ADD KEY `id_endereco` (`id_endereco`);

--
-- Índices de tabela `aluno_responsavel`
--
ALTER TABLE `aluno_responsavel`
  ADD PRIMARY KEY (`id_aluno`,`id_responsavel`),
  ADD KEY `id_responsavel` (`id_responsavel`);

--
-- Índices de tabela `avaliacao`
--
ALTER TABLE `avaliacao`
  ADD PRIMARY KEY (`id_avaliacao`),
  ADD KEY `id_disciplina` (`id_disciplina`);

--
-- Índices de tabela `bairro`
--
ALTER TABLE `bairro`
  ADD PRIMARY KEY (`id_bairro`),
  ADD KEY `id_cidade` (`id_cidade`);

--
-- Índices de tabela `boletim`
--
ALTER TABLE `boletim`
  ADD PRIMARY KEY (`id_boletim`),
  ADD KEY `id_frequencia` (`id_frequencia`),
  ADD KEY `id_matricula` (`id_matricula`);

--
-- Índices de tabela `cidade`
--
ALTER TABLE `cidade`
  ADD PRIMARY KEY (`id_cidade`),
  ADD KEY `id_estado` (`id_estado`);

--
-- Índices de tabela `coordenador`
--
ALTER TABLE `coordenador`
  ADD PRIMARY KEY (`id_coordenador`),
  ADD KEY `id_endereco` (`id_endereco`);

--
-- Índices de tabela `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`id_curso`),
  ADD KEY `id_coordenador` (`id_coordenador`);

--
-- Índices de tabela `disciplina`
--
ALTER TABLE `disciplina`
  ADD PRIMARY KEY (`id_disciplina`),
  ADD KEY `id_curso` (`id_curso`),
  ADD KEY `id_professor` (`id_professor`);

--
-- Índices de tabela `disciplina_turma`
--
ALTER TABLE `disciplina_turma`
  ADD PRIMARY KEY (`id_disciplina`,`id_turma`),
  ADD KEY `id_turma` (`id_turma`);

--
-- Índices de tabela `endereco`
--
ALTER TABLE `endereco`
  ADD PRIMARY KEY (`id_endereco`),
  ADD KEY `id_logradouro` (`id_logradouro`);

--
-- Índices de tabela `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id_estado`);

--
-- Índices de tabela `frequencia`
--
ALTER TABLE `frequencia`
  ADD PRIMARY KEY (`id_frequencia`),
  ADD KEY `id_matricula` (`id_matricula`);

--
-- Índices de tabela `logradouro`
--
ALTER TABLE `logradouro`
  ADD PRIMARY KEY (`id_logradouro`),
  ADD KEY `id_bairro` (`id_bairro`);

--
-- Índices de tabela `matricula`
--
ALTER TABLE `matricula`
  ADD PRIMARY KEY (`id_matricula`),
  ADD KEY `id_aluno` (`id_aluno`),
  ADD KEY `id_turma` (`id_turma`);

--
-- Índices de tabela `nota`
--
ALTER TABLE `nota`
  ADD PRIMARY KEY (`id_nota`),
  ADD KEY `id_matricula` (`id_matricula`),
  ADD KEY `id_avaliacao` (`id_avaliacao`);

--
-- Índices de tabela `professor`
--
ALTER TABLE `professor`
  ADD PRIMARY KEY (`id_professor`),
  ADD KEY `id_endereco` (`id_endereco`);

--
-- Índices de tabela `responsavel`
--
ALTER TABLE `responsavel`
  ADD PRIMARY KEY (`id_responsavel`),
  ADD KEY `id_endereco` (`id_endereco`);

--
-- Índices de tabela `turma`
--
ALTER TABLE `turma`
  ADD PRIMARY KEY (`id_turma`),
  ADD KEY `id_curso` (`id_curso`);

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `aluno`
--
ALTER TABLE `aluno`
  ADD CONSTRAINT `aluno_ibfk_1` FOREIGN KEY (`id_endereco`) REFERENCES `endereco` (`id_endereco`);

--
-- Restrições para tabelas `aluno_responsavel`
--
ALTER TABLE `aluno_responsavel`
  ADD CONSTRAINT `aluno_responsavel_ibfk_1` FOREIGN KEY (`id_aluno`) REFERENCES `aluno` (`id_aluno`),
  ADD CONSTRAINT `aluno_responsavel_ibfk_2` FOREIGN KEY (`id_responsavel`) REFERENCES `responsavel` (`id_responsavel`);

--
-- Restrições para tabelas `avaliacao`
--
ALTER TABLE `avaliacao`
  ADD CONSTRAINT `avaliacao_ibfk_1` FOREIGN KEY (`id_disciplina`) REFERENCES `disciplina` (`id_disciplina`);

--
-- Restrições para tabelas `bairro`
--
ALTER TABLE `bairro`
  ADD CONSTRAINT `bairro_ibfk_1` FOREIGN KEY (`id_cidade`) REFERENCES `cidade` (`id_cidade`);

--
-- Restrições para tabelas `boletim`
--
ALTER TABLE `boletim`
  ADD CONSTRAINT `boletim_ibfk_1` FOREIGN KEY (`id_frequencia`) REFERENCES `frequencia` (`id_frequencia`),
  ADD CONSTRAINT `boletim_ibfk_2` FOREIGN KEY (`id_matricula`) REFERENCES `matricula` (`id_matricula`);

--
-- Restrições para tabelas `cidade`
--
ALTER TABLE `cidade`
  ADD CONSTRAINT `cidade_ibfk_1` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`);

--
-- Restrições para tabelas `coordenador`
--
ALTER TABLE `coordenador`
  ADD CONSTRAINT `coordenador_ibfk_1` FOREIGN KEY (`id_endereco`) REFERENCES `endereco` (`id_endereco`);

--
-- Restrições para tabelas `curso`
--
ALTER TABLE `curso`
  ADD CONSTRAINT `curso_ibfk_1` FOREIGN KEY (`id_coordenador`) REFERENCES `coordenador` (`id_coordenador`);

--
-- Restrições para tabelas `disciplina`
--
ALTER TABLE `disciplina`
  ADD CONSTRAINT `disciplina_ibfk_1` FOREIGN KEY (`id_curso`) REFERENCES `curso` (`id_curso`),
  ADD CONSTRAINT `disciplina_ibfk_2` FOREIGN KEY (`id_professor`) REFERENCES `professor` (`id_professor`);

--
-- Restrições para tabelas `disciplina_turma`
--
ALTER TABLE `disciplina_turma`
  ADD CONSTRAINT `disciplina_turma_ibfk_1` FOREIGN KEY (`id_disciplina`) REFERENCES `disciplina` (`id_disciplina`),
  ADD CONSTRAINT `disciplina_turma_ibfk_2` FOREIGN KEY (`id_turma`) REFERENCES `turma` (`id_turma`);

--
-- Restrições para tabelas `endereco`
--
ALTER TABLE `endereco`
  ADD CONSTRAINT `endereco_ibfk_1` FOREIGN KEY (`id_logradouro`) REFERENCES `logradouro` (`id_logradouro`);

--
-- Restrições para tabelas `frequencia`
--
ALTER TABLE `frequencia`
  ADD CONSTRAINT `frequencia_ibfk_1` FOREIGN KEY (`id_matricula`) REFERENCES `matricula` (`id_matricula`);

--
-- Restrições para tabelas `logradouro`
--
ALTER TABLE `logradouro`
  ADD CONSTRAINT `logradouro_ibfk_1` FOREIGN KEY (`id_bairro`) REFERENCES `bairro` (`id_bairro`);

--
-- Restrições para tabelas `matricula`
--
ALTER TABLE `matricula`
  ADD CONSTRAINT `matricula_ibfk_1` FOREIGN KEY (`id_aluno`) REFERENCES `aluno` (`id_aluno`),
  ADD CONSTRAINT `matricula_ibfk_2` FOREIGN KEY (`id_turma`) REFERENCES `turma` (`id_turma`);

--
-- Restrições para tabelas `nota`
--
ALTER TABLE `nota`
  ADD CONSTRAINT `nota_ibfk_1` FOREIGN KEY (`id_matricula`) REFERENCES `matricula` (`id_matricula`),
  ADD CONSTRAINT `nota_ibfk_2` FOREIGN KEY (`id_avaliacao`) REFERENCES `avaliacao` (`id_avaliacao`);

--
-- Restrições para tabelas `professor`
--
ALTER TABLE `professor`
  ADD CONSTRAINT `professor_ibfk_1` FOREIGN KEY (`id_endereco`) REFERENCES `endereco` (`id_endereco`);

--
-- Restrições para tabelas `responsavel`
--
ALTER TABLE `responsavel`
  ADD CONSTRAINT `responsavel_ibfk_1` FOREIGN KEY (`id_endereco`) REFERENCES `endereco` (`id_endereco`);

--
-- Restrições para tabelas `turma`
--
ALTER TABLE `turma`
  ADD CONSTRAINT `turma_ibfk_1` FOREIGN KEY (`id_curso`) REFERENCES `curso` (`id_curso`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
