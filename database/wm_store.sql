-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2023 at 05:57 AM
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
-- Database: `wm_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(100) NOT NULL,
  `name` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `password`) VALUES
(3, 'topwash', 'afc97ea131fd7e2695a98ef34013608f97f34e1d'),
(5, 'Yazeed_a1', 'dc371c61e9d3150f76d603269650364442bc8bb9'),
(6, 'qusai_a2', '9667bf96eb1ab93c7251df1d0586d50b10c20b36'),
(7, 'nooraldin_a3', '85e9e9ed3d17008157955ba7317c35902085f52f');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(100) NOT NULL,
  `user_id` int(100) NOT NULL,
  `pid` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(10) NOT NULL,
  `quantity` int(10) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `user_id`, `pid`, `name`, `price`, `quantity`, `image`) VALUES
(54, 38, 28, 'Chemical Guys CWS_402_64 Mr. Pink Foaming Car Wash Soap (Works with Foam Cannons)**', 25, 1, '71-kw1a+sSL._AC_SL1500_.jpg'),
(55, 38, 27, 'TICARVE Car Cleaning Gel Detailing Putty Car Putty Auto Detailing Tools **', 8, 1, 'asfsdf.jpg'),
(56, 39, 12, 'interior Small', 2, 1, 'small car size.png'),
(57, 39, 23, 'Addition large car tinting services', 40, 2, 'tint.png');

-- --------------------------------------------------------

--
-- Table structure for table `chatbot`
--

CREATE TABLE `chatbot` (
  `caht_id` int(11) NOT NULL,
  `queries` varchar(300) NOT NULL,
  `replies` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chatbot`
--

INSERT INTO `chatbot` (`caht_id`, `queries`, `replies`) VALUES
(84, 'hi|hello|hey|hy|how are you | I need help. |help me| How can you help me | Hello |?', 'I am here to guide you in connecting with the<br> winch owner.\r\n<br><br> \r\n\r\nIf you would like to see<br> the steps for contacting<br> for winch owner, please enter \" 20 \".\r\n'),
(85, 'bye|by|good bye|good by', 'Ok bye. see you soon!'),
(86, '1', 'winch in Zarqa<br> ---> ahmad ali<br> (Please write this name in the search field on the<br> winch chat page.)'),
(87, '2', 'winch in Amman<br> ---> mohammad mousa<br> (Please write this name in the search field on the<br> winch chat page.)'),
(88, '3', 'winch in Aqaba<br> ---> omar ahmad<br> (Please write this name in the search field on the<br> winch chat page.)'),
(89, '4', 'winch in Al-Karak<br> ---> zain ibrahem<br> (Please write this name in the search field on the<br> winch chat page.)'),
(90, '5', 'winch in At-Tafilah<br> ---> zaid ali<br> (Please write this name in the search field on the<br> winch chat page.)'),
(91, '6', 'winch in Irbid<br> ---> bahaa omar<br> (Please write this name in the search field on the<br> winch chat page.)'),
(92, '7', 'winch in Al-Balqa<br> ---> mahmoud khaled<br> (Please write this name in the search field on the<br> winch chat page.)'),
(93, '8', 'winch in Jerash<br> ---> adnan mustafa<br> (Please write this name in the search field on the<br> winch chat page.)'),
(94, '9', 'winch in Madaba<br> ---> jasim rami<br> (Please write this name in the search field on the<br> winch chat page.)'),
(95, '10', 'winch in Ma\'an<br> ---> osama issa <br> (Please write this name in the search field on the<br> winch chat page.)'),
(96, '11', 'winch in Ajloun<br> ---> zaid kamel<br> (Please write this name in the search field on the<br> winch chat page.)'),
(97, '12', 'winch in Al-Mafraq<br> ---> hatem salah<br> (Please write this name in the search field on the<br> winch chat page.)'),
(98, 'winch||winsh|||wench||wensh||i want winch||\r\n|', 'Please input the number corresponding to your<br> governorate from the<br> provided list:<br>\r\n<br>\r\n\r\n1-Zarqa\r\n<br>\r\n2-Amman\r\n<br>\r\n3-Aqaba\r\n<br>\r\n4-Al-Karak\r\n<br>\r\n5-At-Tafilah\r\n<br>\r\n6-Irbid\r\n<br>\r\n7-Al-Balqa\r\n<br>\r\n8-Jerash\r\n<br>\r\n9-Madaba\r\n<br>\r\n10-Ma\'an\r\n<br>\r\n11-Ajloun\r\n<br>\r\n12-Al-Mafraq'),
(99, 'What are the steps| What are the steps?| What are the steps| Can you give me the step| steps|20', 'To reach out to the winch owner, please follow these instructions:\r\n\r\nStep 1: Enter \"i want winch\".\r\n'),
(100, 'مرحبا|السلام عليكم |الو|كيفك|كيف حالك|اريد المساعدة|بدي مساعدة|ساعدني|بتقدر تساعدني|هاي|؟', 'أنا هنا لمساعدتك في التواصل مع <br> مالك المرفاع\r\n\r\n.إذا كنت ترغب في <br> رؤية خطوات الاتصال بمالك <br> الرافعة ، من فضلك أدخل رقم 50 '),
(101, 'بدي ونش|ونش|اريد ونش|\r\n\r\n', 'الرجاء إدخال الرقم المقابل <br> لمحافظتك من القائمة المتوفرة <br>\r\n<br>\r\n\r\n101-Zarqa\r\n<br>\r\n102-Amman\r\n<br>\r\n103-Aqaba\r\n<br>\r\n104-Al-Karak\r\n<br>\r\n105-At-Tafilah\r\n<br>\r\n106-Irbid\r\n<br>\r\n107-Al-Balqa\r\n<br>\r\n108-Jerash\r\n<br>\r\n109-Madaba\r\n<br>\r\n110-Ma\'an\r\n<br>\r\n111-Ajloun\r\n<br>\r\n112-Al-Mafraq'),
(102, 'ما هي الخطوات |شو الخطوات |ايش الخطوات| هل يمكنك اعطائي الخطوات|خطوات|50', ' للتواصل مع مالك الرافعة ادخل <br> \"اريد ونش\" '),
(103, '101', 'ونش في الزرقاء <br> ---> ahmad ali <br> يرجى نسخ هذا الاسم ثم <br> لصقه في حقل البحث في<br> .صفحة دردشة الونش'),
(104, '102', 'ونش في عمان <br> ---> mohammad mousa <br> يرجى نسخ هذا الاسم ثم <br> لصقه في حقل البحث في<br> .صفحة دردشة الونش'),
(105, '103', 'ونش في العقبة <br> ---> omar ahmad <br> يرجى نسخ هذا الاسم ثم <br> لصقه في حقل البحث في<br> .صفحة دردشة الونش'),
(106, '104', 'ونش في الكرك <br> ---> zain ibrahem <br> يرجى نسخ هذا الاسم ثم <br> لصقه في حقل البحث في<br> .صفحة دردشة الونش'),
(107, '105', 'ونش في الطفيلة <br> ---> zaid ali <br> يرجى نسخ هذا الاسم ثم <br> لصقه في حقل البحث في<br> .صفحة دردشة الونش'),
(108, '106', 'ونش في اربد <br> ---> bahaa omar <br> يرجى نسخ هذا الاسم ثم <br> لصقه في حقل البحث في<br> .صفحة دردشة الونش'),
(109, '107', 'ونش في البلقاء <br> ---> mahmoud khaled\r\n<br> يرجى <br> كتابة الاسم في حقل البحث في<br> .صفحة دردشة الونش'),
(110, '108', 'ونش في جرش <br> ---> adnan mustafa\r\n<br> يرجى <br> كتابة الاسم في حقل البحث في<br> .صفحة دردشة الونش'),
(111, '109', 'ونش في مادبا <br> ---> jasim rami \r\n<br> يرجى <br> كتابة الاسم في حقل البحث في<br> .صفحة دردشة الونش'),
(112, '110', 'ونش في معان <br> ---> osama issa\r\n<br> يرجى <br> كتابة الاسم في حقل البحث في<br> .صفحة دردشة الونش'),
(113, '111', 'ونش في عجلون <br> ---> zaid kamel\r\n<br> يرجى <br> كتابة الاسم في حقل البحث في<br> .صفحة دردشة الونش'),
(114, '112', 'ونش في المفرق <br> ---> hatem salah \r\n<br> يرجى <br> كتابة الاسم في حقل البحث في<br> .صفحة دردشة الونش');

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `city` varchar(192) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `city`) VALUES
(1, 'Al Jubeiha'),
(2, 'Al Swaifyeh'),
(3, 'Khilda'),
(4, 'Jabal al-Luweibdeh'),
(5, 'Tla al-Ali'),
(6, 'Marj Al Hamam'),
(7, 'Sweileh'),
(8, 'Marka'),
(9, 'Wadi As-Seir'),
(10, 'Jabal Al Nuzha'),
(11, 'Shafa Badran'),
(12, 'Abu Nseir');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `comment` varchar(200) NOT NULL,
  `sender` varchar(200) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `parent_id`, `comment`, `sender`, `date`) VALUES
(4, 0, 'This service is amazing and very convenient, no need to go to the car wash station anymore.', 'Ali', '2023-05-20 21:32:43'),
(5, 0, 'sefsefes', 'wsevsdv', '2023-05-20 21:34:40'),
(6, 0, 'sdvsdvsdv', 'sdvdsv', '2023-05-20 21:34:48'),
(7, 0, 'Washing the car from home is the best thing that has happened to me', 'Osama', '2023-05-20 21:37:03'),
(8, 0, 'I loved this service because it is fast, efficient and very convenient.', 'Selma', '2023-05-20 21:37:22'),
(9, 0, 'This service helped me a lot at the time I had to spend waiting at the car wash station', 'Layla', '2023-05-20 21:37:46'),
(10, 0, 'asas', 'Ahmad ', '2023-05-23 20:41:35');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(100) NOT NULL,
  `name` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `is_online` int(1) NOT NULL DEFAULT 1,
  `is_trip` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `name`, `password`, `is_online`, `is_trip`) VALUES
(11, 'yazeed_e4', '35c675744d4d6c8e63a70d2866c245b6db83d1df', 1, 1),
(12, 'Ali_e2', 'a0e91d24a2284334f8aae5e421e3e843e3459f03', 1, 0),
(13, 'zaid_e3', '4fc939924fb8a80dd09040b6ee4a67820a721ef7', 1, 0),
(14, 'Hamad_1', 'bd2e50d818bc6438ecad782ac647ccc96c955603', 1, 0),
(15, 'faris_e5', '7272a37b98766959f5edca355c8aab90e8b8906d', 1, 0),
(16, 'omar_e6', 'a18e1f887b53720d3c7441fa2b23da05f6cd490b', 1, 0),
(17, 'ahmad_e7', 'c0cbaf2eddb2ec1c5775f5cb7169b4dc5fdce082', 1, 0),
(18, 'mohammed_e8', '0480ed0859984276c472edba3e67670b4473069e', 1, 0),
(19, 'mahmoud_e9', 'b3cf88a70b6ba789a88e3bccd56f133934878faf', 1, 0),
(20, 'laith_e10', '0e106390204cdae450799e9427271205e2936971', 1, 0),
(21, 'hamza_e11', '0e64443aafd58600b24a369603a823814a12090b', 1, 0),
(22, 'Mustafa_e12', '5334e0b992c035667696fa74062dd64d61a8eab8', 1, 0),
(23, 'Eyad_e13', '8a865fcc05d7090af70a709cab5402cdbdf6380c', 1, 0),
(24, 'Tariq_e14', '0ff2bb3dc7d65de69d7dc7d7bcf5d0c739d770fe', 1, 0),
(25, 'Jamal_e15', 'dedddc1ec0f30262eabf583b078e55f100f43925', 1, 0),
(26, 'Hassan_e16', '4ac6564efdd40361b9e1b2332ceb8efce7aded3e', 1, 0),
(27, 'Yasir_e17', 'b6f803cd49e8f98f02ea16c5e1d4fe4f153b10c0', 1, 0),
(28, 'Hamzah_e18', 'cf408e4fba39a7556264ac140352c506cc79c7dd', 1, 0),
(29, 'Kareem_e19', '3bcd1ae08645994f55c4b6eb506092514741cd7a', 1, 0),
(30, 'Abdullah_e20', 'aa1b7d0046d55cd0e977f6a5d89c8779f61da70a', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(100) NOT NULL,
  `user_id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `number` varchar(12) NOT NULL,
  `message` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notfcations`
--

CREATE TABLE `notfcations` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `note` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notfcations`
--

INSERT INTO `notfcations` (`id`, `order_id`, `employee_id`, `product_id`, `userid`, `note`) VALUES
(67, 47, 6, 0, 0, 'لديكم طلب جديد '),
(68, 47, 6, 0, 0, 'تم الغاء الطلب'),
(69, 47, 0, 0, 13, 'لقد تم الموافقه على طلبكم'),
(70, 47, 0, 0, 13, 'لقد تم الموافقه على طلبكم'),
(71, 48, 6, 0, 0, 'لديكم طلب جديد '),
(72, 48, 0, 0, 13, 'لقد تم الموافقه على طلبكم'),
(73, 51, 6, 0, 0, 'لديكم طلب جديد '),
(74, 51, 6, 0, 0, 'تم الغاء الطلب'),
(75, 51, 0, 0, 13, 'لقد تم الموافقه على طلبكم'),
(76, 50, 6, 0, 0, 'لديكم طلب جديد '),
(77, 50, 0, 0, 13, 'لقد تم الموافقه على طلبكم'),
(78, 50, 6, 0, 0, 'تم الغاء الطلب'),
(79, 50, 6, 0, 0, 'تم الغاء الطلب'),
(80, 52, 6, 0, 0, 'لديكم طلب جديد '),
(81, 52, 6, 0, 0, 'تم الغاء الطلب'),
(82, 52, 6, 0, 0, 'تم الغاء الطلب'),
(83, 54, 8, 0, 0, 'لديكم طلب جديد '),
(84, 54, 8, 0, 0, 'تم الغاء الطلب'),
(85, 54, 8, 0, 0, 'لديكم طلب جديد '),
(86, 54, 0, 0, 13, 'لقد تم الموافقه على طلبكم'),
(87, 55, 8, 0, 0, 'لديكم طلب جديد '),
(88, 56, 8, 0, 0, 'لديكم طلب جديد '),
(89, 57, 8, 0, 0, 'لديكم طلب جديد '),
(90, 57, 0, 0, 13, 'لقد تم الموافقه على طلبكم'),
(91, 57, 0, 0, 13, 'لقد تم الموافقه على طلبكم'),
(92, 58, 8, 0, 0, 'لديكم طلب جديد '),
(93, 58, 8, 0, 0, 'تم الغاء الطلب'),
(94, 59, 10, 0, 0, 'لديكم طلب جديد '),
(95, 59, 10, 0, 0, 'تم الغاء الطلب'),
(96, 58, 14, 0, 0, 'لديكم طلب جديد '),
(97, 58, 0, 0, 13, 'لقد تم الموافقه على طلبكم'),
(98, 58, 14, 0, 0, 'لديكم طلب جديد '),
(99, 58, 14, 0, 0, 'لديكم طلب جديد '),
(100, 58, 0, 0, 13, 'لقد تم الموافقه على طلبكم'),
(101, 58, 0, 0, 13, 'لقد تم الموافقه على طلبكم'),
(102, 60, 14, 0, 0, 'لديكم طلب جديد '),
(103, 60, 0, 0, 37, 'لقد تم الموافقه على طلبكم'),
(104, 60, 0, 0, 37, 'لقد تم الموافقه على طلبكم'),
(105, 62, 12, 0, 0, 'لديكم طلب جديد '),
(106, 62, 0, 0, 37, 'لقد تم الموافقه على طلبكم'),
(107, 63, 12, 0, 0, 'لديكم طلب جديد '),
(108, 63, 0, 0, 37, 'لقد تم الموافقه على طلبكم'),
(109, 62, 0, 0, 37, 'لقد تم الموافقه على طلبكم'),
(110, 65, 14, 0, 0, 'لديكم طلب جديد '),
(111, 65, 0, 0, 38, 'لقد تم الموافقه على طلبكم');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(100) NOT NULL,
  `user_id` int(100) NOT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `name` varchar(20) NOT NULL,
  `number` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `method` varchar(50) NOT NULL,
  `address` varchar(500) NOT NULL,
  `city_name` varchar(191) DEFAULT NULL,
  `total_products` varchar(1000) NOT NULL,
  `total_price` int(100) NOT NULL,
  `placed_on` date NOT NULL DEFAULT current_timestamp(),
  `payment_status` varchar(20) NOT NULL DEFAULT 'pending',
  `car_type` varchar(255) NOT NULL,
  `car_size` varchar(255) NOT NULL,
  `wash_type` varchar(255) NOT NULL,
  `additional_services` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `status` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `employee_id`, `name`, `number`, `email`, `method`, `address`, `city_name`, `total_products`, `total_price`, `placed_on`, `payment_status`, `car_type`, `car_size`, `wash_type`, `additional_services`, `qty`, `status`) VALUES
(57, 13, 8, 'zzzzzzzzz', '1223333333', 'asdasdasd@gmail.com', 'Click:0000000000', 'flat no. asdasdasd, asdasdas, 2023-06-07T07:37,', 'Wadi As-Seir', 'Chemical Guys CWS_402_64 Mr. Pink Foaming Car Wash Soap (Works with Foam Cannons)** (25 x 1) - ', 25, '2023-06-03', 'pending', 'asdasd', '11212121', 'asdasdasddcdd', '', 0, 'completed'),
(59, 13, 10, 'aaaasdasd', '121132312', 'aaa@gmail.com', 'cash on delivery', 'flat no. asdasd, asdasdas, 2023-06-22T00:39,', 'Marka', 'interior Small (2 x 1) - ', 2, '2023-06-04', 'canceled', 'asdasd', '12221212', 'asdasd', '', 0, 'cancel'),
(61, 37, NULL, 'asdasdasd12', '1212112121', 'sadasdas@gmail.com', 'ZainCash:0000000000', 'flat no. asdasdasdas, asdasdasd, 2023-06-24T05:05,', 'Marka', 'Chemical Guys CWS_402_64 Mr. Pink Foaming Car Wash Soap (Works with Foam Cannons)** (25 x 1) - ', 25, '2023-06-05', 'pending', 'asdasdasd', '12222222', 'asdasdasd', '', 0, NULL),
(62, 37, 12, 'dfgdfvbdf', '2342343222', 'dsfsdf@gmail.com', 'Click:0000000000', 'flat no. asdasdasd, asdsadasd, 2023-06-21T05:09,', 'Wadi As-Seir', 'Chemical Guys CWS_402_64 Mr. Pink Foaming Car Wash Soap (Works with Foam Cannons)** (25 x 1) - ', 25, '2023-06-05', 'pending', 'asdasdasd', '111-1111', 'asdasdsad', '', 0, 'accept'),
(63, 37, 12, 'ssssssssss', '1231231231', 'ssss@gmail.com', 'Click:0000000000', 'flat no. dasdasdasd, asdasdas, 2023-06-03T01:21,', 'Al Jubeiha', 'Cartisen Car Tissue Holder, Visor Mask Holder, Sun Visor Napkin Holder, Car Mask Dispenser, **  (19 x 1) - ', 19, '2023-06-05', 'nocancel', 'asdasdasd', '1q132311', 'asdasd', '', 0, 'completed'),
(64, 38, NULL, 'asdasdasd', '1212121212', 'sas@gmail.com', 'Click:0000000000', 'flat no. asdasdasd, asdasd, 2023-06-19T03:12,', 'Al Jubeiha', 'interior Small (2 x 1) - interior Large  (4 x 3) - ', 14, '2023-06-05', 'nocancel', 'asdasdas', '12121212', 'asasdasdas', '', 0, NULL),
(65, 38, 14, 'yzeed', '123333333', 'yzeed@gmail.com', 'cash on delivery', 'flat no. asdasdasd, asdasdsa, 2023-06-05T03:23,', 'Marka', '14.5-15 Inches Car Steering Wheel Cover Universal Leather Rv Accessories for Men Black** (11 x 1) - ', 11, '2023-06-05', 'pending', 'asdasd', '11111111', 'asdsad', '', 0, 'completed');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(100) NOT NULL,
  `name` varchar(500) NOT NULL,
  `details` varchar(1000) NOT NULL,
  `price` int(10) NOT NULL,
  `qty` int(11) NOT NULL,
  `image_01` varchar(100) NOT NULL,
  `image_02` varchar(100) NOT NULL,
  `image_03` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `details`, `price`, `qty`, `image_01`, `image_02`, `image_03`) VALUES
(12, 'interior Small', 'Small', 2, 1, 'small car size.png', 'small car size.png', 'small car size.png'),
(13, 'interior Medium ', '21', 3, 1222, 'medium car size.png', 'medium car size.png', 'medium car size.png'),
(14, 'interior Large ', 'Large', 4, 999999989, 'large car size.png', 'large car size.png', 'large car size.png'),
(15, 'exterior Small', ' small', 4, 999999, 'small car size.png', 'small car size.png', 'small car size.png'),
(16, 'exterior Medium', 'medium', 6, 99999999, 'medium car size.png', 'medium car size.png', 'medium car size.png'),
(17, 'exterior Large', 'large', 8, 99999999, 'large car size.png', 'large car size.png', 'large car size.png'),
(18, 'both Small', 'small', 5, 9999999, 'small car size.png', 'small car size.png', 'small car size.png'),
(19, 'both Medium', 'medium', 8, 999999, 'medium car size.png', 'medium car size.png', 'medium car size.png'),
(20, 'both Large', 'large', 10, 9999999, 'large car size.png', 'large car size.png', 'large car size.png'),
(21, 'Addition of wheel polishing services &#34;It cannot be ordered alone&#34;', 'Wheel polish for cars is a specialized product used to clean, shine, and protect vehicle wheels. It removes dirt, brake dust, and grime, restoring the wheels&#39; appearance. Wheel polish comes in various forms and is applied with a cloth or brush', 1, 9999999, 'photo_2023-05-10_17-56-17.jpg', 'photo_2023-05-10_17-56-17.jpg', 'photo_2023-05-10_17-56-17.jpg'),
(22, 'Addition small/medium car tinting services', 'Window tinting for cars refers to the process of applying a thin, transparent film to the windows of a vehicle.Is designed to reduce the amount of sunlight, heat, and glare that enters the car&#39;s interior through the windows.', 20, 9999999, 'tint.png', 'tint.png', 'tint.png'),
(23, 'Addition large car tinting services', 'Window tinting for cars refers to the process of applying a thin, transparent film to the windows of a vehicle.\r\nis designed to reduce the amount of sunlight, heat, and glare that enters the car&#39;s interior through the windows.', 40, 9999999, 'tint.png', 'tint.png', 'tint.png'),
(24, 'Adding scratch and swirl remover for small/medium cars', 'Polish and swirl remover is a product used to improve the appearance of a car&#39;s paintwork. It helps to diminish swirl marks, scratches, and minor blemishes. The remover contains abrasive particles and is applied by hand or with a machine polisher', 17, 99999999, 'icon_scratch_removalpng.png', 'icon_scratch_removalpng.png', 'icon_scratch_removalpng.png'),
(25, 'Adding scratch and swirl remover large cars', 'Polish and swirl remover is a product used to improve the appearance of a car&#39;s paintwork. It helps to diminish swirl marks, scratches, and minor blemishes. The remover contains abrasive particles and is applied by hand or with a machine polisher', 37, 22, 'icon_scratch_removalpng.png', 'icon_scratch_removalpng.png', 'icon_scratch_removalpng.png'),
(27, 'TICARVE Car Cleaning Gel Detailing Putty Car Putty Auto Detailing Tools **', 'Car cleaning gel is perfect for cleaning the nooks and crannies in your auto. Putty for car is super great to get into the gaps and little crevices on the car. Putty for car is easy to pick up the dust, debris, crumbs and pet hair', 8, 15, 'asfsdf.jpg', 'sad.jpg', 'asf.jpg'),
(28, 'Chemical Guys CWS_402_64 Mr. Pink Foaming Car Wash Soap (Works with Foam Cannons)**', '10 plus YEARS OF HAPPY CUSTOMERS – Mr. Pink has been available on Amazon since 2012 and consistently gets the best ratings and reviews (40,000 plus and growing). It’s one of the best-selling products in the history of Chemical Guys. Don’t believe us. Check out the reviews and ratings on this page.', 25, 11, '71-kw1a+sSL._AC_SL1500_.jpg', '81AHC59lUfL._AC_SL1500_.jpg', '81QIw-1nxaL._AC_SL1500_.jpg'),
(30, ' Detailing Brush,Ultra-Soft Car Detailing Brushes **', '22', 5, 77, 'das.jpg', '315T9eSOUAL._AC_SL1000_.jpg', '61PTqvY+TvL._AC_SL1000_.jpg'),
(32, 'Armor All 4 Piece Rubber All-Season Trim to Fit Floor Mats Black, 78846WDC**', 'Armor All 4-Piece Black Rubber All-Season Trim-to-Fit Floor Mats provide protection that keeps the front area of your ride free from damage caused by the elements. A durable rubber polymer and ridged design traps water, road salt, mud, and sand. The raised heel pad resists additional wear and tear. No matter the season, these all-weather mats stay flexible, handling hot and cold temperatures like a champ.', 25, 15, 'sdasdsa.jpg', 'sdasdsa.jpg', 'sadxc.jpg'),
(33, '14.5-15 Inches Car Steering Wheel Cover Universal Leather Rv Accessories for Men Black**', 'The Leather Steering Wheel Cover offers dependable protection for your vehicle&#39;s steering wheel against fading. Our Soft Touch Microfiber leather material absorbs hand pressure from the steering wheel for comfortable grip and handling during long drives.', 11, 10, 'ستيرنغ.jpg', 'س.jpg', '2.jpg'),
(34, 'Hanging Car Trunk Organizer, Hanging Car Backseat Organizer with 8 Large Storage Bag Super Large**', 'Hanging Car Trunk Organizer, Hanging Car Backseat Organizer with 8 Large Storage Bag Super Large Capacity, Waterproof Trunk Storage Bag Vehicle Accessories for SUV Car, Black Hanging Car Trunk Organizer, Hanging Car Backseat Organizer with 8 Large Storage Bag Super Large Capacity, Waterproof Trunk Storage Bag Vehicle Accessories for SUV Car, Black About this item\r\nBuilt in Buckle Net Pocket: Three velcro classified storage, buckle fixed bandage, items are not afraid of shaking.', 11, 11, 'photo_2023-05-20_22-24-51.jpg', 'photo_2023-05-20_22-24-51.jpg', 'حمالة.jpg'),
(35, 'Auto Accessories Fan Car Accessories Car Cooling Swing Dashboard Venti**', 'DUAL HEAD 12V DC Powered Portable 2 Speed Adjustable Car Fan. Blowing Hot Air Out of Parking Car, immediately Cooling Down driver and passengers with 2 rotatable Fan Heads. Nice Airflow, bringing cool air for your family or pet in the rear seat when AC is weak. The 2 fans are able to split the air to driver and passenger.\r\n360 DEGREE ROTATION: QUICKLY and EFFECTIVELY removing unwanted smoke, bad smell or dust, eliminating pet odor, defrosting Windshield in seconds in Winter for Safe Driving\r\nFRESH', 26, 11, 'photo_2023-05-20_22-27-09.jpg', 'photo_2023-05-20_22-27-13.jpg', 'photo_2023-05-20_22-27-16.jpg'),
(36, 'Cartisen Car Tissue Holder, Visor Mask Holder, Sun Visor Napkin Holder, Car Mask Dispenser, ** ', '100% Brand New and High Quality PU Leather.\r\nSimple and fashion design, fully functional and practical\r\nIt will be much easier and safer than putting your tissue case on an instrument desk Easy fix, and easy use, from now on save the space quickly.', 19, 11, 'photo_2023-05-20_22-30-20.jpg', 'photo_2023-05-20_22-30-18.jpg', 'photo_2023-05-20_22-30-15.jpg'),
(37, '10pcs Microfiber Wax Applicator, EEEkit Ultra-Soft Microfiber Waxing Polish Car Applicator Pads **', 'EEEkit Car wax polish applicator pads are made of high-density sponges and microfiber material, they are ultimate softness, absorbency, and longevity. So they can work great for applying waxes, sealants, glazes, dressings, and more. And the high-density sponge is easy to absorb the solution and makes it easier to wax the car paint without any crumbs. These ultra-soft waxing polish applicator pads are used for car waxing, cleaning, dashboard body clean, maintaining leather seats, and air-conditio', 11, 11, 'photo_2023-05-20_22-31-31.jpg', 'photo_2023-05-20_22-31-28.jpg', 'photo_2023-05-20_22-31-33.jpg'),
(38, '1xPlastic Car Parts Restore Coating Agent Car Maintenance Cleaning Accessories**', 'Do not act on the steering wheel, brake, clutch pedal, so as not to slip and affect driving.\r\n Please use in a place away from fire and air circulation.', 8, 10, 'photo_2023-05-20_22-33-00.jpg', 'photo_2023-05-20_22-32-57.jpg', 'photo_2023-05-20_22-33-02.jpg'),
(39, 'FBB Phone Mount for Car** ', 'FBB Phone Mount for Car, [ Off-Road Level Suction Cup Protection ] 3in1 Long Arm Suction Cup Holder Universal Cell Phone Holder Mount Dashboard Windshield Vent Compatible with All Smartphones', 30, 11, 'photo_2023-05-20_22-35-34.jpg', 'photo_2023-05-20_22-35-37.jpg', 'photo_2023-05-20_22-35-41.jpg'),
(40, 'Unique Phone Holder for Car**', 'livin Alloy Material Car Phone Bat Mount Unique Phone Holder for Car Gifts for Men Bat Decorations Collectibles for Room Universal Vent/Dash/Windshield Gravity Automatic Locking Hands Free', 20, 11, 'photo_2023-05-20_22-36-32.jpg', 'photo_2023-05-20_22-36-37.jpg', 'photo_2023-05-20_22-36-35.jpg'),
(41, 'Sunglass Holder for Car**', '23', 6, 21, 'photo_2023-05-20_22-39-52.jpg', 'photo_2023-05-20_22-39-54.jpg', 'photo_2023-05-20_22-39-49.jpg'),
(42, ' Plant Car Mirror Hanging Accessories**', 'Cute Crochet Plant Car Mirror Hanging Accessories,Boho Handmade Rear View Mirror Accessories for Women,Green Car Interior Aesthetic Decor Truck Hanger Ornament Charm for Men', 7, 10, 'photo_2023-05-20_22-40-39.jpg', 'photo_2023-05-20_22-40-36.jpg', 'photo_2023-05-20_22-40-34.jpg'),
(43, 'LIHAN Bluetooth Adapter for Car**', 'LIHAN Bluetooth Adapter for Car, Wireless FM Radio Transmitter, Handsfree Calling & Audio Receiver, MP3 Music Player, QC3.0 & Type-C PD USB Car Charger,7 Colors LED Backlit', 15, 11, 'photo_2023-05-20_22-42-27.jpg', 'photo_2023-05-20_22-42-29.jpg', 'photo_2023-05-20_22-42-31.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(17, 'Qasim1c', 'Qasim1c@gmail.com', 'fff023314e824ceb552d9599fb095104a75dcfc9'),
(18, 'Fahd2c', 'Fahd2c@gmail.com', 'b59e4a400e9dbc3e57ec9bbe5a05af0a265a7473'),
(19, 'Aladdin3c', 'Aladdin3c@gmail.com', '503b3ddcc9cb41b4f9e733888bd73a0fb4747543'),
(20, 'Faisal4c', 'Faisal4c@gmail.com', 'b6369d58ce8e074963bfb817710cfc1cfc9ee21c'),
(21, 'Sami5c', 'Sami5c@gmail.com', 'ad7263ccaa8a338ccca206b7b8d835929906d665'),
(22, 'Nadim6c', 'Nadim6c@gmail.com', 'b102be9e88b632d935c6c72e5e0cdb73aa3b222e'),
(23, 'Nasser7c', 'Nasser7c@gmail.com', '4ed52135ba780c31a7e141c0982d190076febc80'),
(24, 'Naji8c', 'Naji8c@gmail.com', 'cbc19c01ad9023002111086488edaed467234255'),
(25, 'Ameer9c', 'Ameer9c@gmail.com', '00f99c47c3e7b628fcdcf7f978896032f59a6499'),
(26, 'Naeem10c', 'Naeem10c@gmail.com', '33a927b5fb84ee47102c5e467ea55edf3574d435'),
(27, 'Sabir11c', 'Sabir11c@gmail.com', '8114e29888c1150982f71fb32ffd885830f1f99a'),
(28, 'Ishaq12c', 'Ishaq12c@gmail.com', 'b9b2cbea01882f72914b05acd6d415c47ec29b83'),
(29, 'Mansur13c', 'Mansur13c@gmail.com', '7b86fa147b04007d217d9e4e69e3bf5dcc40a349'),
(30, 'Zafar14c', 'Zafar14c@gmail.com', '4a5e6292079eca001b6ec44cbb8525fb990ae3de'),
(31, 'Hussein15c', 'Hussein15c@gmail.com', 'b08c3f0a833b0ab5239dc7d49552bf2fa270d96c'),
(32, 'Majid16c', 'Majid16c@gmail.com', '49ff107af35132bf7196dfad57d8c9c11df740bc'),
(33, 'Salim17c', 'Salim17c@gmail.com', '14821ff890c0bac8c4e9d7608f23eef36a9a33be'),
(34, 'Zaki18c', 'Zaki18c@gmail.com', '9ac7c6188a37f1c33dbb7f45b004de38d5f90c46'),
(35, 'Nuri19c', 'Nuri19c@gmail.com', 'bc066cc5c7f92a4c772bfe786a9bca08362b5c63'),
(36, 'Ibrahim20c', 'Ibrahim20c@gmail.com', '12f7d1545461e95eb59c6c53544874c7426d981c'),
(37, 'aaa', 'aaa@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815'),
(38, 'noor ', 'noor@gmail.com', 'adfdfa085afc7fe8979a267ba3a17bc5c3d58f55'),
(39, 'eee', 'eee@gmail.com', '637a81ed8e8217bb01c15c67c39b43b0ab4e20f1');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `id` int(100) NOT NULL,
  `user_id` int(100) NOT NULL,
  `pid` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`id`, `user_id`, `pid`, `name`, `price`, `image`) VALUES
(7, 39, 28, 'Chemical Guys CWS_402_64 Mr. Pink Foaming Car Wash Soap (Works with Foam Cannons)**', 25, '71-kw1a+sSL._AC_SL1500_.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chatbot`
--
ALTER TABLE `chatbot`
  ADD PRIMARY KEY (`caht_id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notfcations`
--
ALTER TABLE `notfcations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `chatbot`
--
ALTER TABLE `chatbot`
  MODIFY `caht_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notfcations`
--
ALTER TABLE `notfcations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
