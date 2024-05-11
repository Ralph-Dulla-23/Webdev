-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 11, 2024 at 04:04 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gearguards`
--

-- --------------------------------------------------------

--
-- Table structure for table `borrowedtransaction`
--

CREATE TABLE `borrowedtransaction` (
  `TransactionID` bigint(255) NOT NULL,
  `ItemID` bigint(255) NOT NULL,
  `ID` varchar(30) NOT NULL,
  `Borrowed_date` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `Deadline` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `Quantity_Borrowed` bigint(255) NOT NULL,
  `Status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `borrowedtransaction`
--

INSERT INTO `borrowedtransaction` (`TransactionID`, `ItemID`, `ID`, `Borrowed_date`, `Deadline`, `Quantity_Borrowed`, `Status`) VALUES
(3, 8, '220000000989', '2024-03-30 04:05:29.000000', '2024-04-05 02:23:13.000000', 1, 'Returned'),
(4, 5, '220000001342', '2024-03-30 04:38:28.000000', '2024-05-07 00:39:16.325829', 1, 'Borrowing'),
(5, 3, '220000001163', '2024-03-30 04:46:33.000000', '2024-05-07 01:07:33.271939', 2, 'Returned'),
(6, 5, '04', '2024-03-30 05:11:16.000000', '2024-05-07 00:39:16.325829', 1, 'Borrowing'),
(7, 7, '220000000989', '2024-05-07 02:22:46.000000', '2024-05-12 02:22:46.000000', 1, 'Borrowing'),
(8, 9, '01', '2024-05-06 00:00:00.000000', '2024-05-07 00:39:16.325829', 2, 'Borrowing'),
(11, 9, '05', '2024-05-07 00:49:49.000000', '2024-05-12 00:49:49.000000', 3, 'Borrowing'),
(12, 13, '220000001551', '2024-05-07 02:28:53.000000', '2024-05-12 02:28:53.000000', 2, 'Returned'),
(13, 13, '05', '2024-05-07 13:21:26.000000', '2024-05-12 13:21:26.000000', 2, 'Borrowing');

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `ItemName` varchar(255) NOT NULL,
  `ItemID` bigint(255) NOT NULL,
  `FromLab` varchar(255) NOT NULL,
  `ItemDescription` varchar(255) NOT NULL,
  `Quantity` bigint(255) NOT NULL,
  `Total_Quantity` bigint(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`ItemName`, `ItemID`, `FromLab`, `ItemDescription`, `Quantity`, `Total_Quantity`) VALUES
('KeyBoard', 3, 'IOA-LAB', 'Hardware', 3, 5),
('Ethernet Cable', 4, 'IOT-LAB', 'Cable', 2, 2),
('KEVLER JL-15PA Portable speaker', 5, 'IOT-LAB', 'Speaker', 4, 6),
('CD Cage', 6, 'IOT-LAB', 'Drive', 0, 2),
('Extention Cable', 7, 'IOT-LAB', 'Cable', 6, 7),
('Headset', 8, 'IOT-LAB', 'Hardware', 7, 8),
('Router', 9, 'IOT-LAB', 'Hardware', 6, 10),
('Vga-to-HDMI', 13, 'IOA-LAB', 'Converter', 6, 4),
('tg', 31, 'tg', 'tg', 46, 0),
('testing', 32, 'testing', 'testing', 2, 0),
('test', 33, 'test', 'test', 123, 0),
('1', 34, '1', '1', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `TransactionID` bigint(255) NOT NULL,
  `Reason` varchar(255) NOT NULL,
  `Deadline` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `Status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`TransactionID`, `Reason`, `Deadline`, `Status`) VALUES
(3, 'Need More Time', '2024-05-07 01:07:33.271939', 'Pending'),
(4, 'More Time', '2024-05-07 01:07:33.271939', 'Pending'),
(5, 'Missing Item Outside School Premises , Borrower needs to find Item', '2024-05-07 01:07:33.271939', 'Pending'),
(7, 'I Don\'t Know', '2024-05-12 01:33:37.000000', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` varchar(30) NOT NULL,
  `Course` varchar(255) DEFAULT NULL,
  `Name` varchar(255) NOT NULL,
  `Status` varchar(255) NOT NULL,
  `Role` varchar(255) NOT NULL,
  `Admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `Course`, `Name`, `Status`, `Role`, `Admin`) VALUES
('01', NULL, 'Clyde Chester Balaman', 'Available', 'Personnel', 1),
('02', NULL, 'Jenn Leana Fernandez', 'Borrowing', 'Personnel', 1),
('03', NULL, 'Rogelio Badiang', 'Borrowing', 'Personnel', 1),
('04', NULL, 'Cris John David Manero', 'Borrowing', 'Personnel', 1),
('05', NULL, 'Michel Bolo\r\n', 'Available', 'Personnel', 1),
('190000001035', 'BSIT', 'Ian Labonete', 'Available', 'Student', 0),
('220000000989', 'BSCS', 'Princess Micah Espinosa', 'Available', 'Student', 0),
('220000001044', 'BSCS', 'Wilfredo Marinay Jr.', 'Borrowing', 'Student', 0),
('220000001163', 'BSCS', 'Andre Jose Ruiz', 'Available', 'Student', 0),
('220000001342', 'BSCS', 'JISI', 'Borrowing', 'Status ', 0),
('220000001551', 'BSIT', 'Jan Kurt Gerongco', 'Available', 'Student', 0),
('220000001586', 'BSCS', 'Riggs Harvey Ybañez', 'Borrowing', 'Student', 0),
('220000001713', 'BSCS', 'Zyle Adam Doctolero', 'Available', 'Student', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `borrowedtransaction`
--
ALTER TABLE `borrowedtransaction`
  ADD PRIMARY KEY (`TransactionID`),
  ADD KEY `item_to_borrowedtransaction` (`ItemID`),
  ADD KEY `user_to_borrowedtransaction` (`ID`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`ItemID`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`TransactionID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `borrowedtransaction`
--
ALTER TABLE `borrowedtransaction`
  MODIFY `TransactionID` bigint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `ItemID` bigint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `borrowedtransaction`
--
ALTER TABLE `borrowedtransaction`
  ADD CONSTRAINT `item_to_borrowedtransaction` FOREIGN KEY (`ItemID`) REFERENCES `item` (`ItemID`),
  ADD CONSTRAINT `user_to_borrowedtransaction` FOREIGN KEY (`ID`) REFERENCES `user` (`ID`);

--
-- Constraints for table `request`
--
ALTER TABLE `request`
  ADD CONSTRAINT `TransactionID_to_RequestTable` FOREIGN KEY (`TransactionID`) REFERENCES `borrowedtransaction` (`TransactionID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
