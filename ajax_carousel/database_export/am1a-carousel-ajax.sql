-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Gegenereerd op: 28 mrt 2018 om 07:00
-- Serverversie: 5.7.19
-- PHP-versie: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `am1a-carousel-ajax`
--
CREATE DATABASE IF NOT EXISTS `am1a-carousel-ajax` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `am1a-carousel-ajax`;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `pictures`
--

DROP TABLE IF EXISTS `pictures`;
CREATE TABLE IF NOT EXISTS `pictures` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `info` varchar(200) NOT NULL,
  `category` enum('fruit','groenten') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `pictures`
--

INSERT INTO `pictures` (`id`, `name`, `title`, `info`, `category`) VALUES
(3, 'broccoli.jpg', 'Broccoli', 'broccoli is een superfood', 'groenten'),
(4, 'kruisbes.jpg', 'Kruisbessen', 'Kruisbessen zitten vol vitamine C', 'fruit'),
(5, 'pak-choi.jpg', 'Pak-Choi', 'Pak-choi is een iets bittere groente', 'groenten'),
(6, 'pruim.jpg', 'Pruimen', 'Pruimen zijn erg lekker', 'fruit'),
(7, 'tomaat.jpg', 'Tomaten', 'Tomaten vormen de basis voor iedere pizza', 'fruit'),
(8, 'wortel.jpg', 'Wortelen', 'Wortelen zijn goed voor de ogen', 'groenten');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
