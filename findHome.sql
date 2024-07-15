/*
 Navicat Premium Data Transfer

 Source Server         : findHome
 Source Server Type    : MySQL
 Source Server Version : 50744 (5.7.44)
 Source Host           : localhost:3307
 Source Schema         : findHome

 Target Server Type    : MySQL
 Target Server Version : 50744 (5.7.44)
 File Encoding         : 65001

 Date: 11/07/2024 15:03:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for adminNotifications
-- ----------------------------
DROP TABLE IF EXISTS `adminNotifications`;
CREATE TABLE `adminNotifications`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `adminId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `message` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `isRead` tinyint(1) NULL DEFAULT 0,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of adminNotifications
-- ----------------------------
INSERT INTO `adminNotifications` VALUES (4, 70, 71, 39, 'Admin, Bài đăng CHO THUÊ NHÀ Ở CẨM LỆ vừa được duyệt', 0, '2024-07-01 14:03:46');
INSERT INTO `adminNotifications` VALUES (5, 70, 71, 40, 'Admin, Bài đăng CHO THUÊ NHÀ Ở QUẬN 77777 vừa được duyệt', 0, '2024-07-01 14:04:07');
INSERT INTO `adminNotifications` VALUES (6, 70, 71, 41, 'Admin, Bài đăng CHO THUÊ NHÀ Ở QUẬN 7 vừa được duyệt', 0, '2024-07-01 14:04:25');

-- ----------------------------
-- Table structure for countLikes
-- ----------------------------
DROP TABLE IF EXISTS `countLikes`;
CREATE TABLE `countLikes`  (
  `postId` int(11) NOT NULL,
  `likes` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`postId`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of countLikes
-- ----------------------------
INSERT INTO `countLikes` VALUES (30, 0);
INSERT INTO `countLikes` VALUES (31, 1);
INSERT INTO `countLikes` VALUES (39, 2);
INSERT INTO `countLikes` VALUES (40, 1);

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
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
) ENGINE = InnoDB AUTO_INCREMENT = 64 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES (28, 70, '    803/97 Huỳnh Tấn Phát,                Phường Tân Phong,                Quận 7,                Thành phố Hồ Chí Minh', 'room', 3, 'CHO THUÊ PHÒNG TRỌ QUẬN 7', '97c6418e27369f822a56716904420baf82e197a159a721a721069a2bfff685c2ae85b7c884fc70233ba2ce1e2e4a8b4020f5070165231b37e85a627e8c929c32AvspPoXhoMLxZYmT/Qmf+U61x5DlfMZ4vBPbDUaDfWy1QVX5X1ASXNHcALjUUkBbaDLy7IGbiYGED8sHtum5/FWvE0O20Kv/4Q0hk6E/YNFSZuszdeVVl1L9rgw8i8qAdGcVzWDf71SUjfKiYckevGR8eF/HCvpLribSlqw/lQR+5X8+nNxumWs2+HqL/K8NVLUn7Gf/VYRtbVJbZAjvvxqlJIigx0IexM2cYGIwdTK2IV+XCoH/z+Az4VA/KZeRhR+xmCENh+UAMadyPoV7xA==', 5, 'c54136a68fe8a2ee309d5875b3fdd0341cadb62bee54b3451d3f7fc297a6b7d76527f2e968173542f27dd50a23f365e692e1d9f586c78ff932775e8fa92eb2e7y42uLV9VPkzxxFGS8m76PaNFuS9AK27q/nGyyE/4HXA=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\ncó ban công rộng', 'điện: 3k/kg\nnước: 100k/thnags', 'ra vào nhớ đóng cổng', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', '0', '0');
INSERT INTO `posts` VALUES (29, 70, '      1 Dương Bá Trạc,            Phường 01,            Quận 8,            Thành phố Hồ Chí Minh', 'room', 7, 'CHO THUÊ PHÒNG TRỌ QUẬN 8', 'dd127174236656761058bb900cd7efea6a5388a3ab6e331502318707ad596d5f79a5467e5b8dae5a2d3b5657ec61603fc8bc76eb28a333336f42c110b16b568d25w6drc41Ac1mffqQGHyzTtnXWpxVLnILCX9Z6darpvi7pGEUjVrK4qLKeuo48aK8fVYEuge2t0SWxba23CtYFqE4sw2+dmKmnEYORXukMOD6lPAMOb7hofWCVtaFVLDqbHy0NH/JSDNnSbSFViM2oMobCRa/TSVpGrWBvprUzR+3rfNK9QYtTjV7f8l2vnb3mJ5MdWc7w5vv0mNKAjSZNa+drxWv0Ngq7rXUgDaWPkd90ndNerJRP6v/NPZewzyATweoFn6qFe2svQz0AX7EQ==', 10, '1fcf783d89570461e1e265f11ddbf97f1689a5acb9d8191815c3ceb61784df4ad210386cd3e09c28b6d9ac982979fdb9bb318ee15ce7bc92a1e58c1f5b1cb827ZK+Pr9GISMn9OvuN3NfiBB8pARfxIaoEUlM/Jn+//vc=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\nsạch sẽ, thoáng mát', 'điện: 3k/kg\nnước: 100k/thnags', 'không có', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', '0', '0');
INSERT INTO `posts` VALUES (30, 70, '    1 Lý Tự Trọng,          Phường Bến Thành,          Quận 1,          Thành phố Hồ Chí Minh', 'apartment', 15, 'CHO THUÊ CĂN HỘ Ở QUẬN 1', 'ca2fa227c8d878d44263e67158a55b9d38ce815d8939897b05eb848e11f01993c87b30874982feb5344a7239e168cb84e5ea231bf2721b2c2896dbc4032ecfadqiXGK6fqkXe6JYlsGdTlnRpqLURWik6ZzLG51zVFmk66UJrGuJhpNK4iggy5uLrDcTzm13T9ej7I19+42rDlUoMFWcX3U/40tKAe+mfNMp4nN7nwW+Bz3EAJ5wXWT+Q6MmtZK2WEQLVqYNRO2+j/WO40R5xfiPpN1fbK21OCjjhCgHTBwQ6Z+HGZOeV9Jvvd8tYnUYBu7VE1pFe7R7ygXsjEyaCzXQLlYusUx6mTvgVG0moDwA8oNUD0IC8sHZOOQy5EleiqTYi5mKT6TtnHzQ==', 20, 'cc68bb564d6db59593cb7f84d4328dec4c9d5dd630014c14444b0e672fc174329073194f08586417a50a0350f50d193bc1f3f757723d0256902cd61bf3e726d9pEQrGyHix6mdUj48586wxwDQ7Do0o8LQ/v6b5yZzRxI=', 'tủ lạnh, máy lạnh, máy giặc', 'có ban công\ncó phòng khách\n2 toilet', 'điện : 3k3, nước 100k/người, wifi : 70k', 'giữ gìn vệ sinh chung', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', '0', '0');
INSERT INTO `posts` VALUES (31, 70, '  1 Trần Bình Trọng,    Phường 01,    Quận 10,    Thành phố Hồ Chí Minh', 'apartment', 20, 'CHO THUÊ CĂN HỘ Ở MÊ LINH', 'f0589fcb8bcc692eb4995ee59b6185357877a4805d09995db72451d15fef7dee195fd64d2f806fd019ad2a81fe3fa31f90571958d3b47c6db07ae77e54d442bdEUhX3/uQinBmmxyWJG4Z1wxX+PCvoHHHXA4RofDgMpGhbg0/ZvPGfy2uc5BUf4B2Vnn75MfBtaxvcIzZSud8/nJHLZKH3G/EVevZuORHq79w1WyP9NmeVIRN5NPs5BX7h04EaImDARAHbnVVjn7akAgCySWP6n+aCFCmuQxdbXzHxIRlk3rxAZr1al50exBqMhaHbGAKaODvnECNGTBb1A3KHcg3W07wpQxunthNCh+yk+0CePx0pCrtSeKJFoWy741MAcdhjrabM7jP3umpPA==', 50, '39bf812d3441b1d6b7c0045336bfc3f4f89fd9d7331fca5f075da31ac3272300fa1a8f4fda349b51f51f3facf5680151b237c14e097b67ae233a6026a9524429N5DMjfpi8fxPTrB9vkXWMXqMJ0PqYTQLa9E8VDJpKyA=', 'ban công, máy điều hòa', 'đầy đủ tiện nghi\ncó hồ bơi\ncó vườn cỏ tự nhiên', 'cắt cỏ: 500k/tháng', 'tiền đổ rác tính theo tuần: 50k/tuần', 'CGV, MINISTOP', '0', '0');
INSERT INTO `posts` VALUES (32, 71, '   1 Yên Bái,     Huyện Hoàng Sa,    Thành phố Đà Nẵng', 'room', 5, 'CHO THUÊ PHÒNG TRỌ Ở HUYỆN HOÀNG SA', '2a4bc4f98fbb30e6496c40c7bcda889f7c477aa30ae75abf3ef19c35682d72bd2cd689870e95ac3cc5a68c8540fd50b2af05b57b808ae4787c2fc00cb33d12f5swN5P8GB7P9Acec3UYpibb2vPwisV2CYdkAd4Th5svc770xPqJoAeziWhoemw/apTaorpgf4ZNa7EjwgJ76GTew9i3BE5E+61jiu4Zq6ZWsMG/9r27ICr+F7L/xlpEXKapJu+238GmUzwjp4tTdvKdf6gIRi40115zcWIcsZS2zYCUMJpqFEur2TVgBFSn9COyY+J3lAbSG8m+O8gTQ9KON83eAHQKDoSRFzfLvhzTtcPVldIdwQEsFTQ/7oqnA1iVhvXH/LqASiMHIsqFkv2w==', 5, 'd1629ab370092f0fe302be93bcdf196627bc8c10d65c07be2b4433a7b3539145a7ee8125519d7747f4fe9fc9fff730c7d592a6a7d981f2a3a2db5c87b1da5d1aTrmU/0eZXMAL/rkmklJJ2J/PsAgsXm+V/QlkExlyZq4=', 'ban công, máy điều hòa', 'rộng rại, đầy đủ tiện nghi\ngần chợ', 'điện 2k/kg', 'không có', 'circle K, lotte mart', '10.710999', '106.704449');
INSERT INTO `posts` VALUES (33, 71, '    Xã Bình Hưng,    Huyện Bình Chánh,    Thành phố Hồ Chí Minh', 'room', 4, 'CHO THUÊ PHÒNG TRỌ Ở HUYỆN BÌNH CHÁNH', '309f64a20daabe73ecd42f5e8cf17a8b47a3cad29f202f638be08bf1a0d0b940b7928583ca8588843db0a08678c87bb3b11431d33f2f61b81631ce4695b6a3ef04e2WfZ+hMIsHBgqRAHVZi0WG/zwQTnTl3cs1PsogUMPG47dgQoZbLKTR6RUBOfQw209ZSp2bI75wgjTYr9MfJ14WuQKf1uKHCRImFCLkdh0H5Jnz5DbopI/ds4bnYA+3YssSWaa5IJROBIK2QpaZ4DFwoMTLZ+NHhhX4en8M7MIDMpCgkQVsqb6sLZdSmNPH4B3BR9tK22kzig/bgFy7Ar0yN09wCk5jtrveXVe9BY4sSlz0oGRMpY3yfuVW3sGEQ5w1h1dpH4Ap1xyjGa9ag==', 6, 'c0637a58978c10242b04aebfb2fbbbaa510a68a54a4df6e8def0b000a7be1e77abdcc2a671b2c211839410a8e3517b5bfb36d18ffc36e272bd2552102743d0c04KUTmbHfMabwZ2Mllcm/KWfXZpZ3WM46GviChBQcI7A=', 'ban công, máy điều hòa', 'có toilet, tủ lạnh, máy giặc riêng', 'cắt cỏ: 500k/tháng', 'không có', 'Aeon, nhà sách', '0', '0');
INSERT INTO `posts` VALUES (39, 71, '   số 2,      Phường Hòa Phát,      Quận Cẩm Lệ,      Thành phố Đà Nẵng', 'apartment', 20, 'CHO THUÊ NHÀ Ở CẨM LỆ', 'efc6058dcd3fd89a42454e4d7a58e654640b2cbb29a74d7ed8bfe9c24f78d6d3d97949026af01c5c982f28b368df1ae390ea569345a0cb62ced8ef301a360a23t6vBFsc0yyOu3k7G6P6tMEgdTXkc8k24R7iJIYjOvQBX4+LnoSOmLqskegpdcwqV5WtYZeFkYe4S7kjwlIb9uQWSXEkv9Kg7HU3qlQDLkfRaqt83fUYUVPIFll0oRsQU2qanaygIshcYstzqlIrxXOD5fzZ2EA/wBj57A5MtGA5rKlJqHDTmZU/nN66ZUQm84cTxqNcxw32WKVF1dVBRaRhKEplHmt0b2acwr5bRwkH/VxM7VE1MzgG0au3JmOXhr+xW9Eh9ChzVg7swOM0igA==', 70, '41e5cf2d42392fdcbed1be9bfedfda937dd05020c994ae9f2e3e644191284decff768a947eb6d201ac5813500464353859aff69d7a17564ca96338a6cb3e6f3cKH4UBOlMhF4Wfyflls9d6AahRRHTTNoQYw0FyvgSlLQ=', 'ban công, máy điều hòa', 'rộng rãi, thoáng mát\ngần chợ, gần công viên', 'cắt cỏ: 500k/tháng', 'không có', 'circle K, lotte mart', '0', '0');
INSERT INTO `posts` VALUES (40, 71, '  1990 Cách Mạng Tháng 8,    Phường 03,    Quận 3,    Thành phố Hồ Chí Minh', 'apartment', 15, 'CHO THUÊ NHÀ Ở QUẬN 3', 'c491695665fc78c6b5bd5d1c0597e927a6ef80971970780a2d9d8846abeaa52f7b567336496f5139fb7800680a5c261727d4b55302a761b4f6fe2356e5615e93jN4AQ3iLGAFqQQ3js6I3EbkuhcOneGDrftR+i7DObAXwMchI+ww2p+AzjXeYN/NO4qut7deQZSjulgyg4BrdI3FS6ki+BTjerhfss75wDNq4kk1iu5WETqjhjkZauB2KSH4+30le6okLO/CjQ3hh7/PanE2diiLLOvQGI38OOqpD9vVkjckUzElgjCEn2nm/s1jt1hS6Mcdg1M2QIDcZ3rUWzRvOb1p7Bn4y+sL3QLTjqMEuLOSn1+Xw856xT5r1kJ8dYLHI6OXJI8kEMVPcUw==', 30, '2645b137c23e86ec47237a8b6047c1bbeb8048e3cfe534dc3630ae0bc5e24d525faf60a247265770dc606009e763e56c03e7de0b2ff21f4475d98715f2ca995frFuiMbgHNR0jv61ayBYr4PIkr4n+a1bbliRGn3twAYY=', 'ban công, máy điều hòa', 'rộng rãi, thoáng mát\ngần chợ, gần công viên', 'cắt cỏ: 500k/tháng', 'không có', 'circle K, lotte mart', '0', '0');
INSERT INTO `posts` VALUES (41, 71, '  2 Phạm Hữu lầu,        Phường Phú Mỹ,        Quận 7,        Thành phố Hồ Chí Minh', 'premises', 50, 'CHO THUÊ MẶT BẰNG Ở QUẬN 7', 'f89e0f08be1a30c2c183c1992c38760e2f5f98925649a8e2d4a34ed22fbab5ac09767cad1743debc4699bcf6bc488eeccb169085c3df5091b331a4fd3bf0480buc8VXAyjNqNbZn6W/UzAx2jV1laOifr7cz6aL1rtkf5e/qxbcop6Usv0WkB/peY1GQp+5wAiv9nO1kU0bYbAdPbX9+D4kOlZSeTTVHTtc2/m3pU6c9UVgcXxNob5GalGSr+QubmNMFFLz3W+1QRDWw==', 150, 'a39f0dfc7be4cb1030498e75efb96b57f3fd1a6f95eea9eaa3f002ade21c7a70d3e925fc2748f03e0841f03a6605e9f0b7fa033a2c8126bf0a248d1a191e6cf5MArfgdlfpZjmcsCWdLYssspDt6f1oeOo54ho2D4+n30=', '', '', '', 'không có', '', '0', '0');
INSERT INTO `posts` VALUES (42, 70, '  1 Kiên Hưng,    Phường Hà Cầu,    Quận Hà Đông,    Thành phố Hà Nội', 'premises', 20, 'CHO THUÊ MẶT BẰNG', 'da54b4688521da4f969fffec56d00bd0170411754f81bc7391bbd3993804e58e92b4087f69e8eb4dd4d4aa7b1f1de2d70b65083273a8abe09383635e96b383f0gvYvMFxnAf2Bc/15lbuUvYLiok/y+oVQf6yNA3b+2cgyPcRHYAkPDhfqTlCgmkKcDea14xwoPLpz78nBimSbc66vXOhSHoU97P1vB7WoKSWET6+wORg32EGX4pkIvsA3oCTaO2aVJ++itdLpxPcOAw==', 30, '14055ee35569a2af40e9f4f3fa73f4246cf69683bfee83632c3503afd0761bea06cba265f459858db779dd44065ce904a92109ee8b4cd17e1d8b28338e27d595gVBNMhLYGN3TvQB8CqDIjrObXQ25gTY4J7oV+XLFgok=', '', '', '', '', 'gần khu dân cư, trường học', '0', '0');
INSERT INTO `posts` VALUES (43, 70, '  1 Lâm Tiên,    Thị trấn Đông Anh,    Huyện Đông Anh,    Thành phố Hà Nội', 'premises', 50, 'CHO THUÊ MẶT BẰNG Ở ĐÔNG ANH', 'a6bc2a3535eac1c4531bc0690f4d5044e748634b773dcdb49586cd43bc63cc21f70dd2592150b4596d473b39ed4b1e049cfb9e3d210ae9d4fb1a09c97870e3eeZfbar2Dcje+xqCLw/CcEuv7UD2qL04IX2fyoNr1m2Rn84CnxoVjHh9zInKa5MAi8tcqwVY5oYLKdJdlqPogi79xu5vZh6TwZMayfWHZh5WgfaZpcWbxiRxV8Wwx6Im25CI1bdjhaM2sQdr06YEdAEw==', 100, '5aa82d51743c84ee95262421d580377866fbe4d685b6078e79cd864c8e35a997ea94dc4b892cb2819ed19636a56a8c0bae1501223ae1eaaa34073d591f9cc8f1/bERlNR6Zguq0F6rKwBG5m/PgpWBSR6gJkveheqebpI=', '', '', '', '', 'gần ngã 4, gần sân bay', '0', '0');
INSERT INTO `posts` VALUES (44, 71, '  1 Nguyễn Thiện Thuật,    Xã An Hòa,    Huyện Châu Thành,    Tỉnh An Giang', 'premises', 20, 'CHO THUÊ MẶT BẰNG Ở CHÂU THÀNH', 'c7f07d4e072efdb87ad4c11125796bb51de9a937e5890d2bd22af59c3d8c8d83245c4d0f0373ece427e769dc4d9bac4bfdd799cea97912b2e503a76052f0a62en2Hj82V7fO5XVo2M8dnoffosBEOsV95N87wDDd8LdlmlL0d9HSqd9+SgVMrHSp8C9gG9ZAfor59s26uv+Vvgmbk1E4OT+mfoBXtt0wX4HqBCILnxbMwgjjtJQVp4GXCQqjhqKxXkYgOw8wjcGrUBGg==', 40, 'e3f8b86bb9e7068bffe187b77244d8fddd1d5af3880acc259caebf35a1710f19be70e7d9f459a76eef44503440b5ce0c47829a6ed8afdccd517d0e5480106f7dAJs47goVwYy/LEKrZXpBN6gVZm4K62mjTd7vPqnzt8I=', '', '', '', '', '', '0', '0');
INSERT INTO `posts` VALUES (45, 73, '  1 Lê Lợi,    Phường 1,    Thành phố Vũng Tàu,    Tỉnh Bà Rịa - Vũng Tàu', 'room', 15, 'CHO THUÊ PHÒNG Ở VŨNG TÀU', '8047da4c55637424bb8dc4726ecd1f9c5d1b993761f1a2fa96f890e002fe75d528c15beb826ebd248ea2ad2a321b9adcaab45ad0880f8704ec344b76c5f016c3vzQX7vAqi0+zMtAAORireHkpFanBP0l/E8Ld0valMdJ5Iys7a7BTfWGMWQ8mn+2MjTwib2xBGPlPMw8gFdreW4v2ykXTUIkzaeR6hKn5dU8oIkqKQ5wDJuUt7L/Ch7HFzVa04b9UeuLkdFW/lY5cMMdGlXHYethPYXTL8w6zyy8CP46VkmoVv6PWVdT8uJua4V483q17Kt//zriapCpumv4RpIU8lVkL2Y73l/J+IHVuLWr2XTavFe4oz8RtSQfWAWg2ozvZ+euEs5GPAoOdyw==', 10, 'c6734f0ab65da77d66ca56883e3a9d7ea2253b8059c24980dc7c9f6cf5ca1b3c1d821791fed95c47e02f15f07e2788eaf3beae704412414041ae3f2753b70cc044XUWOqRcDRn7i+XWgGsATPYEZzvNmzSRv6ChD97wv8=', 'tủ lạnh, máy lạnh, máy giặc', ' gần biển. view đẹp', 'điện 2k/kg', 'rửa chân sạch sẽ trước khi vào nhà', 'gần chợ hải sản, nhà hàng', '0', '0');
INSERT INTO `posts` VALUES (46, 73, '  1 Ba Tháng 2,    Phường 11,    Thành phố Vũng Tàu,    Tỉnh Bà Rịa - Vũng Tàu', 'room', 8, 'CHO THUÊ PHÒNG Ở VŨNG TÀU', '56d1c08e744636004fe25ade23e8a8ee0c24a250f2ec12d00fdcb549c99a7945a1e6a325a08599477ee0e7ae788da2f14aa3c271c064ea1db4b4d62a32ea48701fRFSSHdLfS41C6rVVfDTp4GsPFQUg1iLtrsACkQbyRGnLDz831PvMW9MczJMcfkN+SVYrCZKEkK9aFA1JWyYIAcn8SZ0WLmU0fZeC580TXp0bvjuH5qrnPcZP6rAPJMKA9oJd2O5Lw/1Et35Ca9/OoF4zs1IxAy5r54IiJjWYV+cD4eoIP7A4J2yT5qguLTTxug27YHhMbhiCpvC3vnPCr5tWfz29FtPKJuHE0mhWhVju22mG2lKXBhNTF+UOS3ILkVBnZ2M4aD0Fl7ce8LTA==', 12, '427978877a6ada910b8dea26b7a891f85e2e229980892825f6c0abdaef13696b1447c0219785e8d1f51fdd69cfb2a2c34f04ef5320565a7d501c5b33207ebfd4DcqLcZIVbgYas/MsTuZ/Szuwg9e/x+B2Gswygb27yR8=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\ncó khu vực bbq', 'điện 2k/kg', 'không', 'gần biển, gần chợ', '0', '0');
INSERT INTO `posts` VALUES (47, 73, '  1 Nguyễn Thượng Hiền,    Phường 01,    Quận Gò Vấp,    Thành phố Hồ Chí Minh', 'apartment', 12, 'CHO THUÊ CĂN HỘ Ở GÒ VẤP', 'f052a7df7b20c831fbc5b4c29889c2bb96dd61539c21ab614b952c8f926443921c58cea350c424b0ee35c20d9aeeff9802c0eb2ad20b2cc4206b36b34be92e5aBf2AaefU6IZKdGIefx5INGRbriryC9BLBpieKYgOn/163byPzNm5jbWW772P/9OCBR6dNQvcbAc0Ju/VNoU8ouPAtWuFVnltiE6eJs+fS26D2l9DWMB8EYbdWOMyaEH+FQnGn89Gca+lmLFYC7PaPGC0WQwin52XJg1uYOzW7dmqoMAEj8RLtIT/q7JZIOWb9/9C4+p7AbCtyE/CONToHeCJQ54gUxQcHAH2TJbW9vbA2820CMutdkmrqLIhGTjk0HqlZlQcF78ITUsPEMz7Aw==', 50, 'fd38f8d0eea89dfaefc08450059b0ee548c5dfacaf6445233f39f299e416793a2543c2c148d6fd83c89c5105728c0254aeb852ed82fa5ea4ff5e1401be914a93t4XmIiHU3btrVFzTVv8Ha9qT0yoPGKYkK0ss9E8oyBs=', 'tủ lạnh, máy lạnh, máy giặc', 'có ban công, view đẹp', 'điện : 3k3, nước 100k/người, wifi : 70k', 'không', 'gần khu dân cư, trường học', '0', '0');
INSERT INTO `posts` VALUES (48, 73, '  1 Mê Linh,    Xã Mê Linh,    Huyện Mê Linh,    Thành phố Hà Nội', 'apartment', 2.5, 'CHO THUÊ CĂN HỘ Ở MÊ LINH', '8b54339075ef4171e7bae9c03a78d927ec6b2ce83a41f02f13408545361e18a76cb3785656ef7ba2b0bebf83a69728b3e562c8595b3273bbddfc1e1bd670025dqN06H5PGBmD7PVbmr8DL4prrHkGH2zQXQHn6m6tdHgKn3DUVy1GthjunXegro39oTbn4M6Jz8G+J8NladbZL23wLecnfVLeLO8Urzjmw8mcUiMu5sLZkAlW4MsGUuAR7MpUFJDske89xL++0z+YJ7RnJs04DgNKzKLS/JJRG/s4EHXvJNrSmf9xJbixeQ6dswyV+X8v21RgH0rlS8iiMfMb+AhzdxmORZba2E5Plk9BAOR6CMZDPRLw9nEo6c/V7dGuL38jYom6oS7J1JnvZbA==', 9, 'ee9425cdb4dfdd4e260bab347d6ef13fb59994ab5ac4a53b5fbdc56aa5c47a594b4e05daaefaa182b6db4af863a24ba305c62598ea306fe9eb4d69a349761a8cH4lzY3GJgC8ZKPDR3r+LSclibeA1NSczAiz/lVm7xOo=', 'tủ lạnh, máy lạnh, máy giặc', 'rộng rãi, thoáng mát', 'điện : 3k3, nước 100k/người, wifi : 70k', 'không', 'gần chợ, cần trung tâm ', '0', '0');
INSERT INTO `posts` VALUES (49, 73, '  1 Trần văn Ơn,    Thị trấn Châu Thành,    Huyện Châu Thành,    Tỉnh Bến Tre', 'premises', 6, 'CHO THUÊ MẶT BẰNG Ở CHÂU THÀNH', '0569f7275ae95967519d85e907cd8f2c12368f1a464bd646a22710502c9ad4efa75b40ba373ffbdc1c634bcb1046396c9cc18fa4321230aabb683dee5ea8d97fRz1bL2bUYg7dvnTlYjummqa9KBYMxdpzAcXxGut1yIQgaXnCwsKXu5tfpmYJrtMGmJHZi+DO2GR+qJHLhAF44uLyGUdLbflPDEWmtjAkwjnLZx4BGGUl4GRSCHjYifkUlM32ZZONi0C2HS+DT/SjAQ==', 15, '25461b4246371e8a4b23aa0006b1bce09957489aa85afee56b3163c2b9d058ac71d1c4bf43f52b0346cdf0f70af9a3224e58badbf8d793264f1915cae026a169RusV20ZTTKna8PLLZd3Uk565y1SIoXMHg9AMb6YxBnc=', '', '', '', '', '', '0', '0');
INSERT INTO `posts` VALUES (50, 73, '  1 Đinh Tiên Hoàng,    Phường Đa Kao,    Quận 1,    Thành phố Hồ Chí Minh', 'premises', 50, 'CHO THUÊ MẶT BẰNG Ở QUẬN 1', '2be267c1e6a837c5650b0347780f5578dc41ccfc4e8198e12e94f2b2f1fc46af6770480ddb2b8f37debe730341af5f0678457ac9c6a5bd857efe190478b939e6xxWKlwOC+JLW3kY5/yX2+A1IlSgswdYXm3PC8kcHUqe1vTYpNI8Al6puztWQa0aTTmXYrXa1YdwaAxxcPk8zyJxooMyPZynsYqFJ0dUFWuVC3eNMGfxVE6MUzq1gh+sqMPnvDNRS7Q1kziH99x+5gA==', 1000, 'beb9fd0227f4ec906786b2b9723348615776c71bb86c56f1e559970a2302b3168577299f1cf1ab602f0ebb00208dd77df3d9e1b4b6e0793d186d046edb01686fYmWD65kBjZXZzrKsImqwoY3oKrGQNGqXfgz41LhuD1I=', '', '', '', '', '', '0', '0');
INSERT INTO `posts` VALUES (51, 74, '  1 Trường Sa,    Phường Hoà Hải,    Quận Ngũ Hành Sơn,    Thành phố Đà Nẵng', 'room', 3, 'CHO THUÊ PHÒNG Ở NGŨ HÀNH SƠN', '50b19e3edf0e11ec790cfa125df3b17edde26147fb92e17c83510090297517fa08c3d7ef53139905ae073f4cf5f172fdb9e99022bb89d0b59cb07703ecfdead6/ta4f9+5u08MNky1SJzshsLeoojcSVXouEIC37FYrcr8KIFyf474Ke55/LdYsCQZf/mK3aDBmWQKcjVOeM4Nb26Zxa57JFkti3+5lCPbJwptVHz0lzlYgvG4zwTtDcLsEJGJPQyPcpnQ8fXnzznSJ66vkvsRzWkKbNkeioyyH4FbAGW5+8bGixmj0ibOYlttQJ+d77KPx5fiegOrn+jkBsFynO36TP2xEBH8UMvg2FhrK/aHeKiMWwVwAsvsWCbdEesn/P7bxg4ovytngVL4yg==', 10, 'b09afa37091960f8d7295eec6715b2629d1cb8424f983799e9a7e812381912b938b0e9139b31789f4b0eafacc682293530f978f5cd0d3e0e6d97fc7f18e5758aTufbW0+t88lh+ujfh6Ly8Hcazzn6VsHF26C8MnsAbRU=', 'Giường, nệm, tủ quần áo', 'rộng rãi, thoáng mát', 'điện : 3k3, nước 100k/người, wifi : 70k', 'không', 'gần biển, gần chợ', '0', '0');
INSERT INTO `posts` VALUES (52, 74, '  1 Lê Văn Quý,    Phường An Hải Bắc,    Quận Sơn Trà,    Thành phố Đà Nẵng', 'room', 6, 'CHO THUÊ PHÒNG Ở SƠN  TRÀ', '6d4b699065a56dcdbf3537178e05f78912b3ff47db9745f856b2008eb4da0368534f912fcb448969f0ffd8da1c819b614e0277fc0a5b9aef9f09df6fd7e29c46WOn4YvlEm4e8LKNYpwwvAFHPQ3ue/pNK/qJ4fOwFPSKmBzgKYpOjKZHDqjLCNku4OltA2SKpCOM+abh4PhdTOUBfQ6a1lZm0YmeLPP1Fr7oG7xanTEY90rwSVviGj6SjIjH+YbaAmEtgoKy7Vl3w/9sapgtOuSIGXVWARWnOpTPQrq2XDWanBbjrmvOGuhUUpaoejhfyXyfqk2VwUG4g+cOWjQtc2yyon8qRxfzVHWcE4Cp+mZomJv+hd+Mb4BpJFEF6MzndcYZKAIkVl0zcRQ==', 12, '8cdb72c2830e13369d738c327334cb63d9c7b9937363c3461c3800ac036d9385baaea204b23f86e2fa76880c2c16d391513ddfa5a0ef7fdf3c92342c8d60b897xLbJW7W4Iwm+i0MAUQY21WQSPyo5LC1FgdVB0IYngWA=', 'tủ lạnh, máy lạnh, máy giặc', 'có ban công, view đẹp\nkhông khí mát mẻ', 'điện : 3k3, nước 100k/người, wifi : 70k', 'không', 'gần ngã 4, gần sân bay', '0', '0');
INSERT INTO `posts` VALUES (53, 74, '  1 Cầu Giấy,    Phường Dịch Vọng,    Quận Cầu Giấy,    Thành phố Hà Nội', 'apartment', 10, 'CHO THUÊ NHÀ Ở CẦU GIẤY', '7375b7e3c202c5f08bba39d4a3793312953bf3b90088eda13362369b57c1f64079922bf232f404c5afd9bd8b0b2c49ce20013ab1ec5bcc7806e2af34a1d810e0DXojWsj5bU5rWtOzMu56TdHVaJ28rS9JX2hw5SF9utn9bY2th/4NHTlDZ4AbVjK6PSYeTjiqGJn+9xlbb1gjwx9D6x36+9m99ZqDb/Whb/tJ6xslFvRXWdZZLp0bRvFHlA8KUN2JpUtBXZJMyDEQOmYAoxPcBaplaZLxsD7udVvsn7DR4NYCgmvUFmXKiX03WkHxF/ubsIa1hTt7z6YJWSo3G4DHbY9B+0tZwHg44t7TX0+JRjIdBT3UO/TwuZN4InqtThG94pZD65ibCg00Cg==', 20, '83c3d40ff6e63e5bb5312dbafa96273cc0f66beac613cb4565b76d8d53648aa95b4c1b8afb21fc0dbcde95c3fd9b052786f4f4683c14ff26fcbbcc56e9c55aafv5aECEGZjF3uvGn/1N/rQRuyw/S9R3myXXw+LdpY0+U=', 'Giường, nệm, tủ quần áo', 'sạch sẽ, thoáng mát', 'điện : 3k3, nước 100k/người, wifi : 70k', 'không', 'gần khu dân cư, trường học', '0', '0');
INSERT INTO `posts` VALUES (55, 74, '  1 Kênh Dài,    Xã Dương Quang,    Huyện Gia Lâm,    Thành phố Hà Nội', 'apartment', 15, 'CHO THUÊ NHÀ Ở DƯƠNG QUANG', '49ca064607e39d02f39a6e55ad6977f97d48ca09e9898bf6b128d3688629d7e71d23aed13417f0e2e5229b559a0cdde012bd7fb84d463a780e144fb80d8e7615Lw1Vk/vVJf/AWZoxAhMEJFGVt4Y25evVBXhtIDN6VqjKHuW/12p+2XVLhgCsKD1e5YqaeM7VsCK+pu7T4rxL6wGglbTYxrFN6vtkkMj4J8V37AdgNezuEik311UEryUBlqy+KZ+WNnuFCMKqZtRCRw3RVkZan1n6TpMQqNOEbbbVySEdgzOrtYGG6RD/fIPIh8ijtHC/uXvh9sGt3zuXqBP3DeFDm38TWqfVj6iQ5208szUa33//IHg4ylHhbWhkf7jlr75CzcF4RjIJHP2yhg==', 30, 'bfaa9e9403be6169e1f06f90636ad9e55dfc885a9cf5e9939dee483eb584711cfea764d377b8cbb3b94521dab78807ff6ea7b9001f77809571769056e0020141MwbXWeFt3ZLozXYDwYMT3eTkI6W2UrSgDDOjt4XoFt4=', 'tủ lạnh, máy lạnh, máy giặc', 'view đẹp, dầy đủ tiện nghi', '45', 'không', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', '0', '0');
INSERT INTO `posts` VALUES (56, 74, '  1 Tôn Đản,    Phường Hòa An,    Quận Cẩm Lệ,    Thành phố Đà Nẵng', 'premises', 60, 'CHO THUÊ MẶT BẰNG Ở CẨM LỆ', '58ae8d18d091cc32ce2d52a335b2aa3779b625454c57d6d90da3a90714c17fc55c7d3223737f5d2a3f3141e592b3fae617b40ddb8db4586061619ea7d3d764eaRq2yZKvMs8qVAU6BXJtd03Ufz7/4Qv/mFn4rIaRhrh2qTpVUzh8nKSZ4YhND/vhsDSeINP9NEQu2n5ZHzaraurjipfMnbUhXkcFXvYAa+Tk/YPJaQedsIO8gvkb+CE+6k8BtssS+HT+qQXbJucrPBQ==', 250, '9fea692ead833cc949a21e4a7814a6082f5e7ddf182947b2f1bea722171674e872d60c0e05e5e52aff7da8ca6ee2709d800fc0a39f7a0a3dbc3c34c852917060j4SpoNTB7CaXk3Un0V0RdsD7T54DZ9MYFseA1fticas=', '', '', '', '', '', '0', '0');
INSERT INTO `posts` VALUES (57, 74, '  1 Liên Hiệp,    Xã Liên Hiệp,    Huyện Phúc Thọ,    Thành phố Hà Nội', 'premises', 45, 'CHO THUÊ MẶT BẰNG Ở LIÊN HIỆP', 'dc69d7e44d83548700cc0c7b88ad4507e56671183eeb16637d1f8147548883b73163d48e275a91f897918e019184a9560d3a142baccfe2e9ba60292afaa05aa71MDAKg1p+c/x8abiPq7hjyiDlzBxK6hfg6opQsqjMPcRIh2N6rV3K7yANE0Ct5uQvhBD0tigNQKEwoZcXaNzOruVUEobKsrkemoKIbIem8GRyMX0nC5CIDD0X57/1V+fZwApA7JBjUjiXA98rCzQYQ==', 70, '3f86232f5044deda7d2e36833929f4626acf997db5b5028e9806e41d34bbe411cc5e79e33f87c3a07aaee9b788fc6400ac0c93d21c7fecbb15c96666fd0aa0e9AEdChlxAncOqT5PSSg5hIhMVTyqhZf0uril8gExMaAA=', '', '', '', '', '', '0', '0');
INSERT INTO `posts` VALUES (58, 72, '  1 Trần Hưng Đạo,    Phường Cô Giang,    Quận 1,    Thành phố Hồ Chí Minh', 'premises', 100, 'CHO THUÊ MẶT BẰNG Ở QUẬN 1', 'dd197954be2f27e639190c8882a38ce49ae87e286f7873fd52930477695c5d147c86bd526b51407507e4c8652c36f2aee056d4115fbcaaeef31af5ec6a1a9d6bJqASzS+og/h28lmAw+bhINOut9m3Sk2L9u7+4R/P9fYrt4GVQBohYkA43/9LRuL3IzPldoUX5ZSfIbZPeB83TgpAVIJxXQCgncCKOz8fYkoN3HmLlg+3mn4dSVhvaPx1u+p9mHyU85P2xT5nRkyAAQ==', 500, '82ef9813a14967a6b81ca15c30cb39fa40f5b3e0115006c37ee0c86128e66642ccfd4dd7a9b5d0885f1be64b72b8844bd4b5069f64bf7ab9e27a3eead1e14735WXkL3vAijjCHbxV/ZFiocgecyt5wuBiiY17ynRQ1bd4=', '', '', '', '', '', '0', '0');
INSERT INTO `posts` VALUES (59, 72, '  1 Nguyễn Thị Hương,    Thị trấn Nhà Bè,    Huyện Nhà Bè,    Thành phố Hồ Chí Minh', 'premises', 15, 'CHO THUÊ MẶT BẰNG NHÀ BÈ', '55ca97cac3f9c4a70746f50d64a486478e694cfb1478f857dcabbe7b8fa79e72a3d972aebc237e95825787ec02532518e7fbac9e429f0022e27ca26ad376ed99jqjqDlTEcbX8i5IGAlGaKwK0yhM3qEyyIBYz6rOeV2bQr7B/Y2JQUw93mxkZsP3WY2b6csKGX3OdZMTJzpJWdBKY64oYJ6nSq+8iTQGAGPO4XfSGTvp9xj/O9fe/XEV1obBBers5Zy+rxajlwlhRBA==', 35, 'b0c55de6843f9feb9de7f5ebc783c8e62f22479e44f93aa96b0ffc052f1515b55e60c0d9248336bc2937b5d938c7ca6f5bad36290fa3e9ad6cbc9e44941822f1NIBYFCaGUAkeTn01V+vWHX4gbzO8MfKv+GZgJPDpP7E=', '', '', '', '', '', '0', '0');
INSERT INTO `posts` VALUES (60, 72, '  1 Cao đạt,    Phường 01,    Quận 5,    Thành phố Hồ Chí Minh', 'room', 5, 'CHO THUÊ PHÒNG Ở CAO ĐẠT', '4a2011f8a2da2fde2adbf3acb4142fbda2caf5a8ae378f18ea6aaaa317e1f3830b087cd455bf9f9d8df6bbb42672e809fb280efffe0a7f601b88dd902fc3338b7URcCMF1HsOJB/9ZRnnoxALe5dsw+COGppIB8yBu4tR03jrglSyN5HMDDVSdVOHxqFofQk5n/d3yTTN24JpVUbn88pRPG13/zdBrp0yhyNLJpi0XP9fbDl7HQAeELFaZ+XpPUw2q4eIFz0T0HVo3antJImXQshC2Jt/jaEAQhGJruptWjdGo9vOirzcob69e6jlUzuT0jmKwTmZRU1oyEsFPDyRNufPy/NFsuUD4vNYSSqbTc4pCbZxGwIGTnp0DYz+ozzMoTdVVnZsjWBN22Q==', 20, '65df946f9547b2995fbf59a5fcd6f08cb1230724fafe6a67e390586611b044cde859ada02cd3dba938178382410d018453559b834eac3e9b1ab43f3daa5c7ebc2yKpkjSzcvVMGhM4YC5ZySMvZuhPydBcYRSYjiFm5eY=', 'tủ lạnh, máy lạnh, máy giặc', 'rộng rãi, thoáng mát', 'điện : 3k3, nước 100k/người, wifi : 70k', 'không', 'gần khu dân cư, trường học', '0', '0');
INSERT INTO `posts` VALUES (61, 72, '  1 Đoàn thị điểm,    Phường 01,    Quận Phú Nhuận,    Thành phố Hồ Chí Minh', 'room', 4, 'CHO THUÊ PHÒNG Ở PHÚ NHUẬN', '30f2ecf5c328bf2084a8f397b659145938b8ed1e92be28486c9e7893a3175b9212acb5add82e43f3d4bf9bc0504cba6ecff259c4a81c9c8060bf6913e9173641INbsUm28yyz+ZqEi1VNftP2b3VjUgWSxDshyRwpcVjsi0xfT3vYr2+FERJLaO6I4WMoi5R54c9uiC1c7xiiMeCDw/ojVswJ3IsTVTVIuqcSNoPp2BAx+/LmTuiQor5O5OIXmFEijT4JANrsZLVfh9rXX5xgeL+nImwx/HzULpZhzhjNg5DrpiZACSpWS28YOtTzkDJIl7CKCAj9QbZ14skSHsc0osHJTnPWht3JBI9ePZjm05yIzypZVoXMnOdvoIlCC2k4vtozRGw+n1spndQ==', 15, 'd3f6fcfdda4373849b0e9b730b84e0073bcab9207f0aa03fc411b1d0e8c100d6e250144421099d93adbcc7d43a81dc2058715ec5d0e9f99907cf1eec64ce2d39E9r45kQJBo2O3siWx5Bi8EcKDzaoncd507i6uC1Obnw=', 'Giường, nệm, tủ quần áo', 'rộng rãi, view đẹp', 'điện : 3k3, nước 100k/người, wifi : 70k', 'không', 'gần Aeon', '0', '0');
INSERT INTO `posts` VALUES (62, 72, '  1 Gia Phú,    Phường 01,    Quận 6,    Thành phố Hồ Chí Minh', 'apartment', 5, 'CHO THUÊ NHÀ Ở QUẬN 6', '3efbfeeae6eb3fbc796994e6e4de76c9b787690cd5a341a7c7844fa91a9e3554205b7aed49e47fcc06e0010a828ac4f3783f2887f7012f7923081ecfa0d3af6dkc4bzL0P03BaxFFzlC8F0OE3sHZn7AE0TaCHTL0DEI/NdpoVHCLHHAFlUcY1mDknsBBPD4crspeOPfHzkG2BgbCwkhvskCwHzbfacLQ46CysGdC5zk/nVFpbJb2q6KdJv5cCps68D5O4IPPpsj0qRbwaWGAb0hZS20cBTUtccqZZmmO0liVkEjrRqayDZlJH5XakV8pz1OVbhvw8FXfhwNS+VkZTY0nOoUhXF8uc15bLNLsvECAdoIFMk5B+XXeMn+/h6n4BRpy3QDRl9pt+CQ==', 15, '94c6cef47c414ebed457bc563049c597b4e4222e0452d71ce07ef5ccb06b07f9a8bacd36a9fc32ac5a2f13fc40fa635b42cb545a71f7794ddfa1a9bcf54b6885qiKUsgoPW4JxDxgiXdP9eqga1vQhP/CFylALL4pfcAc=', 'tủ lạnh, máy lạnh, máy giặc', 'đẹp, đầy đủ tiện nghi', 'điện 2k/kg', 'không', 'Tiện ích: Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', '0', '0');
INSERT INTO `posts` VALUES (63, 72, '  1 Uy nô,    Thị trấn Đông Anh,    Huyện Đông Anh,    Thành phố Hà Nội', 'apartment', 15, 'CHO THUÊ CĂN HỘ Ở ĐÔNG ANH', '02e9c5262dc30040e044f59c5d24896328cf92e7deb58607138e9d46c38044ef41e15e0a9c4dd3bea855b3970e7c3c311b47117939d4c3804898277bf66b666fKUJyGfTm0QoEgbGOy1HVvxdJcWkyslqPapkek4CioQhG8YQz1n8PVa7yGCCQsf+uRG7i7uMC0eWYWXgMxtMojUT8Z1OBD6E3i27L8UsaW7Y6BjK1Gf94Bq20OkAmcL/42wKdsdjLeHREV1UECJIgWkdQmOYam+glxgIBom7QomIs/HpwzoJfEDI6gY4viAivWU87QcZXy61f6tmY9rPS6KtuzgKfhkFO98SJOLNrDL4xYi+FJPekRLLSL2dnAEZ/cT3wKDumCie3HDN6U3tVAA==', 30, '4932cf5cde252f63493bc8eb403456a5366e711da1fdb9ea3a46963e59f420ab7c6cb26408404588caa01602e73b3dbdee004a24daa56dc9b277a87329ccb61bP13Lck1/aIC2dvMQD5xigKXm8OTiWH9d3MnWulRJfVQ=', 'Giường, nệm, tủ quần áo', 'đầy đủ tiện nghi', 'điện 2k/kg', 'không', 'gần Go city', '0', '0');

-- ----------------------------
-- Table structure for statusPost
-- ----------------------------
DROP TABLE IF EXISTS `statusPost`;
CREATE TABLE `statusPost`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `postId` int(11) NOT NULL,
  `dateCreateAt` date NOT NULL,
  `dateExpired` date NOT NULL,
  `status` int(1) NOT NULL,
  `check` int(1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 71 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of statusPost
-- ----------------------------
INSERT INTO `statusPost` VALUES (35, 28, '2024-06-24', '2024-09-22', 0, 1);
INSERT INTO `statusPost` VALUES (36, 29, '2024-06-24', '2024-09-22', 0, 1);
INSERT INTO `statusPost` VALUES (37, 30, '2024-06-26', '2024-09-24', 0, 1);
INSERT INTO `statusPost` VALUES (38, 31, '2024-06-27', '2024-09-25', 0, 1);
INSERT INTO `statusPost` VALUES (39, 32, '2024-06-27', '2024-09-25', 0, 0);
INSERT INTO `statusPost` VALUES (40, 33, '2024-06-27', '2024-09-25', 0, 0);
INSERT INTO `statusPost` VALUES (46, 39, '2024-06-28', '2024-09-26', 0, 0);
INSERT INTO `statusPost` VALUES (47, 40, '2024-06-28', '2024-09-26', 0, 0);
INSERT INTO `statusPost` VALUES (48, 41, '2024-06-28', '2024-09-26', 0, 0);
INSERT INTO `statusPost` VALUES (49, 42, '2024-07-09', '2024-10-07', 0, 1);
INSERT INTO `statusPost` VALUES (50, 43, '2024-07-09', '2024-10-07', 0, 1);
INSERT INTO `statusPost` VALUES (51, 44, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (52, 45, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (53, 46, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (54, 47, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (55, 48, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (56, 49, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (57, 50, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (58, 51, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (59, 52, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (60, 53, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (62, 55, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (63, 56, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (64, 57, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (65, 58, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (66, 59, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (67, 60, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (68, 61, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (69, 62, '2024-07-09', '2024-10-07', 0, 0);
INSERT INTO `statusPost` VALUES (70, 63, '2024-07-09', '2024-10-07', 0, 0);

-- ----------------------------
-- Table structure for userLikes
-- ----------------------------
DROP TABLE IF EXISTS `userLikes`;
CREATE TABLE `userLikes`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 53 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of userLikes
-- ----------------------------
INSERT INTO `userLikes` VALUES (41, 71, 31);
INSERT INTO `userLikes` VALUES (42, 71, 39);
INSERT INTO `userLikes` VALUES (44, 71, 40);
INSERT INTO `userLikes` VALUES (52, 70, 39);

-- ----------------------------
-- Table structure for userNotifications
-- ----------------------------
DROP TABLE IF EXISTS `userNotifications`;
CREATE TABLE `userNotifications`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `message` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `isRead` tinyint(1) NULL DEFAULT 0,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 38 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `token` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `create_at` datetime NOT NULL,
  `expires_at` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of userToken
-- ----------------------------
INSERT INTO `userToken` VALUES (2, 70, 'e44979878c8ca0af47779a83c29f89a9', '2024-06-19 17:51:26', '2024-06-19 17:56:26');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(191) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `password` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `phone` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `role` int(1) NOT NULL,
  `avatar` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 75 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (70, 'Admin', 'tnp08032000@gmail.com', '927275d62db71f8aa89fe2b6fa8c93164b397f3e406b56536fd49ac330b15f331a64813da1a9de71592b7e4d0cfa5167b889618665cf1d42916509d1a8c0523eGaqcBK+NBxZvcDHUHyOwIjWiMIagUT2GhD609gLx5E8=', 'a8553a6ec45e30e02606ee4086c52d06b1a130bd5b7b55a587b7f03eb3aa21cc9d1d43c002af54901a3a5aa79fc5895373a5041b4854162f543d0597f404a8b0CmSTaBREpnLzNEBwExDu4jJq4T5awNVpv8h58FGcn1o=', 1, 'b7a530f02e5acf7daa586902fca11313de112f51b2460f775c963dd07479a42ec389d3ad168d52daa2e3c534a63f986d77e4c3fc65ae2726f2bc65f5891f38d4w1RFH9xj/KU2K02M3F/yKrG/twvDKYUoqvcWoRJ6bKzWjBtJS9mVPszoEPoQRCTddy3aZ6W5/6oqg7/JgqVJCRUGkdTd3foyDujfxrETZVaiJUqIQFgqkbqohe7CmiqcCcVvGHUiBv2+0TUgjIzmiQ==');
INSERT INTO `users` VALUES (71, 'Thái Ngọc Phú', 'thaingocphu0803@gmail.com', 'e8c55ab5800370e215b97f0e52401568acf9293b10ef75a774f585ff210ffe84dafb41d7ad30bc20cbaf57dbc3d098ef8379d0eed3cffcbd2385774c544b7055Jl+7uLDNDOm7u7Hp4W+mEqSv3Btj2sHIMsKND35pFCE=', '16ee175feff21a211fb25f2c98e5d0d7e2ed6559472030b688d0e69695127076af9832d199a6efd4e8d2bf9c2343037d19a7edb12edd3065101e280447c4bd7dOPBpknWHqlTD/siiQjXzR58KZ9oE+uOC0WW5dNn1C9s=', 0, '7243334c346cbe02f22025541cbc2532ffb70e0184ffa875a8668dc8cf1c795d2064eb99fcbff68dafea7e02ed1da93a6735bbc1ac05443195f34b1da1c1110bHfw3IhphR/5zZFdV1Fx0lQaGUi0UNHDbePy4YiI9jEZGo/pkiTw5WfyX0BTxjLkdWD7/LxNRW0BFnz6xnFf2B+oOOqWtSmmGaN1KM4gEppFieoiH09TJQvxGvUqCTCUPoQo/EY8mvUGfdpT7LYeBUFHbNWsXzphPgzgNhHtIKdFL9LQvlN1zLslwiAmBexE+');
INSERT INTO `users` VALUES (72, 'Johny Deep', 'Phu123@gmail.com', 'c638ae3992d1617a1c4ddc35a0e6bdf137f029dc1bf315454aafdec4d1fd1fc351ac1b153c7cecdc805ea87bda63b0bf82e4ad4ced7e41eb822b65d0c2a3becaLJf6WrZNeiOwR3qfVvjE2ZX0AP4MuLpLTsl5bSYTzyc=', 'f6e57e47b02b37f6fcfd73e5e9af03da43e4cf7629859b239981e9e6767ca3c83ff525f0d0c9058660bd3b056f033c84bd195ccaaa5d4651c28d810c08d8a621HN6UmcvpYkZJQimu6otxS+94G6vf+AnFQ8WYuqnJdNM=', 0, NULL);
INSERT INTO `users` VALUES (73, 'Metro Boomin', 'phutn@cozwork.com', '845d9def1fed8abf6d2235f7688f8ab1eaddbd0536b6783937f8198a53ab75dab7745a9adca7a977a5b2342c9d10f5ec178863a67e50ac4c970e6b1e72f31639wNWgJc5M74VF/wKdzmXV7B1j4fXZgY60mtwZQIv94L4=', 'dd23b06c48715b62933bdd1dfc3175d59843aa73cef74e411e1934199a196eefdeb4e496d3dfb405960bcf089d2feba9a0165774482acfb57b681b8d65c3201bLzYUiNbvrVWrS6agfbDbpDLaPqtLCN3PH6+cgC5AwgM=', 0, NULL);
INSERT INTO `users` VALUES (74, 'Justin Bieber', 'justin@gmail.com', '149e4a2136ea183e60fcda2bb27a58682ff2153946d6ec952d081368b53980f6f80b6c7afd0e00ce0f6b685ad690c4f5cf7afb4bdf60ce271568a1bbf010c1f3mPTFaLjyA/4JbXhBmjk6lWQTqHJULB2XPMZbDfWIAhE=', 'efc91c8a5ddc982f0bab949fad5243217b5854860e4cb76c17bb846d6d499e4be05cba3a8a610ada887ddc1cc752c4ef82bc51ce7a7e2eebb004b2f4dac36768jtwGtTxea8Q6E71NAQq1W9paSfmXnyOKEih/OXRO1m8=', 0, NULL);

SET FOREIGN_KEY_CHECKS = 1;
