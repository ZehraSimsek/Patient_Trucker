-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 29 May 2022, 22:44:04
-- Sunucu sürümü: 10.4.17-MariaDB
-- PHP Sürümü: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `hasta`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `doktor`
--

CREATE TABLE `doktor` (
  `Id` int(11) NOT NULL,
  `Name` text COLLATE utf8mb4_turkish_ci NOT NULL,
  `SurName` text COLLATE utf8mb4_turkish_ci NOT NULL,
  `Phone` varchar(13) COLLATE utf8mb4_turkish_ci NOT NULL,
  `Bolum` text COLLATE utf8mb4_turkish_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `doktor`
--

INSERT INTO `doktor` (`Id`, `Name`, `SurName`, `Phone`, `Bolum`) VALUES
(1, 'GIZEM', 'HARMANKAYA', '+905326817176', 'Cerrahi'),
(2, 'NARIN', 'KIR', '+905337397114', 'Cerrahi'),
(3, 'BURCE', 'TINAZ', '+905443171257', 'Radyoloji'),
(4, 'GÖZDE', 'OKANT', '+905267876291', 'Pedodonti'),
(5, 'IŞIL', 'BALCI', '+905468265670', 'Pedodonti'),
(6, 'MEHMET FATİH', 'ULAŞ', '+905769885076', 'Endodonti'),
(7, 'DAMLA', 'ŞİVİL', '+905497233790', 'Endodonti'),
(8, 'ARZU', 'DADLI', '+905610619126', 'Ortodonti'),
(9, 'EREN', 'ÖZGÜR', '+905587180971', 'Ortodonti'),
(10, 'MAZLUM', 'GERDAN', '+905476312251', 'Periodontoloji'),
(11, 'HABİP', 'KARA', '+905540944716', 'Protetik'),
(12, 'ATIL', 'GÖZÜGÜL', '+905719346658', 'Protetik');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `hasta`
--

CREATE TABLE `hasta` (
  `Id` int(11) NOT NULL,
  `Name` text COLLATE utf8mb4_turkish_ci NOT NULL,
  `SurName` text COLLATE utf8mb4_turkish_ci NOT NULL,
  `Tc` varchar(11) COLLATE utf8mb4_turkish_ci NOT NULL,
  `Randevu` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Bolum` int(11) NOT NULL,
  `Islem` int(11) NOT NULL,
  `Doktor` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `hasta`
--

INSERT INTO `hasta` (`Id`, `Name`, `SurName`, `Tc`, `Randevu`, `Bolum`, `Islem`, `Doktor`) VALUES
(10, 'Zümra', 'Kurnaz', '22548796524', '2022-05-06 23:16:00', 2, 1, 3),
(12, 'İkra', 'Şimşek', '12365478965', '2022-05-11 22:45:00', 6, 5, 12),
(15, 'Musab', 'Şimşek', '69758412368', '2022-08-09 15:36:00', 4, 4, 6),
(16, 'Sueda', 'Coşkun', '25147854962', '2022-05-25 22:02:49', 2, 1, 3),
(17, 'Sueda', 'Gürpınar', '78416925412', '2022-05-20 20:44:00', 3, 5, 4),
(18, 'Emir ', 'Çınar', '45698748695', '2022-05-26 18:07:22', 3, 4, 5),
(19, 'Ecrin', 'Suyolu', '54785236541', '2022-05-26 19:20:12', 6, 5, 10),
(21, 'Eymen', 'Çalım', '54656562656', '2022-05-09 23:12:00', 5, 5, 9),
(22, 'Zerrim', 'İlham', '12357896425', '2022-05-27 13:14:00', 3, 4, 4),
(23, 'Seymen', 'Kutlu', '54698751236', '2022-05-27 21:31:19', 6, 4, 10),
(24, 'Zeynep', 'Yaman', '54785236451', '2022-05-07 23:23:00', 2, 2, 3),
(27, 'Arzu', 'Sapan', '75395145698', '2022-05-26 17:43:17', 2, 1, 4),
(29, 'Ela', 'Akyol', '54678541235', '2022-05-26 19:26:42', 1, 1, 3),
(32, 'Zehra', 'Dönmez', '90622987834', '2022-05-26 19:20:00', 1, 1, 3),
(34, 'Helen', 'Şule', '79368161876', '2022-05-26 19:35:01', 1, 2, 5),
(35, 'Mert', 'Şimşek', '75365489145', '2022-05-29 12:24:41', 3, 4, 4),
(36, 'Beste', 'Kartal', '12345213689', '2022-05-29 18:22:00', 5, 6, 9);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `kullanici`
--

CREATE TABLE `kullanici` (
  `id` tinyint(4) NOT NULL,
  `kullanici` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL,
  `sifre` varchar(50) COLLATE utf8mb4_turkish_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `kullanici`
--

INSERT INTO `kullanici` (`id`, `kullanici`, `sifre`) VALUES
(1, 'zsimsek', '5719');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `doktor`
--
ALTER TABLE `doktor`
  ADD PRIMARY KEY (`Id`);

--
-- Tablo için indeksler `hasta`
--
ALTER TABLE `hasta`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Tc` (`Tc`);

--
-- Tablo için indeksler `kullanici`
--
ALTER TABLE `kullanici`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `doktor`
--
ALTER TABLE `doktor`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Tablo için AUTO_INCREMENT değeri `hasta`
--
ALTER TABLE `hasta`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Tablo için AUTO_INCREMENT değeri `kullanici`
--
ALTER TABLE `kullanici`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
