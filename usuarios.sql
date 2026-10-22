-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-04-2026 a las 00:19:12
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `anaysusgatos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `fechanacimiento` date NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `repetir_contrasena` varchar(255) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `email`, `fechanacimiento`, `usuario`, `contrasena`, `repetir_contrasena`, `fecha_registro`) VALUES
(1, 'Ana Maria', 'Rodriguez Pedraza', 'anamrodriguezped@unal.edu.co', '1992-02-06', 'profeanita', 'profe1234', 'profe1234', '2026-04-16 23:46:11'),
(3, 'Anita', 'Ramirez', 'anitaramirez@gmail.com', '1992-02-06', 'profeanita1', '1234profe', '1234profe', '2026-04-17 00:12:04'),
(4, 'Gloria Esperanza', 'Rodriguez', 'glerodriguez@gmail.com', '1988-12-14', 'profeloly', 'porlolinda', 'porlolinda', '2026-04-17 01:07:20'),
(5, 'MICHAEL JORDAN', 'RODRIGUEZ', 'michael@gmail.com', '2010-08-10', 'michaeljordan', '$2y$10$FiVPw4uLYN57FBIYPzb7nuxXUkj1.2Gaqq.BYXiecifM2IcehY.9m', 'jordan1234', '2026-04-17 01:19:33'),
(6, 'Reina Maria', 'Rodriguez Pedraza', 'anaysusgatosygatas.2025@gmail.com', '2005-06-02', 'reinamaria', '$2y$10$cYfyWueR8XKw1nwyNDXKYe1hGFxv4TZGbUVP2GolUFVoxn4NCO1Qi', '920206', '2026-04-20 21:49:10');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
