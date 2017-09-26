/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : lk

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-09-26 10:47:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `lk_config`
-- ----------------------------
DROP TABLE IF EXISTS `lk_config`;
CREATE TABLE `lk_config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key` varchar(20) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `value` varchar(200) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '',
  `type` varchar(20) DEFAULT 'input' COMMENT '类型',
  `condition` varchar(200) DEFAULT '' COMMENT '条件',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of lk_config
-- ----------------------------
INSERT INTO `lk_config` VALUES ('1', 'name', '上海乐开文化传播有限公司', '网站标题', 'input', '');
INSERT INTO `lk_config` VALUES ('2', 'host', 'www.lkmusic.cn', '网站域名', 'input', '');
INSERT INTO `lk_config` VALUES ('3', 'address', '上海市闵行区都市路3800弄106号', '公司地址', 'input', '');
INSERT INTO `lk_config` VALUES ('4', 'email', 'lk_music@126.com\r\n\r\n', '邮箱', 'input', '');
INSERT INTO `lk_config` VALUES ('5', 'mobile', '13917605543\r\n\r\n', '手机号', 'input', '');
INSERT INTO `lk_config` VALUES ('6', 'qq', '1311321542\r\n', 'QQ', 'input', '');
INSERT INTO `lk_config` VALUES ('7', 'fax', '021-33683157\r\n\r\n', '传真', 'input', '');
INSERT INTO `lk_config` VALUES ('8', 'title', '乐开音乐', '网站标题', 'input', '');
INSERT INTO `lk_config` VALUES ('9', 'keywords', '游戏音乐外包', '网站关键字', 'textarea', '');
INSERT INTO `lk_config` VALUES ('10', 'description', '乐开音乐是专注于游戏动漫音乐音效制作的顶尖专业音频团队，我们致力于成为游戏开发商最优秀最具性价比的合作伙伴，并以最专业的服务结合艺术高度带给每一位玩家淋漓尽致的体验！', '网站描述', 'textarea', '');
INSERT INTO `lk_config` VALUES ('11', 'video', './upload/2017-09-25/20170925025903_212.mp4', '首页宣传视频', 'file', '格式mp4');
INSERT INTO `lk_config` VALUES ('12', 'carousel_img1', './upload/2017-09-25/20170925025721_214.png', '首页滚动图片一', 'file', '1920px*880px');
INSERT INTO `lk_config` VALUES ('13', 'carousel_img2', './upload/2017-09-25/20170925030740_381.png', '首页滚动图片二', 'file', '1920px*880px');
INSERT INTO `lk_config` VALUES ('14', 'carousel_img3', './upload/2017-09-25/20170925031248_598.jpg', '首页滚动图片三', 'file', '1920px*880px');
INSERT INTO `lk_config` VALUES ('15', 'carousel_img4', './upload/2017-09-25/20170925033834_390.png', '首页滚动图片四', 'file', '1920px*880px');
INSERT INTO `lk_config` VALUES ('16', 'carousel_img5', './upload/2017-09-25/20170925033842_482.jpg', '首页滚动图片五', 'file', '1920px*880px');
INSERT INTO `lk_config` VALUES ('17', 'music_title1', '音乐启蒙', '乐开音乐标题一', 'input', '');
INSERT INTO `lk_config` VALUES ('18', 'music_description1', '以音乐的聆听和赏析为主体内容，伴随唱歌，游戏，体态律动为主的节奏性练习，建立良好的基础乐感和音乐兴趣；', '乐开音乐描述一', 'textarea', '');
INSERT INTO `lk_config` VALUES ('19', 'music_title2', '节奏王国', '乐开音乐标题二', 'input', '');
INSERT INTO `lk_config` VALUES ('20', 'music_description2', '以节奏为教学主题，伴随基础音高，游戏，体态律动，声势为主的节奏性教学，掌握节拍，识谱，并用基础奥尔夫乐器作课堂节奏练习；', '乐开音乐描述二', 'textarea', '');
INSERT INTO `lk_config` VALUES ('21', 'music_title3', '乐音王国', '乐开音乐标题三', 'input', '');
INSERT INTO `lk_config` VALUES ('22', 'music_description3', '音高视唱练习为主题，引入复合型节奏练习及切分，让孩子建立在自然音阶基础上保持稳定的演唱状态，具备基础的合唱能力，同时提升有难度的奥尔夫乐器演奏教学；', '乐开音乐描述三', 'textarea', '');
INSERT INTO `lk_config` VALUES ('23', 'music_title4', '乐队王国', '乐开音乐标题四', 'input', '');
INSERT INTO `lk_config` VALUES ('24', 'music_description4', '以节奏和音高教学为基础，奥尔夫乐器演奏及视唱为教学主体，建立良好的奥尔夫乐器演奏及配合能力；', '乐开音乐描述四', 'textarea', '');
INSERT INTO `lk_config` VALUES ('25', 'music_title5', '音乐之旅', '乐开音乐标题五', 'input', '');
INSERT INTO `lk_config` VALUES ('26', 'music_description5', '复杂的节奏练习及音高视唱，了解各种音乐风格特征，以及团队性的节奏练习，让孩子拥有一流的音乐素养及听想能力；', '乐开音乐描述五', 'textarea', '');
INSERT INTO `lk_config` VALUES ('27', 'index_photo1', './upload/2017-09-25/20170925224631_321.png', '首页风采图片一', 'file', '240px*240px');
INSERT INTO `lk_config` VALUES ('28', 'index_photo2', './upload/2017-09-25/20170925224640_979.png', '首页风采图片二', 'file', '240px*240px');
INSERT INTO `lk_config` VALUES ('29', 'index_photo3', './upload/2017-09-25/20170925224649_590.png', '首页风采图片三', 'file', '240px*240px');
INSERT INTO `lk_config` VALUES ('30', 'index_photo4', './upload/2017-09-25/20170925224657_177.png', '首页风采图片四', 'file', '240px*240px');
