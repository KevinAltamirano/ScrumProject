-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-12-2017 a las 18:51:32
-- Versión del servidor: 10.1.25-MariaDB
-- Versión de PHP: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `scrumproject`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estatus`
--

CREATE TABLE `estatus` (
  `idEstatus` int(20) NOT NULL,
  `Nombre` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `estatus`
--

INSERT INTO `estatus` (`idEstatus`, `Nombre`) VALUES
(1, 'Pendiente'),
(2, 'Haciendo'),
(3, 'En pruebas'),
(4, 'Terminado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hu`
--

CREATE TABLE `hu` (
  `idSprint` int(20) NOT NULL,
  `idHU` int(20) NOT NULL,
  `Nombre` text NOT NULL,
  `Estatus` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `hu`
--

INSERT INTO `hu` (`idSprint`, `idHU`, `Nombre`, `Estatus`) VALUES
(30, 35, 'vhvgbjhnjm', 1),
(8, 3, 'The first historia de usuario update', 1),
(15, 22, 'historia', 1),
(16, 24, 'hola', 0),
(16, 26, 'sd', 0),
(16, 30, 'otro', 0),
(18, 27, 'historia', 0),
(30, 34, 'njkml,l', 0),
(18, 29, 'new historia update', 0),
(16, 31, 'historia otra', 0),
(26, 32, 'SP Historia', 0),
(26, 33, 'SP Historia 2', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `idProyecto` int(20) NOT NULL,
  `idUsuario` int(20) NOT NULL,
  `Nombre` text NOT NULL,
  `Descripcion` text NOT NULL,
  `idTeam` int(20) NOT NULL,
  `Estatus` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `proyecto`
--

INSERT INTO `proyecto` (`idProyecto`, `idUsuario`, `Nombre`, `Descripcion`, `idTeam`, `Estatus`) VALUES
(35, 1, 'Proyectito hkj', 'Mi proyectito', 42, 1),
(30, 1, 'My first project update', 'This is my first project in IOS but with update', 43, 1),
(44, 4, 'otro', 'hgbhnj', 36, 1),
(43, 4, 'Proyecto nuevo', 'gbjhnjmk', 35, 1),
(41, 1, 'jh,', 'jhkj', 31, 1),
(42, 1, 'SP Team', 'hkjk', 33, 1),
(45, 4, 'vhgbhj', 'vhgbhjnj', 37, 1),
(46, 4, 'bmn,m', 'njmk', 38, 1),
(47, 4, ' hghbjhnjkml', 'b nm,', 39, 1),
(48, 1, 'otro', 'otro', 40, 1),
(49, 1, 'Proyecto actualizado la prueba', 'proyecto de prueba', 46, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `idRol` int(20) NOT NULL,
  `Nombre` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`idRol`, `Nombre`) VALUES
(1, 'Scrum Master'),
(2, 'Developer'),
(3, 'Chief Master');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `scrumteam`
--

CREATE TABLE `scrumteam` (
  `idTeam` int(20) NOT NULL,
  `idUsuario` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `scrumteam`
--

INSERT INTO `scrumteam` (`idTeam`, `idUsuario`) VALUES
(4, '1'),
(5, '1'),
(6, '1'),
(7, '{\"idUser\":[\"1\",\"2\"]}'),
(8, '{\"idUser\":[\"1\"]}'),
(9, '{\"idUser\":[\"1\",\"2\"]}'),
(10, '{\"idUser\":\"\"}'),
(11, '{\"idUser\":[\"1\",\"2\"]}'),
(12, '{\"idUser\":[\"1\",\"2\",\"3\"]}'),
(13, '{\"idUser\":[\"2\"]}'),
(14, '{\"idUser\":[\"1\"]}'),
(15, '{\"idUser\":[\"1\",\"2\"]}'),
(16, '{\"idUser\":[\"1\",\"2\",\"3\"]}'),
(17, '{\"idUser\":[\"1\",\"2\",\"3\"]}'),
(18, '{\"idUser\":\"\"}'),
(19, '{\"idUser\":\"\"}'),
(20, '{\"idUser\":\"\"}'),
(21, '{\"idUser\":\"\"}'),
(22, '{\"idUser\":\"\"}'),
(23, '{\"idUser\":[\"1\",\"2\",\"3\"]}'),
(24, '{\"idUser\":[\"1\"]}'),
(25, '{\"idUser\":[\"1\",\"2\",\"3\"]}'),
(26, '{\"idUser\":[\"2\",\"3\"]}'),
(27, '{\"idUser\":[\"3\"]}'),
(28, '{\"idUser\":[\"3\"]}'),
(29, '{\"idUser\":[\"3\"]}'),
(30, '{\"idUser\":[\"3\"]}'),
(31, '{\"idUser\":[\"3\"]}'),
(32, '{\"idUser\":[\"3\"]}'),
(33, '{\"idUser\":[\"3\"]}'),
(34, '{\"idUser\":[\"2\",\"3\"]}'),
(35, '{\"idUser\":[\"3\",\"5\"]}'),
(36, '{\"idUser\":[\"5\"]}'),
(37, '{\"idUser\":[\"3\",\"5\"]}'),
(38, '{\"idUser\":[\"5\"]}'),
(39, '{\"idUser\":[\"5\"]}'),
(40, '{\"idUser\":[\"3\",\"5\"]}'),
(41, '{\"idUser\":[\"3\",\"5\"]}'),
(42, '{\"idUser\":[\"3\",\"5\"]}'),
(43, '{\"idUser\":[\"3\",\"5\"]}'),
(44, '{\"idUser\":[\"3\",\"5\"]}'),
(45, '{\"idUser\":[\"3\"]}'),
(46, '{\"idUser\":[\"3\",\"5\"]}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sprints`
--

CREATE TABLE `sprints` (
  `idProyecto` int(20) NOT NULL,
  `idSprint` int(20) NOT NULL,
  `SprintName` text NOT NULL,
  `FechaInicial` date NOT NULL,
  `FechaFinal` date NOT NULL,
  `Estatus` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sprints`
--

INSERT INTO `sprints` (`idProyecto`, `idSprint`, `SprintName`, `FechaInicial`, `FechaFinal`, `Estatus`) VALUES
(30, 15, 'Second Sprint', '2017-11-14', '2017-11-20', 1),
(35, 16, 'Sprint', '2017-11-13', '2017-11-14', 0),
(30, 8, 'First Sprint', '2017-11-11', '2017-11-12', 1),
(35, 28, 'otro mas', '2017-11-23', '2017-11-23', 0),
(35, 18, 'sprint update', '2017-11-22', '2017-11-22', 0),
(41, 19, 'gjbhknj update', '2017-11-23', '2017-11-23', 1),
(41, 20, 's', '2017-11-23', '2017-11-23', 1),
(41, 21, 'fhfvjbn', '2017-11-23', '2017-11-23', 1),
(41, 22, 'prueba sprint', '2017-11-23', '2017-11-23', 1),
(41, 23, 'another prueba', '2017-11-23', '2017-11-23', 1),
(41, 24, 'uno mas update', '2017-11-23', '2017-11-25', 1),
(35, 25, 'nuevo sprint', '2017-11-23', '2017-11-24', 0),
(42, 26, 'SP Sprint', '2017-11-23', '2017-11-23', 0),
(42, 27, 'SP Sprint 2', '2017-11-23', '2017-11-23', 1),
(35, 29, 'la ultima prueba', '2017-11-23', '2017-11-23', 0),
(35, 30, 'hvgjbhnkml', '2017-11-23', '2017-11-23', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `idHU` int(20) NOT NULL,
  `idTarea` int(20) NOT NULL,
  `Nombre` text NOT NULL,
  `Descripcion` text NOT NULL,
  `idUsuario` int(20) NOT NULL,
  `idEstatus` int(20) NOT NULL,
  `Estatus` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`idHU`, `idTarea`, `Nombre`, `Descripcion`, `idUsuario`, `idEstatus`, `Estatus`) VALUES
(3, 27, 'Mmy first homework', 'nfcgvhh', 3, 1, 1),
(27, 29, 'Tareita', 'bhjnjm', 3, 2, 0),
(32, 37, 'SP Tarea editada', 'jhkjlk', 3, 3, 0),
(24, 36, 'v nbn', 'vhgjbnkmk', 3, 1, 0),
(24, 35, ' gfvhgjbnk', 'gfvhjbnkml', 3, 1, 0),
(24, 34, 'tarea', 'gfcfvhjbnkk', 3, 1, 0),
(32, 38, 'SP Tarea 2', 'njmk', 3, 1, 0),
(35, 40, 'gbhnjk', 'ghjbhnkml', 3, 2, 1),
(32, 39, 'SP Otra tarea', 'jhkjk', 3, 1, 0),
(35, 41, 'jhnjmk', 'jhnjkmkl,', 3, 4, 1),
(35, 42, 'TAREA 1', 'JHNJMK', 3, 3, 1),
(35, 43, 'TAREA 2', 'VHGJBNK', 3, 3, 1),
(35, 44, 'hgbjnj', 'vbnmn,m', 5, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(20) NOT NULL,
  `idRol` int(20) NOT NULL,
  `Usuario` text NOT NULL,
  `Contrasena` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `idRol`, `Usuario`, `Contrasena`) VALUES
(1, 1, 'Andy', 'Andy'),
(2, 3, 'Kevin', 'Kevin'),
(3, 2, 'Kike', 'Kike'),
(4, 1, 'Martin', 'Martin'),
(5, 2, 'Jhan', 'Jhan');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estatus`
--
ALTER TABLE `estatus`
  ADD PRIMARY KEY (`idEstatus`);

--
-- Indices de la tabla `hu`
--
ALTER TABLE `hu`
  ADD PRIMARY KEY (`idHU`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`idProyecto`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`idRol`);

--
-- Indices de la tabla `scrumteam`
--
ALTER TABLE `scrumteam`
  ADD PRIMARY KEY (`idTeam`);

--
-- Indices de la tabla `sprints`
--
ALTER TABLE `sprints`
  ADD PRIMARY KEY (`idSprint`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`idTarea`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estatus`
--
ALTER TABLE `estatus`
  MODIFY `idEstatus` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `hu`
--
ALTER TABLE `hu`
  MODIFY `idHU` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `idProyecto` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `idRol` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `scrumteam`
--
ALTER TABLE `scrumteam`
  MODIFY `idTeam` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
--
-- AUTO_INCREMENT de la tabla `sprints`
--
ALTER TABLE `sprints`
  MODIFY `idSprint` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `idTarea` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
