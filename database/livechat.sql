-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2023 at 05:58 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `livechat`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `messages_id` int(11) NOT NULL,
  `outgoing` varchar(20) NOT NULL,
  `incoming` varchar(20) NOT NULL,
  `messages` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`messages_id`, `outgoing`, `incoming`, `messages`) VALUES
(1, '1', '2', 'hello'),
(2, '1', '2', 'hy'),
(3, '1', '2', 'hy'),
(4, '1', '2', 'hy'),
(5, '1', '2', 'hy'),
(6, '1', '2', 'hy'),
(7, '1', '2', 'hy'),
(8, '1', '2', 'hy'),
(9, '1', '2', 'how are u sir'),
(10, '1', '2', 'plzz help me'),
(11, '1', '2', 'hlp me to improve my skills'),
(12, '2', '1', 'ok'),
(13, '2', '1', 'i will help u'),
(14, '1', '2', 'ok'),
(15, '1', '2', 'where are u from?'),
(16, '1', '2', 'hello'),
(17, '1', '2', 'hello code provider'),
(18, '1', '2', 'hello'),
(19, '1', '2', 'test message'),
(20, '3', '1', 'hello'),
(21, '3', '1', 'how r u?'),
(22, '3', '1', 'i need your help?'),
(23, '4', '3', 'hello sir'),
(24, '4', '3', 'how r u?'),
(25, '3', '4', 'i am fine'),
(26, '4', '3', 'i need your help'),
(27, '4', '3', 'how can i help u?'),
(28, '1', '4', 'hello'),
(29, '1', '3', 'ok'),
(30, '8', '5', 'dsdsa'),
(31, '8', '5', 'fdfdf');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(20) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `image`, `status`) VALUES
(10, 'mohammad ', 'mousa', 'mohammad.mousaW@gmail.com', '937cff3b21b435cef65fb50603acc690', '9071562131685794196Screenshot 2023-06-03 150808.png', 'Offline'),
(11, 'omar ', 'ahmad', 'omar.ahmadW@gmail.com', 'ff70997ca768f159462bcf8697a75fe1', '4729499291685794331Screenshot 2023-06-03 150808.png', 'Offline'),
(12, 'zain ', 'ibrahem', 'zain.ibrahemW@gmail.com', '0d0aa61640dff581c2fb0f4f9f3c179f', '8051033241685794397Screenshot 2023-06-03 150808.png', 'Offline'),
(13, 'zaid', 'ali', 'zaid.aliW@gmail.com', '4181bdebf9762501aeb21875bc884ad0', '9109835631685794474Screenshot 2023-06-03 150808.png', 'Offline'),
(14, 'bahaa', 'omar', 'bahaa.omarW@gmail.com', '8a2a5c9dde664e521c92e55b318c85d8', '1474013371685794554Screenshot 2023-06-03 150808.png', 'Offline'),
(15, 'mahmoud ', 'khaled', 'mahmoud.khaledW@gmail.com', 'd20f7d64a290473ad2e58e125e39363e', '2035074141685794616Screenshot 2023-06-03 150808.png', 'Offline'),
(16, 'adnan', 'mustafa', 'adnan.mustafaW@gmail.com', '0e9ef85be245434e22e96ab0f9b761a7', '8146017881685794711Screenshot 2023-06-03 150808.png', 'Offline'),
(17, 'jasim', 'rami', 'jasim.ramiW@gmail.com', '2d0680830ca8373976ca9a5e9965ba53', '1873515971685794759Screenshot 2023-06-03 150808.png', 'Offline'),
(18, 'osama', 'issa', 'osama.issaW@gmail.com', '1b9689a020a3fedf130056ccd90f8ac2', '2043029911685794810Screenshot 2023-06-03 150808.png', 'Offline'),
(19, 'zaid', 'kamel', 'zaid.kamelW@gmail.com', '2f140f9c53229d7c4bca5c03de81e149', '3007765951685794858Screenshot 2023-06-03 150808.png', 'Offline'),
(20, 'hatem', 'salah', 'hatem.salahW@gmail.com', '64420946a0bd5d5f6afa8ec67ca79b67', '9766509941685794987Screenshot 2023-06-03 150808.png', 'Offline'),
(21, 'ahmad', 'ali', 'ahmad.aliW@gmail.com', '05ecf46b4866f56620bcf38a824839df', '1308944111685795451Screenshot 2023-06-03 150808.png', 'Offline');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`messages_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `messages_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
