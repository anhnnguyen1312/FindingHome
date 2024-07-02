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

 Date: 21/06/2024 18:38:46
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `typeRoom` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `price` float NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `area` float NULL DEFAULT NULL,
  `zalo` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `furniture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `otherFee` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `rule` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `nearby` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `urlImages` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES (12, 70, '592b090c209e39a8e51943a4d8fea26c90055945575eff95957bb1df6f689451c720d719c6de8a26cb680a3dc3b7636c71b486d02195a56188d2c4da611d1575Y647rhOViIwrwvx62E+G8jZF4puWcnfWtWAgdkfiB2BLHjBuxEU5rl48VDAw18u8dlBONEVTh0kZGf/B+xKlqafK/KY18N/vmxxqb+Js+8k=', 'phòng', 12, 'CHO THUÊ PHÒNG TRỌ QUẬN 7', 10, '1609bb75430695cd9ed06a6fdf074ce2cbfdaf701c00b6b98936dd276faf6e33b608d59b67cd82fd08d9be61c288e2115358b125fa2f7c82e8c0b875490af739V7akcKqQR3UGJCDmWWS6ZpwvGm4oVag6UfOQrBPiZM0=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\nsạch sẽ, thoáng mát', 'điện: 3k/kg\nnước: 100k/thnags', 'về trước 12h đêm\nra vào đóng cổng cẩn thận', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', 'ceb5574dd5f41a93c655752bd526d19c465d8e1cb13e91610ac18a638338f5d737ca62648d866f1a222ec7bfbc545507cfa0f611931694dd059d0658d4802628PHu+gJpPo5HjAPglucLnn7RWXRtk6UWoSsyabHGt4dhr/+EIBMXph8Q6jhF5jhyo2rfR4YqYA25dgZu0NGF19C9DUCfEYnT5YneTtMXmBHEdFuzg2B69wMwaFnSaQpw7duMQchIPkTOUScC2WEmTEozVlpkNQujaR40ZPmORIVdtojPWvH9zm/jV9tTqx1iiAbH2vfzdqmCptn3g+VI5ME01YgDHEySap33m9LS6Jxz/CtV1OQB9i+AWn++YztmAvT94Q9y7gyt288dR9R7g3A==');
INSERT INTO `posts` VALUES (13, 70, '592b090c209e39a8e51943a4d8fea26c90055945575eff95957bb1df6f689451c720d719c6de8a26cb680a3dc3b7636c71b486d02195a56188d2c4da611d1575Y647rhOViIwrwvx62E+G8jZF4puWcnfWtWAgdkfiB2BLHjBuxEU5rl48VDAw18u8dlBONEVTh0kZGf/B+xKlqafK/KY18N/vmxxqb+Js+8k=', 'căn hộ', 5, 'CHO THUÊ CĂN HỘ QUẬN 3', 10, '1609bb75430695cd9ed06a6fdf074ce2cbfdaf701c00b6b98936dd276faf6e33b608d59b67cd82fd08d9be61c288e2115358b125fa2f7c82e8c0b875490af739V7akcKqQR3UGJCDmWWS6ZpwvGm4oVag6UfOQrBPiZM0=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\nsạch sẽ, thoáng mát', 'điện: 3k/kg\nnước: 100k/thnags', 'về trước 12h đêm\nra vào đóng cổng cẩn thận', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', 'ceb5574dd5f41a93c655752bd526d19c465d8e1cb13e91610ac18a638338f5d737ca62648d866f1a222ec7bfbc545507cfa0f611931694dd059d0658d4802628PHu+gJpPo5HjAPglucLnn7RWXRtk6UWoSsyabHGt4dhr/+EIBMXph8Q6jhF5jhyo2rfR4YqYA25dgZu0NGF19C9DUCfEYnT5YneTtMXmBHEdFuzg2B69wMwaFnSaQpw7duMQchIPkTOUScC2WEmTEozVlpkNQujaR40ZPmORIVdtojPWvH9zm/jV9tTqx1iiAbH2vfzdqmCptn3g+VI5ME01YgDHEySap33m9LS6Jxz/CtV1OQB9i+AWn++YztmAvT94Q9y7gyt288dR9R7g3A==');
INSERT INTO `posts` VALUES (14, 70, '592b090c209e39a8e51943a4d8fea26c90055945575eff95957bb1df6f689451c720d719c6de8a26cb680a3dc3b7636c71b486d02195a56188d2c4da611d1575Y647rhOViIwrwvx62E+G8jZF4puWcnfWtWAgdkfiB2BLHjBuxEU5rl48VDAw18u8dlBONEVTh0kZGf/B+xKlqafK/KY18N/vmxxqb+Js+8k=', 'mặt bằng', 5, 'CHO THUÊ MẶT BẰNG QUẬN 5', 10, '1609bb75430695cd9ed06a6fdf074ce2cbfdaf701c00b6b98936dd276faf6e33b608d59b67cd82fd08d9be61c288e2115358b125fa2f7c82e8c0b875490af739V7akcKqQR3UGJCDmWWS6ZpwvGm4oVag6UfOQrBPiZM0=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\nsạch sẽ, thoáng mát', 'điện: 3k/kg\nnước: 100k/thnags', 'về trước 12h đêm\nra vào đóng cổng cẩn thận', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', 'ceb5574dd5f41a93c655752bd526d19c465d8e1cb13e91610ac18a638338f5d737ca62648d866f1a222ec7bfbc545507cfa0f611931694dd059d0658d4802628PHu+gJpPo5HjAPglucLnn7RWXRtk6UWoSsyabHGt4dhr/+EIBMXph8Q6jhF5jhyo2rfR4YqYA25dgZu0NGF19C9DUCfEYnT5YneTtMXmBHEdFuzg2B69wMwaFnSaQpw7duMQchIPkTOUScC2WEmTEozVlpkNQujaR40ZPmORIVdtojPWvH9zm/jV9tTqx1iiAbH2vfzdqmCptn3g+VI5ME01YgDHEySap33m9LS6Jxz/CtV1OQB9i+AWn++YztmAvT94Q9y7gyt288dR9R7g3A==');
INSERT INTO `posts` VALUES (15, 70, '592b090c209e39a8e51943a4d8fea26c90055945575eff95957bb1df6f689451c720d719c6de8a26cb680a3dc3b7636c71b486d02195a56188d2c4da611d1575Y647rhOViIwrwvx62E+G8jZF4puWcnfWtWAgdkfiB2BLHjBuxEU5rl48VDAw18u8dlBONEVTh0kZGf/B+xKlqafK/KY18N/vmxxqb+Js+8k=', 'phòng', 12, 'CHO THUÊ PHÒNG TRỌ QUẬN 5', 10, '1609bb75430695cd9ed06a6fdf074ce2cbfdaf701c00b6b98936dd276faf6e33b608d59b67cd82fd08d9be61c288e2115358b125fa2f7c82e8c0b875490af739V7akcKqQR3UGJCDmWWS6ZpwvGm4oVag6UfOQrBPiZM0=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\nsạch sẽ, thoáng mát', 'điện: 3k/kg\nnước: 100k/thnags', 'về trước 12h đêm\nra vào đóng cổng cẩn thận', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', 'ceb5574dd5f41a93c655752bd526d19c465d8e1cb13e91610ac18a638338f5d737ca62648d866f1a222ec7bfbc545507cfa0f611931694dd059d0658d4802628PHu+gJpPo5HjAPglucLnn7RWXRtk6UWoSsyabHGt4dhr/+EIBMXph8Q6jhF5jhyo2rfR4YqYA25dgZu0NGF19C9DUCfEYnT5YneTtMXmBHEdFuzg2B69wMwaFnSaQpw7duMQchIPkTOUScC2WEmTEozVlpkNQujaR40ZPmORIVdtojPWvH9zm/jV9tTqx1iiAbH2vfzdqmCptn3g+VI5ME01YgDHEySap33m9LS6Jxz/CtV1OQB9i+AWn++YztmAvT94Q9y7gyt288dR9R7g3A==');
INSERT INTO `posts` VALUES (16, 70, '592b090c209e39a8e51943a4d8fea26c90055945575eff95957bb1df6f689451c720d719c6de8a26cb680a3dc3b7636c71b486d02195a56188d2c4da611d1575Y647rhOViIwrwvx62E+G8jZF4puWcnfWtWAgdkfiB2BLHjBuxEU5rl48VDAw18u8dlBONEVTh0kZGf/B+xKlqafK/KY18N/vmxxqb+Js+8k=', 'phòng', 12, 'CHO THUÊ PHÒNG TRỌ QUẬN 3', 10, '1609bb75430695cd9ed06a6fdf074ce2cbfdaf701c00b6b98936dd276faf6e33b608d59b67cd82fd08d9be61c288e2115358b125fa2f7c82e8c0b875490af739V7akcKqQR3UGJCDmWWS6ZpwvGm4oVag6UfOQrBPiZM0=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\nsạch sẽ, thoáng mát', 'điện: 3k/kg\nnước: 100k/thnags', 'về trước 12h đêm\nra vào đóng cổng cẩn thận', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', 'ceb5574dd5f41a93c655752bd526d19c465d8e1cb13e91610ac18a638338f5d737ca62648d866f1a222ec7bfbc545507cfa0f611931694dd059d0658d4802628PHu+gJpPo5HjAPglucLnn7RWXRtk6UWoSsyabHGt4dhr/+EIBMXph8Q6jhF5jhyo2rfR4YqYA25dgZu0NGF19C9DUCfEYnT5YneTtMXmBHEdFuzg2B69wMwaFnSaQpw7duMQchIPkTOUScC2WEmTEozVlpkNQujaR40ZPmORIVdtojPWvH9zm/jV9tTqx1iiAbH2vfzdqmCptn3g+VI5ME01YgDHEySap33m9LS6Jxz/CtV1OQB9i+AWn++YztmAvT94Q9y7gyt288dR9R7g3A==');
INSERT INTO `posts` VALUES (17, 70, '592b090c209e39a8e51943a4d8fea26c90055945575eff95957bb1df6f689451c720d719c6de8a26cb680a3dc3b7636c71b486d02195a56188d2c4da611d1575Y647rhOViIwrwvx62E+G8jZF4puWcnfWtWAgdkfiB2BLHjBuxEU5rl48VDAw18u8dlBONEVTh0kZGf/B+xKlqafK/KY18N/vmxxqb+Js+8k=', 'căn hộ', 5, 'CHO THUÊ CĂN HỘ QUẬN 7', 10, '1609bb75430695cd9ed06a6fdf074ce2cbfdaf701c00b6b98936dd276faf6e33b608d59b67cd82fd08d9be61c288e2115358b125fa2f7c82e8c0b875490af739V7akcKqQR3UGJCDmWWS6ZpwvGm4oVag6UfOQrBPiZM0=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\nsạch sẽ, thoáng mát', 'điện: 3k/kg\nnước: 100k/thnags', 'về trước 12h đêm\nra vào đóng cổng cẩn thận', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', 'ceb5574dd5f41a93c655752bd526d19c465d8e1cb13e91610ac18a638338f5d737ca62648d866f1a222ec7bfbc545507cfa0f611931694dd059d0658d4802628PHu+gJpPo5HjAPglucLnn7RWXRtk6UWoSsyabHGt4dhr/+EIBMXph8Q6jhF5jhyo2rfR4YqYA25dgZu0NGF19C9DUCfEYnT5YneTtMXmBHEdFuzg2B69wMwaFnSaQpw7duMQchIPkTOUScC2WEmTEozVlpkNQujaR40ZPmORIVdtojPWvH9zm/jV9tTqx1iiAbH2vfzdqmCptn3g+VI5ME01YgDHEySap33m9LS6Jxz/CtV1OQB9i+AWn++YztmAvT94Q9y7gyt288dR9R7g3A==');
INSERT INTO `posts` VALUES (18, 70, '592b090c209e39a8e51943a4d8fea26c90055945575eff95957bb1df6f689451c720d719c6de8a26cb680a3dc3b7636c71b486d02195a56188d2c4da611d1575Y647rhOViIwrwvx62E+G8jZF4puWcnfWtWAgdkfiB2BLHjBuxEU5rl48VDAw18u8dlBONEVTh0kZGf/B+xKlqafK/KY18N/vmxxqb+Js+8k=', 'căn hộ', 5, 'CHO THUÊ CĂN HỘ QUẬN 5', 10, '1609bb75430695cd9ed06a6fdf074ce2cbfdaf701c00b6b98936dd276faf6e33b608d59b67cd82fd08d9be61c288e2115358b125fa2f7c82e8c0b875490af739V7akcKqQR3UGJCDmWWS6ZpwvGm4oVag6UfOQrBPiZM0=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\nsạch sẽ, thoáng mát', 'điện: 3k/kg\nnước: 100k/thnags', 'về trước 12h đêm\nra vào đóng cổng cẩn thận', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', 'ceb5574dd5f41a93c655752bd526d19c465d8e1cb13e91610ac18a638338f5d737ca62648d866f1a222ec7bfbc545507cfa0f611931694dd059d0658d4802628PHu+gJpPo5HjAPglucLnn7RWXRtk6UWoSsyabHGt4dhr/+EIBMXph8Q6jhF5jhyo2rfR4YqYA25dgZu0NGF19C9DUCfEYnT5YneTtMXmBHEdFuzg2B69wMwaFnSaQpw7duMQchIPkTOUScC2WEmTEozVlpkNQujaR40ZPmORIVdtojPWvH9zm/jV9tTqx1iiAbH2vfzdqmCptn3g+VI5ME01YgDHEySap33m9LS6Jxz/CtV1OQB9i+AWn++YztmAvT94Q9y7gyt288dR9R7g3A==');
INSERT INTO `posts` VALUES (19, 70, '592b090c209e39a8e51943a4d8fea26c90055945575eff95957bb1df6f689451c720d719c6de8a26cb680a3dc3b7636c71b486d02195a56188d2c4da611d1575Y647rhOViIwrwvx62E+G8jZF4puWcnfWtWAgdkfiB2BLHjBuxEU5rl48VDAw18u8dlBONEVTh0kZGf/B+xKlqafK/KY18N/vmxxqb+Js+8k=', 'mặt bằng', 5, 'CHO THUÊ MẶT BẰNG QUẬN 7', 10, '1609bb75430695cd9ed06a6fdf074ce2cbfdaf701c00b6b98936dd276faf6e33b608d59b67cd82fd08d9be61c288e2115358b125fa2f7c82e8c0b875490af739V7akcKqQR3UGJCDmWWS6ZpwvGm4oVag6UfOQrBPiZM0=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\nsạch sẽ, thoáng mát', 'điện: 3k/kg\nnước: 100k/thnags', 'về trước 12h đêm\nra vào đóng cổng cẩn thận', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', 'ceb5574dd5f41a93c655752bd526d19c465d8e1cb13e91610ac18a638338f5d737ca62648d866f1a222ec7bfbc545507cfa0f611931694dd059d0658d4802628PHu+gJpPo5HjAPglucLnn7RWXRtk6UWoSsyabHGt4dhr/+EIBMXph8Q6jhF5jhyo2rfR4YqYA25dgZu0NGF19C9DUCfEYnT5YneTtMXmBHEdFuzg2B69wMwaFnSaQpw7duMQchIPkTOUScC2WEmTEozVlpkNQujaR40ZPmORIVdtojPWvH9zm/jV9tTqx1iiAbH2vfzdqmCptn3g+VI5ME01YgDHEySap33m9LS6Jxz/CtV1OQB9i+AWn++YztmAvT94Q9y7gyt288dR9R7g3A==');
INSERT INTO `posts` VALUES (20, 70, '592b090c209e39a8e51943a4d8fea26c90055945575eff95957bb1df6f689451c720d719c6de8a26cb680a3dc3b7636c71b486d02195a56188d2c4da611d1575Y647rhOViIwrwvx62E+G8jZF4puWcnfWtWAgdkfiB2BLHjBuxEU5rl48VDAw18u8dlBONEVTh0kZGf/B+xKlqafK/KY18N/vmxxqb+Js+8k=', 'mặt bằng', 5, 'CHO THUÊ MẶT BẰNG QUẬN 3', 10, '1609bb75430695cd9ed06a6fdf074ce2cbfdaf701c00b6b98936dd276faf6e33b608d59b67cd82fd08d9be61c288e2115358b125fa2f7c82e8c0b875490af739V7akcKqQR3UGJCDmWWS6ZpwvGm4oVag6UfOQrBPiZM0=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\nsạch sẽ, thoáng mát', 'điện: 3k/kg\nnước: 100k/thnags', 'về trước 12h đêm\nra vào đóng cổng cẩn thận', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', 'ceb5574dd5f41a93c655752bd526d19c465d8e1cb13e91610ac18a638338f5d737ca62648d866f1a222ec7bfbc545507cfa0f611931694dd059d0658d4802628PHu+gJpPo5HjAPglucLnn7RWXRtk6UWoSsyabHGt4dhr/+EIBMXph8Q6jhF5jhyo2rfR4YqYA25dgZu0NGF19C9DUCfEYnT5YneTtMXmBHEdFuzg2B69wMwaFnSaQpw7duMQchIPkTOUScC2WEmTEozVlpkNQujaR40ZPmORIVdtojPWvH9zm/jV9tTqx1iiAbH2vfzdqmCptn3g+VI5ME01YgDHEySap33m9LS6Jxz/CtV1OQB9i+AWn++YztmAvT94Q9y7gyt288dR9R7g3A==');

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
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of statusPost
-- ----------------------------
INSERT INTO `statusPost` VALUES (19, 12, '2024-06-14', '2024-09-12', 0, 0);
INSERT INTO `statusPost` VALUES (20, 13, '2024-06-14', '2024-09-12', 0, 0);
INSERT INTO `statusPost` VALUES (21, 14, '2024-06-14', '2024-09-12', 0, 0);
INSERT INTO `statusPost` VALUES (22, 15, '2024-06-14', '2024-09-12', 0, 0);
INSERT INTO `statusPost` VALUES (23, 16, '2024-06-14', '2024-09-12', 0, 0);
INSERT INTO `statusPost` VALUES (24, 17, '2024-06-14', '2024-09-12', 0, 0);
INSERT INTO `statusPost` VALUES (25, 18, '2024-06-14', '2024-09-12', 0, 0);
INSERT INTO `statusPost` VALUES (26, 19, '2024-06-14', '2024-09-12', 0, 0);
INSERT INTO `statusPost` VALUES (27, 20, '2024-06-14', '2024-09-12', 0, 0);

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
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of userToken
-- ----------------------------
INSERT INTO `userToken` VALUES (1, 71, '8974d0ba5d1fa3e9eb3c75cf0e0d5d41', '2024-06-20 12:15:27', '2024-06-20 12:20:27');
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
) ENGINE = InnoDB AUTO_INCREMENT = 72 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (70, 'Admin', 'tnp08032000@gmail.com', '6c6a8d492a912a3b99b30786e32966afa67e1a9c0fb67e6ba011833e7864919d0b6b9bd39024868264e6e649fc2e57ccc8df3b3eff5c19c383d5d6390d839e50hD+CrjCw3X9NCyvuR0F9kQHnMw3jIhk6Z8VGmf3zuaA=', 'c51f58361fd2cbcaa318ddeceb2e551feab8a913f52e6c736db2f8ff52582e3c71d70d7a1e428d223c95602781a247fd630910408ce44a3cc055e9421fd8c059HHYC5ZhU72iHSnfHj1KuD0M+TRuT5bxW3CL2aVQyGMk=', 1, 'ca3e9226a916dff38acdcf5ebf91231ad17a1db719b64f973a97e867560189c4c0a590871659c9a1f244b845ea34f1bbc68e5ef344cb00e0b3ed9e5b16ed4efcwN6dPTujfSEaJmMGw+dLFq9bmJroD+CROisDSzb2RKoH/f5B34d/spku7nNOrh8X74Gl5rYd9ZHC14DlaJ631KXVxT3pfLG2/d1GCSZiUndU8It58zEJBngHS2pdZTnSvnOuqPfeiJ3pMdiEFx8+O53MNyepnashffpw3xdtyPB+M/rtUTRewUBI4IoB5Z0n');
INSERT INTO `users` VALUES (71, 'Thái Ngọc Phú', 'thaingocphu0803@gmail.com', 'd5fa95751d3e34513b973c08d2dbd6f75ba72a6adaf57b2cb45a0acc2900e018da0695cf107703b4def1e57b7e1041478416047a9d3adc0b37913eef6e839d5e1VTXKVXU34PgCQM2+2mancGM7q1GTORBWqn++Y+Lb2w=', '1a5c14a5288e0bbca9f1e7ad471ffef5a540d739b1a62c02870eb4dd4f3f7ed8daced2c92f90efaefc89fa985113c3ac892c2065bb9aa2e129ae121ec22b1ba7rt8VIVRmuEOAM9JUoLlTnUIpoDkyPuZYxp7e+sVnxTo=', 0, NULL);

SET FOREIGN_KEY_CHECKS = 1;
