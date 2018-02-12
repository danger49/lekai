/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : lk

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-02-12 18:02:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `lk_config`
-- ----------------------------
DROP TABLE IF EXISTS `lk_config`;
CREATE TABLE `lk_config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key` varchar(20) NOT NULL DEFAULT '',
  `value` varchar(200) NOT NULL DEFAULT '',
  `title` varchar(100) DEFAULT '',
  `type` varchar(20) DEFAULT 'input' COMMENT '类型',
  `condition` varchar(200) DEFAULT '' COMMENT '条件',
  `page` tinyint(1) DEFAULT '1' COMMENT '页面 1：基础配置 2首页 3课程页 4活动剪影 5乐开分享 6关于我们',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_key_page` (`key`,`page`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lk_config
-- ----------------------------
INSERT INTO `lk_config` VALUES ('1', 'name', '上海乐开文化传播有限公司', '公司标题', 'input', '', '1');
INSERT INTO `lk_config` VALUES ('2', 'host', 'www.lkmusic.cn', '网站域名', 'input', '', '1');
INSERT INTO `lk_config` VALUES ('3', 'address', '上海市闵行区都市路3800弄106号', '公司地址', 'input', '', '1');
INSERT INTO `lk_config` VALUES ('4', 'email', 'lk_music@126.com\r\n\r\n', '邮箱', 'input', '', '1');
INSERT INTO `lk_config` VALUES ('5', 'mobile', '13917605543\r\n\r\n', '手机号', 'input', '', '1');
INSERT INTO `lk_config` VALUES ('6', 'qq', '1311321542\r\n', 'QQ', 'input', '', '1');
INSERT INTO `lk_config` VALUES ('7', 'fax', '021-33683157\r\n\r\n', '传真', 'input', '', '1');
INSERT INTO `lk_config` VALUES ('8', 'title', '乐开音乐', '网站标题', 'input', '', '1');
INSERT INTO `lk_config` VALUES ('9', 'keywords', '游戏音乐外包', '网站关键字', 'textarea', '', '1');
INSERT INTO `lk_config` VALUES ('10', 'description', '乐开音乐是专注于游戏动漫音乐音效制作的顶尖专业音频团队，我们致力于成为游戏开发商最优秀最具性价比的合作伙伴，并以最专业的服务结合艺术高度带给每一位玩家淋漓尽致的体验！', '网站描述', 'textarea', '', '1');
INSERT INTO `lk_config` VALUES ('12', 'carousel_img1', './upload/2017-09-25/20170925025721_214.png', '轮播图片一', 'file', '1920px*880px', '2');
INSERT INTO `lk_config` VALUES ('13', 'carousel_img2', './upload/2017-09-25/20170925030740_381.png', '轮播图片二', 'file', '1920px*880px', '2');
INSERT INTO `lk_config` VALUES ('14', 'carousel_img3', './upload/2017-09-25/20170925031248_598.jpg', '轮播图片三', 'file', '1920px*880px', '2');
INSERT INTO `lk_config` VALUES ('15', 'carousel_img4', './upload/2017-09-25/20170925033834_390.png', '轮播图片四', 'file', '1920px*880px', '2');
INSERT INTO `lk_config` VALUES ('16', 'carousel_img5', './upload/2017-09-25/20170925033842_482.jpg', '轮播图片五', 'file', '1920px*880px', '2');
INSERT INTO `lk_config` VALUES ('17', 'cause_title1', '音乐启蒙', '音乐标题一', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('18', 'cause_description1', '以音乐的聆听和赏析为主体内容，伴随唱歌，游戏，体态律动为主的节奏性练习，建立良好的基础乐感和音乐兴趣；', '音乐描述一', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('19', 'cause_title2', '节奏王国', '音乐标题二', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('20', 'cause_description2', '以节奏为教学主题，伴随基础音高，游戏，体态律动，声势为主的节奏性教学，掌握节拍，识谱，并用基础奥尔夫乐器作课堂节奏练习；', '音乐描述二', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('21', 'cause_title3', '乐音王国', '音乐标题三', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('22', 'cause_description3', '音高视唱练习为主题，引入复合型节奏练习及切分，让孩子建立在自然音阶基础上保持稳定的演唱状态，具备基础的合唱能力，同时提升有难度的奥尔夫乐器演奏教学；', '音乐描述三', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('23', 'cause_title4', '乐队王国', '音乐标题四', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('24', 'cause_description4', '以节奏和音高教学为基础，奥尔夫乐器演奏及视唱为教学主体，建立良好的奥尔夫乐器演奏及配合能力；', '音乐描述四', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('25', 'cause_title5', '音乐之旅', '音乐标题五', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('26', 'cause_description5', '复杂的节奏练习及音高视唱，了解各种音乐风格特征，以及团队性的节奏练习，让孩子拥有一流的音乐素养及听想能力；', '音乐描述五', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('27', 'cause1', '', '课程图片一', 'file', '240px*193px', '2');
INSERT INTO `lk_config` VALUES ('28', 'cause2', '', '课程图片二', 'file', '240px*193px', '2');
INSERT INTO `lk_config` VALUES ('29', 'cause3', '', '课程图片三', 'file', '240px*193px', '2');
INSERT INTO `lk_config` VALUES ('30', 'cause4', '', '课程图片四', 'file', '240px*193px', '2');
INSERT INTO `lk_config` VALUES ('31', 'banner', './upload/2017-10-10/20171010034813_754.png', 'banner图片', 'file', '1920px*400px', '5');
INSERT INTO `lk_config` VALUES ('32', 'banner', './upload/2017-10-10/20171010034813_754.png', 'banner图片', 'file', '1920px*400px', '6');
INSERT INTO `lk_config` VALUES ('34', 'banner', './upload/2017-10-10/zp.jpg', 'banner图片', 'file', '1920px*400px', '3');
INSERT INTO `lk_config` VALUES ('35', 'banner', './upload/2017-10-10/20171010034813_754.png', 'banner图片', 'file', '1920px*400px', '4');
INSERT INTO `lk_config` VALUES ('36', 'cause5', '', '课程图片五', 'file', '240px*193px', '2');
INSERT INTO `lk_config` VALUES ('37', 'cause6', '', '课程图片六', 'file', '240px*193px', '2');
INSERT INTO `lk_config` VALUES ('38', 'cause_title6', '', '音乐标题六', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('39', 'cause_description6', '', '音乐描述六', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('40', 'title1', '', '标题一', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('41', 'description1', '', '描述1', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('42', 'title2', '', '标题二', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('43', 'description2', '', '描述二', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('44', 'title3', '', '标题三', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('45', 'description3', '', '描述三', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('46', 'title4', '', '标题四', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('47', 'description4', '', '描述四', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('48', 'title5', '', '标题五', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('49', 'description5', '', '描述五', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('50', 'carousel_img1_title', '', '轮播标题一', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('51', 'carousel_img2_title', '', '轮播标题二', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('52', 'carousel_img3_title', '', '轮播标题三', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('53', 'carousel_img4_title', '', '轮播标题四', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('54', 'carousel_img5_title', '', '轮播标题五', 'input', '', '2');
