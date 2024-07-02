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

 Date: 01/07/2024 21:05:06
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
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of adminNotifications
-- ----------------------------
INSERT INTO `adminNotifications` VALUES (4, 70, 71, 39, 'Admin, Bài đăng CHO THUÊ NHÀ Ở CẨM LỆ vừa được duyệt', 0, '2024-07-01 14:03:46');
INSERT INTO `adminNotifications` VALUES (5, 70, 71, 40, 'Admin, Bài đăng CHO THUÊ NHÀ Ở QUẬN 77777 vừa được duyệt', 0, '2024-07-01 14:04:07');
INSERT INTO `adminNotifications` VALUES (6, 70, 71, 41, 'Admin, Bài đăng CHO THUÊ NHÀ Ở QUẬN 7 vừa được duyệt', 0, '2024-07-01 14:04:25');

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
) ENGINE = InnoDB AUTO_INCREMENT = 42 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES (28, 70, '58d4b14274f5f0e0fb9de73021bc04a64d39e576efd638bd92d70ef9aadb42c66694fb9496e34e880f271bbca10662bede9d11c67341e961108afc4143b3876cAFnjdG2AHXfGwZD8CKZRiKtzS307Cu7cKL+dbUfxvxZh3tiGS7e+4P7BMHtieoDvsx21R0XvI49zpE7Yp+sixJ378xWFvKWS/1Yy90qqTSh+867ZnGBhqDbZeJ9gGEDE/OrlCoRoOcYq8pBpdHsAQw==', 'phòng', 12, 'CHO THUÊ PHÒNG TRỌ QUẬN 7', 10, '33287f01a3b4e43f0a1cef4fc2e768dabd47a36ef5423f6fbf19149caf3de410e13df08a022bc40b65cdcded842a3bd1fd5510ee8aba4a3fb37c8aee8a2dc08fh8xzwcZ7K8eHaFHm8XkzVS3mQMJdZx9CB09szTM80vM=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\nsạch sẽ, thoáng mát', 'điện: 3k/kg\nnước: 100k/thnags', 'CHO THUÊ PHÒNG TRỌ QUẬN 5', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', '6501cd9752798481de18d2a602a54c5e64c8c66cda0642d5d7b7693ed80f1214aa540627e1e18a6f74f01793d16990b6c26401750a66f6eeb468e12049ec2842cIpMXZbspiZ8gBXJ9+sznk6YMTSReTTs+crX/LtFm19Ffzf66wfUb/FnzZdlI1/97T8Kzv8bil2LJoqKbpL8N7q7JzWsUQuAc3UuRsj2fQxI6cLlh0Q6oWI+c4QFiym97O7A8rVBJoTx3OsFj1ZNQAo0mXPoMlLH2AEFDfi2UnT8KqOTuVznLaFAa7zAYUxmlmQwylEm6lQbmvU4IotOouZVu0kCeQPjSs0bTS/oHYL9qoeSRj8mZ+N+niIme+A3xBDTuyG64VKiMv/hD/NOiA==');
INSERT INTO `posts` VALUES (29, 70, 'ecf9963c0f439ebac12b6a75fd76bbc0245c27cc53573d8ab2c320276b5e79cafb581b67e84d742cb4277d811c626a3bdb822620fd1849f62f7b66b4b2c899e0P2lVD2ldaiPN6fVUJG99TJflIaYOnAh1PPgDVgqBmR2TNJN8gpdhn9UpuFSavMw3jIkzVdiJXvM+iE/i1kOK8ubSJtyzWSUMo8ilOSF+3nNyG/jVBAvem2DCjOC/mmpMJqGle3J4TVhBBdJveCUyDQ==', 'phòng', 12, 'CHO THUÊ PHÒNG TRỌ QUẬN 323', 10, 'db605f3ad26d0f2800ea123ce71a8096523262e16be16deb6adf8ad939acffa10903c8da15014451a29eb2ad82609dfafc0f7bb017ca9c2376aebd76d38892ecR6qWW3dua8yY1ZgDhh8CVNHDMkSbiXZ80fmy1PsCAhc=', 'tủ lạnh, máy lạnh, máy giặc', 'đầy đủ tiện nghi\nsạch sẽ, thoáng mát', 'điện: 3k/kg\nnước: 100k/thnags', 'CHO THUÊ PHÒNG TRỌ QUẬN 5', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', '77f31d431287eee961136b4e7979a6ab971620a7166a3cbe774d9144e6b6d5806c65a38426c9155cba6bd6e5c2e7071080aca93e33715c61de758622a5d821bf+iO6xRFPtQrGGFzfxoNro8DwxouzjyUWvq3c8+urkIzbm6Tk3pY/ZdH8JfdNDNUO8gqceeBSzRH2EMC5a49GEgvWUNirI948Iynn/Xof67t5EX3wwNPU4jVkgW5BHVhQTYTgio6xAcm2ZGkpXS1yHTFbmo88+Nrq6N1vS8c4wM8h9fSK+NtL1F9OMH2bYAW8J2e87c0faFPSo1wmf03Mm3TJLEOrATVVA4NQFYd4/vw5O3uU01viPyC3ODXhs8eK/rr9AEY9hlV+UpQuS5X60Q==');
INSERT INTO `posts` VALUES (30, 70, '74cf503dcf6f1ce55d98d59738d1937e1eed6442a2af94b5b1c90c5746e5b149a95c7c22f4c19f1945ba9630ff910ed12b16ed28c9be4136fb1a9f3d20d8f7e9qzP+EJk1PmnImanq1Hynx+AAMu/1MG8n8IzoyOUaJPVyR1X6Zeoo9GppBQPYzDoA68PWOLkRqc7lAaWEtxkMTiS1db1aCsVB/1bG75yaq73OPFDMBwaSsKTKiJHNyGXy', 'phòng', 11, 'CHO THUÊ PHÒNG TRỌ Ở QUẬN 1', 5, '4fd4bbf75934f5d33c1762b2dff0e0fba0c0c0e47ed07ed19c66f273e34da60cd00e39737c0675f4c6a1020754d3903d01a41cf1ecaa262dbcf90a89f11d9a01KSz+L/cScnURbKtZxY8J9B21tlQ1cH+So5qhK1gixEo=', 'tủ lạnh, máy lạnh, máy giặc', 'sạch sẽ, thoáng mát\ncó ban công', 'điện : 3k3, nước 100k/người, wifi : 70k', 'giữ gìn vệ sinh chung', 'Gần New gym, Cicle K, Lotte Mart, Bệnh Viện Bình Thạnh,..', 'aad29328797da9470a2594ac371ebff14f6881ebd012d646f592caeaf9f79a821ff5dad66c79c72ef0c41a7f0edfedb87760c7fc0f5ad0067e8a0f415b4a2e22orGdrT/X0LE3USoUtTLAXDgK4kWl7CQbmNKAYz8ACalZIxje59/nnhBPsIpzBDj7Dfyx/VuZF3Avx+LaGspNiSp5IY00FWm5Y08keYKOfR8nILq9zwB31+iH+XJHSttqXDiwM3a9CFT/AK6Qn4KKmZKeguo4r1tnwI7c9RMtciTpBDm0qsCaeP1YUg5VXhdO9ImaHESzS/jaEa7UMB5jp/9GJ9jNZKlcKreo0gAIwpBcsF10Zd9Hy4esQ8Jc/+sN7LbyuRcu9wJtghfAwmfkMw==');
INSERT INTO `posts` VALUES (31, 70, 'd1298e82dd43c1f8ba334b8f462f8f15118ae470dbd3a256eb487dcd08b37927e67992f896f1fe9dd007f342c0faca520152af171d3e4493077097edc7efdfa9fKvAMwRcPmZkniqkUIWSQslTMSVpFFm2Ma4ktPE62n2k7mVZm/4l+KCkPQ7AkX4ZFLqT0HleYYFCsxtQVS6Mbn/X2BFAShLIXXcQualz6Tc=', 'căn hộ', 10, 'CHO THUÊ CĂN HỘ Ở MÊ LINH', 20, '67652f40a0e0f50fe2458c4a06b52c3dbb8d2000c2a8c9f34d8e0bee3fd432ecdbf8cb1122ed59fc865274646bd9e200fc7aefc1afaf84040019dd93d956cf910fUTzbKr7mAx2fyY/TJ1fm8wSacqhlusKarOl3Xhpxs=', 'ban công, máy điều hòa', 'gần chợ\nđầy đủ tiện nghi\n', 'cắt cỏ: 500k/tháng', 'tiền đổ rác tính theo tuần: 50k/tuần', 'CGV, MINISTOP', '883c15c1415fddc74ad2a864b902aaae02bdac4ddda3f7ff56f6e4a4ff1b11902569843c2177135437604065717b6d12b02b7fb9c74f1dd004fab14f94f2a444WjCRPvN81kvgAenVvouDjIxGzp3dnzn+9UnDm21s2PP/fA5axu1RApPnLmCi1KJQ5t0niBO2fRM40BjVFLZRMk04f1uaTuGus33edHn2EKf5VhuVLHVrnSciwUYIhvWTlxJeRdDFAtYdWM3HOWfOihe8jykZ5M2zQOi1ejUy8CTIifElddIbOCgdKgXDCLBwyGfoEhQGsA2h0g4AjDJ6RY8SBorGqGwp+ogcmr9xEviPQBpx1JAxdKZh41IYuU5+n6pz9hcEXG4akMszT5rXxJ9YRP+K+hk3dQVdVFyTyJqZ/TCzdu77+as7P77B73Gx');
INSERT INTO `posts` VALUES (32, 71, '636f999112d4631781568332624d3cbd44769e62422e7a0deec8e66c366d81a4959e3d024e43cfac156c69fd22292f27d8a070e521e9c534ada3d2b5bcaf7dc017010qe+x8fQ1gYdvL0fdGI3GZkPwgkGO0UVosm0Qx3ltbdGq0i6epAgXmsJ20LxOEsiOi3mNoufDHTtnV6dXJGXSGC49wadBM3X1eFb+0ffyb7HIKEW15KTnTu1TQVZw6TRd6dFSQlpsod8vHxzQDUaioy1lSuixTGZvdC/N8E=', 'căn hộ', 10, 'CHO THUÊ CĂN HỘ Ở QUẬN 10', 20, 'f43721b52d981d0f6967b9f020278ebef427a8f68cfcbe6700ad717914d889a06141514cd4ae2b12fb7235eb4de12170133a713ad217df799cc41a9ce0f2d2f9n35CwdN9iSoPthiTQ1595COzSWo56dsAv252gP7ELmg=', 'ban công, máy điều hòa', 'rộng rại, đầy đủ tiện nghi\ngần chợ', 'cắt cỏ: 500k/tháng', 'không có', 'circle K, lotte mart', 'b34cbde66ccbcb1d270585ca7d1d3b8132998e2dca816c6c87b909473d367dd0116ceca7f72d0a25d818b77a8c19d7eefdd52de1a72f1c5ef1f37baa129cbb233sxSaAqgHppMdG5XCA76HN4jsu71hD2VeViDE//G7J/owe8eyO6/0HhgKqwsauh5pBu/oMk7MJAE/sKE9L9vk84wsdZis4FZXcDiCHUWNLJiKLbXBZPTd+U8zXiWmDYuz/8Dw4ZadH6GB5YpBCf71yU1qg/8J00Ok/vMJ+0Yjc7uaKoIhCyuzdKJx4bmqGhG+1r/yVtdfdVF0WrVSt7+obCypWdP2I3veGkXvHCOtMfV5iFXqSyoBdZApVDXrnLNyIViiR8RTR7IrmkaR6LyLMhDJSkjE/xTX2WtNwz3IOCYb5/JDUeNh8TYZ3JpQOyb');
INSERT INTO `posts` VALUES (33, 71, '0dbd245c782691a4d5e23248aac53ff2ea280799963a1716c7dc13d18f19ae7a90470173ed8c5b14c7e612c13b33026e2d1accd7c50d9f6b1b9983321eebf3b90kVGjmuRZfTZOcLs5PmsYGvOT/3VkMfB1zo4+1bJ+8dukF3AG8K0t/Ytri3s1czMQ41ac98jdzwDNk8JNflyRM/N/Y125GW0yyOtV3kQfC0/5m85UUtsHkMnrHU5IWqt', 'căn hộ', 10, 'CHO THUÊ CĂN HỘ Ở QUẬN 10000', 20, 'a4dd256f7a01a65fa8c576d8cb24fb8e015eaa2b17bf6f5dd00e4afd0341f348c1e168a70ef5700ac65432d357db4081f039f41a17f0e6a67c757ec5166d33d2g6jTuhIYxRbejvHJdumOjHIzlIerXK5ykBsucp1g9IY=', 'ban công, máy điều hòa', 'rộng rại, đầy đủ tiện nghi\ngần chợ', 'cắt cỏ: 500k/tháng', 'không có', 'circle K, lotte mart', '5d1b3565fe8802c63aa5e182fd15d024abeaf1f4809583ad8a19030482580850cbad191638d1087d57ebb493ef691bc5228c55de6cd638e57f991ef1e1fe39f3rGuN1U6BG0PJ622NGdCxRb/aDKpAKnUKC9N3uazqvjg1SqdUDBmJfNNg4u0q0/rw+IEl3XR40cOx5x/E1AD/5ZOmjPiMO1qGX+bskG9F18QlgByF54G95punpYHbkLADYxcf+ekKuufGLXgmBmoU3EyrbtvWcq+KAPk+iEjg9xlbNPP+bmarCe7X5qEZ6hpT2wajOFZM/+KnRR9G0EHvG4X2hZeTtPubiHi4WNK224mWenI87Jk1o63h3ZisC4XxFR2koVwZ9uy+TlHfM7MAAUADQEFXQBKaanNdIX+omKboiPKkPRCMmWf3qusvyhGZ');
INSERT INTO `posts` VALUES (39, 71, '6696ebab922d3b0e64d4e440815016cd85f115a74a6ac92961de5f8768a37f87e611b1db6c45e9649877492f9a4cf0dc2abe60de1d21a69ffdf1cac703ae8e958XpQ10Ww2R3PoUxOyYzdhivpiuhqAsCsfmZLVkSVg4ANQi5yQZa2gYrpHHKbDJ3/M0fvbabBwZGtSOnphlNcXA8JwIqtILizPWlCqpw4xge4zJVdDIPhuaJWQ0S4LXD3', 'căn hộ', 10, 'CHO THUÊ NHÀ Ở CẨM LỆ', 20, '9060b7bc842c64c4bae0952654b1131fc4631cdcf3ba08a1c70fff318165cdfc2bef7fcbcde245abb3bafd32ba555997feacc8ac5da8ba8c32a6e9dab0c255ceF3sVqXJFwrz8PEhovNN5rWcBw96xCljgmRm/S32rqiw=', 'ban công, máy điều hòa', 'rộng rãi, thoáng mát\ngần chợ, gần công viên', 'cắt cỏ: 500k/tháng', 'không có', 'circle K, lotte mart', '6be4055b861a3422d3fb4a45d3d7f1ec6a819050caad9cd133cc727f206a16feb0c6f353da4a826a3c3d9123142515f39c463206538434afa5677d772ddb8420VQn+glDoNK7ALhwl9SEiKDL1BfpvLhWL1PGd0jlqG0SXs+NmYmWfI0abwrjjkQyXJszFzDaygr9NBFimcvDg6mcN4DWTinMSV/L68V6VscJgrqKduUphJm14YSeEWFfJ6ZsmKsWuMZPpTgY3VoeFkzMH19c0b/NrESHHQ6bJDcXR4iEecHDI7jsKmUtORpb5zafsYO/b3bpw+RV43p1iqWvWUdE1ZCWE0hs3ws+wa3CStfIF0JzcZ1ZtG9fEoatPC4rxcRnIQjEM62LG7LdAMRldX2njwUOTy/F33pkodpx4pI7WciBzIgUBdzWd0bJb');
INSERT INTO `posts` VALUES (40, 71, 'ab44b9c5cfd3fa9e86a4c1ae3c568f97982f139fbfd0dbd848b554da69a41d1a21a20665857220aef3e1e7a982e373719a9b0ed07b6f29323b8345c44006e7d6/F4lfPu36n4sA8XX4r3LGDPsgOkYHHmmVWXgB5nVcGfRkL8rmKaivCZtWdtDL2vbihuZf8Yi6dHXXE6ScbbwRtq5t9DApKN5paQqq1ljcatyfqvH/srFu1znV27cdb+0iuREWQcS4OWHvLwX7ik+lA==', 'căn hộ', 10, 'CHO THUÊ NHÀ Ở QUẬN 77777', 20, '2c48386da14bfeb3d9f70ffdad3fd2daa845cbcb7810e6d057ae5b12ad68365582e1621396b20dc7f37f65a32ae8bd43a2d4cfe852c09b185b44f0525df4fcde0hilnVOICOhb24eeX0HQgK1eA8ULRyWyZc9p7VlLjMg=', 'ban công, máy điều hòa', 'rộng rãi, thoáng mát\ngần chợ, gần công viên', 'cắt cỏ: 500k/tháng', 'không có', 'circle K, lotte mart', 'cfe0c0003ab15cb3194eea78f307037636d987a67c703df6dfc57e9e3bc4288c0e3739b7f354942f3a64ad0d0e5cab408877adb581f14bda93ea9e550d5f5e0f1chEVlTSAHpP0CgApZJV+fpv24cXHe4ZPqu5BWWj1Tzgg4NJUyeD2dJyrbZ7rKFkX71j9Qys4G2tIxaWWXE5yMbOWqPUwPRE50Yle0Lq25cER1irlRvxRsYgWhhMLdxQNd2dhlJlFpv7iUq6SSqWBugNhO6Qqyki6ueEiz8GhEdIrzlC0JSdDSVBUlG6gBh+ky9A888Zb8nDzMcqwJ/opV6TqXHS4QV+Z92xMdevvyR65lmm6dL1T7S+JOZv0kV5sjw7005dR5kuaOyOtVH4Y+o/aUSWHryIN7moMgyHxekYYCwaEgxgjp7tW3Wtqjm4');
INSERT INTO `posts` VALUES (41, 71, '56c1a3f97a92f9c3df4c715ae3480774205d9b7dc7bb242ad3989ce54279da40e18c271203aafb1db60abf001c013c0fb42d200cac9869ea084a917704f704b1bBxeziTNq/I/tx9A6TU6P86wm23R3nsl52KaDOIewOQTXzLHB6feURU318Z6Mnw3/+sIOzVXrIO7PsdFQLKS29O4zMaB8w8hdz0+yYtMUnQaa9qhKCM90ikTDLgvBAkd', 'căn hộ', 10, 'CHO THUÊ NHÀ Ở QUẬN 7', 20, 'e6c7c8ecf7663523e63cfa05d8ec9d36fe71bfb4133bc4279abf67bc5cd22181b7493ff21109d17a99dab5ced2328d881eb95db24ee748b55ca406fbe4af7f058QnlBmKJcBwDSnTDjxqkpqMkYs5CxbOQLKx35nOqF04=', 'ban công, máy điều hòa', 'rộng rãi, thoáng mát\ngần chợ, gần công viên', 'cắt cỏ: 500k/tháng', 'không có', 'circle K, lotte mart', '3bb326650eaffc70203f7b06208320a9140c434765aa4a906a8e4bdf30d63c4540f439f5d20c3d2160f5cced678fc1c1eb4ce9233c4966b9eafe4e736cbc98a0btmDt0SS4DuVn6ERNlQ+TuGwJW4gYuQqhdcw5NygSGjAcQgmqGlz+YPekOh/wwr/hd2yZ0rjjyBqrBmdGN4lvrPmsOlTgsGKPFESBG8uFKBZepnz+qOgeQynMnJjfIvM8XmcZXDv4yO9f2RuAYsdEkW1irkRBkq6vIWLmSPajyNsKPeMt+YrfNVL86fh6zBsKDoHAW/ck5r7HqH8PUJuSc5KUhccZrj8WnndagcGAX6OAdzPSCCdPHfjziWInWmu0EnHPq2mIdd/0U1Fjv9U+/NzaAQrJHiLj8FxldNAr/dMmyRdgcM52wFUVGs4V+ZR');

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
) ENGINE = InnoDB AUTO_INCREMENT = 49 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of statusPost
-- ----------------------------
INSERT INTO `statusPost` VALUES (35, 28, '2024-06-24', '2024-09-22', 0, 2);
INSERT INTO `statusPost` VALUES (36, 29, '2024-06-24', '2024-09-22', 0, 3);
INSERT INTO `statusPost` VALUES (37, 30, '2024-06-26', '2024-09-24', 0, 1);
INSERT INTO `statusPost` VALUES (38, 31, '2024-06-27', '2024-09-25', 0, 1);
INSERT INTO `statusPost` VALUES (39, 32, '2024-06-27', '2024-09-25', 0, 1);
INSERT INTO `statusPost` VALUES (40, 33, '2024-06-27', '2024-09-25', 0, 2);
INSERT INTO `statusPost` VALUES (46, 39, '2024-06-28', '2024-09-26', 0, 1);
INSERT INTO `statusPost` VALUES (47, 40, '2024-06-28', '2024-09-26', 0, 2);
INSERT INTO `statusPost` VALUES (48, 41, '2024-06-28', '2024-09-26', 0, 0);

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
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of userNotifications
-- ----------------------------
INSERT INTO `userNotifications` VALUES (1, 71, 39, 'Shirt, Bài viết cho thuê nhà ở cẩm lệ vừa được đăng', 0, '2024-07-01 14:02:22');
INSERT INTO `userNotifications` VALUES (2, 71, 40, 'Shirt, Bài viết CHO THUÊ NHÀ Ở QUẬN 77777 vừa được đăng', 0, '2024-07-01 14:02:47');
INSERT INTO `userNotifications` VALUES (3, 71, 41, 'Shirt, Bài viết CHO THUÊ NHÀ Ở QUẬN 7 vừa được đăng', 0, '2024-07-01 14:03:15');

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
INSERT INTO `users` VALUES (70, 'Admin', 'tnp08032000@gmail.com', '927275d62db71f8aa89fe2b6fa8c93164b397f3e406b56536fd49ac330b15f331a64813da1a9de71592b7e4d0cfa5167b889618665cf1d42916509d1a8c0523eGaqcBK+NBxZvcDHUHyOwIjWiMIagUT2GhD609gLx5E8=', '0fab1b440e5da53513e6ac72b9c0fff5bb8198ca94c2711de0842f45c498905e7e87fb43bc8361d14c055e7e58a81bf447371b1e1b4221d45ec65f381f58a965ROpbqAmiAq8up65anMdRky0efRaB+hmZ4l/OUyOBaP8=', 1, '53f46293d6ad0e59ee47cdd316a402798d29aefa6e056545eb4759210aaf435bfaf0d6b1efe63d3d683d1500078e667ad2b8daed569d273a369ce1e0413f6b0dxPWqLXuUmoFf7d2r/PVBUT+3nSDuFRwOoYlPbofN8bUz5+1UIh1qUnpss0JOwsdIAi2kA2cXdZB/czpWOtAvJJSm63NPLpAAyw/elnjR3UMFQ4dg7a5ez7i1jw+6ZQQnsDkhi/MyzWkzg7/xIexlT+uHh7xwtiKarOYdRIU9PykjQrknSR35090PD4jTjo4o');
INSERT INTO `users` VALUES (71, 'Shirt', 'thaingocphu0803@gmail.com', 'e8c55ab5800370e215b97f0e52401568acf9293b10ef75a774f585ff210ffe84dafb41d7ad30bc20cbaf57dbc3d098ef8379d0eed3cffcbd2385774c544b7055Jl+7uLDNDOm7u7Hp4W+mEqSv3Btj2sHIMsKND35pFCE=', '16ee175feff21a211fb25f2c98e5d0d7e2ed6559472030b688d0e69695127076af9832d199a6efd4e8d2bf9c2343037d19a7edb12edd3065101e280447c4bd7dOPBpknWHqlTD/siiQjXzR58KZ9oE+uOC0WW5dNn1C9s=', 0, '7243334c346cbe02f22025541cbc2532ffb70e0184ffa875a8668dc8cf1c795d2064eb99fcbff68dafea7e02ed1da93a6735bbc1ac05443195f34b1da1c1110bHfw3IhphR/5zZFdV1Fx0lQaGUi0UNHDbePy4YiI9jEZGo/pkiTw5WfyX0BTxjLkdWD7/LxNRW0BFnz6xnFf2B+oOOqWtSmmGaN1KM4gEppFieoiH09TJQvxGvUqCTCUPoQo/EY8mvUGfdpT7LYeBUFHbNWsXzphPgzgNhHtIKdFL9LQvlN1zLslwiAmBexE+');

SET FOREIGN_KEY_CHECKS = 1;
