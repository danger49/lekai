/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : lk

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-09-26 10:43:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `lk_photo`
-- ----------------------------
DROP TABLE IF EXISTS `lk_photo`;
CREATE TABLE `lk_photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '职位',
  `content` text CHARACTER SET utf8 COMMENT '具体描述',
  `add_time` datetime DEFAULT '0000-00-00 00:00:00',
  `order` int(11) NOT NULL DEFAULT '0',
  `img` varchar(200) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '活动图片',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of lk_photo
-- ----------------------------
INSERT INTO `lk_photo` VALUES ('4', '再见', '演奏完毕，正当大家回味在他清澈的钢琴声中时，他起身站起，为大家带来了第二首音乐，张震岳的《再见》，哇塞，这也太厉害了吧，但这，是真的。。', '2015-07-24 15:00:33', '0', './upload/2017-09-25/20170925215603_887.jpg');
INSERT INTO `lk_photo` VALUES ('5', '匈牙利舞曲', '这位小才女为大家带来了《匈牙利舞曲》，小小年纪，指法专业，力度情感处理到位，真正让我们感受到才华的力量', '2015-07-24 15:00:53', '0', './upload/2017-09-25/20170925215234_381.jpg');
INSERT INTO `lk_photo` VALUES ('6', '送别', '这位美丽的小萌女为大家带来的是钢琴演奏《送别》，这首耳熟能详的音乐换成钢琴演奏版，让所有到场的观众为之惊叹，真的好棒啊', '2015-07-24 15:02:15', '0', './upload/2017-09-25/20170925215416_500.jpg');
INSERT INTO `lk_photo` VALUES ('7', '加伏特舞曲', '这位小帅哥更是全才了，首先为大家带来的是钢琴演奏《加伏特舞曲》', '2017-09-18 15:41:39', '0', './upload/2017-09-25/20170925215455_993.jpg');
INSERT INTO `lk_photo` VALUES ('8', '雪宝宝', '萌翻全场的小天使，为大家带来了一首《雪宝宝》，可爱到了极点，而且是妈妈和我一起演唱哦', '2017-09-25 22:07:07', '0', './upload/2017-09-25/20170925214712_876.jpg');
INSERT INTO `lk_photo` VALUES ('9', '法国民歌', '这位小朋友为大家带来了大提琴独奏《法国民歌》，小小年纪，眉宇间已经渐露大师气质', '2017-09-25 22:07:11', '0', './upload/2017-09-25/20170925215718_398.jpg');
INSERT INTO `lk_photo` VALUES ('10', '青春修炼手册', '哇哦，最后一首嗨翻全场的歌曲来了，大家知道什么音乐吗？果然被你们猜中了，由这位小朋友领唱的《青春修炼手册》，带动了全场一起演唱，将整个整个音乐party带到了最高潮', '2017-09-25 22:07:15', '0', './upload/2017-09-25/20170925215756_983.jpg');
INSERT INTO `lk_photo` VALUES ('11', '哥俩一起唱', '', '2017-09-25 22:07:18', '0', './upload/2017-09-25/20170925215859_140.jpg');
INSERT INTO `lk_photo` VALUES ('12', '乐队照', '', '2017-09-25 22:07:20', '0', './upload/2017-09-25/20170925220453_678.jpg');
INSERT INTO `lk_photo` VALUES ('13', '雪宝宝', '', '2017-09-25 22:08:05', '0', './upload/2017-09-25/20170925220805_866.jpg');
INSERT INTO `lk_photo` VALUES ('14', '摇滚范儿', '我是一位摇滚范儿十足的歌手，大家跟我一起来', '2017-09-25 22:08:49', '0', './upload/2017-09-25/20170925220849_945.jpg');
INSERT INTO `lk_photo` VALUES ('15', '音乐party', '乐开儿童音乐俱乐部盛夏首次音乐party', '2017-09-25 22:10:33', '0', './upload/2017-09-25/20170925221033_939.jpg');
