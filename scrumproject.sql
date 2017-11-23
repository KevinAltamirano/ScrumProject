-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-11-2017 a las 01:10:05
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
  `Nombre` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `hu`
--

INSERT INTO `hu` (`idSprint`, `idHU`, `Nombre`) VALUES
(16, 23, 'Hisotira'),
(8, 3, 'The first historia de usuario update'),
(15, 22, 'historia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `idProyecto` int(20) NOT NULL,
  `idUsuario` int(20) NOT NULL,
  `Nombre` text NOT NULL,
  `Descripcion` text NOT NULL,
  `idTeam` int(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `proyecto`
--

INSERT INTO `proyecto` (`idProyecto`, `idUsuario`, `Nombre`, `Descripcion`, `idTeam`) VALUES
(35, 1, 'Proyectito', 'Mi proyectito', 24),
(30, 1, 'My first project update', 'This is my first project in IOS but with update', 19);

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
(24, '{\"idUser\":[\"1\"]}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sprints`
--

CREATE TABLE `sprints` (
  `idProyecto` int(20) NOT NULL,
  `idSprint` int(20) NOT NULL,
  `SprintName` text NOT NULL,
  `FechaInicial` date NOT NULL,
  `FechaFinal` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sprints`
--

INSERT INTO `sprints` (`idProyecto`, `idSprint`, `SprintName`, `FechaInicial`, `FechaFinal`) VALUES
(30, 15, 'Second Sprint', '2017-11-14', '2017-11-20'),
(35, 16, 'Sprint', '2017-11-13', '2017-11-13'),
(30, 8, 'First Sprint', '2017-11-11', '2017-11-12');

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
  `idEstatus` int(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`idHU`, `idTarea`, `Nombre`, `Descripcion`, `idUsuario`, `idEstatus`) VALUES
(23, 28, 'tarea', 'gfcvhgbh', 1, 1),
(3, 27, 'Mmy first homework', 'nfcgvhh', 1, 1);

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
(2, 1, 'Kevin', 'Kevin'),
(3, 1, 'Kike', 'Kike');

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
  MODIFY `idHU` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `idProyecto` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `idRol` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `scrumteam`
--
ALTER TABLE `scrumteam`
  MODIFY `idTeam` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT de la tabla `sprints`
--
ALTER TABLE `sprints`
  MODIFY `idSprint` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `idTarea` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
