/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : lk

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-02-12 18:25:05
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
INSERT INTO `lk_config` VALUES ('17', 'course_title1', '音乐启蒙', '音乐标题一', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('18', 'course_description1', '以音乐的聆听和赏析为主体内容，伴随唱歌，游戏，体态律动为主的节奏性练习，建立良好的基础乐感和音乐兴趣；', '音乐描述一', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('19', 'course_title2', '节奏王国', '音乐标题二', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('20', 'course_description2', '以节奏为教学主题，伴随基础音高，游戏，体态律动，声势为主的节奏性教学，掌握节拍，识谱，并用基础奥尔夫乐器作课堂节奏练习；', '音乐描述二', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('21', 'course_title3', '乐音王国', '音乐标题三', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('22', 'course_description3', '音高视唱练习为主题，引入复合型节奏练习及切分，让孩子建立在自然音阶基础上保持稳定的演唱状态，具备基础的合唱能力，同时提升有难度的奥尔夫乐器演奏教学；', '音乐描述三', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('23', 'course_title4', '乐队王国', '音乐标题四', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('24', 'course_description4', '以节奏和音高教学为基础，奥尔夫乐器演奏及视唱为教学主体，建立良好的奥尔夫乐器演奏及配合能力；', '音乐描述四', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('25', 'course_title5', '音乐之旅', '音乐标题五', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('26', 'course_description5', '复杂的节奏练习及音高视唱，了解各种音乐风格特征，以及团队性的节奏练习，让孩子拥有一流的音乐素养及听想能力；', '音乐描述五', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('27', 'course1', './images/index/d1.jpg', '课程图片一', 'file', '240px*193px', '2');
INSERT INTO `lk_config` VALUES ('28', 'course2', './images/index/d2.jpg', '课程图片二', 'file', '240px*193px', '2');
INSERT INTO `lk_config` VALUES ('29', 'course3', './images/index/d3.jpg', '课程图片三', 'file', '240px*193px', '2');
INSERT INTO `lk_config` VALUES ('30', 'course4', './images/index/d4.jpg', '课程图片四', 'file', '240px*193px', '2');
INSERT INTO `lk_config` VALUES ('31', 'banner', './upload/2017-10-10/20171010034813_754.png', 'banner图片', 'file', '1920px*400px', '5');
INSERT INTO `lk_config` VALUES ('32', 'banner', './upload/2017-10-10/20171010034813_754.png', 'banner图片', 'file', '1920px*400px', '6');
INSERT INTO `lk_config` VALUES ('34', 'banner', './upload/2017-10-10/zp.jpg', 'banner图片', 'file', '1920px*400px', '3');
INSERT INTO `lk_config` VALUES ('35', 'banner', './upload/2017-10-10/20171010034813_754.png', 'banner图片', 'file', '1920px*400px', '4');
INSERT INTO `lk_config` VALUES ('36', 'course5', './images/index/d5.jpg', '课程图片五', 'file', '240px*193px', '2');
INSERT INTO `lk_config` VALUES ('37', 'course6', './images/index/d6.jpg', '课程图片六', 'file', '240px*193px', '2');
INSERT INTO `lk_config` VALUES ('38', 'course_title6', '音乐标题六', '音乐标题六', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('39', 'course_description6', '音乐描述六', '音乐描述六', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('40', 'title1', '音乐素养？', '标题一', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('41', 'description1', '音乐素养教育，所谓由律动训练和音乐实践而获得的一种音乐修养。内容涵盖读谱、视唱听音、节奏训练、多声部和声、音乐赏析等多方面的综合理论基础。', '描述1', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('42', 'title2', '为什么要学音乐素养？', '标题二', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('43', 'description2', '一个学习音乐的人，不学习音乐素养就等于是一个机械地弹奏和歌唱的机器人，因为前期对音乐节奏，音高及音乐理论缺乏基础性的掌握，在学习乐器的过程中非常容易放弃，更无法谈对音乐及艺术建立良好的审美和理解。 学习音乐素养是为了全面提孩子的艺术综合素质，并以此提升学员对乐器和歌唱的学习质量，拥有良好的音乐听想能力，增强对音乐的感悟、理解和创造能力，这也是未来时代人群最核心的竞争力——感性能力。', '描述二', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('44', 'title3', '标题', '标题三', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('45', 'description3', '所有的教学音乐均为资深作曲家全新创作，为孩子们呈现真正具有时代审美的儿童音乐作品，让孩子们不再听着父辈的儿歌长大', '描述三', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('46', 'title4', '标题', '标题四', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('47', 'description4', '每一首音乐作品不仅仅是歌曲，而是为了特定的教学目标而设计，我们把知识点融入作品本身，让孩子们在歌唱中学习音乐。', '描述四', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('48', 'title5', '标题', '标题五', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('49', 'description5', '我们的作品，从热情澎湃的世界民俗音乐到严谨的古典音乐，风格极其多元化，让孩子们的音乐视野不再被局限', '描述五', 'textarea', '', '2');
INSERT INTO `lk_config` VALUES ('50', 'carousel_img1_title', '轮播标题一', '轮播标题一', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('51', 'carousel_img2_title', '轮播标题二', '轮播标题二', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('52', 'carousel_img3_title', '轮播标题三', '轮播标题三', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('53', 'carousel_img4_title', '轮播标题四', '轮播标题四', 'input', '', '2');
INSERT INTO `lk_config` VALUES ('54', 'carousel_img5_title', '轮播标题五', '轮播标题五', 'input', '', '2');
