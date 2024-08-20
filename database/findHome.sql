/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3307
 Source Server Type    : MySQL
 Source Server Version : 80039 (8.0.39)
 Source Host           : localhost:3307
 Source Schema         : findHome

 Target Server Type    : MySQL
 Target Server Version : 80039 (8.0.39)
 File Encoding         : 65001

 Date: 20/08/2024 16:21:15
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for adminNotifications
-- ----------------------------
DROP TABLE IF EXISTS `adminNotifications`;
CREATE TABLE `adminNotifications`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `adminId` int NOT NULL,
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  `message` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `isRead` tinyint(1) NULL DEFAULT 0,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of adminNotifications
-- ----------------------------
INSERT INTO `adminNotifications` VALUES (4, 70, 71, 39, 'Admin, Bài đăng CHO THUÊ NHÀ Ở CẨM LỆ vừa được duyệt', 0, '2024-07-01 14:03:46');
INSERT INTO `adminNotifications` VALUES (5, 70, 71, 40, 'Admin, Bài đăng CHO THUÊ NHÀ Ở QUẬN 3 vừa được duyệt', 0, '2024-07-11 08:37:32');
INSERT INTO `adminNotifications` VALUES (6, 70, 71, 41, 'Admin, Bài đăng CHO THUÊ MẶT BẰNG Ở QUẬN 7 vừa được duyệt', 0, '2024-07-11 08:37:33');
INSERT INTO `adminNotifications` VALUES (7, 70, 71, 32, 'Admin, Bài đăng CHO THUÊ PHÒNG TRỌ Ở HUYỆN HOÀNG SA vừa được duyệt', 0, '2024-07-11 08:37:29');
INSERT INTO `adminNotifications` VALUES (8, 70, 71, 33, 'Admin, Bài đăng CHO THUÊ PHÒNG TRỌ Ở HUYỆN BÌNH CHÁNH vừa được duyệt', 0, '2024-07-11 08:37:30');
INSERT INTO `adminNotifications` VALUES (9, 70, 71, 44, 'Admin, Bài đăng CHO THUÊ MẶT BẰNG Ở CHÂU THÀNH vừa được duyệt', 0, '2024-07-11 08:37:35');
INSERT INTO `adminNotifications` VALUES (10, 70, 72, 58, 'Admin, Bài đăng CHO THUÊ MẶT BẰNG Ở QUẬN 1 vừa được duyệt', 0, '2024-07-11 08:37:35');
INSERT INTO `adminNotifications` VALUES (11, 70, 72, 59, 'Admin, Bài đăng CHO THUÊ MẶT BẰNG NHÀ BÈ vừa được duyệt', 0, '2024-07-11 08:37:36');
INSERT INTO `adminNotifications` VALUES (12, 70, 72, 60, 'Admin, Bài đăng CHO THUÊ PHÒNG Ở CAO ĐẠT vừa được duyệt', 0, '2024-07-11 08:37:38');
INSERT INTO `adminNotifications` VALUES (13, 70, 72, 61, 'Admin, Bài đăng CHO THUÊ PHÒNG Ở PHÚ NHUẬN vừa được duyệt', 0, '2024-07-11 08:37:39');
INSERT INTO `adminNotifications` VALUES (14, 70, 72, 62, 'Admin, Bài đăng CHO THUÊ NHÀ Ở QUẬN 6 vừa được duyệt', 0, '2024-07-11 08:37:40');
INSERT INTO `adminNotifications` VALUES (15, 70, 72, 63, 'Admin, Bài đăng CHO THUÊ CĂN HỘ Ở ĐÔNG ANH vừa được duyệt', 0, '2024-07-11 08:37:41');
INSERT INTO `adminNotifications` VALUES (16, 70, 73, 45, 'Admin, Bài đăng CHO THUÊ PHÒNG Ở VŨNG TÀU vừa được duyệt', 0, '2024-07-11 08:37:43');
INSERT INTO `adminNotifications` VALUES (17, 70, 73, 46, 'Admin, Bài đăng CHO THUÊ PHÒNG Ở VŨNG TÀU vừa được duyệt', 0, '2024-07-11 08:37:44');
INSERT INTO `adminNotifications` VALUES (18, 70, 73, 47, 'Admin, Bài đăng CHO THUÊ CĂN HỘ Ở GÒ VẤP vừa được duyệt', 0, '2024-07-11 08:37:45');
INSERT INTO `adminNotifications` VALUES (19, 70, 73, 48, 'Admin, Bài đăng CHO THUÊ CĂN HỘ Ở MÊ LINH vừa được duyệt', 0, '2024-07-11 08:37:47');
INSERT INTO `adminNotifications` VALUES (20, 70, 73, 49, 'Admin, Bài đăng CHO THUÊ MẶT BẰNG Ở CHÂU THÀNH vừa được duyệt', 0, '2024-07-11 08:37:49');
INSERT INTO `adminNotifications` VALUES (21, 70, 73, 50, 'Admin, Bài đăng CHO THUÊ MẶT BẰNG Ở QUẬN 1 vừa được duyệt', 0, '2024-07-11 08:37:50');
INSERT INTO `adminNotifications` VALUES (22, 70, 74, 51, 'Admin, Bài đăng CHO THUÊ PHÒNG Ở NGŨ HÀNH SƠN vừa được duyệt', 0, '2024-07-11 08:37:51');
INSERT INTO `adminNotifications` VALUES (23, 70, 74, 52, 'Admin, Bài đăng CHO THUÊ PHÒNG Ở SƠN  TRÀ vừa được duyệt', 0, '2024-07-11 08:37:53');
INSERT INTO `adminNotifications` VALUES (24, 70, 74, 53, 'Admin, Bài đăng CHO THUÊ NHÀ Ở CẦU GIẤY vừa được duyệt', 0, '2024-07-11 08:37:55');
INSERT INTO `adminNotifications` VALUES (25, 70, 74, 55, 'Admin, Bài đăng CHO THUÊ NHÀ Ở DƯƠNG QUANG vừa được duyệt', 0, '2024-07-11 08:37:56');
INSERT INTO `adminNotifications` VALUES (26, 70, 74, 56, 'Admin, Bài đăng CHO THUÊ MẶT BẰNG Ở CẨM LỆ vừa được duyệt', 0, '2024-07-11 08:37:57');
INSERT INTO `adminNotifications` VALUES (27, 70, 74, 57, 'Admin, Bài đăng CHO THUÊ MẶT BẰNG Ở LIÊN HIỆP vừa được duyệt', 0, '2024-07-11 08:37:59');

-- ----------------------------
-- Table structure for countLikes
-- ----------------------------
DROP TABLE IF EXISTS `countLikes`;
CREATE TABLE `countLikes`  (
  `postId` int NOT NULL,
  `likes` int NOT NULL DEFAULT 0,
  PRIMARY KEY (`postId`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of countLikes
-- ----------------------------
INSERT INTO `countLikes` VALUES (28, 7);
INSERT INTO `countLikes` VALUES (29, 7);
INSERT INTO `countLikes` VALUES (30, 9);
INSERT INTO `countLikes` VALUES (31, 6);
INSERT INTO `countLikes` VALUES (32, 6);
INSERT INTO `countLikes` VALUES (33, 1);
INSERT INTO `countLikes` VALUES (39, 6);
INSERT INTO `countLikes` VALUES (40, 5);
INSERT INTO `countLikes` VALUES (41, 2);
INSERT INTO `countLikes` VALUES (42, 4);
INSERT INTO `countLikes` VALUES (43, 3);
INSERT INTO `countLikes` VALUES (44, 2);
INSERT INTO `countLikes` VALUES (45, 3);
INSERT INTO `countLikes` VALUES (46, 1);
INSERT INTO `countLikes` VALUES (47, 3);
INSERT INTO `countLikes` VALUES (48, 1);
INSERT INTO `countLikes` VALUES (49, 2);
INSERT INTO `countLikes` VALUES (50, 2);
INSERT INTO `countLikes` VALUES (51, 6);
INSERT INTO `countLikes` VALUES (52, 2);
INSERT INTO `countLikes` VALUES (53, 1);
INSERT INTO `countLikes` VALUES (55, 2);
INSERT INTO `countLikes` VALUES (56, 5);
INSERT INTO `countLikes` VALUES (57, 6);
INSERT INTO `countLikes` VALUES (58, 4);
INSERT INTO `countLikes` VALUES (59, 2);
INSERT INTO `countLikes` VALUES (60, 1);
INSERT INTO `countLikes` VALUES (61, 2);
INSERT INTO `countLikes` VALUES (62, 2);
INSERT INTO `countLikes` VALUES (63, 1);

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `typeRoom` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `price` float UNSIGNED NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `urlImages` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `area` float NULL DEFAULT NULL,
  `zalo` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `furniture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `otherFee` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `rule` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `nearby` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `lat` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `lng` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 78 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES (28, 70, '    803/97 Huỳnh Tấn Phát,   Phường Tân Phong,   Quận 7,   Thành phố Hồ Chí Minh', 'room', 3, 'CHO THUÊ PHÒNG TRỌ QUẬN 7', 'e241ce53b951dd1f5714b9a9bc5dc0c8105b04e3134c4036e1381dd35e70782554398503d0045c8c13f3b95bbcf7add94de12a367d508fdd0e8bacc380c0f85dZeMIWQEN6gnsWd8CfhySSwMQUHamFLVdOL2UanghQccJVbUuLs1Hyg002X/WrqpTt76Wh4KZgEIqt0gsi//MzD8RQpHci+/3G1x9r+vCXsVRF0yTgjxJESynfMN4U6WJq1+LqVYFYPtAHaQt6SVZWklI0nOg64oIPtRoVA+YFb80LwPnHvhuH1I6OdfQf1cC3szNuJKlZYc2ic8uzQXwHgTQZPwTu6amP4yk96Iraq58dOTUxnSoyFJDVY7rlqiwtr8PbBV3jvBX81UD/eWrMqww2I4ot8yJIe+vFtKLea7fgPMmRs4confWig1rDcW5', 5, '305a5e9b8e085a61eab64e37e9431f03948078b767183efbb896de977265d95d75071d2b5ad4aba2d0e46291b04d2e82ac93885ffd010e3547d099daef8a756bh74NeEQ3eINn3M75fWj792vMtS24HsCbPFlQ71VkYoM=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\ncó ban công rộng', 'điện: 3k/kg\nnước: 100k/thnags', 'ra vào nhớ đóng cổng', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', '10.73414', '106.734863');
INSERT INTO `posts` VALUES (29, 70, '1 Dương Bá Trạc, Phường 01,  Quận 8,  Thành phố Hồ Chí Minh', 'room', 7, 'CHO THUÊ PHÒNG TRỌ QUẬN 8', '1e03f5ff62c9a1ab2066da3bbfae2cd891dd251fc0ce7430783dd1486b953f7131ee1f11b14b8e387151d10735db223abe33b76469a7a0155b511dff9e8f56d5d8ICni5tYkc0gK73EiVbsUS9VMFEpVb1cv0333xODldlDkWLmDBDigWYcPGNPnzvLJRDh/QDETeSkcFJHEyDHDLHKbJ0IKIoCEJx7Jg5jQZA1qSu6M/bU2zIxOTmAchq39uFvZ0FyMBMG9Q0oQxM4XTKl1XTtLvhuvB4t7c4JEFhbWxwMmoItIGzdrVGsPxGRtira5qZJDBAY65oRJDdmcUK9oXjCuV5ATxtHcUQhMEt2ogvoBg8QnKa41XAzR+LimASUPGUuaVnDQfBHSBffA==', 10, '78a6ea032fc2dd9873331814225ebf109364d823e77a88dd220f6635f65518fd02f46dd765f18cb5570226ae71905a5b297fbe153552d0feb443cd3f28555976uUQg/d7qKr3TjqCKG43UsVqP/68sQYILIGy53KcynFQ=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\nsạch sẽ, thoáng mát', 'điện: 3k/kg\nnước: 100k/thnags', 'không có', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', '10.744892', '106.691097');
INSERT INTO `posts` VALUES (30, 70, '123 Lý Tự Trọng,  Phường Bến Thành,  Quận 1, Thành phố Hồ Chí Minh', 'room', 15, 'CHO THUÊ CĂN HỘ Ở QUẬN 1 ĐƯỜNG LÝ TỰ TRỌNG', '7dd52e3d8912055878d4dc413a9ad153ac2673b216387451292e0e2d7cd358c6342f0ba59fc951662ac7e44cb3a17b73721f2f11bf9a952027ac3bea7de4ba44lfWHzZxLCHflsNbqjZX/iO2lxgqYkxrHUly7EV+geUgILYJHSJ57lmPW/f82MQ1HMBCwFFfxOKE5yz72z7tWK2H72T7Nnapqxk07NI4AaQTM9ScKIirn4xIxlgba/k0XXbbu45Os4ljjRqw14n7mlKindWYoo8dVMc+4rpRr2l4LFhhjuyHbwvYsySLGfUSGM06479/NZ6V20rQ78wriABJcwC7FfEDPQvd7N383rChK/6hQc6bbt9QYeeGoFvJaD6V2tqYsX7okzyZp84sClw==', 20, 'b19a38f08bedcca73efe75446e24851bd84d503d57bb67c0126d6bf09cb34d7d02880a16aec868e758190608cf1394385a97c8c0bc7e4dfc920458e6bdfa9951HB44d3wCKU8EH4F2J0EYzLj/qvaWGdykm4Qvqdnx9zc=', 'tủ lạnh, máy lạnh, máy giặc', 'có ban công\ncó phòng khách\n2 toilet', 'điện : 3k3, nước 100k/người, wifi : 70k', 'giữ gìn vệ sinh chung', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', '10.773838', '106.697072');
INSERT INTO `posts` VALUES (31, 70, '1 Trần Bình Trọng, Phường 01, Quận 10, Thành phố Hồ Chí Minh', 'apartment', 20, 'CHO THUÊ CĂN HỘ Ở MÊ LINH', 'f0589fcb8bcc692eb4995ee59b6185357877a4805d09995db72451d15fef7dee195fd64d2f806fd019ad2a81fe3fa31f90571958d3b47c6db07ae77e54d442bdEUhX3/uQinBmmxyWJG4Z1wxX+PCvoHHHXA4RofDgMpGhbg0/ZvPGfy2uc5BUf4B2Vnn75MfBtaxvcIzZSud8/nJHLZKH3G/EVevZuORHq79w1WyP9NmeVIRN5NPs5BX7h04EaImDARAHbnVVjn7akAgCySWP6n+aCFCmuQxdbXzHxIRlk3rxAZr1al50exBqMhaHbGAKaODvnECNGTBb1A3KHcg3W07wpQxunthNCh+yk+0CePx0pCrtSeKJFoWy741MAcdhjrabM7jP3umpPA==', 50, '39bf812d3441b1d6b7c0045336bfc3f4f89fd9d7331fca5f075da31ac3272300fa1a8f4fda349b51f51f3facf5680151b237c14e097b67ae233a6026a9524429N5DMjfpi8fxPTrB9vkXWMXqMJ0PqYTQLa9E8VDJpKyA=', 'ban công, máy điều hòa', 'đầy đủ tiện nghi\ncó hồ bơi\ncó vườn cỏ tự nhiên', 'cắt cỏ: 500k/tháng', 'tiền đổ rác tính theo tuần: 50k/tuần', 'CGV, MINISTOP', '10.764421', '106.678266');
INSERT INTO `posts` VALUES (32, 71, '62 Khúc Hạo, Phường Mẫn Thái, Quận Sơn Trà, Thành phố Đà Nẵng', 'room', 5, 'CHO THUÊ PHÒNG TRỌ Ở HUYỆN HOÀNG SA', '2a4bc4f98fbb30e6496c40c7bcda889f7c477aa30ae75abf3ef19c35682d72bd2cd689870e95ac3cc5a68c8540fd50b2af05b57b808ae4787c2fc00cb33d12f5swN5P8GB7P9Acec3UYpibb2vPwisV2CYdkAd4Th5svc770xPqJoAeziWhoemw/apTaorpgf4ZNa7EjwgJ76GTew9i3BE5E+61jiu4Zq6ZWsMG/9r27ICr+F7L/xlpEXKapJu+238GmUzwjp4tTdvKdf6gIRi40115zcWIcsZS2zYCUMJpqFEur2TVgBFSn9COyY+J3lAbSG8m+O8gTQ9KON83eAHQKDoSRFzfLvhzTtcPVldIdwQEsFTQ/7oqnA1iVhvXH/LqASiMHIsqFkv2w==', 5, 'd1629ab370092f0fe302be93bcdf196627bc8c10d65c07be2b4433a7b3539145a7ee8125519d7747f4fe9fc9fff730c7d592a6a7d981f2a3a2db5c87b1da5d1aTrmU/0eZXMAL/rkmklJJ2J/PsAgsXm+V/QlkExlyZq4=', 'ban công, máy điều hòa', 'rộng rại, đầy đủ tiện nghi\ngần chợ', 'điện 2k/kg', 'không có', 'circle K, lotte mart', '16.087818042834485', '\r\n108.23829867317232');
INSERT INTO `posts` VALUES (33, 71, 'Ấp 1, Xã Bình Hưng, Huyện Bình Chánh, Thành phố Hồ Chí Minh', 'room', 4, 'CHO THUÊ PHÒNG TRỌ Ở HUYỆN BÌNH CHÁNH', '309f64a20daabe73ecd42f5e8cf17a8b47a3cad29f202f638be08bf1a0d0b940b7928583ca8588843db0a08678c87bb3b11431d33f2f61b81631ce4695b6a3ef04e2WfZ+hMIsHBgqRAHVZi0WG/zwQTnTl3cs1PsogUMPG47dgQoZbLKTR6RUBOfQw209ZSp2bI75wgjTYr9MfJ14WuQKf1uKHCRImFCLkdh0H5Jnz5DbopI/ds4bnYA+3YssSWaa5IJROBIK2QpaZ4DFwoMTLZ+NHhhX4en8M7MIDMpCgkQVsqb6sLZdSmNPH4B3BR9tK22kzig/bgFy7Ar0yN09wCk5jtrveXVe9BY4sSlz0oGRMpY3yfuVW3sGEQ5w1h1dpH4Ap1xyjGa9ag==', 6, 'c0637a58978c10242b04aebfb2fbbbaa510a68a54a4df6e8def0b000a7be1e77abdcc2a671b2c211839410a8e3517b5bfb36d18ffc36e272bd2552102743d0c04KUTmbHfMabwZ2Mllcm/KWfXZpZ3WM46GviChBQcI7A=', 'ban công, máy điều hòa', 'có toilet, tủ lạnh, máy giặc riêng', 'cắt cỏ: 500k/tháng', 'không có', 'Aeon, nhà sách', '10.726889', '106.654746');
INSERT INTO `posts` VALUES (39, 71, 'số 2, Phường Hòa Phát, Quận Cẩm Lệ, Thành phố Đà Nẵng', 'apartment', 20, 'CHO THUÊ NHÀ Ở CẨM LỆ', 'efc6058dcd3fd89a42454e4d7a58e654640b2cbb29a74d7ed8bfe9c24f78d6d3d97949026af01c5c982f28b368df1ae390ea569345a0cb62ced8ef301a360a23t6vBFsc0yyOu3k7G6P6tMEgdTXkc8k24R7iJIYjOvQBX4+LnoSOmLqskegpdcwqV5WtYZeFkYe4S7kjwlIb9uQWSXEkv9Kg7HU3qlQDLkfRaqt83fUYUVPIFll0oRsQU2qanaygIshcYstzqlIrxXOD5fzZ2EA/wBj57A5MtGA5rKlJqHDTmZU/nN66ZUQm84cTxqNcxw32WKVF1dVBRaRhKEplHmt0b2acwr5bRwkH/VxM7VE1MzgG0au3JmOXhr+xW9Eh9ChzVg7swOM0igA==', 70, '41e5cf2d42392fdcbed1be9bfedfda937dd05020c994ae9f2e3e644191284decff768a947eb6d201ac5813500464353859aff69d7a17564ca96338a6cb3e6f3cKH4UBOlMhF4Wfyflls9d6AahRRHTTNoQYw0FyvgSlLQ=', 'ban công, máy điều hòa', 'rộng rãi, thoáng mát\ngần chợ, gần công viên', 'cắt cỏ: 500k/tháng', 'không có', 'circle K, lotte mart', '16.022386', '108.198457');
INSERT INTO `posts` VALUES (40, 71, '1990 Cách Mạng Tháng 8, Phường 03, Quận 3, Thành phố Hồ Chí Minh', 'apartment', 15, 'CHO THUÊ NHÀ Ở QUẬN 3', 'c491695665fc78c6b5bd5d1c0597e927a6ef80971970780a2d9d8846abeaa52f7b567336496f5139fb7800680a5c261727d4b55302a761b4f6fe2356e5615e93jN4AQ3iLGAFqQQ3js6I3EbkuhcOneGDrftR+i7DObAXwMchI+ww2p+AzjXeYN/NO4qut7deQZSjulgyg4BrdI3FS6ki+BTjerhfss75wDNq4kk1iu5WETqjhjkZauB2KSH4+30le6okLO/CjQ3hh7/PanE2diiLLOvQGI38OOqpD9vVkjckUzElgjCEn2nm/s1jt1hS6Mcdg1M2QIDcZ3rUWzRvOb1p7Bn4y+sL3QLTjqMEuLOSn1+Xw856xT5r1kJ8dYLHI6OXJI8kEMVPcUw==', 30, '2645b137c23e86ec47237a8b6047c1bbeb8048e3cfe534dc3630ae0bc5e24d525faf60a247265770dc606009e763e56c03e7de0b2ff21f4475d98715f2ca995frFuiMbgHNR0jv61ayBYr4PIkr4n+a1bbliRGn3twAYY=', 'ban công, máy điều hòa', 'rộng rãi, thoáng mát\ngần chợ, gần công viên', 'cắt cỏ: 500k/tháng', 'không có', 'circle K, lotte mart', '10.773647', '106.689495');
INSERT INTO `posts` VALUES (41, 71, '2 Phạm Hữu lầu, Phường Phú Mỹ, Quận 7, Thành phố Hồ Chí Minh', 'premises', 50, 'CHO THUÊ MẶT BẰNG Ở QUẬN 7', 'f89e0f08be1a30c2c183c1992c38760e2f5f98925649a8e2d4a34ed22fbab5ac09767cad1743debc4699bcf6bc488eeccb169085c3df5091b331a4fd3bf0480buc8VXAyjNqNbZn6W/UzAx2jV1laOifr7cz6aL1rtkf5e/qxbcop6Usv0WkB/peY1GQp+5wAiv9nO1kU0bYbAdPbX9+D4kOlZSeTTVHTtc2/m3pU6c9UVgcXxNob5GalGSr+QubmNMFFLz3W+1QRDWw==', 150, 'a39f0dfc7be4cb1030498e75efb96b57f3fd1a6f95eea9eaa3f002ade21c7a70d3e925fc2748f03e0841f03a6605e9f0b7fa033a2c8126bf0a248d1a191e6cf5MArfgdlfpZjmcsCWdLYssspDt6f1oeOo54ho2D4+n30=', '', '', '', 'không có', '', '10.70532', '106.737198');
INSERT INTO `posts` VALUES (42, 70, '1 Kiên Hưng,  Phường Hà Cầu,  Quận Hà Đông,  Thành phố Hà Nội', 'premises', 20, 'CHO THUÊ MẶT BẰNG', '3aa264fce6df03fea649a266ea35ea58079dfedf10c08ca951735240745f58f84e701a30f4f65f46dcb8489cec132fc8b184202d489f09ffe6fafd5d64483e5cBmOTgiQrgfKIcrvmCIzOs+m62PMlvO7nZCuGWAqQLJF8phESeScDdAEN8uzEOOEaIYx3/q0e+5WBpe6HefKz1Z67Pl9U26qRfK/eQCwqVzNmhMn6avU2tt4/NQnp0PhTc+cgZJXsZG8mHASFHYrcpLMo1Gtv1DifggALwY0CPRw56tdrqvMv1xuoxnvAHq+nxMkH23TW1nbCUrW+6ocT3tusHpziN2s0DRAe0DjaW+8ndrbD68pyBM8UHYAkHkU7cU7ZIuDI+mFDi82q0iin4dcjIekFj/814/KItHezTXfyxrhiBRZ814l6HU2DqDQpynWvDz4CN5ok/LZScPAahW9VrhKgB6hT6QKotwlMwV0=', 30, 'ba7a3b02333a55b8ff7103db580f74afba8262a801aed6d219347586c1ea3737b4271ce98bfdc6aeb7430c97c4635047715ae7ce01ba031a5f5351cb1454c9192P1oyg/a/dWkeTofmGvbzeAbcKUJadJWXz2jl6cZ/lY=', '', '', '', '', 'gần khu dân cư, trường học', '20.961761', '105.78269');
INSERT INTO `posts` VALUES (43, 70, '1 Lâm Tiên, Thị trấn Đông Anh, Huyện Đông Anh, Thành phố Hà Nội', 'premises', 50, 'CHO THUÊ MẶT BẰNG Ở ĐÔNG ANH', 'a6bc2a3535eac1c4531bc0690f4d5044e748634b773dcdb49586cd43bc63cc21f70dd2592150b4596d473b39ed4b1e049cfb9e3d210ae9d4fb1a09c97870e3eeZfbar2Dcje+xqCLw/CcEuv7UD2qL04IX2fyoNr1m2Rn84CnxoVjHh9zInKa5MAi8tcqwVY5oYLKdJdlqPogi79xu5vZh6TwZMayfWHZh5WgfaZpcWbxiRxV8Wwx6Im25CI1bdjhaM2sQdr06YEdAEw==', 100, '5aa82d51743c84ee95262421d580377866fbe4d685b6078e79cd864c8e35a997ea94dc4b892cb2819ed19636a56a8c0bae1501223ae1eaaa34073d591f9cc8f1/bERlNR6Zguq0F6rKwBG5m/PgpWBSR6gJkveheqebpI=', '', '', '', '', 'gần ngã 4, gần sân bay', '21.163439', '105.846892');
INSERT INTO `posts` VALUES (44, 71, ' 1 Nguyễn Thiện Thuật, Xã An Hòa, Huyện Châu Thành, Tỉnh An Giang', 'premises', 20, 'CHO THUÊ MẶT BẰNG Ở CHÂU THÀNH', 'c7f07d4e072efdb87ad4c11125796bb51de9a937e5890d2bd22af59c3d8c8d83245c4d0f0373ece427e769dc4d9bac4bfdd799cea97912b2e503a76052f0a62en2Hj82V7fO5XVo2M8dnoffosBEOsV95N87wDDd8LdlmlL0d9HSqd9+SgVMrHSp8C9gG9ZAfor59s26uv+Vvgmbk1E4OT+mfoBXtt0wX4HqBCILnxbMwgjjtJQVp4GXCQqjhqKxXkYgOw8wjcGrUBGg==', 40, 'e3f8b86bb9e7068bffe187b77244d8fddd1d5af3880acc259caebf35a1710f19be70e7d9f459a76eef44503440b5ce0c47829a6ed8afdccd517d0e5480106f7dAJs47goVwYy/LEKrZXpBN6gVZm4K62mjTd7vPqnzt8I=', '', '', '', '', '', '10.464366', '105.339045');
INSERT INTO `posts` VALUES (45, 73, '1 Lê Lợi,Phường 1, Thành phố Vũng Tàu, Tỉnh Bà Rịa - Vũng Tàu', 'room', 15, 'CHO THUÊ PHÒNG Ở VŨNG TÀU', '8047da4c55637424bb8dc4726ecd1f9c5d1b993761f1a2fa96f890e002fe75d528c15beb826ebd248ea2ad2a321b9adcaab45ad0880f8704ec344b76c5f016c3vzQX7vAqi0+zMtAAORireHkpFanBP0l/E8Ld0valMdJ5Iys7a7BTfWGMWQ8mn+2MjTwib2xBGPlPMw8gFdreW4v2ykXTUIkzaeR6hKn5dU8oIkqKQ5wDJuUt7L/Ch7HFzVa04b9UeuLkdFW/lY5cMMdGlXHYethPYXTL8w6zyy8CP46VkmoVv6PWVdT8uJua4V483q17Kt//zriapCpumv4RpIU8lVkL2Y73l/J+IHVuLWr2XTavFe4oz8RtSQfWAWg2ozvZ+euEs5GPAoOdyw==', 10, 'c6734f0ab65da77d66ca56883e3a9d7ea2253b8059c24980dc7c9f6cf5ca1b3c1d821791fed95c47e02f15f07e2788eaf3beae704412414041ae3f2753b70cc044XUWOqRcDRn7i+XWgGsATPYEZzvNmzSRv6ChD97wv8=', 'tủ lạnh, máy lạnh, máy giặc', ' gần biển. view đẹp', 'điện 2k/kg', 'rửa chân sạch sẽ trước khi vào nhà', 'gần chợ hải sản, nhà hàng', '10.348545', '107.074184');
INSERT INTO `posts` VALUES (46, 73, '1 Ba Tháng 2, Phường 11, Thành phố Vũng Tàu,Tỉnh Bà Rịa - Vũng Tàu', 'room', 8, 'CHO THUÊ PHÒNG Ở VŨNG TÀU', '56d1c08e744636004fe25ade23e8a8ee0c24a250f2ec12d00fdcb549c99a7945a1e6a325a08599477ee0e7ae788da2f14aa3c271c064ea1db4b4d62a32ea48701fRFSSHdLfS41C6rVVfDTp4GsPFQUg1iLtrsACkQbyRGnLDz831PvMW9MczJMcfkN+SVYrCZKEkK9aFA1JWyYIAcn8SZ0WLmU0fZeC580TXp0bvjuH5qrnPcZP6rAPJMKA9oJd2O5Lw/1Et35Ca9/OoF4zs1IxAy5r54IiJjWYV+cD4eoIP7A4J2yT5qguLTTxug27YHhMbhiCpvC3vnPCr5tWfz29FtPKJuHE0mhWhVju22mG2lKXBhNTF+UOS3ILkVBnZ2M4aD0Fl7ce8LTA==', 12, '427978877a6ada910b8dea26b7a891f85e2e229980892825f6c0abdaef13696b1447c0219785e8d1f51fdd69cfb2a2c34f04ef5320565a7d501c5b33207ebfd4DcqLcZIVbgYas/MsTuZ/Szuwg9e/x+B2Gswygb27yR8=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\ncó khu vực bbq', 'điện 2k/kg', 'không', 'gần biển, gần chợ', '10.38285', '107.127865');
INSERT INTO `posts` VALUES (47, 73, '1 Nguyễn Thượng Hiền,Phường 01, Quận Gò Vấp, Thành phố Hồ Chí Minh', 'apartment', 12, 'CHO THUÊ CĂN HỘ Ở GÒ VẤP', 'f052a7df7b20c831fbc5b4c29889c2bb96dd61539c21ab614b952c8f926443921c58cea350c424b0ee35c20d9aeeff9802c0eb2ad20b2cc4206b36b34be92e5aBf2AaefU6IZKdGIefx5INGRbriryC9BLBpieKYgOn/163byPzNm5jbWW772P/9OCBR6dNQvcbAc0Ju/VNoU8ouPAtWuFVnltiE6eJs+fS26D2l9DWMB8EYbdWOMyaEH+FQnGn89Gca+lmLFYC7PaPGC0WQwin52XJg1uYOzW7dmqoMAEj8RLtIT/q7JZIOWb9/9C4+p7AbCtyE/CONToHeCJQ54gUxQcHAH2TJbW9vbA2820CMutdkmrqLIhGTjk0HqlZlQcF78ITUsPEMz7Aw==', 50, 'fd38f8d0eea89dfaefc08450059b0ee548c5dfacaf6445233f39f299e416793a2543c2c148d6fd83c89c5105728c0254aeb852ed82fa5ea4ff5e1401be914a93t4XmIiHU3btrVFzTVv8Ha9qT0yoPGKYkK0ss9E8oyBs=', 'tủ lạnh, máy lạnh, máy giặc', 'có ban công, view đẹp', 'điện : 3k3, nước 100k/người, wifi : 70k', 'không', 'gần khu dân cư, trường học', '10.81149', '106.684818');
INSERT INTO `posts` VALUES (48, 73, '1 Mê Linh, Xã Mê Linh, Huyện Mê Linh, Thành phố Hà Nội', 'apartment', 2.5, 'CHO THUÊ CĂN HỘ Ở MÊ LINH', '8b54339075ef4171e7bae9c03a78d927ec6b2ce83a41f02f13408545361e18a76cb3785656ef7ba2b0bebf83a69728b3e562c8595b3273bbddfc1e1bd670025dqN06H5PGBmD7PVbmr8DL4prrHkGH2zQXQHn6m6tdHgKn3DUVy1GthjunXegro39oTbn4M6Jz8G+J8NladbZL23wLecnfVLeLO8Urzjmw8mcUiMu5sLZkAlW4MsGUuAR7MpUFJDske89xL++0z+YJ7RnJs04DgNKzKLS/JJRG/s4EHXvJNrSmf9xJbixeQ6dswyV+X8v21RgH0rlS8iiMfMb+AhzdxmORZba2E5Plk9BAOR6CMZDPRLw9nEo6c/V7dGuL38jYom6oS7J1JnvZbA==', 9, 'ee9425cdb4dfdd4e260bab347d6ef13fb59994ab5ac4a53b5fbdc56aa5c47a594b4e05daaefaa182b6db4af863a24ba305c62598ea306fe9eb4d69a349761a8cH4lzY3GJgC8ZKPDR3r+LSclibeA1NSczAiz/lVm7xOo=', 'tủ lạnh, máy lạnh, máy giặc', 'rộng rãi, thoáng mát', 'điện : 3k3, nước 100k/người, wifi : 70k', 'không', 'gần chợ, cần trung tâm ', '21.156969', '105.735337');
INSERT INTO `posts` VALUES (49, 73, '1 Trần văn Ơn, Thị trấn Châu Thành , Huyện Châu Thành, Tỉnh Bến Tre', 'premises', 6, 'CHO THUÊ MẶT BẰNG Ở CHÂU THÀNH', '0569f7275ae95967519d85e907cd8f2c12368f1a464bd646a22710502c9ad4efa75b40ba373ffbdc1c634bcb1046396c9cc18fa4321230aabb683dee5ea8d97fRz1bL2bUYg7dvnTlYjummqa9KBYMxdpzAcXxGut1yIQgaXnCwsKXu5tfpmYJrtMGmJHZi+DO2GR+qJHLhAF44uLyGUdLbflPDEWmtjAkwjnLZx4BGGUl4GRSCHjYifkUlM32ZZONi0C2HS+DT/SjAQ==', 15, '25461b4246371e8a4b23aa0006b1bce09957489aa85afee56b3163c2b9d058ac71d1c4bf43f52b0346cdf0f70af9a3224e58badbf8d793264f1915cae026a169RusV20ZTTKna8PLLZd3Uk565y1SIoXMHg9AMb6YxBnc=', '', '', '', '', '', '10.296936', '106.356367');
INSERT INTO `posts` VALUES (50, 73, '1 Đinh Tiên Hoàng, Phường Đa Kao, Quận 1, Thành phố Hồ Chí Minh', 'premises', 50, 'CHO THUÊ MẶT BẰNG Ở QUẬN 1', '2be267c1e6a837c5650b0347780f5578dc41ccfc4e8198e12e94f2b2f1fc46af6770480ddb2b8f37debe730341af5f0678457ac9c6a5bd857efe190478b939e6xxWKlwOC+JLW3kY5/yX2+A1IlSgswdYXm3PC8kcHUqe1vTYpNI8Al6puztWQa0aTTmXYrXa1YdwaAxxcPk8zyJxooMyPZynsYqFJ0dUFWuVC3eNMGfxVE6MUzq1gh+sqMPnvDNRS7Q1kziH99x+5gA==', 1000, 'beb9fd0227f4ec906786b2b9723348615776c71bb86c56f1e559970a2302b3168577299f1cf1ab602f0ebb00208dd77df3d9e1b4b6e0793d186d046edb01686fYmWD65kBjZXZzrKsImqwoY3oKrGQNGqXfgz41LhuD1I=', '', '', '', '', '', '10.787024', '106.700991');
INSERT INTO `posts` VALUES (51, 74, '  1 Trường Sa, Phường Hoà Hải, Quận Ngũ Hành Sơn, Thành phố Đà Nẵng', 'room', 3, 'CHO THUÊ PHÒNG Ở NGŨ HÀNH SƠN', '50b19e3edf0e11ec790cfa125df3b17edde26147fb92e17c83510090297517fa08c3d7ef53139905ae073f4cf5f172fdb9e99022bb89d0b59cb07703ecfdead6/ta4f9+5u08MNky1SJzshsLeoojcSVXouEIC37FYrcr8KIFyf474Ke55/LdYsCQZf/mK3aDBmWQKcjVOeM4Nb26Zxa57JFkti3+5lCPbJwptVHz0lzlYgvG4zwTtDcLsEJGJPQyPcpnQ8fXnzznSJ66vkvsRzWkKbNkeioyyH4FbAGW5+8bGixmj0ibOYlttQJ+d77KPx5fiegOrn+jkBsFynO36TP2xEBH8UMvg2FhrK/aHeKiMWwVwAsvsWCbdEesn/P7bxg4ovytngVL4yg==', 10, 'b09afa37091960f8d7295eec6715b2629d1cb8424f983799e9a7e812381912b938b0e9139b31789f4b0eafacc682293530f978f5cd0d3e0e6d97fc7f18e5758aTufbW0+t88lh+ujfh6Ly8Hcazzn6VsHF26C8MnsAbRU=', 'Giường, nệm, tủ quần áo', 'rộng rãi, thoáng mát', 'điện : 3k3, nước 100k/người, wifi : 70k', 'không', 'gần biển, gần chợ', '0', '0');
INSERT INTO `posts` VALUES (52, 74, '  1 Lê Văn Quý, Phường An Hải Bắc, Quận Sơn Trà, Thành phố Đà Nẵng', 'room', 6, 'CHO THUÊ PHÒNG Ở SƠN  TRÀ', '6d4b699065a56dcdbf3537178e05f78912b3ff47db9745f856b2008eb4da0368534f912fcb448969f0ffd8da1c819b614e0277fc0a5b9aef9f09df6fd7e29c46WOn4YvlEm4e8LKNYpwwvAFHPQ3ue/pNK/qJ4fOwFPSKmBzgKYpOjKZHDqjLCNku4OltA2SKpCOM+abh4PhdTOUBfQ6a1lZm0YmeLPP1Fr7oG7xanTEY90rwSVviGj6SjIjH+YbaAmEtgoKy7Vl3w/9sapgtOuSIGXVWARWnOpTPQrq2XDWanBbjrmvOGuhUUpaoejhfyXyfqk2VwUG4g+cOWjQtc2yyon8qRxfzVHWcE4Cp+mZomJv+hd+Mb4BpJFEF6MzndcYZKAIkVl0zcRQ==', 12, '8cdb72c2830e13369d738c327334cb63d9c7b9937363c3461c3800ac036d9385baaea204b23f86e2fa76880c2c16d391513ddfa5a0ef7fdf3c92342c8d60b897xLbJW7W4Iwm+i0MAUQY21WQSPyo5LC1FgdVB0IYngWA=', 'tủ lạnh, máy lạnh, máy giặc', 'có ban công, view đẹp\nkhông khí mát mẻ', 'điện : 3k3, nước 100k/người, wifi : 70k', 'không', 'gần ngã 4, gần sân bay', '0', '0');
INSERT INTO `posts` VALUES (53, 74, '  1 Cầu Giấy, Phường Dịch Vọng, Quận Cầu Giấy, Thành phố Hà Nội', 'apartment', 10, 'CHO THUÊ NHÀ Ở CẦU GIẤY', '7375b7e3c202c5f08bba39d4a3793312953bf3b90088eda13362369b57c1f64079922bf232f404c5afd9bd8b0b2c49ce20013ab1ec5bcc7806e2af34a1d810e0DXojWsj5bU5rWtOzMu56TdHVaJ28rS9JX2hw5SF9utn9bY2th/4NHTlDZ4AbVjK6PSYeTjiqGJn+9xlbb1gjwx9D6x36+9m99ZqDb/Whb/tJ6xslFvRXWdZZLp0bRvFHlA8KUN2JpUtBXZJMyDEQOmYAoxPcBaplaZLxsD7udVvsn7DR4NYCgmvUFmXKiX03WkHxF/ubsIa1hTt7z6YJWSo3G4DHbY9B+0tZwHg44t7TX0+JRjIdBT3UO/TwuZN4InqtThG94pZD65ibCg00Cg==', 20, '83c3d40ff6e63e5bb5312dbafa96273cc0f66beac613cb4565b76d8d53648aa95b4c1b8afb21fc0dbcde95c3fd9b052786f4f4683c14ff26fcbbcc56e9c55aafv5aECEGZjF3uvGn/1N/rQRuyw/S9R3myXXw+LdpY0+U=', 'Giường, nệm, tủ quần áo', 'sạch sẽ, thoáng mát', 'điện : 3k3, nước 100k/người, wifi : 70k', 'không', 'gần khu dân cư, trường học', '0', '0');
INSERT INTO `posts` VALUES (55, 74, '  1 Kênh Dài, Xã Dương Quang, Huyện Gia Lâm, Thành phố Hà Nội', 'apartment', 15, 'CHO THUÊ NHÀ Ở DƯƠNG QUANG', '49ca064607e39d02f39a6e55ad6977f97d48ca09e9898bf6b128d3688629d7e71d23aed13417f0e2e5229b559a0cdde012bd7fb84d463a780e144fb80d8e7615Lw1Vk/vVJf/AWZoxAhMEJFGVt4Y25evVBXhtIDN6VqjKHuW/12p+2XVLhgCsKD1e5YqaeM7VsCK+pu7T4rxL6wGglbTYxrFN6vtkkMj4J8V37AdgNezuEik311UEryUBlqy+KZ+WNnuFCMKqZtRCRw3RVkZan1n6TpMQqNOEbbbVySEdgzOrtYGG6RD/fIPIh8ijtHC/uXvh9sGt3zuXqBP3DeFDm38TWqfVj6iQ5208szUa33//IHg4ylHhbWhkf7jlr75CzcF4RjIJHP2yhg==', 30, 'bfaa9e9403be6169e1f06f90636ad9e55dfc885a9cf5e9939dee483eb584711cfea764d377b8cbb3b94521dab78807ff6ea7b9001f77809571769056e0020141MwbXWeFt3ZLozXYDwYMT3eTkI6W2UrSgDDOjt4XoFt4=', 'tủ lạnh, máy lạnh, máy giặc', 'view đẹp, dầy đủ tiện nghi', '45', 'không', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', '0', '0');
INSERT INTO `posts` VALUES (56, 74, '  1 Tôn Đản, Phường Hòa An, Quận Cẩm Lệ, Thành phố Đà Nẵng', 'premises', 60, 'CHO THUÊ MẶT BẰNG Ở CẨM LỆ', '58ae8d18d091cc32ce2d52a335b2aa3779b625454c57d6d90da3a90714c17fc55c7d3223737f5d2a3f3141e592b3fae617b40ddb8db4586061619ea7d3d764eaRq2yZKvMs8qVAU6BXJtd03Ufz7/4Qv/mFn4rIaRhrh2qTpVUzh8nKSZ4YhND/vhsDSeINP9NEQu2n5ZHzaraurjipfMnbUhXkcFXvYAa+Tk/YPJaQedsIO8gvkb+CE+6k8BtssS+HT+qQXbJucrPBQ==', 250, '9fea692ead833cc949a21e4a7814a6082f5e7ddf182947b2f1bea722171674e872d60c0e05e5e52aff7da8ca6ee2709d800fc0a39f7a0a3dbc3c34c852917060j4SpoNTB7CaXk3Un0V0RdsD7T54DZ9MYFseA1fticas=', '', '', '', '', '', '16.060119', '108.176801');
INSERT INTO `posts` VALUES (57, 74, '  1 Liên Hiệp, Xã Liên Hiệp, Huyện Phúc Thọ, Thành phố Hà Nội', 'premises', 45, 'CHO THUÊ MẶT BẰNG Ở LIÊN HIỆP', 'dc69d7e44d83548700cc0c7b88ad4507e56671183eeb16637d1f8147548883b73163d48e275a91f897918e019184a9560d3a142baccfe2e9ba60292afaa05aa71MDAKg1p+c/x8abiPq7hjyiDlzBxK6hfg6opQsqjMPcRIh2N6rV3K7yANE0Ct5uQvhBD0tigNQKEwoZcXaNzOruVUEobKsrkemoKIbIem8GRyMX0nC5CIDD0X57/1V+fZwApA7JBjUjiXA98rCzQYQ==', 70, '3f86232f5044deda7d2e36833929f4626acf997db5b5028e9806e41d34bbe411cc5e79e33f87c3a07aaee9b788fc6400ac0c93d21c7fecbb15c96666fd0aa0e9AEdChlxAncOqT5PSSg5hIhMVTyqhZf0uril8gExMaAA=', '', '', '', '', '', '21.060611', '105.641602');
INSERT INTO `posts` VALUES (58, 72, '  1 Trần Hưng Đạo, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh', 'premises', 100, 'CHO THUÊ MẶT BẰNG Ở QUẬN 1', 'dd197954be2f27e639190c8882a38ce49ae87e286f7873fd52930477695c5d147c86bd526b51407507e4c8652c36f2aee056d4115fbcaaeef31af5ec6a1a9d6bJqASzS+og/h28lmAw+bhINOut9m3Sk2L9u7+4R/P9fYrt4GVQBohYkA43/9LRuL3IzPldoUX5ZSfIbZPeB83TgpAVIJxXQCgncCKOz8fYkoN3HmLlg+3mn4dSVhvaPx1u+p9mHyU85P2xT5nRkyAAQ==', 500, '82ef9813a14967a6b81ca15c30cb39fa40f5b3e0115006c37ee0c86128e66642ccfd4dd7a9b5d0885f1be64b72b8844bd4b5069f64bf7ab9e27a3eead1e14735WXkL3vAijjCHbxV/ZFiocgecyt5wuBiiY17ynRQ1bd4=', '', '', '', '', '', '10.770058', '106.697424');
INSERT INTO `posts` VALUES (59, 72, '  1 Nguyễn Thị Hương, Thị trấn Nhà Bè, Huyện Nhà Bè, Thành phố Hồ Chí Minh', 'premises', 15, 'CHO THUÊ MẶT BẰNG NHÀ BÈ', '55ca97cac3f9c4a70746f50d64a486478e694cfb1478f857dcabbe7b8fa79e72a3d972aebc237e95825787ec02532518e7fbac9e429f0022e27ca26ad376ed99jqjqDlTEcbX8i5IGAlGaKwK0yhM3qEyyIBYz6rOeV2bQr7B/Y2JQUw93mxkZsP3WY2b6csKGX3OdZMTJzpJWdBKY64oYJ6nSq+8iTQGAGPO4XfSGTvp9xj/O9fe/XEV1obBBers5Zy+rxajlwlhRBA==', 35, 'b0c55de6843f9feb9de7f5ebc783c8e62f22479e44f93aa96b0ffc052f1515b55e60c0d9248336bc2937b5d938c7ca6f5bad36290fa3e9ad6cbc9e44941822f1NIBYFCaGUAkeTn01V+vWHX4gbzO8MfKv+GZgJPDpP7E=', '', '', '', '', '', '10.687275', '106.743427');
INSERT INTO `posts` VALUES (60, 72, '  1 Cao đạt, Phường 01, Quận 5, Thành phố Hồ Chí Minh', 'room', 5, 'CHO THUÊ PHÒNG Ở CAO ĐẠT', '4a2011f8a2da2fde2adbf3acb4142fbda2caf5a8ae378f18ea6aaaa317e1f3830b087cd455bf9f9d8df6bbb42672e809fb280efffe0a7f601b88dd902fc3338b7URcCMF1HsOJB/9ZRnnoxALe5dsw+COGppIB8yBu4tR03jrglSyN5HMDDVSdVOHxqFofQk5n/d3yTTN24JpVUbn88pRPG13/zdBrp0yhyNLJpi0XP9fbDl7HQAeELFaZ+XpPUw2q4eIFz0T0HVo3antJImXQshC2Jt/jaEAQhGJruptWjdGo9vOirzcob69e6jlUzuT0jmKwTmZRU1oyEsFPDyRNufPy/NFsuUD4vNYSSqbTc4pCbZxGwIGTnp0DYz+ozzMoTdVVnZsjWBN22Q==', 20, '65df946f9547b2995fbf59a5fcd6f08cb1230724fafe6a67e390586611b044cde859ada02cd3dba938178382410d018453559b834eac3e9b1ab43f3daa5c7ebc2yKpkjSzcvVMGhM4YC5ZySMvZuhPydBcYRSYjiFm5eY=', 'tủ lạnh, máy lạnh, máy giặc', 'rộng rãi, thoáng mát', 'điện : 3k3, nước 100k/người, wifi : 70k', 'không', 'gần khu dân cư, trường học', '10.752375', '106.677278');
INSERT INTO `posts` VALUES (61, 72, '  1 Đoàn thị điểm, Phường 01, Quận Phú Nhuận, Thành phố Hồ Chí Minh', 'room', 4, 'CHO THUÊ PHÒNG Ở PHÚ NHUẬN', '30f2ecf5c328bf2084a8f397b659145938b8ed1e92be28486c9e7893a3175b9212acb5add82e43f3d4bf9bc0504cba6ecff259c4a81c9c8060bf6913e9173641INbsUm28yyz+ZqEi1VNftP2b3VjUgWSxDshyRwpcVjsi0xfT3vYr2+FERJLaO6I4WMoi5R54c9uiC1c7xiiMeCDw/ojVswJ3IsTVTVIuqcSNoPp2BAx+/LmTuiQor5O5OIXmFEijT4JANrsZLVfh9rXX5xgeL+nImwx/HzULpZhzhjNg5DrpiZACSpWS28YOtTzkDJIl7CKCAj9QbZ14skSHsc0osHJTnPWht3JBI9ePZjm05yIzypZVoXMnOdvoIlCC2k4vtozRGw+n1spndQ==', 15, 'd3f6fcfdda4373849b0e9b730b84e0073bcab9207f0aa03fc411b1d0e8c100d6e250144421099d93adbcc7d43a81dc2058715ec5d0e9f99907cf1eec64ce2d39E9r45kQJBo2O3siWx5Bi8EcKDzaoncd507i6uC1Obnw=', 'Giường, nệm, tủ quần áo', 'rộng rãi, view đẹp', 'điện : 3k3, nước 100k/người, wifi : 70k', 'không', 'gần Aeon', '10.799263', '106.681231');
INSERT INTO `posts` VALUES (62, 72, '  1 Gia Phú, Phường 01, Quận 6, Thành phố Hồ Chí Minh', 'apartment', 5, 'CHO THUÊ NHÀ Ở QUẬN 6', '3efbfeeae6eb3fbc796994e6e4de76c9b787690cd5a341a7c7844fa91a9e3554205b7aed49e47fcc06e0010a828ac4f3783f2887f7012f7923081ecfa0d3af6dkc4bzL0P03BaxFFzlC8F0OE3sHZn7AE0TaCHTL0DEI/NdpoVHCLHHAFlUcY1mDknsBBPD4crspeOPfHzkG2BgbCwkhvskCwHzbfacLQ46CysGdC5zk/nVFpbJb2q6KdJv5cCps68D5O4IPPpsj0qRbwaWGAb0hZS20cBTUtccqZZmmO0liVkEjrRqayDZlJH5XakV8pz1OVbhvw8FXfhwNS+VkZTY0nOoUhXF8uc15bLNLsvECAdoIFMk5B+XXeMn+/h6n4BRpy3QDRl9pt+CQ==', 15, '94c6cef47c414ebed457bc563049c597b4e4222e0452d71ce07ef5ccb06b07f9a8bacd36a9fc32ac5a2f13fc40fa635b42cb545a71f7794ddfa1a9bcf54b6885qiKUsgoPW4JxDxgiXdP9eqga1vQhP/CFylALL4pfcAc=', 'máy giặc', 'đẹp, đầy đủ tiện nghi', 'điện 2k/kg', 'không', 'Tiện ích: Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', '10.745975', '106.65111');
INSERT INTO `posts` VALUES (63, 72, '  1 Uy nô, Thị trấn Đông Anh, Huyện Đông Anh, Thành phố Hà Nội', 'apartment', 15, 'CHO THUÊ CĂN HỘ Ở ĐÔNG ANH', '02e9c5262dc30040e044f59c5d24896328cf92e7deb58607138e9d46c38044ef41e15e0a9c4dd3bea855b3970e7c3c311b47117939d4c3804898277bf66b666fKUJyGfTm0QoEgbGOy1HVvxdJcWkyslqPapkek4CioQhG8YQz1n8PVa7yGCCQsf+uRG7i7uMC0eWYWXgMxtMojUT8Z1OBD6E3i27L8UsaW7Y6BjK1Gf94Bq20OkAmcL/42wKdsdjLeHREV1UECJIgWkdQmOYam+glxgIBom7QomIs/HpwzoJfEDI6gY4viAivWU87QcZXy61f6tmY9rPS6KtuzgKfhkFO98SJOLNrDL4xYi+FJPekRLLSL2dnAEZ/cT3wKDumCie3HDN6U3tVAA==', 30, '4932cf5cde252f63493bc8eb403456a5366e711da1fdb9ea3a46963e59f420ab7c6cb26408404588caa01602e73b3dbdee004a24daa56dc9b277a87329ccb61bP13Lck1/aIC2dvMQD5xigKXm8OTiWH9d3MnWulRJfVQ=', 'Giường, nệm, tủ quần áo', 'đầy đủ tiện nghi', 'điện 2k/kg', 'không', 'gần Go city', '21.154296', '105.854116');
INSERT INTO `posts` VALUES (64, 70, '1349 huỳnh tấn phát, Phường Phú Thuận, Quận 7, Thành phố Hồ Chí Minh', 'room', 5, 'PHÒNG MỚI SẠCH SẼ, AN NINH, THOÁNG MÁT CHUNG CƯ LONG SƠN MẶT TIỀN HUỲNH TẤN PHÁT , QUẬN 7.', 'dd34f5f96aba0ef6e8691a94529b84311b8844bb07efd534f8e75a47ed19ac689739fcb32b510fa1bec5e9de8bc582fa5807c017012addd7406cef0f0803650cJ+fI+IM1OV/Mvfls5FSUI2/53slawu1BpyWhvCSFjSoiIAr7sSH7ZB+WYUTqzbXSYRMzQRpTNUjYXdjcKkaTwcgyYLg1R+IgfiXHF17flCe9BUe1v38WuuRx+VgSTbDUQGfCYVS+EujaWiOi3P9lpJ0sUWWHY+DTatD1kqaiYI3veUEOPog9BQ5cUL5dBXqGbIZtYHdIxD1mLsoKnJM/qBQMvWe8IctS6GL7/4EwpnvoMNshACQGlYXvNO6HaZYdNLh3o/aJnI6jX0DncD3nIZs+MAVGC+oMhG/VxAjVw5VKv7OHhfbp+U1JGcE3lMeo6+4z5wkzoyZJLahlBIU3OjSXoygLF+Q8btVrrgFLg2HtF8DuPIz37FkgumIxJfnXI6O+HVhqbm4AKsbMDZCL9+bfJFVgK+NDJCWVo9Y79mseGJ4wypYQtERxhAger31f', 23, 'de38ae9acac29a270a7f0b03ed0bcbf4e84b546e9517704b0b7135521ebd55238bda45a64d3fbaec3035488149d0a06a34736e0e258ec825acf5ad7e0d1dbd3abLXwaOL2SbLVwoQVRxBN7sL1WarIsXc6wwyLPDXlVg4=', 'Có tủ lạnh, máy giặt , khu phơi sử dụng thoải mái ít người .', 'Phòng 13-15m2 tolet chung 2tr-2tr2 cửa sổ lớn tường nguyên thuỷ view phú mỹ hưng. Phòng 10m2 thông gió giá 1tr7.\nPhòng master 23m2 giá 3tr3 tolet riêng khép kín trong phòng .\nPhòng kiểu studio có kệ bếp nấu ăn riêng giá 3tr8.', '', '', 'Có 8 tầng trung tâm thương mại cho thuê phía trước.``', '10.716311', '106.737202');
INSERT INTO `posts` VALUES (65, 70, '176 LÊ VĂN LƯƠNG, Phường Tân Quy, Quận 7, Thành phố Hồ Chí Minh', 'room', 3.5, 'PHÒNG MỚI NGAY LOTTE Q7 TÂN QUY CHO THUÊ NHANH', '1ec6a94770c95d92104e3a4da8b0524c6c2670308745417affa1961493cd220b1a665ae065619c2dd9f919268cfd770c682d784c87cba90afc7e7c3dd7f090b29t/NTEqo2rrjrRO4jKdv0TmKitZ+gmLZoj0peLT3oWNbWEauKsajVPD6p+IqfCf3mkOKvNsKJQdJep15qSLfz9coJTEvoTTIE+Mp2gOi6yQpHiXNxlmlvBFtjOKlX/onvKIslTg7VRakGyZ+96A/F35hysJF6SKChiJtFamc83AspY3xUnguM0gBxVh44yTsMVz4O1O/fkcCvojhBTkPzFLql8GUBI5RqsbT5kFfvtwMYMrU+vCynEwTlaCDLAN04LB0gypPGh3YE1eNs/FVhrnIF2+7Xp8T5xVbgcx4ObIncpdDS4eYLI0NL6R3WB0XGI8xs+zBIn22JjLS0DKcZQ==', 20, '9ddac15a7a1973fbb3b2b17415864390596489bef4ccc01f732cae4a8ab35d804e84448ff6ca9fa75e75c6a116020288f5d1c313d43259149e0435a3802fb831eQ0kemL7rsiVO31N3JGNeWCh4Zo5kXUvhYa+rrFPFvo=', '', 'KDC an ninh\nĐầy đủ đồ nội thất\nCổng vân tay, camera 24/7\nTiện ích xung quanh đầy đủ \nGIÁ HSSV CHỈ 3tr5/THÁNG', '', '', '', '10.74705', '106.70455');
INSERT INTO `posts` VALUES (66, 70, '134 nguyễn thị thập, Phường Bình Thuận, Quận 7, Thành phố Hồ Chí Minh', 'room', 3.5, 'PHÒNG FULL NT NGAY NGUYỄN THỊ THẬP, GẦN CHỢ TÂN MỸ', 'f3bd11d495a4cd5b6cb5057d77050e787e152f599324a8dcf8b3aed3268d7379a8becf14b80ae77c6d9fee14f08288006397806aa9907b019e7929cfcc821c30XCstVByEmKYFx7vnI86jP+StrXbvDwGhSc+u3EjrZlFLCuNGpOAtojdAOmPJzMhj/Dw1gGKsfetgecQvuTWeOYKZOwIX9SLB7IWGXAyZE01e8+0H5lcgj7XBrDLcu355jFXz7D83Q+ysNftfhlXmZjDTiDJiOxyhKiPwrH7Q7177QdKDoYSeWAVsia5ZdLYbiCogse6teerGOXU9K+6WOVJwrpt3ci+LWSgcNyvDMnLS60alY2wP+ijhWbeNyK64THDZDJlDI6XO/LfSBZNCFM9Xlu4J5syGYwz0HMXB/teDrUiHs8B5UT9KqEhSYV+F/B66cpPfpPF2GIMU1pHbBA==', 20, '171dbb7bd164cc71056655509e40c4be9e7952134103526c71a6ebd9ecc13bd22e112858b0adeeaaab7a9fbf3e51a59ef98d400f4e982ce1ef6b84a350508ca11smr1KdIJgSBfM5qSyY9LlSJ54LRvNtJGrd973gXN0k=', 'full nội thất: tủ lạnh, máy lạnh, máy giặt', 'PHÒNG FULL NT - VÀO Ở NGAY-NGAY TRUNG TÂM Q7\nĐường Nguyễn Thị Thập, Bình Thuận, Q7\nKhu dân cư yên tĩnh\nFull nội thất tiện nghi\nHệ thống ra vào vân tay, camera 24/7\nXung quanh đầy đủ tiện ích\nGIÁ CỰC ƯU ĐÃI CHỈ 3tr5/THÁNG (GIÁ GỐC 4tr)', 'điện nước 10k/ khối, 3,3k kí', 'tự do giờ giấc, sau 22h không nói chuyện lớn tiếng', '', '10.738231', '106.72012');
INSERT INTO `posts` VALUES (67, 70, 'nguyễn thị thập, Phường Bình Thuận, Quận 7, Thành phố Hồ Chí Minh', 'room', 3.6, 'Ở NGAY ! PHÒNG CỬA SỔ - FULL NỘI THẤT - NGUYỄN THỊ THẬP Q.7 GẦN LOTTE', '40d805ecc9e43d9258c47c01a6d201bf9ae0194255a48e054af05149585c0d9d413d2b3c7eb439644fc26449b34cdc8e6531b91c77ee3ea8dff8fcda4570e331trcreg297UX3+34J/HTjFMyFCgTUSnvY1fhfEgs5NvHAgEuUvLyfjaa148jCn3fUuhTUJAiLWqNBoy/q8VAShmLFjOFkxWyJqGq3Ev29q9etvJwi/IWjplVehuQ/P9OgQr9L7QN7BXfDONFksozlS92Ri76CWOjz5Q0TDAyWHwVw01OJ7woJiU6c7h9G14Z74d8gCPNAa+n4d8o/cXpfe+79dh2U9Tyi7EP+z/3EuDSq68VWBHwkad0BTd+4YGRIYAinMEsDMnD6NFogtU4JmZwbpbfjMU9O7AZkb/XnvYGaoNLhmWTkxPW4S8rXFdhfKnkbbRPAOWVmVt0gieFEX08xG3ZjLaac6jNaHKNMyFo=', 25, '7b05d1cf7be608bcd95e7f4fca80c812872b004bcaf9172d865a6eee7c75673a157a3d42cf6fdd5acfd5a03f6fd939e6b49408106476687ecc6ffd9d0d681d57ROY5YAHx4CLcYIgTh8kK2Sm/DRnhudUj75XQSCU6oJQ=', '', 'Bạn đang tìm một căn phòng THOÁNG MÁT - THOẢI MÁI - NỘI THẤT CƠ BẢN để ở học tập và làm việc tại trung tâm thành phố\nĐây chính là sự lựa chọn hoàn hảo dành riêng cho bạn: Siêu phẩm phòng mới có cửa sổ trời - nội thất cơ bản ngay Nguyễn Thị Thập trung tâm Q.7', '', 'Có thể vào ở ngay hôm nay\n+ Giờ giấc tự do, có thang máy\n+ Nhà xe rộng có bảo vệ', '', '10.738062', '106.723243');
INSERT INTO `posts` VALUES (68, 70, '357 nguyễn thị thập, Phường Bình Thuận, Quận 7, Thành phố Hồ Chí Minh', 'room', 4, 'Ở LIỀN! PHÒNG 25M2 FULL TIỆN NGHI HUỲNH TẤN PHÁT Q7', 'c0425db45655bf6e8d17fe33d59bb47cdb5bf72483268a66db6d40f39145166898484827aad6271e6b20bd8b7708010081837732c77da99fc2c516d9f4672f534zTh/1X/FyObvwg/TukzfHsBnlBAgNLzIIjUZdyz1JR+gj/bm3R9wJ7qN71DvZc4q+HnunZKJnwWnlT1GcjM8HiqA8H0NzcEbdDf2T3xl+OTcqrLRUkri9JNYNMtLdEPMHGxqu9xSTw5uTZgkCrgDrPINoEMSkUrjmdiOmx3jloo+k3oyYfB9Lh6FDmZBvg+t1FNFZqhU0KHM2Hn42wb+FDPjeFZGS0cdz0tsFCEE1NR7yCL5EeeQTot389sfjD8RqZNsxc0a5ZYtDP6XnDMJg==', 25, '5af26021745a49202c152f0b26dc85ca15b8e03489b121d954229a55d3512bfd628f83ccbb2f219bfaf4147d847141840e0c388d2bc192e9805f7d71782417b58pCOvh85E+jFKjPmgMf26FQjz14I0n5V9ZKa6Rq0EBA=', '', 'Bạn là 1 người năng động, thích tự do, thích tận hưởng 1 cuộc sống đầy đủ tiện nghi?\nBạn thích được ở 1 nơi MỚI TOANH, chưa ai ở?\nTọa lạc tại: 1365 Huỳnh Tấn Phát, Phường Phú Thuận, Quận 7\nNgay Galaxy Cinema Huỳnh Tấn Phát', '', 'Giờ giấc tự do, không chung chủ, bạn bè được đến chơi thoải mái\n- Hệ thống camera an ninh khắp tòa nhà\n- Thang máy tốc độ cao, hệ thống wifi mạn', 'chợ tân mý, rạp phim, coop mart', '10.738364', '106.713979');
INSERT INTO `posts` VALUES (69, 70, ' 13, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh', 'room', 2, '1TR6 CÓ NGAY KTX ĐẸP TẠI TRUNG TÂM QUẬN 1', '2e6af7f2afccde7576842b51772120b09eb719bb20ea5f1fea8f28ffd6f0b61bb107616c2ffce41d8bf3e12b22f5548503977c9ca338bf11a2fbe5bf5bd976b1I6vjflWtwO/Z1HfJ6maGB0korG1ThrCP2VyTutB6f1KVJnKTQTNDbZhXvT1tItmte1RKiYNjGes7Je7wOiy9+WdevqSUZnQLyNBh42SNn93rfZ2BMOX6g1hiUClP+h2NbQdc6xp7MpWpcxvDmRgeCzbiKjWkfFHKrkEij1aOh83h+wJP1qBXTI1/StCLPkz91uH2UfQU50e42Y647GQRHStTu7kN2g7s4zf4lnZERZRKDF9YuTHqx1kIte2R3PBa79iQH1/Uszr4lQj57T59M0rRwarCByG7u6XJ8JP94KrPyX3BpiCIAjYGX+KeC3k5iKAnzPQs4C1s+f/DDj61kTkyTp6tYTDg7+s1v5f4rJY=', 30, 'c95162677aae77150b5f27820069d95a393ce566b2225d187c65401074fa004e359f6c7c215d05d05f9cec4d02e83e06edb7f877bc0b9d9a84e462f173b175e3KtnIM5iSjFgy/v9+C1dVTUt3mxNMrfpQDxyLIPzpxK4=', '', 'Cho thuê Ký túc xá sleepbox tại Quận 1, giá từ 1tr6 - 2tr2/Người/ tháng\nPhòng máy lạnh\nCó bếp chung, máy giặt\nKhoá vân tay hiện đại, Giờ giấc tự do\nCó nhân viên dọn vệ sinh', '', '', '', '10.767961', '106.693776');
INSERT INTO `posts` VALUES (70, 70, '134, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh', 'room', 2, 'KTX ĐẸP TẠI TRUNG TÂM QUẬN 1', 'ee229c8164064d415b8982b7d535f4ec0d2039090d64c560b3c509bc498192e7a5e823510c65f850f01c957707bae3b1b43185e582497174e7fe64dbac245034Ir2FO3mrpXULjOFGCl8yoBuxk0WIh+hWwnQGa8lA0UkUe/wH0rI7ic9AE+ha1Vj94CMDdyope1AbtAfDvHXPjGv4UBht+bafDdfJ42QZuKA+QrXpAmvIV40GbVMbsvwIZYyfFlcIRvIfCK4TvMgcGUhWVl6NjzaKzKvgXJpPyLfINkjdFn2sHDlau8Ofp+9+j4HFCMB208hZRAuclD0CkE2Hf2blIokJ24eQxk9aYahQgShIsNqgFYDyMCZvdhxNdUt2o9Kb75AsN/yGtzdxXHtRRq7RGGV/5DHWjV/VQflsHJxe6r4dx+Iq+h3CwQzl1PQZGIQZC79AqX75eFLgE0tysz/lcyyzMkE8fzv0NWw=', 30, 'e5dea031855808a6a2b957df071b12895b4c2ca1d35729695b71719cce29a777086ba3d6bc6b353926cd0c2cebb92f42cbe092427b4af9c9f8d9157def4e295fpjHbKtcgfRBSAHYHY4I/y9qmRo4+JsL+0Xd0HQl1STQ=', '', 'Phòng máy lạnh\nCó bếp chung, máy giặt\nKhoá vân tay hiện đại, Giờ giấc tự do\nCó nhân viên dọn vệ sinh', '', '', '', '10.767961', '106.693776');
INSERT INTO `posts` VALUES (71, 70, '1 Lê Lợi, Phường 1, Thành phố Vũng Tàu, Tỉnh Bà Rịa - Vũng Tàu', 'room', 15, 'CHO THUÊ PHÒNG Ở VŨNG TÀU', 'dc403bf76e419903993f327928266f6b1768e4867bca752af4e9f6551da04c34c664abc948a5e6df04aafac8b9d8f35920acabc2dd847e53873a1ed7f84f9158x/CR2bF4vWdOiIIIic3LGUXznU96TnUuoOfcycp6Xm2cgAWR69vlgv/gGg/UmgIUCXDXG+9Ri39Npu4+ReksGh4URjoydeBEgzFeZ/jqARWlZyz8aIXZAktHKatLArMhVXhMIOYoi5lRoILCT+VyRkuf8QKjPEc0QiS3etR9IiHDlhL4IXBc5VxFcIWUgEiztSx4UTaXORmfvAceEpm48HoL4pVeM0YKzf9A0/xUC/G6cFLjQgsO0eRnkaF4vrG/oLXVphSlIIWHsJL2PczugMMHCBOWpS0uBTRR5lsz0whEeqgQB4cGDcb9ywrngokza/Fj8dAYC+riiOzbugBatQ==', 0, 'e34d22e263eb34de5b2706202ac693361bf1a2a2b8fc34c9aecd01a866a1942c5ba2d6a23ca19c82f84e07c4893567a6730fa35cabe0d5fa99ae433ef65036248U2bo8Dm+nbSyfPKshZ+WVj93f6rDlYAHyoxBGPCTj8=', '', 'view đẹp, dầy đủ tiện nghi', '', '', '', '10.348545', '107.074184');
INSERT INTO `posts` VALUES (72, 70, 'Cách Mạng Tháng 8, Phường 03, Quận 3, Thành phố Hồ Chí Minh', 'apartment', 15, 'CHO THUÊ NHÀ Ở QUẬN 8 ĐƯỜNG CMT8', '1d439190b3e487a325bdee7866f62631e75b09b1111bf3dd1308ebfc82b9bbac506e82ab3b2e2d0668f45a32fb598312deb28e1257fa4a50975fc48186bed56bre9Vh4jHfZ+Wrhv1uEyxMV/TamGnbMHeoazAjvDqgIYLjNWgPc2c7drvLeu0HE0T1Rp2QiqxM2dngF/w2o5tQd3Yib9elRREK+MylRY5rbxpGHXn5M9UhdTiiZW1QawUm2cZ2vciY9Gk6tvAnrjN0sNeaC39bXAISdlZdt81+STwCsVQ+Neg9Di18qQkcKppYoKBK+2lyjHnxhVDm70FKJwVr+ao4KxerCuHoANyy/3Ww4bDU7IieGEMtjCj7q/KsCihtK27W7xgEucCVZ9EGN8ZlinwY4EMykygp+99YuNrh0bKW9izu7f5ErWcFEmuV6NkVn8FgFmwqOpNAFtnWQ==', 0, 'b7e14b9eb9e265e1cf2bffc83e4c1a5e19b97da6885280c58256228a0a8cc047dffec40c6de0db44f69c119bc0af0f61feca155949c6f863b6970607e40d4612TqLbKASuBwqpogoqnhecbyjnr7kzlYU7ULnZq0HVK8Q=', '', 'đầy đủ tiện nghi, gần công viên lê thị riêng, coopmart', '', '', '', '10.78301', '106.671947');
INSERT INTO `posts` VALUES (73, 70, '770 Sư vạn hạnh, Phường 04, Quận 10, Thành phố Hồ Chí Minh', 'room', 3, 'PHÒNG TRỌ CAO CẤP QUẬN 10 GẦN TRƯỜNG DH HUFLIT', '61cca4b9d6ff8a1749691373af5589e9e5167e4b7fcfda9dd27b88de5cab84ac630e8fa7bfbc26067195bb1f436d59f22cd2a18c8373150d318990f0ec5ea56bSrSyFOey7O8kKPe+6yvloRMJ81y9ZiY0csv1+G1cXq+L7MCX2qCEuCawkpb03kYN8SablKqL4Psz9XzaSviepGQ5UMMge9MkjTI4EbaShKUfVowt5LjBvBhAwOFePkgaCKRPrgCGpYq0GOj8D1wyGUKiqRuvX+a0FfASudLAF6WYciBRC3q830MKFo6k+1tEazF0pE2q7J8Cq4HP2eKajRO2vj4KiUeE44whRZ4oQ1gEikC87aa4tgcC0tO0q66J1h66jc32drDXz5PLWbSGkObRcFHILB6sszjkRthbSkCVC2Z27YDOhm7W7yO7Ut1k', 20, 'a098bde65bcea1122ffec61bde8f2bdf455a4b6668e524811f175aa22d8352a219692f334b90e560b42eb5408a9780c90b38e3610589df3c432594e96c7b6df7VyAaQhIXxy+sRexy1JO5/CTOkWZsIuRzjKQUhCgaGmI=', 'đầy đủ nội thất', '', '', '', '', '10.773113', '106.669025');
INSERT INTO `posts` VALUES (74, 70, '770 Sư vạn hạnh, Phường 04, Quận 10, Thành phố Hồ Chí Minh', 'room', 3, 'PHÒNG TRỌ CAO CẤP QUẬN 10 GẦN TRƯỜNG DH HUFLIT', '54d1d549fcf677ecc79cab46f729c3122707e0e7efedbd271999a01603a2f4850c468d407cba4badf7050b97663145ad0b3a11cf2227aca7389362c556b56fe3AUfp4TNzpfI1oQ5YU7BK0Co1AeDxzRw8BKkvIWkJwM0/HehtGlVOQtb09T6humV4mJT5YIsqrAzTjm3l12G5ilEEdvAdMNYrj63HQ1UVZTmz/rDvK9jAnGuNW59YscGq9C9OFTIur7aPvkqJg1e0uP9adxAaAcj8CI6Z6nDKGZyhJ2UjCEwPbF1P4VyAFrkYn3Gmd95eXpKTdloifGKXVdyIWEOLVYaCUBEeA44g3bOhIh2Z/44g5PT8ZRoBkmdxLDY0Ny+ok3+gTC2utVa5OxLVMkvSJlEWjzg1F98L5PG0GydehJN1NGnWpACgYgfJ', 20, 'c7020fa97af61a02fc75e216d9baacaccaf069fd2499e2d38a51bb1a2253ed6e315092fc0761c904af55fb0ca8c793910b4d2ac9f9d0cf168926a7a57f631c2cjQGIybi6HW+PZTSY7irrmb4eJ+ioepq72ffgsL/pGc4=', 'đầy đủ nội thất', '', '', '', '', '10.773113', '106.669025');
INSERT INTO `posts` VALUES (75, 70, '5 Dương bá trạc, Phường 01, Quận 8, Thành phố Hồ Chí Minh', 'room', 7, 'CHO THUÊ PHÒNG TRỌ QUẬN 8', '7cb442591b7ad871483e67b36378e99b3de42d179e7ca020ae71aab7d79bd055647d786545279aff1902cb7e344791904710e8d703028c28e23a659fcc8efab5S7SWFVq5xySiXr7oqfksWyQZX8eC9JF/3xciLZBtgV4fiM3xKIcTn4UiZBBJWcVaw1wpI6694mzvMkOyrHDNgc9T7nYWTckgvudGuuhqBz34eYnrIZdWQh1go6UkP57WtLa4OU2ZJnJ2ukPuOxV/7fQcZtmb2u3JDgqVcJBa5A4rLFNtnrSzBaf46StmdWWwoAtkaSPEX2gLPJpVLqFb8Uo+GK/99D8Y3Prm525SsL8/GtLqjzpOxhQ7YEAOkM7BFi9IZpSyDtA8yYCe8EETMRUgtYYB3Tg3qKLUxAp3O9vG8yY4vB4a8GDmMW1CH1YJR5r5ufquyXBAVsciPLCCQKYG4ucQQSzE1OPH0J8kG/1gB60o+pxiK5L7AKU5bwuhdUHu7Hp4rrOPEst5blKUdjQP6aEuz7V74BfJov9SsQwKwbpC3OoYkZbpwuNUk6lQBa8WqRlbAVe7FBsEHIkLNOp7GZfWC9TYIDa2ssLsd9CGC0evysIJLXGpjgyQbThvVjS0meFqsar4771DnEse0+rwIqeyb4+hU0v9lPE7LHVoB36HB/I/lT1gcY/DwN/GNWhlZpe7PHHXG4TVNI3TxdcBtBxNlafE/rzlmCmEbnc=', 10, '906038682a4007d8e6329e93de15a893fe406159b23e1fdff18f3fa12c18644d8d9d9d99f7e194b52cfa4a1ff18008a45a37f2c7ca04c26406c0be0709946846Zb3RUQUhHF7SjFcXS1bJMl6zHcfrItu+TMTMVECQuYM=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\nsạch sẽ, thoáng mát', 'điện: 3k/kg\nnước: 100k/thnags', 'không có', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', '10.750295', '106.688079');
INSERT INTO `posts` VALUES (76, 70, '1 Dương Bá Trạc,  Phường 01,   Quận 8,   Thành phố Hồ Chí Minh', 'room', 7, 'CHO THUÊ PHÒNG TRỌ QUẬN 8', '4ce82624eaced81a8522a0bafa59b2bb36ee0f5c531d3379b81c5ebdd4ab62bb98a3682068497edec274eb3869650256846c6487077e3920e85b8bd5955ee6ebvj2xYHfXE8Rz48k+UiN8qN5PlNyVfaexZJYf3PKcSPOoukpEgAXXTLs9Ee92XWVPaQ67/0mq4pZJEI86PBCCR+oLOSlrdqyOLZaaloDLeAcLnbhDreXB4pZ48W61dwOB9B8Bzv0xqHUFlvbkKvmpfaGrAEQRqs0r2U8IE1REE7wJ+1+9+eU415UnO7Dnr8J5/3NjH/rtx5E+AJOZZOVhCmdEycpm4xj34ghp2Cu9ckoxQHUxIN7pZpGsYyTOYSUxhbAPChq+zF7/QK8YR01Mhw==', 10, 'd216334889d8f29bf4b4babd2c3535cb3385e807ba745f9ef353b1d93544112d3be3d893b004352a7862d69c48897e6974676486efe8c516aa558601cf107622YcWimSs0lYJMH+WmY5Mj/3huJ00U6kj++WjStLkYmd0=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\nsạch sẽ, thoáng mát', 'điện: 3k/kg\nnước: 100k/thnags', 'không có', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', '10.744892', '106.691097');
INSERT INTO `posts` VALUES (77, 70, '123, Phường Tân Hưng, Quận 7, Thành phố Hồ Chí Minh', 'room', 4, 'PHÒNG MỚI SẠCH SẼ, AN NINH, THOÁNG MÁT CHUNG CƯ LONG SƠN MẶT TIỀN HUỲNH TẤN PHÁT , QUẬN 7.', 'ba6c70df65367e68b70a905837a8a86a3c440ca5595aed151f93c317c8c3150fe4c28d5dd6ee91692fcd31d82209bd502d5121cf3f30f0ae57ceae164e7194d6wSxj8JYQivZ5R9BXuVS6xZdzVIYLunSYXDuUZMZSqbQR8Abyd6wgreBQc4jzHmmHRMSnlO4IfPSVs2RUqPMzXjBbQKWWJVnRgkUL6wZmfqRl+qBO5PTJy/151zVmxb/M1az7CnYnWysPAZTQqPaPn+7fbiXbQcwKfJ1wCqTZOw+z1axi0KrDN0x2c+DcOA8/np1jexaw6iCWzqxsYkPTeGKUIB3XA6f8b3VoWT3xLI5599YmtCKNvE8+5KVQDC5nVHX/+/tgMGO/YIPYfJlnBkV6MshUXyR8YVKhSwOVWZg=', 20, '5022db45bf86ab1adb3cd8f20b6db3575c6ce36e88ccc007d76d5b29f895d9a5ab35a99b54913c2a449832326b75c94346cf0863c5db1b918b1f753145a7d1bbMQvXvP3dAwQicVuTUXpVhGPRj6ncF/slYhqVwrXL4W8=', 'full nội thất: tủ lạnh, máy lạnh, máy giặt', '', '', '', '', '10.751651', '106.701657');

-- ----------------------------
-- Table structure for statusPost
-- ----------------------------
DROP TABLE IF EXISTS `statusPost`;
CREATE TABLE `statusPost`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `postId` int NOT NULL,
  `dateCreateAt` date NOT NULL,
  `dateExpired` date NOT NULL,
  `status` int NOT NULL,
  `check` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 84 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of statusPost
-- ----------------------------
INSERT INTO `statusPost` VALUES (35, 28, '2024-06-24', '2024-09-22', 0, 1);
INSERT INTO `statusPost` VALUES (36, 29, '2024-05-24', '2024-06-22', 0, 3);
INSERT INTO `statusPost` VALUES (37, 30, '2024-06-26', '2024-09-24', 0, 1);
INSERT INTO `statusPost` VALUES (38, 31, '2024-06-27', '2024-09-25', 0, 1);
INSERT INTO `statusPost` VALUES (39, 32, '2024-06-27', '2024-09-25', 0, 2);
INSERT INTO `statusPost` VALUES (40, 33, '2024-06-27', '2024-09-25', 0, 1);
INSERT INTO `statusPost` VALUES (46, 39, '2024-06-28', '2024-09-26', 0, 1);
INSERT INTO `statusPost` VALUES (47, 40, '2024-06-28', '2024-09-26', 0, 2);
INSERT INTO `statusPost` VALUES (48, 41, '2024-06-28', '2024-09-26', 0, 2);
INSERT INTO `statusPost` VALUES (49, 42, '2024-07-09', '2024-10-07', 0, 2);
INSERT INTO `statusPost` VALUES (50, 43, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (51, 44, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (52, 45, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (53, 46, '2024-05-09', '2024-08-07', 0, 1);
INSERT INTO `statusPost` VALUES (54, 47, '2024-05-09', '2024-08-07', 0, 1);
INSERT INTO `statusPost` VALUES (55, 48, '2024-07-09', '2024-10-07', 0, 1);
INSERT INTO `statusPost` VALUES (56, 49, '2024-07-09', '2024-10-07', 0, 1);
INSERT INTO `statusPost` VALUES (57, 50, '2024-07-09', '2024-10-07', 0, 1);
INSERT INTO `statusPost` VALUES (58, 51, '2024-07-09', '2024-10-07', 0, 1);
INSERT INTO `statusPost` VALUES (59, 52, '2024-07-09', '2024-10-07', 0, 1);
INSERT INTO `statusPost` VALUES (60, 53, '2024-07-09', '2024-10-07', 0, 1);
INSERT INTO `statusPost` VALUES (62, 55, '2024-07-09', '2024-10-07', 0, 1);
INSERT INTO `statusPost` VALUES (63, 56, '2024-07-09', '2024-10-07', 0, 1);
INSERT INTO `statusPost` VALUES (64, 57, '2024-07-09', '2024-10-07', 0, 1);
INSERT INTO `statusPost` VALUES (65, 58, '2024-07-09', '2024-10-07', 0, 1);
INSERT INTO `statusPost` VALUES (66, 59, '2024-07-09', '2024-10-07', 0, 1);
INSERT INTO `statusPost` VALUES (67, 60, '2024-07-09', '2024-10-07', 0, 1);
INSERT INTO `statusPost` VALUES (68, 61, '2024-07-09', '2024-10-07', 0, 1);
INSERT INTO `statusPost` VALUES (69, 62, '2024-07-09', '2024-10-07', 0, 1);
INSERT INTO `statusPost` VALUES (70, 63, '2024-07-09', '2024-10-07', 0, 1);
INSERT INTO `statusPost` VALUES (71, 64, '2024-07-11', '2024-10-09', 0, 1);
INSERT INTO `statusPost` VALUES (72, 65, '2024-07-11', '2024-10-09', 0, 1);
INSERT INTO `statusPost` VALUES (73, 66, '2024-07-11', '2024-10-09', 0, 1);
INSERT INTO `statusPost` VALUES (74, 67, '2024-07-11', '2024-10-09', 0, 1);
INSERT INTO `statusPost` VALUES (75, 68, '2024-07-11', '2024-10-09', 0, 1);
INSERT INTO `statusPost` VALUES (76, 69, '2024-07-11', '2024-10-09', 0, 1);
INSERT INTO `statusPost` VALUES (77, 70, '2024-07-11', '2024-10-09', 0, 1);
INSERT INTO `statusPost` VALUES (78, 71, '2024-07-12', '2024-10-10', 0, 1);
INSERT INTO `statusPost` VALUES (79, 72, '2024-07-12', '2024-10-10', 0, 1);
INSERT INTO `statusPost` VALUES (80, 73, '2024-07-13', '2024-10-11', 0, 1);
INSERT INTO `statusPost` VALUES (81, 74, '2024-07-13', '2024-10-11', 0, 1);
INSERT INTO `statusPost` VALUES (82, 75, '2024-07-16', '2024-10-14', 0, 1);
INSERT INTO `statusPost` VALUES (83, 76, '2024-07-16', '2024-10-14', 0, 1);

-- ----------------------------
-- Table structure for userAction
-- ----------------------------
DROP TABLE IF EXISTS `userAction`;
CREATE TABLE `userAction`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  `countAction` int NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 258 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of userAction
-- ----------------------------
INSERT INTO `userAction` VALUES (151, 70, 30, 10);
INSERT INTO `userAction` VALUES (152, 70, 39, 11);
INSERT INTO `userAction` VALUES (153, 70, 31, 10);
INSERT INTO `userAction` VALUES (154, 70, 40, 10);
INSERT INTO `userAction` VALUES (155, 71, 30, 10);
INSERT INTO `userAction` VALUES (156, 71, 61, 10);
INSERT INTO `userAction` VALUES (157, 71, 39, 10);
INSERT INTO `userAction` VALUES (158, 71, 31, 10);
INSERT INTO `userAction` VALUES (159, 72, 28, 10);
INSERT INTO `userAction` VALUES (160, 72, 30, 10);
INSERT INTO `userAction` VALUES (161, 72, 61, 10);
INSERT INTO `userAction` VALUES (162, 72, 39, 10);
INSERT INTO `userAction` VALUES (163, 73, 28, 10);
INSERT INTO `userAction` VALUES (164, 73, 29, 10);
INSERT INTO `userAction` VALUES (165, 73, 41, 10);
INSERT INTO `userAction` VALUES (166, 73, 50, 10);
INSERT INTO `userAction` VALUES (167, 74, 39, 10);
INSERT INTO `userAction` VALUES (168, 74, 41, 10);
INSERT INTO `userAction` VALUES (169, 74, 60, 10);
INSERT INTO `userAction` VALUES (170, 74, 61, 10);
INSERT INTO `userAction` VALUES (171, 75, 39, 10);
INSERT INTO `userAction` VALUES (172, 75, 29, 10);
INSERT INTO `userAction` VALUES (173, 75, 49, 10);
INSERT INTO `userAction` VALUES (174, 75, 59, 10);
INSERT INTO `userAction` VALUES (175, 76, 39, 10);
INSERT INTO `userAction` VALUES (176, 76, 61, 10);
INSERT INTO `userAction` VALUES (177, 76, 62, 10);
INSERT INTO `userAction` VALUES (178, 76, 60, 10);
INSERT INTO `userAction` VALUES (179, 77, 31, 10);
INSERT INTO `userAction` VALUES (180, 77, 32, 10);
INSERT INTO `userAction` VALUES (181, 77, 40, 10);
INSERT INTO `userAction` VALUES (182, 77, 41, 10);
INSERT INTO `userAction` VALUES (183, 78, 31, 10);
INSERT INTO `userAction` VALUES (184, 78, 39, 10);
INSERT INTO `userAction` VALUES (185, 78, 41, 10);
INSERT INTO `userAction` VALUES (186, 78, 42, 10);
INSERT INTO `userAction` VALUES (187, 79, 29, 10);
INSERT INTO `userAction` VALUES (188, 79, 50, 10);
INSERT INTO `userAction` VALUES (189, 79, 51, 10);
INSERT INTO `userAction` VALUES (190, 79, 28, 10);
INSERT INTO `userAction` VALUES (191, 80, 28, 10);
INSERT INTO `userAction` VALUES (192, 80, 29, 10);
INSERT INTO `userAction` VALUES (193, 80, 39, 10);
INSERT INTO `userAction` VALUES (194, 80, 40, 10);
INSERT INTO `userAction` VALUES (195, 81, 28, 10);
INSERT INTO `userAction` VALUES (196, 81, 41, 10);
INSERT INTO `userAction` VALUES (197, 81, 42, 10);
INSERT INTO `userAction` VALUES (198, 81, 51, 10);
INSERT INTO `userAction` VALUES (199, 82, 31, 10);
INSERT INTO `userAction` VALUES (200, 82, 28, 10);
INSERT INTO `userAction` VALUES (201, 82, 39, 10);
INSERT INTO `userAction` VALUES (202, 82, 40, 10);
INSERT INTO `userAction` VALUES (203, 83, 28, 10);
INSERT INTO `userAction` VALUES (204, 83, 29, 10);
INSERT INTO `userAction` VALUES (205, 83, 31, 10);
INSERT INTO `userAction` VALUES (206, 83, 30, 10);
INSERT INTO `userAction` VALUES (207, 84, 28, 10);
INSERT INTO `userAction` VALUES (208, 84, 49, 10);
INSERT INTO `userAction` VALUES (209, 84, 39, 10);
INSERT INTO `userAction` VALUES (210, 84, 59, 10);
INSERT INTO `userAction` VALUES (211, 85, 39, 10);
INSERT INTO `userAction` VALUES (212, 85, 63, 10);
INSERT INTO `userAction` VALUES (213, 85, 62, 10);
INSERT INTO `userAction` VALUES (214, 85, 28, 10);
INSERT INTO `userAction` VALUES (215, 87, 40, 10);
INSERT INTO `userAction` VALUES (216, 87, 39, 10);
INSERT INTO `userAction` VALUES (217, 87, 28, 10);
INSERT INTO `userAction` VALUES (218, 87, 59, 10);
INSERT INTO `userAction` VALUES (219, 88, 41, 10);
INSERT INTO `userAction` VALUES (220, 88, 40, 10);
INSERT INTO `userAction` VALUES (221, 88, 42, 10);
INSERT INTO `userAction` VALUES (222, 88, 28, 10);
INSERT INTO `userAction` VALUES (223, 89, 39, 10);
INSERT INTO `userAction` VALUES (224, 89, 31, 10);
INSERT INTO `userAction` VALUES (225, 89, 32, 10);
INSERT INTO `userAction` VALUES (226, 89, 28, 10);
INSERT INTO `userAction` VALUES (227, 90, 40, 10);
INSERT INTO `userAction` VALUES (228, 90, 39, 10);
INSERT INTO `userAction` VALUES (229, 90, 32, 10);
INSERT INTO `userAction` VALUES (230, 90, 28, 10);
INSERT INTO `userAction` VALUES (231, 91, 40, 10);
INSERT INTO `userAction` VALUES (232, 91, 39, 10);
INSERT INTO `userAction` VALUES (233, 91, 32, 10);
INSERT INTO `userAction` VALUES (234, 91, 39, 10);
INSERT INTO `userAction` VALUES (235, 92, 28, 10);
INSERT INTO `userAction` VALUES (236, 92, 32, 10);
INSERT INTO `userAction` VALUES (237, 92, 33, 10);
INSERT INTO `userAction` VALUES (238, 92, 39, 10);
INSERT INTO `userAction` VALUES (239, 93, 40, 10);
INSERT INTO `userAction` VALUES (240, 93, 32, 10);
INSERT INTO `userAction` VALUES (241, 93, 29, 10);
INSERT INTO `userAction` VALUES (242, 93, 63, 10);
INSERT INTO `userAction` VALUES (243, 94, 29, 10);
INSERT INTO `userAction` VALUES (244, 94, 32, 10);
INSERT INTO `userAction` VALUES (245, 94, 28, 10);
INSERT INTO `userAction` VALUES (246, 94, 59, 10);
INSERT INTO `userAction` VALUES (251, 70, 28, 4);
INSERT INTO `userAction` VALUES (252, 70, 42, 2);
INSERT INTO `userAction` VALUES (253, 70, 43, 1);
INSERT INTO `userAction` VALUES (254, 70, 48, 1);
INSERT INTO `userAction` VALUES (255, 70, 50, 1);
INSERT INTO `userAction` VALUES (256, 70, 44, 1);
INSERT INTO `userAction` VALUES (257, 70, 33, 1);

-- ----------------------------
-- Table structure for userLikes
-- ----------------------------
DROP TABLE IF EXISTS `userLikes`;
CREATE TABLE `userLikes`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 80 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of userLikes
-- ----------------------------
INSERT INTO `userLikes` VALUES (41, 71, 31);
INSERT INTO `userLikes` VALUES (42, 71, 39);
INSERT INTO `userLikes` VALUES (44, 71, 40);
INSERT INTO `userLikes` VALUES (52, 70, 39);
INSERT INTO `userLikes` VALUES (54, 70, 28);
INSERT INTO `userLikes` VALUES (56, 70, 65);
INSERT INTO `userLikes` VALUES (57, 70, 67);
INSERT INTO `userLikes` VALUES (58, 72, 45);
INSERT INTO `userLikes` VALUES (59, 72, 46);
INSERT INTO `userLikes` VALUES (60, 72, 71);
INSERT INTO `userLikes` VALUES (62, 73, 29);
INSERT INTO `userLikes` VALUES (63, 70, 68);
INSERT INTO `userLikes` VALUES (64, 74, 31);
INSERT INTO `userLikes` VALUES (65, 74, 73);
INSERT INTO `userLikes` VALUES (66, 74, 74);
INSERT INTO `userLikes` VALUES (67, 75, 50);
INSERT INTO `userLikes` VALUES (68, 75, 58);
INSERT INTO `userLikes` VALUES (69, 75, 69);
INSERT INTO `userLikes` VALUES (70, 75, 70);
INSERT INTO `userLikes` VALUES (71, 76, 28);
INSERT INTO `userLikes` VALUES (72, 77, 45);
INSERT INTO `userLikes` VALUES (73, 77, 46);
INSERT INTO `userLikes` VALUES (74, 78, 73);
INSERT INTO `userLikes` VALUES (75, 78, 74);
INSERT INTO `userLikes` VALUES (76, 79, 50);
INSERT INTO `userLikes` VALUES (77, 79, 58);
INSERT INTO `userLikes` VALUES (78, 79, 69);

-- ----------------------------
-- Table structure for userNotifications
-- ----------------------------
DROP TABLE IF EXISTS `userNotifications`;
CREATE TABLE `userNotifications`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  `message` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `isRead` tinyint(1) NULL DEFAULT 0,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 31 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of userNotifications
-- ----------------------------
INSERT INTO `userNotifications` VALUES (1, 71, 39, 'Thái Ngọc Phú, Bài viết CHO THUÊ NHÀ Ở CẨM LỆvừa được đăng', 0, '2024-07-09 09:44:04');
INSERT INTO `userNotifications` VALUES (2, 71, 40, 'Thái Ngọc Phú, Bài viết CHO THUÊ NHÀ Ở QUẬN 3vừa được đăng', 0, '2024-07-09 09:45:44');
INSERT INTO `userNotifications` VALUES (3, 71, 41, 'Thái Ngọc Phú, Bài viết CHO THUÊ MẶT BẰNG Ở QUẬN 7vừa được đăng', 0, '2024-07-09 09:54:44');
INSERT INTO `userNotifications` VALUES (9, 71, 32, 'Thái Ngọc Phú, Bài viết CHO THUÊ PHÒNG TRỌ Ở HUYỆN HOÀNG SAvừa được đăng', 0, '2024-07-09 09:29:02');
INSERT INTO `userNotifications` VALUES (10, 71, 33, 'Thái Ngọc Phú, Bài viết CHO THUÊ PHÒNG TRỌ Ở HUYỆN BÌNH CHÁNHvừa được đăng', 0, '2024-07-11 03:26:38');
INSERT INTO `userNotifications` VALUES (11, 71, 44, 'Thái Ngọc Phú, Bài viết CHO THUÊ MẶT BẰNG Ở CHÂU THÀNHvừa được đăng', 0, '2024-07-09 09:57:50');
INSERT INTO `userNotifications` VALUES (12, 73, 45, 'Metro Boomin, Bài viết CHO THUÊ PHÒNG Ở VŨNG TÀUvừa được đăng', 0, '2024-07-09 10:22:50');
INSERT INTO `userNotifications` VALUES (13, 73, 46, 'Metro Boomin, Bài viết CHO THUÊ PHÒNG Ở VŨNG TÀUvừa được đăng', 0, '2024-07-09 10:25:04');
INSERT INTO `userNotifications` VALUES (14, 73, 47, 'Metro Boomin, Bài viết CHO THUÊ CĂN HỘ Ở GÒ VẤPvừa được đăng', 0, '2024-07-09 10:28:09');
INSERT INTO `userNotifications` VALUES (15, 73, 48, 'Metro Boomin, Bài viết CHO THUÊ CĂN HỘ Ở MÊ LINHvừa được đăng', 0, '2024-07-09 10:33:25');
INSERT INTO `userNotifications` VALUES (16, 73, 49, 'Metro Boomin, Bài viết CHO THUÊ MẶT BẰNG Ở CHÂU THÀNHvừa được đăng', 0, '2024-07-09 10:36:19');
INSERT INTO `userNotifications` VALUES (17, 73, 50, 'Metro Boomin, Bài viết CHO THUÊ MẶT BẰNG Ở QUẬN 1vừa được đăng', 0, '2024-07-09 10:44:46');
INSERT INTO `userNotifications` VALUES (18, 74, 51, 'Justin Bieber, Bài viết CHO THUÊ PHÒNG Ở NGŨ HÀNH SƠNvừa được đăng', 0, '2024-07-09 10:52:11');
INSERT INTO `userNotifications` VALUES (19, 74, 52, 'Justin Bieber, Bài viết CHO THUÊ PHÒNG Ở SƠN  TRÀvừa được đăng', 0, '2024-07-09 10:56:01');
INSERT INTO `userNotifications` VALUES (20, 74, 53, 'Justin Bieber, Bài viết CHO THUÊ NHÀ Ở CẦU GIẤYvừa được đăng', 0, '2024-07-09 10:58:55');
INSERT INTO `userNotifications` VALUES (21, 74, 54, 'Justin Bieber, Bài viết CHO THUÊ NHÀ Ở ĐAN PHƯỢNGvừa được đăng', 0, '2024-07-09 11:01:38');
INSERT INTO `userNotifications` VALUES (22, 74, 55, 'Justin Bieber, Bài viết CHO THUÊ NHÀ Ở DƯƠNG QUANGvừa được đăng', 0, '2024-07-09 11:04:10');
INSERT INTO `userNotifications` VALUES (23, 74, 56, 'Justin Bieber, Bài viết CHO THUÊ MẶT BẰNG Ở CẨM LỆvừa được đăng', 0, '2024-07-09 11:06:06');
INSERT INTO `userNotifications` VALUES (24, 74, 57, 'Justin Bieber, Bài viết CHO THUÊ MẶT BẰNG Ở LIÊN HIỆPvừa được đăng', 0, '2024-07-09 11:07:47');
INSERT INTO `userNotifications` VALUES (25, 72, 58, 'Johny Deep, Bài viết CHO THUÊ MẶT BẰNG Ở QUẬN 1vừa được đăng', 0, '2024-07-09 11:16:05');
INSERT INTO `userNotifications` VALUES (26, 72, 59, 'Johny Deep, Bài viết CHO THUÊ MẶT BẰNG NHÀ BÈvừa được đăng', 0, '2024-07-09 11:17:40');
INSERT INTO `userNotifications` VALUES (27, 72, 60, 'Johny Deep, Bài viết CHO THUÊ PHÒNG Ở CAO ĐẠTvừa được đăng', 0, '2024-07-09 11:19:41');
INSERT INTO `userNotifications` VALUES (28, 72, 61, 'Johny Deep, Bài viết CHO THUÊ PHÒNG Ở PHÚ NHUẬNvừa được đăng', 0, '2024-07-09 11:21:39');
INSERT INTO `userNotifications` VALUES (29, 72, 62, 'Johny Deep, Bài viết CHO THUÊ NHÀ Ở QUẬN 6vừa được đăng', 0, '2024-07-11 03:31:04');
INSERT INTO `userNotifications` VALUES (30, 72, 63, 'Johny Deep, Bài viết CHO THUÊ CĂN HỘ Ở ĐÔNG ANHvừa được đăng', 0, '2024-07-09 11:25:46');

-- ----------------------------
-- Table structure for userToken
-- ----------------------------
DROP TABLE IF EXISTS `userToken`;
CREATE TABLE `userToken`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `token` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `create_at` datetime NOT NULL,
  `expires_at` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of userToken
-- ----------------------------
INSERT INTO `userToken` VALUES (2, 70, 'e44979878c8ca0af47779a83c29f89a9', '2024-06-19 17:51:26', '2024-06-19 17:56:26');
INSERT INTO `userToken` VALUES (3, 96, 'ee25290f534b3370356df1aea2be994e', '2024-08-18 20:28:23', '2024-08-18 20:33:23');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `email` varchar(191) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `password` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `phone` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `role` int NOT NULL,
  `avatar` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 97 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (70, 'Admin', 'tnp08032000@gmail.com', '927275d62db71f8aa89fe2b6fa8c93164b397f3e406b56536fd49ac330b15f331a64813da1a9de71592b7e4d0cfa5167b889618665cf1d42916509d1a8c0523eGaqcBK+NBxZvcDHUHyOwIjWiMIagUT2GhD609gLx5E8=', '306bd86ff9bed14c0fb1f0d7a7fb8e069382d524974f9f181f30741b95bd528f285452c8cc85740a6d4578c7774f30474ddb5343d78545bac582798b153ecfc2MFg+Uou+PqoKymQTqXi7j3LCcZN9jD8IKSlAI9uDlXg=', 1, 'ffc04c09c1750ad32c1aafa4da7c4593bf56410d4bb2f515d46cc10855d98eb49cca902eaa3f589bd7dbda5fd02004f4a06f7e378003d6a909cd1243b6ac3205hT8Jvl3pZw+BZnTf5ZJ/9E2GgsLeGrm2Z23n+q3gZ62gUijmo4q9r54CyGJOWk6oNkGaglFx1/SZr9c7pPNOYOvFHdajIPb/DcMmknZKjvxRVyKy7rQp4vb5VUCrEGx/keQJrSK3Pp8zWm2Spt12LkZjkgwZujyKin42bJl6pRg=');
INSERT INTO `users` VALUES (71, 'Thái Ngọc Phú', 'thaingocphu0803@gmail.com', 'e8c55ab5800370e215b97f0e52401568acf9293b10ef75a774f585ff210ffe84dafb41d7ad30bc20cbaf57dbc3d098ef8379d0eed3cffcbd2385774c544b7055Jl+7uLDNDOm7u7Hp4W+mEqSv3Btj2sHIMsKND35pFCE=', '16ee175feff21a211fb25f2c98e5d0d7e2ed6559472030b688d0e69695127076af9832d199a6efd4e8d2bf9c2343037d19a7edb12edd3065101e280447c4bd7dOPBpknWHqlTD/siiQjXzR58KZ9oE+uOC0WW5dNn1C9s=', 0, '7243334c346cbe02f22025541cbc2532ffb70e0184ffa875a8668dc8cf1c795d2064eb99fcbff68dafea7e02ed1da93a6735bbc1ac05443195f34b1da1c1110bHfw3IhphR/5zZFdV1Fx0lQaGUi0UNHDbePy4YiI9jEZGo/pkiTw5WfyX0BTxjLkdWD7/LxNRW0BFnz6xnFf2B+oOOqWtSmmGaN1KM4gEppFieoiH09TJQvxGvUqCTCUPoQo/EY8mvUGfdpT7LYeBUFHbNWsXzphPgzgNhHtIKdFL9LQvlN1zLslwiAmBexE+');
INSERT INTO `users` VALUES (72, 'Johny Deep', 'johny@gmail.com', 'c638ae3992d1617a1c4ddc35a0e6bdf137f029dc1bf315454aafdec4d1fd1fc351ac1b153c7cecdc805ea87bda63b0bf82e4ad4ced7e41eb822b65d0c2a3becaLJf6WrZNeiOwR3qfVvjE2ZX0AP4MuLpLTsl5bSYTzyc=', 'f6e57e47b02b37f6fcfd73e5e9af03da43e4cf7629859b239981e9e6767ca3c83ff525f0d0c9058660bd3b056f033c84bd195ccaaa5d4651c28d810c08d8a621HN6UmcvpYkZJQimu6otxS+94G6vf+AnFQ8WYuqnJdNM=', 0, NULL);
INSERT INTO `users` VALUES (73, 'Metro Boomin', 'metro@gmail.com', '845d9def1fed8abf6d2235f7688f8ab1eaddbd0536b6783937f8198a53ab75dab7745a9adca7a977a5b2342c9d10f5ec178863a67e50ac4c970e6b1e72f31639wNWgJc5M74VF/wKdzmXV7B1j4fXZgY60mtwZQIv94L4=', 'dd23b06c48715b62933bdd1dfc3175d59843aa73cef74e411e1934199a196eefdeb4e496d3dfb405960bcf089d2feba9a0165774482acfb57b681b8d65c3201bLzYUiNbvrVWrS6agfbDbpDLaPqtLCN3PH6+cgC5AwgM=', 0, NULL);
INSERT INTO `users` VALUES (74, 'Justin Bieber', 'justin@gmail.com', '149e4a2136ea183e60fcda2bb27a58682ff2153946d6ec952d081368b53980f6f80b6c7afd0e00ce0f6b685ad690c4f5cf7afb4bdf60ce271568a1bbf010c1f3mPTFaLjyA/4JbXhBmjk6lWQTqHJULB2XPMZbDfWIAhE=', 'efc91c8a5ddc982f0bab949fad5243217b5854860e4cb76c17bb846d6d499e4be05cba3a8a610ada887ddc1cc752c4ef82bc51ce7a7e2eebb004b2f4dac36768jtwGtTxea8Q6E71NAQq1W9paSfmXnyOKEih/OXRO1m8=', 0, NULL);
INSERT INTO `users` VALUES (75, 'Messi', 'messi@gmail.com', 'c15eb395bb3c7bca06f0106e1888ec0bfdff701e04e40f453a061c13cca03b0227fd1e2108dcaf66888ead235d8a948fac17c256e242315d44536acc94f33d83TM1acUL/ofTyH8d0Wf7D9YnO1CE6F2iKWxXOU+1sHFA=', '05ebefcd11b653506599b8fc7e0ba5963396baef9c1f097b90b25a34b180e444f828118bc851383a21623c11be514f3562b943affb26288289b45d0c2718d9b9CeW/Fr9qDLD6C7xl0sxb5OlDBFF+mzPmn/N9hafZocE=', 0, NULL);
INSERT INTO `users` VALUES (76, 'Ronaldo', 'ronaldo@gmail.com', '7c00525fa033c444f5bb720cc8f2e6e070f7e448d0bb2937a7b1423595af81e3bf1d25de451ad170dcb4fa52ff5063e6d8fe9c271d7ef0d69c9dfdfa4b9391eckDfFXweS/NegEL+xzEGGa6QKy1LD1qimD/Pdkkq4VBw=', '63425292e717de6f4d3866e9bbd69006580b924f0041dc39b4cffad04a36adeed4d15674a2a31f92bd8712f1d4d615dd55a4c0df01eba4ab950e99dbaf378119iWRoItoU5YQjAzkzkpoh669RyUBHPejmjd4u5cckqig=', 0, NULL);
INSERT INTO `users` VALUES (77, 'xavi', 'xavi@gmail.com', '9cc29c3d06413ff303d608b48b15424b3799d8489b1f4a260bbc2b5d1e619e8bd80e7290d1334bf40867460acbd6f41849e2090f6c817d8b9fed0bdbf8155d7640oOycBCLIwAQwpCJlvNspZ5BcUpPrA+d/Cw32SifIs=', '48526b2309f9c01fd800800301470fcc08478077846b506a63f40bcf18411cf77c81d988f973e1ba0e5862c68af250c51c5422d346d2252beb9a4c1c308d444cL1kAkQJAM9WRIwBc/3IsxA7r3NXT7uSu/SvvdDL0gSE=', 0, NULL);
INSERT INTO `users` VALUES (78, 'benzema', 'benzema@gmail.com', '11b49e96ef2b71112c1d73348b891f912cdf22394469f24da5749484fec0c354b1318984100d1b8c81c564b9ab09fe599df92d7186ede6f56cb15727e7ffdf66fhPFFeCbBrBh0Gsd3t3UW+RIOF/bY5RJJaszUCrEhUA=', '0bb429c25a2f6b3edfe41d8befa0bf356fad7949dc57c24c4e62d846be82dace6c33aed71dd37a20d1ff89285729335e522723354db9591cce1471b085cdf1d6vHzSyQu+XeRsjGq8J7WIB1nytNQda6IuU+ELx+HeEcc=', 0, NULL);
INSERT INTO `users` VALUES (79, 'torress', 'torress@gmail.com', 'd423184acd7578b02bb4d3916fdc41a8402b036ec89706bd8174edda72fbe767ed2641982561db18698c4e24333a315166cc00363746e73f7340ea09d5b8f6f49Ua9h2sYmmjmV0Sd0qDkiTuxxfABtrds6IEyzvrQPQo=', '28da61f3667d97bc8967c2d98712a738524db00722549e2a64ff19fb01e1cc11e591c7ecdd3a3b60ad3be5c1c3070c9a9650f1dd3f7f8041f96cd59164e1d059re7Fb9Ux+gqtpAzCITWtEAuIiBlTD7r088TDn6IJVNk=', 0, NULL);
INSERT INTO `users` VALUES (80, 'kaka', 'kaka@gmail.com', '7040da51100e9776fbe422a55a0a4cb8cf3dd791d9651814fe3ab60d57d3eb7e0ee6685913ecef10e846fac88022d33fc359307c4a4f79e054c1768a6e98aae8owS3UxgkuKLy88vZMfhb3lgZZ0qYrrjAPWbObhcksFo=', '46334c4fe16a04a01e3cf41e07d1d3ee7e472e1ef5d6db2f263bf2fc71d82d2c2d5eb246a339b8f889da8e3d1deb2dfe4f0f3b402e04c68de2f2d1faf0fd2355OOfPURw+3drP9sjdGfEjE7oaCXPNwsQ8vuYmkJDda1Q=', 0, NULL);
INSERT INTO `users` VALUES (81, 'theo', 'theo@gmail.com', '7f2feeb313c02663e5b8c5964a27a7030c48d6cbddfaf69b071d22b302c2fed5fcd1cc345718787020fe99fead7762e400c485c3ed8949cb9da737b8b45a10616owK9twvhHUZC4nXBhv6xUbvnMuJRO/q55NNpTF8k70=', '29e948fc3f0a0864cf461f17a536e1758582fb4e93b4c5187632c97619c6faa01fd5f9c9008a690fab9de6286d4bf8084ab391b1aae9ee20d3218561af07a3dcj+WDPlgy9KPK8fLucufnv0Q7Y16WnqQMB5C9kFkEASY=', 0, NULL);
INSERT INTO `users` VALUES (82, 'muller', 'muller@gmail.com', '1d739beca5c42b0cb6a00b619916810b02c13d81ada496cfcc9f8c4292a437e1093ec0036c1f5178485dc7982844211a2725f4154cb6140b6ce2bbb3895fe402DCy6IQYuDcQG5yc6z2E3SuIxBjTK1USzEKqmHI3/6sQ=', '47a87ba4c5cdf2f4972c645019f6ed4a5809cf78fe90f804fd21dcfc6d369e86d8ec2335221e271dcb403848effabffe07c86bdb3b3f746c91dba6e512948dbafoL+UOKMDBk7r9+ZrdlWCTp5FjumAF0XNwVGkor3xfs=', 0, NULL);
INSERT INTO `users` VALUES (83, 'yuki', 'yuki@gmail.com', 'd5fc81bad0a7effb8ffdc53d2e3730a77fc264d8ba2fcb54d69746fbf35037108a4a4ad9a46274140263ff88ec9d917659c0b9700bb946da92f956fcab0edffeFBhZ9LLrdrv0dwim9demHcnNg607fw0o1vqKH1y8o+k=', 'f8f0b872732736e526cbe9eb9730ccb82137a165d91e02c05005d6e9be2a9162f0b4e5ea5a93f2ee1edb3ca8006cc4333df9fc6f9c0062583110f9e83e1d1125qrxEAmNDua8dbJCKYB4Y7C24XursifNZVZh6c2dWzJo=', 0, NULL);
INSERT INTO `users` VALUES (84, 'conan', 'conan@gmail.com', 'f53236aa95f63dc161251f513b02c25f39cbbbe5e1df5274addf3af521babb99277e2634dcb57078e04a96b04f405dafe3f82d6a1e9c3c877e68c3a8f74263beaCZS49U+kfEWIy4PXBmiKCLV0394aT6YLK98gNII1Y0=', '4a5cebd5ab2da861263a2b9e91bbdf7f874eebb4fd350bb5ae16d3e7bb9f12653465c0d3e46ce1ea700a71ae7402a2eb093351f45e04b250aeef65bb79dc7449ixZvyg9ZbXlpiMM95TbWorRMGI69Ky8ZEa6WwtFx//8=', 0, NULL);
INSERT INTO `users` VALUES (85, 'nike', 'nike@gmail.com', '5d72efa0b1d0fcd5cd7c69216b0020408cd4a7b3e98f41cc97f96a58fa81520093a0feef4bb84d27e50b10d332488d7df8ffb0b45e393b76a9969989cd5047e27+fCjinb9UnK0ccgXgUeeLbMjOIEM48tC9vKfJ4i7qA=', 'b90b5587e741c66dd8b89dafbd71cc5ca19397ad451f316dc5df51803675798c05eb520a68419886aef11c13974b1f4723162cb0f2954d7ed01a82847dedcef56ygQwzEaiynPbiDyMcT3fLw+4OXYAd91unUYldJj1co=', 0, NULL);
INSERT INTO `users` VALUES (86, 'mike', 'mike@gmail.com', '11d40c2de4c1cc548cf99f8d7c47db8c98ec7b2aad331b3731870917dbf531de3318e4e322eb950f9fbbfdc578aacbc5ee31fc26d20afb6aa1264e20e44da847lGR5dTyMxocrXJwGcLFpzVQwUoBNeQAqdStASnU2Mpk=', '15c01e219fd8ef3c98cdee705566bac32bd68f9d35099897f6dd095c3dbef4331ca55256519cc4ed26754d3709130a446e299d0a1e5495bc3067bd6c1867bd87Z1Haz+4dRto6bf17zHD5T9Z1hrRUeee3ReKT/msbgz4=', 0, NULL);
INSERT INTO `users` VALUES (87, 'puma', 'puma@gmail.com', '5e3f5abd96dd5173445efc2261ac063f05dc11193644c30da045634d08e718d4646964d5d3f6eb479b8cb6c316e6730436b3202b14b0003e0696659d6b917bdaizYY27+eKgpRic7ioy/cMjGJDxDxJQWgNqQwpJkeoaw=', '72dc8a46d492c655b42521002bd929d9ca02baa6720f3ce18efe3a49510d69340cca3bb0aef528b771be2c91758a8878366a0b3e2bd9c476ddbf6f2f7774dff7JNYZxU12Ug4H6nVdh4Udxis7NCc1Sp8q22oTPh9O9hQ=', 0, NULL);
INSERT INTO `users` VALUES (88, 'poca', 'poca@gmail.com', '52b9a7a749873260fb0da150033445ec58c5256351e8146fa5193dfd5f0e6176de4d87a7511eec623b80a2ebbf873ef122df397a9fa39089e7f95a6ed565e8e6SrucsirU/tu9uf902kUkhYAhZ2ThRe+rn7haKfD3FfM=', 'd8b66879e34300384c9763959a2fcab03cb579e3e09817c4f5c5494b91ceedfc5732f86efe5a3f386df67bd7a02ffcfd89ded15b882f4c90d946c806c38bd0f53H3a8/Zny83KSLc3nGF2lTACopYSkecun+wIP2jIQJk=', 0, NULL);
INSERT INTO `users` VALUES (89, 'pessi', 'pessi@gmail.com', '8c8ae84d109025959b392f1e7192c0bb2706a16d3237babf8eb2553ffe5f9b0a2107bb4c11ba6367f4b6583f4d511523fb9816ae84f7374b750eb07b028f1bf6XZ+DnhI1Y+7/ET4TJxNGNmF+gSURjA4ErrGR7gu3Ui0=', 'b26f27b2915f41774971a12b84b4199b41ac448009d217b9042d5c816fbc30c684c884a1e0aa0a30b5e8e56d83df9615aa07c0bdf971350abe0926264fcd8f76JOlKBxdzhmAZZKuprbxJPSAT3z2ADpN1nFhGIhuRPvE=', 0, NULL);
INSERT INTO `users` VALUES (90, 'neymar', 'neymar@gmail.com', '4ff5555f7bbbdf829ccfc5036f51aabf83853e60d352058571cd08692db1481f9f0c8eb902cf284a722540396596a2b4336b2feee321bf09c024d5791b1c03f0S1UdLlhAw6pXtv4i+aQPfdzBtKC5xtsfF57CIg4SE9o=', 'e851fe76f9e041c545eb788024d8f9b7dd2f15abef64b5ae27c181bab03e20d0cedffa7f738f397621858601233b096055fa982ee953bdf34403f650714cc2108dTCfkgm0TxuC0YpVIoOBlcrBtjON+6uZSYLo2CNItg=', 0, NULL);
INSERT INTO `users` VALUES (91, 'lukaku', 'lukaku@gmail.com', '5af020a99464e675207b13cae4c2c4ee1537afe0bc4c6e3b2a55ebfd13ae61eb74f5cbb277a241b67fe2e2306a579f5bf0c2c86ffc83f0d825b9e845476d42c1+yr368QrFjoWkUXREuxV0W1ffmUC1A65OmK8zWn1jgc=', 'c5b37bfd730182499f6b1a4911bc8fcfe95c6917a9854ee854bd652ec47c11c829202136390b9a3c70c0fb4c9908df518b20666382e01d9e37379128a161a15fS3A03WCCAGsgE7T2/O4NcBSCoga5WN6CV1lYoRUZIp4=', 0, NULL);
INSERT INTO `users` VALUES (92, 'shiba', 'shiba@gmail.com', '00fbb8c8bb762fc40dc08ce37b3a8523b8bad455c110b9ad6ff04e8d0801c5179a3a8f10ed14f00eb2637489d82b937846c332467f6f78149b7691dbe3f70b82RFe4PGBHmbVtDXkoYZ43U1ZO9Tm/H0Rvs5M39Xzas7U=', 'ee3502af85fa070c69ca3a51e39a6f1533e28ea00d55973e4c6f5236e0c692a4513c161716ed6ad38b4cd796762a0cc8a3e323535efce36c9831adaca7f3e52aQUeZ55tRTDMovW7ExnNYbz7WAEPe9cGlD3Gg9aQey5A=', 0, NULL);
INSERT INTO `users` VALUES (93, 'rudy', 'rudy@gmail.com', '69669a01b8901041ce02b66135ab8745810573d3bdde8a6028b7ed1b6cb2281fd366a73e26a68337c49d0ef28d71f5f9e9e0bb0bbeca31f27ec0caadea1f8536hyIyEjEc9/GjmUviF1Ue8jtijQSXhitvJM2GAsuG3B8=', 'f3d0c1baec494297d24520815d411b2c805babf3f0f04fa62d3b03c42acdcd096521040b1bc2d17c85095b59f89d827c6567d377f01abe48a54716ae2f6f4dacnMFmSCBfnJeYcX648N9Ruqq+SuZvpoOM0ORQriGTkhA=', 0, NULL);
INSERT INTO `users` VALUES (94, 'silva', 'silva@gmail.com', '7787ecdd93b87a62c91deeb9e308bf477e6afd5fc385b0275c25e7884ba709fbf3afe319ceee7a9618a1f392585ba90cf3fc381b28d9b24d8d0b8817e58dad1cT3FutJM4xgZBUNl2hF/MBZcbAcp+FDJrv4rmZRmpbCw=', '32e36b49060f1d664d6f2cbcfb453bbc1206562f067771e97f8944bd97b94ebc3d950430a81cebc291468861c4df14dac42925ab21e9b10a324484a65b07e23cZ+mJGf5y/PdFM5awQMv4nNSFW59KHljOWhDjZRiyowY=', 0, NULL);
INSERT INTO `users` VALUES (95, 'vini', 'vini@gmail.com', '56eafb1a897b63fac48108513a684de9be872021e27c73b0a4634e6ab0f723f265e1d5ec2164c0aa9c672b0e9cd03466999eebb610dee2a36c7e5e48a6a816d0FEZKRB35TE/d8js9EkT3CsH2Vvh66nHmslKmcgHEsHI=', '12defba9c4d99f0b7d54bb8c0520daeebbe8fdcdaa7950b5c5d59a427f17364953b7575cb6a09bfe923fd2f54d3ec7ff68c5a6d1931ada1d980285cddd555721T31KgWpfUtA9jrHPnahExbH8KsugdAZMZHmDZIZhFfc=', 0, NULL);
INSERT INTO `users` VALUES (96, 'anhnguyen1312', 'alnguyen00000@gmail.com', '3a08b0ec11ed99bbbd86ff9d3b8ea51aeccac5f328a9820fbcd3e7da592e6cb97156c9d8c72abe9ec9817f5bed8df02a5c805d33dcbf49149095c10f49153978C68pIzUVbJW20x79l1evu+uMdjsKHO7eFrplAvS8Q24=', '8084080aa4f5c41d2f1959b34e2e7027fe7df4f89c9ddad0cba2812cc7644643f87c0cab2232efa1f60d8da6ce2c6f188aa6cbbfe8b7f65d02d0e93da4e60a2bqXgcPa4iCteZIsxR4lENiLDz9rqbXxPmnOORwC1JjN4=', 0, NULL);

SET FOREIGN_KEY_CHECKS = 1;
