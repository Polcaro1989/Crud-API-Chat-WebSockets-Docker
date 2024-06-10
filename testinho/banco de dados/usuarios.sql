-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: testinho-mariadb:3306
-- Tempo de geração: 10/05/2024 às 11:54
-- Versão do servidor: 11.3.2-MariaDB-1:11.3.2+maria~ubu2204
-- Versão do PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `crud`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fone` varchar(15) NOT NULL,
  `data_nascimento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `fone`, `data_nascimento`) VALUES
(91, 'Maria Silva', 'maria.silva@example.com', '(11) 91234-5678', '1990-03-15'),
(92, 'João Santos', 'joao.santos@example.com', '(21) 98765-4321', '1985-07-20'),
(93, 'Ana Oliveira', 'ana.oliveira@example.com', '(31) 92345-6789', '1988-11-10'),
(94, 'Pedro Souza', 'pedro.souza@example.com', '(41) 93456-7890', '1992-05-25'),
(95, 'Juliana Costa', 'juliana.costa@example.com', '(51) 94567-8901', '1983-09-30'),
(96, 'Lucas Pereira', 'lucas.pereira@example.com', '(61) 95678-9012', '1986-02-18'),
(97, 'Carla Lima', 'carla.lima@example.com', '(71) 96789-0123', '1995-04-05'),
(98, 'Marcos Santos', 'marcos.santos@example.com', '(81) 97890-1234', '1980-12-12'),
(99, 'Fernanda Silva', 'fernanda.silva@example.com', '(91) 98901-2345', '1993-08-22'),
(100, 'Rafael Oliveira', 'rafael.oliveira@example.com', '(12) 92345-6789', '1989-06-28'),
(101, 'Amanda Souza', 'amanda.souza@example.com', '(22) 93456-7890', '1987-01-17'),
(102, 'Gabriel Costa', 'gabriel.costa@example.com', '(32) 94567-8901', '1991-10-08'),
(103, 'Larissa Pereira', 'larissa.pereira@example.com', '(42) 95678-9012', '1984-03-03'),
(104, 'Marcelo Lima', 'marcelo.lima@example.com', '(52) 96789-0123', '1997-11-19'),
(105, 'Camila Santos', 'camila.santos@example.com', '(62) 97890-1234', '1981-04-14'),
(106, 'Guilherme Silva', 'guilherme.silva@example.com', '(72) 98901-2345', '1994-09-07'),
(107, 'Isabela Oliveira', 'isabela.oliveira@example.com', '(82) 91234-5678', '1988-05-01'),
(108, 'Ricardo Souza', 'ricardo.souza@example.com', '(92) 98765-4321', '1996-12-09'),
(109, 'Thais Costa', 'thais.costa@example.com', '(13) 92345-6789', '1983-02-24'),
(110, 'Diego Pereira', 'diego.pereira@example.com', '(23) 93456-7890', '1989-07-13'),
(111, 'Caroline Lima', 'caroline.lima@example.com', '(33) 94567-8901', '1986-10-02'),
(112, 'Felipe Santos', 'felipe.santos@example.com', '(43) 95678-9012', '1990-11-27'),
(113, 'Natália Silva', 'natalia.silva@example.com', '(53) 96789-0123', '1985-06-16'),
(114, 'Bruno Oliveira', 'bruno.oliveira@example.com', '(63) 97890-1234', '1992-01-05'),
(115, 'Mariana Souza', 'mariana.souza@example.com', '(73) 98901-2345', '1984-08-18'),
(116, 'Rodrigo Costa', 'rodrigo.costa@example.com', '(83) 91234-5678', '1998-03-29'),
(117, 'Lívia Pereira', 'livia.pereira@example.com', '(93) 98765-4321', '1982-12-20'),
(118, 'Thiago Lima', 'thiago.lima@example.com', '(14) 92345-6789', '1987-09-09'),
(119, 'Cristina Santos', 'cristina.santos@example.com', '(24) 93456-7890', '1991-04-26'),
(120, 'Renato Costa', 'renato.costa@example.com', '(34) 94567-8901', '1980-01-31'),
(121, 'Patrícia Silva', 'patricia.silva@example.com', '(44) 95678-9012', '1995-10-22'),
(122, 'Henrique Oliveira', 'henrique.oliveira@example.com', '(54) 96789-0123', '1986-07-11'),
(123, 'Natasha Souza', 'natasha.souza@example.com', '(64) 97890-1234', '1993-02-14'),
(124, 'Vinícius Costa', 'vinicius.costa@example.com', '(74) 98901-2345', '1981-11-03'),
(125, 'Laura Pereira', 'laura.pereira@example.com', '(84) 91234-5678', '1997-06-06'),
(126, 'Gustavo Lima', 'gustavo.lima@example.com', '(94) 98765-4321', '1983-05-25'),
(127, 'Aline Santos', 'aline.santos@example.com', '(15) 92345-6789', '1989-04-12'),
(128, 'Fernando Costa', 'fernando.costa@example.com', '(25) 93456-7890', '1985-03-07'),
(129, 'Helena Silva', 'helena.silva@example.com', '(35) 94567-8901', '1992-08-28'),
(130, 'Luciana Oliveira', 'luciana.oliveira@example.com', '(45) 95678-9012', '1980-07-17'),
(131, 'Rafaela Souza', 'rafaela.souza@example.com', '(55) 96789-0123', '1994-12-05'),
(132, 'Leandro Costa', 'leandro.costa@example.com', '(65) 97890-1234', '1987-09-30'),
(133, 'Carolina Santos', 'carolina.santos@example.com', '(75) 98901-2345', '1981-02-19'),
(134, 'Gabriela Silva', 'gabriela.silva@example.com', '(85) 91234-5678', '1996-11-09'),
(135, 'Marcela Lima', 'marcela.lima@example.com', '(95) 98765-4321', '1984-10-14'),
(136, 'Roberto Costa', 'roberto.costa@example.com', '(16) 92345-6789', '1990-05-23'),
(137, 'Vanessa Oliveira', 'vanessa.oliveira@example.com', '(26) 93456-7890', '1983-06-18'),
(138, 'Anderson Souza', 'anderson.souza@example.com', '(36) 94567-8901', '1991-03-27'),
(139, 'Tatiana Santos', 'tatiana.santos@example.com', '(46) 95678-9012', '1988-12-10'),
(140, 'Paulo Costa', 'paulo.costa@example.com', '(56) 96789-0123', '1995-07-03');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=142;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
