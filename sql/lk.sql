/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : lk

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-09-28 14:35:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `lk_admin`
-- ----------------------------
DROP TABLE IF EXISTS `lk_admin`;
CREATE TABLE `lk_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(32) NOT NULL DEFAULT '' COMMENT '密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lk_admin
-- ----------------------------
INSERT INTO `lk_admin` VALUES ('1', 'admin', 'd477887b0636e5d87f79cc25c99d7dc9');

-- ----------------------------
-- Table structure for `lk_case`
-- ----------------------------
DROP TABLE IF EXISTS `lk_case`;
CREATE TABLE `lk_case` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '案例名称',
  `order` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `description` text NOT NULL COMMENT '描述',
  `icon` varchar(200) DEFAULT '' COMMENT 'icon',
  `img` varchar(200) DEFAULT '' COMMENT '图片',
  `video` varchar(200) DEFAULT '' COMMENT '宣传视频',
  `lable` varchar(200) NOT NULL DEFAULT '' COMMENT '标签',
  `client` varchar(100) NOT NULL DEFAULT '' COMMENT '客户',
  `type` int(11) NOT NULL DEFAULT '1' COMMENT '类型',
  `add_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8 COMMENT='案例';

-- ----------------------------
-- Records of lk_case
-- ----------------------------
INSERT INTO `lk_case` VALUES ('1', '上古神殿', '1', '          《上古神殿》（LostTemple）是一款金山运营的次世代硬派动作网络游戏（MMOACT），游戏的背景是希腊神话故事，主要面向高端游戏用户。', './upload/2015-07-08/20150708152100_418.jpg', './upload/2015-05-30/20150530213655_553.png', 'http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v', '宏伟史诗', '', '1', '2015-05-10 14:35:10', '2015-07-08 17:57:17');
INSERT INTO `lk_case` VALUES ('2', '神之叹息', '0', ' 《神之叹息》是一款西方魔幻哥特风格的网页游戏，游戏以独特的题材和新颖的画面给玩家们耳目一新的感觉，写实3D渲染画面，华丽战斗效果更是提升游戏的视觉效果及可玩度。', './upload/2015-05-30/20150530213631_300.jpg', './upload/2015-05-30/20150530213631_962.jpg', 'http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v', '魔幻哥特', '', '1', '2015-05-10 14:36:09', '2015-07-08 16:41:36');
INSERT INTO `lk_case` VALUES ('3', '沃尔学院', '0', '   《沃尔学院》是一款由美国KingsIsle Entertainment开发的一款超人气客户端3D魔法探险家庭网络游戏。游戏以哈利波特为题材，集合了所有网游的互动性、传统角色扮演、宠物坐骑以及卡牌回合制的战斗操作。', './upload/2015-07-08/20150708171137_122.png', './upload/2015-05-30/20150530213612_420.jpg', 'http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v', '魔法 奇幻', '', '1', '2015-05-10 14:36:13', '2015-07-08 17:57:46');
INSERT INTO `lk_case` VALUES ('4', '技能音效', '0', '游戏角色技能音效展示', './upload/2015-07-22/20150722204135_601.png', '', 'http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v', '', '', '2', '2015-05-17 14:30:31', '2015-07-22 20:41:35');
INSERT INTO `lk_case` VALUES ('5', '沃尔学院', '0', '《沃尔学院》由美国KingsIsle Entertainment开发，游戏内配音采用国内一线配音演员倾情录制。', './upload/2015-05-30/20150530213535_397.jpg', '', 'http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v', '', '', '3', '2015-05-17 14:30:34', '2015-07-23 18:32:51');
INSERT INTO `lk_case` VALUES ('6', '功夫派', '0', '', './upload/2015-05-30/20150530213512_614.png', '', '', '', '', '4', '2015-05-17 14:30:37', '2015-07-16 13:11:55');
INSERT INTO `lk_case` VALUES ('7', '摩尔庄园I', '0', '摩尔庄园动画片第一季', './upload/2015-05-30/20150530212856_774.png', '', '', '', '', '5', '2015-05-17 14:43:00', '2015-07-16 12:30:38');
INSERT INTO `lk_case` VALUES ('10', '自由之战', '0', '《自由之战》（Fight For Freedom）是由上海DW研发，GAEA Mobile及龙渊网络共同代理发行，将PC端的MOBA类游戏延伸到手机端的一款手游，也是全球首款在手机上实现用户间同步对战体验的手游产品。', './upload/2015-07-08/20150708172824_485.png', '', '', '', '', '1', '2015-07-08 17:28:24', '2015-07-08 17:28:24');
INSERT INTO `lk_case` VALUES ('11', '战神联盟', '0', '       《战神联盟》是一款全新的宇宙冒险题材游戏。离开地球50年后，赛尔们在宇宙中发现一个摩伊拉星系，这个星系拥有一种新能源——魂石。魂石能激发精灵强大的力量，使精灵进化为人形。新能源的发现，引来了居心不良的外星访客——阿\r\n瑞斯星人，他们拥有先进的科技，企图控制摩伊拉星系和上面的所有能源，一场星际浩劫，正式拉开帷幕！', './upload/2015-07-10/20150710122316_972.png', '', '', '', '', '1', '2015-07-08 18:07:34', '2015-07-10 12:23:16');
INSERT INTO `lk_case` VALUES ('17', '豌豆战争', '0', ' 《豌豆战争》是一款Q版射击竞技类网页游戏，在游戏里中您可以和不同的玩家进行竞技对抗，简易的键盘操作，让您在整个竞技对抗过程中更容易与玩家互动和竞技，从而体验到刺激、欢乐、愉快的游戏乐趣。', './upload/2015-07-10/20150710125438_197.png', '', '', '', '', '1', '2015-07-10 12:54:38', '2015-07-15 18:04:16');
INSERT INTO `lk_case` VALUES ('18', '极速猎人', '0', ' 《极速猎人》是广州创游信息科技有限公司研发的一款3D飞行竞速多端游戏。区别于传统赛车游戏，赛的不是车，而是飞艇。游戏采用了世界级的图像及物理引擎，立体漂移系统，爬升玩法及可爱的宠物，让广大玩家爱不释手。', './upload/2015-07-10/20150710134901_316.jpg', '', '', '', '', '1', '2015-07-10 13:49:01', '2015-07-10 13:49:37');
INSERT INTO `lk_case` VALUES ('19', '赛罗奥特曼', '0', '《赛罗奥特曼》是一款以动漫奥特曼为背景的科幻2D即时战斗游戏。拥有奥特曼变身、超强辅助战斗的宠物、丰富有趣的副本BOSS，酷炫的飞行器，赶快来化身奥特曼，消灭大怪兽吧！', './upload/2015-07-10/20150710140312_819.jpg', '', '', '', '', '1', '2015-07-10 14:03:12', '2015-07-10 14:03:11');
INSERT INTO `lk_case` VALUES ('21', '极速猎人', '0', '《极速猎人》是广州创游信息科技有限公司研发的一款3D飞行竞速多端游戏。区别于传统赛车游戏，赛的不是车，而是飞艇。游戏采用了世界级的图像及物理引擎，立体漂移系统，爬升玩法及可爱的宠物，让广大玩家爱不释手。', './upload/2015-07-13/20150713220526_770.jpg', '', '', '', '', '4', '2015-07-13 22:05:26', '2015-07-13 22:05:26');
INSERT INTO `lk_case` VALUES ('22', '疾风勇者传', '0', '    《疾风勇者传》(reverse world)是一款日式动漫画风的强联网多人动作RPG，画面精美大气，典型日漫人物设定配合架空剧情，既有热血少年，也有萌系萝莉，既有邪恶巨龙，也有美艳妖女，将经典动作RPG游戏重现手机网络时代。', './upload/2015-07-15/20150715175108_907.jpg', '', '', '', '', '1', '2015-07-15 17:50:26', '2015-07-15 17:51:08');
INSERT INTO `lk_case` VALUES ('23', '魔法哈奇II', '0', '  《魔法哈奇2》是一款大型3D卡牌战斗的角色扮演类网络游戏。高清精美的3D画面,华丽震撼的魔法技能,千奇百怪的宠物坐骑,引人入胜的剧情和动画,丰富有趣的 副本关卡使游戏引人入胜。', './upload/2015-07-15/20150715175617_991.png', '', '', '', '', '1', '2015-07-15 17:56:17', '2015-07-16 12:03:23');
INSERT INTO `lk_case` VALUES ('24', '赛尔号', '0', ' 《赛尔号》是由上海淘米网络科技有限公司开发运营的中国儿童科幻的社区养成类网页游戏。于2009年6月12日发布。\r\n本游戏以虚拟社区更加符合14岁以下人群的习惯，融入了丰富多彩的精灵收集对抗元素，使得整个社区更加主题化更加深入。', './upload/2015-07-15/20150715180333_197.jpg', '', '', '', '', '1', '2015-07-15 18:03:33', '2015-07-15 18:03:43');
INSERT INTO `lk_case` VALUES ('25', '赤瞳之刃', '0', '《赤瞳之刃》是由淘米游戏开发并运营的一款3D动作角色扮演类游戏，已于2015年2月10日展翅首测 ，2015年3月18日青春内测，于2015年4月8日进行不删档内测。', './upload/2015-07-15/20150715180948_891.png', '', '', '', '', '1', '2015-07-15 18:09:48', '2015-07-15 18:09:48');
INSERT INTO `lk_case` VALUES ('26', 'iWar', '0', '《iWar》是一款将战略规划和快节奏对战融为一体的策略游戏，通过不同兵种的搭配让玩家打造最强军队。', './upload/2015-07-15/20150715181519_973.png', '', '', '', '', '1', '2015-07-15 18:15:19', '2015-07-15 18:15:19');
INSERT INTO `lk_case` VALUES ('27', '热血精灵派', '0', '《热血精灵派》是一款回合制多精灵对战游戏。该游戏是以健康、快乐、探索、智慧为理念，融合精灵战斗、养成与角色扮演的虚拟社区。', './upload/2015-07-15/20150715183424_298.png', '', '', '', '', '1', '2015-07-15 18:34:24', '2015-07-15 18:34:23');
INSERT INTO `lk_case` VALUES ('28', '摩尔庄园', '0', ' 《摩尔庄园》是一个专门针对儿童的网上虚拟乐园，以“健康、快乐、创造、分享”为主题。所有的快乐都由小摩尔们一起创造，一起分享。', './upload/2015-07-16/20150716102424_158.jpg', '', '', '', '', '1', '2015-07-15 18:52:08', '2015-07-16 10:24:24');
INSERT INTO `lk_case` VALUES ('29', '摩尔庄园II', '0', ' 《摩尔庄园2》，是由上海淘米网络科技有限公司专为中国6—14岁儿童打造的虚拟互动社区。新鲜有趣的职业体验、精致唯美的角色故事、生动活泼的宠物养成，共同交织出一个妙趣横生清新浪漫的摩尔世界。', './upload/2015-07-15/20150715185409_756.png', '', '', '', '', '1', '2015-07-15 18:54:09', '2015-07-16 10:35:32');
INSERT INTO `lk_case` VALUES ('30', 'iMole', '0', '《iMole》是由淘米网研发的一款角色扮演手机游戏，于2011年发行。在游戏中，将会让玩家扮演的小摩尔将在一个全新的山谷中，一边齐心协力开垦荒地，一边\r\n摩尔庄园\r\n摩尔庄园\r\n要防御外来的攻击，来经营起另一个与网页版摩尔庄园不一样的崭新的摩尔庄园。', './upload/2015-07-15/20150715185529_972.jpg', '', '', '', '', '1', '2015-07-15 18:55:29', '2015-07-15 18:55:28');
INSERT INTO `lk_case` VALUES ('31', '小花仙', '0', '《小花仙》是淘米出品的网页游戏，于2009年12月25日发行。游戏以微观世界为故事舞台，描写了不同身份的花仙交织出的奇幻冒险。', './upload/2015-07-16/20150716102903_416.png', '', '', '', '', '1', '2015-07-16 10:29:03', '2015-07-16 10:29:03');
INSERT INTO `lk_case` VALUES ('32', '功夫派', '0', '《功夫派》是上海淘米公司研发的一款角色扮演类网页游戏，于2010年6月25日发行。\r\n每个孩子可以自主扮演成派派、伊尔、大竹、敖天、大奔、雪灵、天策和利牙等角色在艾尔大陆神秘功夫世界探险，通过副本挑战、社区养成来培养儿童团队协作、创新探索精神，同时了解并弘扬中华传统功夫文化。', './upload/2015-07-16/20150716111258_453.png', '', '', '', '', '1', '2015-07-16 11:12:58', '2015-07-16 11:12:58');
INSERT INTO `lk_case` VALUES ('33', '约瑟传说', '0', '《约瑟传说》故事主要在神秘的阿卡迪亚星展开，而你就是飞船中赛尔第七小队的队长。围绕这个一分为二的有着千年历史的星球，即将展现在所有热爱太空探险的赛尔面前！', './upload/2015-07-16/20150716112140_769.jpg', '', '', '', '', '1', '2015-07-16 11:21:40', '2015-07-16 11:21:40');
INSERT INTO `lk_case` VALUES ('34', '三国战', '0', ' 三国时代是中国的一个历史时期。东汉末年，曹操统一中国北方并实际上以丞相的职位掌握东汉政权，取得“魏王” 称号，加九锡。', './upload/2015-07-16/20150716112940_722.jpg', '', '', '', '', '1', '2015-07-16 11:29:40', '2015-07-16 11:35:15');
INSERT INTO `lk_case` VALUES ('35', '部落战争', '0', ' 游戏以策略战争为主题，通过经营自己的村庄，玩家可逐渐强大兵力，进而成千上万的玩家进行战斗。', './upload/2015-07-16/20150716113926_141.jpg', '', '', '', '', '1', '2015-07-16 11:37:39', '2015-07-16 11:39:26');
INSERT INTO `lk_case` VALUES ('36', '摩灵世界', '0', '  摩灵世界是一款人气火热的休闲类手机网游，摩灵世界采用3D引擎打造，画面精致，出场人物造型各异，十分讨人喜爱，同时摩灵世界操作都是通过功能按钮的组合来完成。', './upload/2015-07-24/20150724185345_308.png', '', '', '', '', '1', '2015-07-16 11:40:38', '2015-07-24 18:53:44');
INSERT INTO `lk_case` VALUES ('37', '不朽之战', '0', '《不朽之战》是一款角色扮演单机游戏，北欧神话史诗战争题材。', './upload/2015-07-16/20150716115036_742.png', '', '', '', '', '1', '2015-07-16 11:50:36', '2015-07-16 11:50:36');
INSERT INTO `lk_case` VALUES ('38', '摩尔卡丁车', '0', '《摩尔卡丁车》是一款赛车类冒险游戏。属于淘米网络推出的首款iOS平台收费下载游戏，正式上架当日就进入iPad收费应用总榜第十名的成绩。', './upload/2015-07-16/20150716115508_987.jpg', '', '', '', '', '1', '2015-07-16 11:55:08', '2015-07-16 11:55:07');
INSERT INTO `lk_case` VALUES ('39', '冰面上的小吃货', '0', '《冰面上的小吃货》是一款融合动作、休闲、闯关、益智于一体的滑冰解谜类游戏。游戏以新形象小海象的捕鱼之旅为主线，带领大家体验极地村的捕鱼乐趣！', './upload/2015-07-16/20150716115824_264.jpg', '', '', '', '', '1', '2015-07-16 11:58:24', '2015-07-16 11:58:23');
INSERT INTO `lk_case` VALUES ('40', '摩尔庄园III', '0', '摩尔庄园动画片第三季', './upload/2015-07-16/20150716122826_615.png', '', '', '', '', '5', '2015-07-16 12:28:26', '2015-07-16 12:28:26');
INSERT INTO `lk_case` VALUES ('41', '功夫派', '0', '功夫派动漫主题曲', './upload/2015-07-16/20150716122923_744.png', '', '', '', '', '5', '2015-07-16 12:29:23', '2015-07-16 12:58:21');
INSERT INTO `lk_case` VALUES ('42', '赛尔号', '0', '赛尔号大电影主题曲', './upload/2015-07-16/20150716123213_839.png', '', '', '', '', '5', '2015-07-16 12:32:13', '2015-07-16 12:32:13');
INSERT INTO `lk_case` VALUES ('43', '刀魂赋', '0', '侠客题材主题曲', './upload/2015-07-16/20150716124220_816.png', '', '', '', '', '5', '2015-07-16 12:42:20', '2015-07-16 12:42:20');
INSERT INTO `lk_case` VALUES ('44', '情字何戒', '0', '宫廷爱情主题曲', './upload/2015-07-16/20150716124430_723.png', '', '', '', '', '5', '2015-07-16 12:44:30', '2015-07-16 13:09:57');
INSERT INTO `lk_case` VALUES ('46', '怪物音效', '0', '游戏怪物的相关音效展示', './upload/2015-07-22/20150722204207_622.png', '', '', '', '', '2', '2015-07-22 20:42:07', '2015-07-22 20:42:06');
INSERT INTO `lk_case` VALUES ('47', '普攻音效', '0', '游戏角色普通攻击音效展示', './upload/2015-07-22/20150722204228_586.png', '', '', '', '', '2', '2015-07-22 20:42:28', '2015-07-22 20:42:27');
INSERT INTO `lk_case` VALUES ('48', 'UI音效', '0', '游戏菜单的相关音效展示', './upload/2015-07-22/20150722204247_820.png', '', '', '', '', '2', '2015-07-22 20:42:47', '2015-07-22 20:42:46');
INSERT INTO `lk_case` VALUES ('49', '自由之战', '0', '自由之战游戏内角色配音展示', './upload/2015-07-22/20150722204436_502.png', '', '', '', '', '3', '2015-07-22 20:44:36', '2015-07-22 20:44:36');
INSERT INTO `lk_case` VALUES ('50', '私奔到三国', '0', '游戏产品《私奔到三国》游戏角色配音试听', './upload/2015-07-22/20150722204608_704.png', '', '', '', '', '3', '2015-07-22 20:46:08', '2015-07-22 20:46:08');
INSERT INTO `lk_case` VALUES ('51', '坐骑音效', '0', ' 游戏内坐骑相关音效展示', './upload/2015-07-22/20150722204934_385.jpg', '', '', '', '', '2', '2015-07-22 20:48:59', '2015-07-22 20:49:34');
INSERT INTO `lk_case` VALUES ('52', '奥林匹斯', '0', 'CG宣传视频', './upload/2015-07-24/20150724121420_878.png', '', '', '', '', '4', '2015-07-24 12:14:20', '2015-07-24 12:14:20');
INSERT INTO `lk_case` VALUES ('53', '赛尔号', '0', '赛尔号登陆动画', './upload/2015-07-24/20150724121446_832.png', '', '', '', '', '4', '2015-07-24 12:14:46', '2015-07-24 12:14:46');
INSERT INTO `lk_case` VALUES ('54', '战神联盟', '0', '赛尔号战神联盟宣传动画', './upload/2015-07-24/20150724121515_329.jpg', '', '', '', '', '4', '2015-07-24 12:15:15', '2015-07-24 12:15:15');
INSERT INTO `lk_case` VALUES ('55', '淘米视频', '0', '淘米年会片头视频', './upload/2015-07-24/20150724121545_491.png', '', '', '', '', '4', '2015-07-24 12:15:45', '2015-07-24 12:15:45');
INSERT INTO `lk_case` VALUES ('56', '史诗战争', '0', '', './upload/2015-07-24/20150724130640_678.png', '', '', '', '', '3', '2015-07-24 13:06:40', '2015-07-24 13:06:40');
INSERT INTO `lk_case` VALUES ('57', 'LKMUSIC', '0', '', './upload/2017-06-20/20170620112331_606.png', './upload/2017-06-20/20170620112331_423.png', '', '', '', '1', '2017-06-20 11:23:31', '2017-06-20 11:23:29');

-- ----------------------------
-- Table structure for `lk_case_category`
-- ----------------------------
DROP TABLE IF EXISTS `lk_case_category`;
CREATE TABLE `lk_case_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '',
  `order` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lk_case_category
-- ----------------------------
INSERT INTO `lk_case_category` VALUES ('1', '动漫配乐', '5');
INSERT INTO `lk_case_category` VALUES ('2', '声优配音', '4');
INSERT INTO `lk_case_category` VALUES ('3', '音乐课堂', '3');
INSERT INTO `lk_case_category` VALUES ('4', '音效设计', '2');
INSERT INTO `lk_case_category` VALUES ('5', '游戏音乐', '1');

-- ----------------------------
-- Table structure for `lk_case_detail`
-- ----------------------------
DROP TABLE IF EXISTS `lk_case_detail`;
CREATE TABLE `lk_case_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `case_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '名称',
  `lable` varchar(100) NOT NULL DEFAULT '',
  `link` varchar(200) NOT NULL DEFAULT '',
  `order` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `src` varchar(200) NOT NULL DEFAULT '' COMMENT '视频  音频资源',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=190 DEFAULT CHARSET=utf8 COMMENT='案例明细表';

-- ----------------------------
-- Records of lk_case_detail
-- ----------------------------
INSERT INTO `lk_case_detail` VALUES ('1', '1', '诸神之巅', '上古神殿', './upload/2015-07-08/20150708145812_939.jpg', '0', './upload/2015-07-09/20150709133627_505.mp3');
INSERT INTO `lk_case_detail` VALUES ('3', '1', '奥林匹斯之殿', '', './upload/2015-07-08/20150708150409_497.jpg', '0', './upload/2015-07-09/20150709133717_733.mp3');
INSERT INTO `lk_case_detail` VALUES ('4', '1', '登陆主题音乐', '', './upload/2015-07-08/20150708152346_213.jpg', '0', './upload/2015-07-08/20150708152414_105.mp3');
INSERT INTO `lk_case_detail` VALUES ('5', '1', '神魔之战', '', './upload/2015-07-08/20150708152432_449.jpg', '0', './upload/2015-07-08/20150708152500_713.mp3');
INSERT INTO `lk_case_detail` VALUES ('6', '2', '创建角色界面', '', './upload/2015-07-08/20150708161356_666.jpg', '0', './upload/2015-07-08/20150708162408_548.mp3');
INSERT INTO `lk_case_detail` VALUES ('8', '1', '独眼巨人', '', './upload/2015-07-08/20150708153021_982.jpg', '0', './upload/2015-07-08/20150708153048_864.mp3');
INSERT INTO `lk_case_detail` VALUES ('9', '1', '赛弗城', '', './upload/2015-07-08/20150708153140_152.jpg', '0', './upload/2015-07-08/20150708153204_567.mp3');
INSERT INTO `lk_case_detail` VALUES ('10', '1', '糜烂之地', '', './upload/2015-07-08/20150708153324_130.jpg', '0', './upload/2015-07-08/20150708154215_408.mp3');
INSERT INTO `lk_case_detail` VALUES ('11', '2', '血族主城', '', './upload/2015-07-08/20150708162541_275.jpg', '0', './upload/2015-07-08/20150708162608_973.mp3');
INSERT INTO `lk_case_detail` VALUES ('12', '2', '人族区域', '', './upload/2015-07-08/20150708162729_571.jpg', '0', './upload/2015-07-08/20150708162752_896.mp3');
INSERT INTO `lk_case_detail` VALUES ('13', '2', '人族战斗音乐', '', './upload/2015-07-08/20150708162807_207.jpg', '0', './upload/2015-07-08/20150708162831_747.mp3');
INSERT INTO `lk_case_detail` VALUES ('14', '2', '血族战斗音乐', '', './upload/2015-07-08/20150708162850_172.jpg', '0', './upload/2015-07-08/20150708162915_405.mp3');
INSERT INTO `lk_case_detail` VALUES ('15', '1', '勇士出征', '', './upload/2015-07-08/20150708154439_846.jpg', '0', './upload/2015-07-08/20150708154646_155.mp3');
INSERT INTO `lk_case_detail` VALUES ('16', '3', '游戏登陆音乐', '', './upload/2015-07-08/20150708171201_227.jpg', '0', './upload/2015-07-08/20150708171222_294.mp3');
INSERT INTO `lk_case_detail` VALUES ('17', '3', '向着正义前进', '', '/upload/2015-07-08/20150708171312_512.jpg', '0', './upload/2015-07-08/20150708171326_685.mp3');
INSERT INTO `lk_case_detail` VALUES ('18', '2', '血族的宿命', '', './upload/2015-07-08/20150708163145_638.png', '0', './upload/2015-07-08/20150708163305_760.mp3');
INSERT INTO `lk_case_detail` VALUES ('19', '3', '魔法师的考验', '', './upload/2015-07-08/20150708171418_584.jpg', '0', './upload/2015-07-08/20150708171438_399.mp3');
INSERT INTO `lk_case_detail` VALUES ('20', '3', '降服坐骑', '', './upload/2015-07-08/20150708171452_399.jpg', '0', './upload/2015-07-08/20150708171512_423.mp3');
INSERT INTO `lk_case_detail` VALUES ('21', '3', '邪恶斯泰尔', '', './upload/2015-07-08/20150708171731_401.png', '0', './upload/2015-07-08/20150708171751_321.mp3');
INSERT INTO `lk_case_detail` VALUES ('22', '3', '学院的酒馆', '', './upload/2015-07-08/20150708171631_299.jpg', '0', './upload/2015-07-08/20150708171654_791.mp3');
INSERT INTO `lk_case_detail` VALUES ('23', '3', '沃尔之战', '', './upload/2015-07-08/20150708171925_292.jpg', '0', './upload/2015-07-08/20150708171938_812.mp3');
INSERT INTO `lk_case_detail` VALUES ('24', '9', '视频测试', '', '', '0', './upload/2015-07-08/20150708172602_236.m4v');
INSERT INTO `lk_case_detail` VALUES ('25', '10', '自由之战', '', './upload/2015-07-08/20150708173850_923.jpg', '0', './upload/2015-07-08/20150708173915_737.mp3');
INSERT INTO `lk_case_detail` VALUES ('26', '10', '英雄选择界面', '', './upload/2015-07-08/20150708175523_928.png', '0', './upload/2015-07-08/20150708175533_999.mp3');
INSERT INTO `lk_case_detail` VALUES ('27', '10', '游戏界面', '', './upload/2015-07-08/20150708175606_317.png', '0', './upload/2015-07-08/20150708175620_217.mp3');
INSERT INTO `lk_case_detail` VALUES ('28', '10', '新手教程音乐', '', './upload/2015-07-08/20150708180153_117.png', '0', './upload/2015-07-08/20150708180209_122.mp3');
INSERT INTO `lk_case_detail` VALUES ('29', '10', '火焰地图战斗', '', './upload/2015-07-08/20150708175917_188.png', '0', './upload/2015-07-09/20150709154523_926.mp3');
INSERT INTO `lk_case_detail` VALUES ('30', '10', '冰雪地图战斗', '', './upload/2015-07-08/20150708180002_199.jpg', '0', './upload/2015-07-09/20150709154542_421.mp3');
INSERT INTO `lk_case_detail` VALUES ('31', '10', '3V3 PVP音乐', '', './upload/2015-07-08/20150708180220_249.jpg', '0', './upload/2015-07-08/20150708180239_238.mp3');
INSERT INTO `lk_case_detail` VALUES ('32', '11', '星河入侵', '', './upload/2015-07-10/20150710122351_746.png', '0', './upload/2015-07-10/20150710122405_577.mp3');
INSERT INTO `lk_case_detail` VALUES ('33', '11', '浩瀚的星空', '', './upload/2015-07-10/20150710122437_926.png', '0', './upload/2015-07-10/20150710122503_641.mp3');
INSERT INTO `lk_case_detail` VALUES ('34', '11', '太空星河港', '', './upload/2015-07-10/20150710122527_213.png', '0', './upload/2015-07-10/20150710122557_276.mp3');
INSERT INTO `lk_case_detail` VALUES ('35', '11', '迷雾星', '', './upload/2015-07-10/20150710122611_256.jpg', '0', './upload/2015-07-10/20150710122626_802.mp3');
INSERT INTO `lk_case_detail` VALUES ('36', '11', '战神出击', '', './upload/2015-07-10/20150710122958_786.jpg', '0', './upload/2015-07-10/20150710123014_959.mp3');
INSERT INTO `lk_case_detail` VALUES ('37', '17', '魔法森林', '', './upload/2015-07-10/20150710125726_202.jpg', '0', './upload/2015-07-10/20150710125742_839.mp3');
INSERT INTO `lk_case_detail` VALUES ('38', '17', '蘑菇小城', '', './upload/2015-07-10/20150710125803_300.jpg', '0', './upload/2015-07-10/20150710125825_474.mp3');
INSERT INTO `lk_case_detail` VALUES ('39', '17', '彩虹瀑布', '', './upload/2015-07-10/20150710125932_297.jpg', '0', './upload/2015-07-10/20150710125948_777.mp3');
INSERT INTO `lk_case_detail` VALUES ('40', '17', '风笛之城', '', './upload/2015-07-10/20150710125958_689.jpg', '0', './upload/2015-07-10/20150710130018_973.mp3');
INSERT INTO `lk_case_detail` VALUES ('41', '17', '炸弹工厂', '', './upload/2015-07-10/20150710130946_732.jpg', '0', './upload/2015-07-10/20150710131001_512.mp3');
INSERT INTO `lk_case_detail` VALUES ('42', '17', '丛林海滩', '', './upload/2015-07-10/20150710131014_746.png', '0', './upload/2015-07-10/20150710131029_130.mp3');
INSERT INTO `lk_case_detail` VALUES ('43', '17', '能源回收站', '', './upload/2015-07-10/20150710131053_201.jpg', '0', './upload/2015-07-10/20150710131108_817.mp3');
INSERT INTO `lk_case_detail` VALUES ('44', '18', '黄金矿山', '', './upload/2015-07-10/20150710135519_799.jpg', '0', './upload/2015-07-10/20150710135534_986.mp3');
INSERT INTO `lk_case_detail` VALUES ('45', '18', '圣诞主题赛道', '', './upload/2015-07-10/20150710135641_936.jpg', '0', './upload/2015-07-10/20150710135658_128.mp3');
INSERT INTO `lk_case_detail` VALUES ('46', '18', '游戏大厅', '', './upload/2015-07-10/20150710135714_614.png', '0', './upload/2015-07-10/20150710135729_838.mp3');
INSERT INTO `lk_case_detail` VALUES ('47', '18', '遗迹狂飙', '', './upload/2015-07-10/20150710135812_534.png', '0', './upload/2015-07-10/20150710135828_794.mp3');
INSERT INTO `lk_case_detail` VALUES ('48', '18', '滨海火山', '', './upload/2015-07-10/20150710135840_374.png', '0', './upload/2015-07-10/20150710135856_547.mp3');
INSERT INTO `lk_case_detail` VALUES ('49', '18', '猫猫探险岛', '', './upload/2015-07-10/20150710135910_364.jpg', '0', './upload/2015-07-10/20150710135926_553.mp3');
INSERT INTO `lk_case_detail` VALUES ('50', '19', '奥特曼主题曲', '', './upload/2015-07-10/20150710142218_762.jpg', '0', './upload/2015-07-10/20150710142240_654.mp3');
INSERT INTO `lk_case_detail` VALUES ('51', '19', '黑暗崛起', '', './upload/2015-07-10/20150710142251_420.png', '0', './upload/2015-07-10/20150710142302_919.mp3');
INSERT INTO `lk_case_detail` VALUES ('52', '19', '光耀之城', '', './upload/2015-07-10/20150710142312_331.jpg', '0', './upload/2015-07-10/20150710142330_278.mp3');
INSERT INTO `lk_case_detail` VALUES ('53', '19', '神之竞技场', '', './upload/2015-07-10/20150710142341_889.jpg', '0', './upload/2015-07-10/20150710142401_556.mp3');
INSERT INTO `lk_case_detail` VALUES ('54', '19', '精灵丛林', '', './upload/2015-07-10/20150710142412_727.jpg', '0', './upload/2015-07-10/20150710142444_138.mp3');
INSERT INTO `lk_case_detail` VALUES ('55', '19', '摩门巨塔', '', './upload/2015-07-10/20150710142459_763.jpg', '0', './upload/2015-07-10/20150710142519_461.mp3');
INSERT INTO `lk_case_detail` VALUES ('56', '19', '心魔副本', '', './upload/2015-07-10/20150710142528_414.jpg', '0', './upload/2015-07-10/20150710142544_705.mp3');
INSERT INTO `lk_case_detail` VALUES ('57', '20', '音乐1', '', '', '0', '');
INSERT INTO `lk_case_detail` VALUES ('59', '6', '功夫派游戏宣传片', '', '', '0', './upload/Vedio/CG/kongfu.m4v');
INSERT INTO `lk_case_detail` VALUES ('61', '21', '极速猎人游戏宣传视频', '', '', '0', './upload/Vedio/CG/SpeedHunter.m4v');
INSERT INTO `lk_case_detail` VALUES ('62', '22', '登陆界面', '', './upload/2015-07-15/20150715175140_114.jpg', '0', './upload/2015-07-15/20150715175154_317.mp3');
INSERT INTO `lk_case_detail` VALUES ('63', '22', '英雄回忆', '', './upload/2015-07-15/20150715175228_865.jpeg', '0', './upload/2015-07-15/20150715175244_743.mp3');
INSERT INTO `lk_case_detail` VALUES ('64', '22', '勇者之路', '', './upload/2015-07-15/20150715175331_184.jpg', '0', './upload/2015-07-15/20150715175345_944.mp3');
INSERT INTO `lk_case_detail` VALUES ('65', '22', '新手村', '', './upload/2015-07-15/20150715175354_610.jpg', '0', './upload/2015-07-15/20150715175412_432.mp3');
INSERT INTO `lk_case_detail` VALUES ('66', '23', '哈奇小镇', '', './upload/2015-07-15/20150715175945_515.jpg', '0', './upload/2015-07-15/20150715180010_780.mp3');
INSERT INTO `lk_case_detail` VALUES ('67', '23', '黎明城', '', './upload/2015-07-15/20150715180034_845.jpg', '0', './upload/2015-07-15/20150715180049_650.mp3');
INSERT INTO `lk_case_detail` VALUES ('68', '23', '椰树沙滩', '', './upload/2015-07-15/20150715180058_441.jpg', '0', './upload/2015-07-15/20150715180114_980.mp3');
INSERT INTO `lk_case_detail` VALUES ('69', '23', '向欢乐出发', '', './upload/2015-07-15/20150715180127_726.jpg', '0', './upload/2015-07-15/20150715180148_497.mp3');
INSERT INTO `lk_case_detail` VALUES ('70', '23', '邪恶之源', '', './upload/2015-07-15/20150715180158_629.jpg', '0', './upload/2015-07-15/20150715180223_426.mp3');
INSERT INTO `lk_case_detail` VALUES ('71', '24', '赛尔号主舱室', '', './upload/2015-07-15/20150715180500_731.jpg', '0', './upload/2015-07-15/20150715180518_657.mp3');
INSERT INTO `lk_case_detail` VALUES ('72', '24', 'PVP对战', '', './upload/2015-07-15/20150715180535_135.jpg', '0', './upload/2015-07-15/20150715180552_148.mp3');
INSERT INTO `lk_case_detail` VALUES ('73', '24', '浮空仙岛', '', './upload/2015-07-15/20150715180603_891.jpg', '0', './upload/2015-07-15/20150715180617_465.mp3');
INSERT INTO `lk_case_detail` VALUES ('74', '24', '战神之力', '', './upload/2015-07-15/20150715180626_216.jpg', '0', './upload/2015-07-15/20150715180642_251.mp3');
INSERT INTO `lk_case_detail` VALUES ('75', '24', '战斗音乐', '', './upload/2015-07-15/20150715180649_445.jpg', '0', './upload/2015-07-15/20150715180711_764.mp3');
INSERT INTO `lk_case_detail` VALUES ('76', '24', '地月氏族', '', './upload/2015-07-15/20150715180723_462.jpg', '0', './upload/2015-07-15/20150715180740_568.mp3');
INSERT INTO `lk_case_detail` VALUES ('77', '25', '主城广场', '', './upload/2015-07-15/20150715181018_938.jpg', '0', './upload/2015-07-15/20150715181034_721.mp3');
INSERT INTO `lk_case_detail` VALUES ('78', '25', '勇者之刃', '', './upload/2015-07-15/20150715181047_944.jpg', '0', './upload/2015-07-15/20150715181115_855.mp3');
INSERT INTO `lk_case_detail` VALUES ('79', '25', '青木林道', '', './upload/2015-07-15/20150715181137_125.jpg', '0', './upload/2015-07-15/20150715181156_772.mp3');
INSERT INTO `lk_case_detail` VALUES ('80', '25', '沙漠兵团', '', './upload/2015-07-15/20150715181202_703.jpg', '0', './upload/2015-07-15/20150715181217_895.mp3');
INSERT INTO `lk_case_detail` VALUES ('81', '25', '港口前哨', '', './upload/2015-07-15/20150715181224_775.png', '0', './upload/2015-07-15/20150715181238_740.mp3');
INSERT INTO `lk_case_detail` VALUES ('82', '26', '主基地战争', '', './upload/2015-07-15/20150715181604_561.png', '0', './upload/2015-07-15/20150715181809_484.mp3');
INSERT INTO `lk_case_detail` VALUES ('83', '26', '哥布林的进攻', '', './upload/2015-07-15/20150715183157_166.png', '0', './upload/2015-07-15/20150715183211_758.mp3');
INSERT INTO `lk_case_detail` VALUES ('84', '26', '炸弹兵潜入', '', './upload/2015-07-15/20150715183307_252.png', '0', './upload/2015-07-15/20150715183319_475.mp3');
INSERT INTO `lk_case_detail` VALUES ('85', '27', '圣痕仙境', '', './upload/2015-07-15/20150715183619_405.png', '0', './upload/2015-07-15/20150715183636_993.mp3');
INSERT INTO `lk_case_detail` VALUES ('86', '27', '冰雪浮岛', '', './upload/2015-07-15/20150715183646_442.png', '0', './upload/2015-07-15/20150715183706_466.mp3');
INSERT INTO `lk_case_detail` VALUES ('87', '27', '竞技场', '', './upload/2015-07-15/20150715183716_250.png', '0', './upload/2015-07-15/20150715183746_894.mp3');
INSERT INTO `lk_case_detail` VALUES ('88', '27', '流金沙漠', '', './upload/2015-07-15/20150715184500_164.png', '0', './upload/2015-07-15/20150715184516_254.mp3');
INSERT INTO `lk_case_detail` VALUES ('89', '27', '星空神殿', '', './upload/2015-07-15/20150715184525_265.png', '0', './upload/2015-07-15/20150715184539_762.mp3');
INSERT INTO `lk_case_detail` VALUES ('90', '27', '神奇森林', '', './upload/2015-07-15/20150715184550_527.png', '0', './upload/2015-07-15/20150715184607_704.mp3');
INSERT INTO `lk_case_detail` VALUES ('91', '27', 'PVP战斗', '', './upload/2015-07-15/20150715184620_785.png', '0', './upload/2015-07-15/20150715184632_361.mp3');
INSERT INTO `lk_case_detail` VALUES ('92', '28', '淘淘乐街', '', './upload/2015-07-16/20150716100232_576.jpg', '0', './upload/2015-07-16/20150716100248_462.mp3');
INSERT INTO `lk_case_detail` VALUES ('93', '28', '钢琴的春天', '', './upload/2015-07-16/20150716100300_344.jpg', '0', './upload/2015-07-16/20150716100300_344.jpg');
INSERT INTO `lk_case_detail` VALUES ('94', '28', '春之歌', '', './upload/2015-07-16/20150716100432_357.jpg', '0', './upload/2015-07-16/20150716100456_219.mp3');
INSERT INTO `lk_case_detail` VALUES ('95', '28', '夕阳之下', '', './upload/2015-07-16/20150716100952_316.jpg', '0', './upload/2015-07-16/20150716101025_563.mp3');
INSERT INTO `lk_case_detail` VALUES ('96', '28', '儿童节快乐', '', './upload/2015-07-16/20150716101111_510.jpg', '0', './upload/2015-07-16/20150716101124_876.mp3');
INSERT INTO `lk_case_detail` VALUES ('97', '28', '摩尔码头', '', './upload/2015-07-16/20150716101158_687.jpg', '0', './upload/2015-07-16/20150716101211_736.mp3');
INSERT INTO `lk_case_detail` VALUES ('98', '29', '云端之城', '', './upload/2015-07-16/20150716101305_710.jpg', '0', './upload/2015-07-16/20150716101326_469.mp3');
INSERT INTO `lk_case_detail` VALUES ('99', '29', '炼金师之旅', '', './upload/2015-07-16/20150716101357_404.jpg', '0', './upload/2015-07-16/20150716101409_756.mp3');
INSERT INTO `lk_case_detail` VALUES ('100', '29', '风的记忆', '', './upload/2015-07-16/20150716101459_633.png', '0', './upload/2015-07-16/20150716101630_192.mp3');
INSERT INTO `lk_case_detail` VALUES ('101', '29', '淘淘乐街', '', './upload/2015-07-16/20150716101650_464.jpg', '0', './upload/2015-07-16/20150716101746_205.mp3');
INSERT INTO `lk_case_detail` VALUES ('102', '29', '天空树下', '', './upload/2015-07-16/20150716101805_888.jpg', '0', './upload/2015-07-16/20150716101824_485.mp3');
INSERT INTO `lk_case_detail` VALUES ('103', '29', '竹叶农场', '', './upload/2015-07-16/20150716101846_643.jpg', '0', './upload/2015-07-16/20150716101910_349.mp3');
INSERT INTO `lk_case_detail` VALUES ('104', '29', '暗夜追逐', '', './upload/2015-07-16/20150716101947_166.jpg', '0', './upload/2015-07-16/20150716102015_101.mp3');
INSERT INTO `lk_case_detail` VALUES ('105', '29', '沉思湖畔', '', './upload/2015-07-16/20150716102028_696.jpg', '0', './upload/2015-07-16/20150716102047_910.mp3');
INSERT INTO `lk_case_detail` VALUES ('106', '29', '宠物乐园', '', './upload/2015-07-16/20150716102100_515.jpg', '0', './upload/2015-07-16/20150716102123_976.mp3');
INSERT INTO `lk_case_detail` VALUES ('107', '29', '枫林岛', '', './upload/2015-07-16/20150716102150_484.png', '0', './upload/2015-07-16/20150716102205_403.mp3');
INSERT INTO `lk_case_detail` VALUES ('108', '30', '庄园的春天', '', './upload/2015-07-16/20150716102531_798.jpg', '0', './upload/2015-07-16/20150716102547_975.mp3');
INSERT INTO `lk_case_detail` VALUES ('109', '30', '海滨特辑主题曲', '', './upload/2015-07-16/20150716102606_899.png', '0', './upload/2015-07-16/20150716102623_810.mp3');
INSERT INTO `lk_case_detail` VALUES ('110', '30', '卡农之夜', '', './upload/2015-07-16/20150716102641_479.jpg', '0', './upload/2015-07-16/20150716102702_327.mp3');
INSERT INTO `lk_case_detail` VALUES ('111', '30', '湛海蓝之夏', '', './upload/2015-07-16/20150716102711_942.jpg', '0', './upload/2015-07-16/20150716102727_259.mp3');
INSERT INTO `lk_case_detail` VALUES ('112', '30', '游戏时光', '', './upload/2015-07-16/20150716102745_286.jpg', '0', './upload/2015-07-16/20150716102756_314.mp3');
INSERT INTO `lk_case_detail` VALUES ('113', '31', '花仙子的梦', '', './upload/2015-07-16/20150716102948_677.jpg', '0', './upload/2015-07-16/20150716103010_224.mp3');
INSERT INTO `lk_case_detail` VALUES ('114', '31', '镇魂之歌', '', './upload/2015-07-16/20150716103029_829.jpg', '0', './upload/2015-07-16/20150716103111_375.mp3');
INSERT INTO `lk_case_detail` VALUES ('115', '31', '幽暗回廊', '', './upload/2015-07-16/20150716103136_408.jpg', '0', './upload/2015-07-16/20150716103151_160.mp3');
INSERT INTO `lk_case_detail` VALUES ('116', '31', '古灵仙子', '', './upload/2015-07-16/20150716103341_951.jpg', '0', './upload/2015-07-16/20150716103359_168.mp3');
INSERT INTO `lk_case_detail` VALUES ('117', '32', '一气学院', '', './upload/2015-07-16/20150716111417_304.jpg', '0', './upload/2015-07-16/20150716111433_242.mp3');
INSERT INTO `lk_case_detail` VALUES ('118', '32', '功夫城', '', './upload/2015-07-16/20150716111449_594.jpg', '0', './upload/2015-07-16/20150716111514_958.mp3');
INSERT INTO `lk_case_detail` VALUES ('119', '32', '梅花桩', '', './upload/2015-07-16/20150716111540_499.png', '0', './upload/2015-07-16/20150716111611_803.mp3');
INSERT INTO `lk_case_detail` VALUES ('120', '32', '虚空炼狱', '', './upload/2015-07-16/20150716111639_205.png', '0', './upload/2015-07-16/20150716111650_593.mp3');
INSERT INTO `lk_case_detail` VALUES ('121', '32', '先锋岗哨', '', './upload/2015-07-16/20150716111708_840.png', '0', './upload/2015-07-16/20150716111722_274.mp3');
INSERT INTO `lk_case_detail` VALUES ('122', '32', '功夫家园', '', './upload/2015-07-16/20150716111737_428.png', '0', './upload/2015-07-16/20150716111822_617.mp3');
INSERT INTO `lk_case_detail` VALUES ('123', '33', '主题音乐', '', './upload/2015-07-16/20150716112202_696.png', '0', './upload/2015-07-16/20150716112216_885.mp3');
INSERT INTO `lk_case_detail` VALUES ('124', '33', '星球战境', '', './upload/2015-07-16/20150716112300_896.jpg', '0', './upload/2015-07-16/20150716112735_710.mp3');
INSERT INTO `lk_case_detail` VALUES ('125', '33', 'PVP对战', '', './upload/2015-07-16/20150716112328_364.jpg', '0', './upload/2015-07-16/20150716112343_481.mp3');
INSERT INTO `lk_case_detail` VALUES ('126', '33', 'Boss战斗', '', './upload/2015-07-16/20150716112413_824.jpg', '0', './upload/2015-07-16/20150716112426_296.mp3');
INSERT INTO `lk_case_detail` VALUES ('127', '33', '王者遗迹', '', './upload/2015-07-16/20150716112436_600.jpg', '0', './upload/2015-07-16/20150716112451_587.mp3');
INSERT INTO `lk_case_detail` VALUES ('128', '33', '太空武斗场', '', './upload/2015-07-16/20150716112629_976.png', '0', './upload/2015-07-16/20150716112648_972.mp3');
INSERT INTO `lk_case_detail` VALUES ('129', '34', '登陆界面', '', './upload/2015-07-16/20150716113208_766.jpg', '0', './upload/2015-07-16/20150716113230_670.mp3');
INSERT INTO `lk_case_detail` VALUES ('130', '34', '主场景配乐', '', './upload/2015-07-16/20150716113208_766.jpg', '0', './upload/2015-07-16/20150716113256_512.mp3');
INSERT INTO `lk_case_detail` VALUES ('131', '34', '战场配乐', '', './upload/2015-07-16/20150716113208_766.jpg', '0', './upload/2015-07-16/20150716113336_708.mp3');
INSERT INTO `lk_case_detail` VALUES ('132', '34', '赤壁战场', '', './upload/2015-07-16/20150716113208_766.jpg', '0', './upload/2015-07-16/20150716113433_914.mp3');
INSERT INTO `lk_case_detail` VALUES ('133', '34', 'Boss战', '', './upload/2015-07-16/20150716113208_766.jpg', '0', './upload/2015-07-16/20150716113506_837.mp3');
INSERT INTO `lk_case_detail` VALUES ('134', '35', '神圣之战', '', './upload/2015-07-16/20150716113826_467.jpg', '0', './upload/2015-07-16/20150716113835_735.mp3');
INSERT INTO `lk_case_detail` VALUES ('135', '35', '安宁城', '', './upload/2015-07-16/20150716113854_887.jpg', '0', './upload/2015-07-16/20150716113912_158.mp3');
INSERT INTO `lk_case_detail` VALUES ('136', '36', '摩卡之夜', '', './upload/2015-07-16/20150716114115_748.jpg', '0', './upload/2015-07-16/20150716114135_290.mp3');
INSERT INTO `lk_case_detail` VALUES ('137', '36', '城镇家园', '', './upload/2015-07-16/20150716114146_426.jpg', '0', './upload/2015-07-16/20150716114205_874.mp3');
INSERT INTO `lk_case_detail` VALUES ('138', '36', '世界之城', '', './upload/2015-07-16/20150716114354_322.jpg', '0', './upload/2015-07-16/20150716114413_316.mp3');
INSERT INTO `lk_case_detail` VALUES ('139', '36', '沙漠副本', '', './upload/2015-07-16/20150716114423_450.jpg', '0', './upload/2015-07-16/20150716114440_242.mp3');
INSERT INTO `lk_case_detail` VALUES ('140', '36', '地下城副本', '', './upload/2015-07-16/20150716114449_918.jpg', '0', './upload/2015-07-16/20150716114507_627.mp3');
INSERT INTO `lk_case_detail` VALUES ('141', '37', '不朽之战', '', './upload/2015-07-16/20150716115143_842.jpg', '0', './upload/2015-07-16/20150716115109_876.mp3');
INSERT INTO `lk_case_detail` VALUES ('142', '37', '军团进击', '', './upload/2015-07-16/20150716115118_901.jpg', '0', './upload/2015-07-16/20150716115132_242.mp3');
INSERT INTO `lk_case_detail` VALUES ('143', '37', '战士之魂', '', './upload/2015-07-16/20150716115047_406.jpg', '0', './upload/2015-07-16/20150716115200_670.mp3');
INSERT INTO `lk_case_detail` VALUES ('144', '38', '摩尔赛场', '', './upload/2015-07-16/20150716115535_763.jpg', '0', './upload/2015-07-16/20150716115549_777.mp3');
INSERT INTO `lk_case_detail` VALUES ('145', '38', '农庄赛道', '', './upload/2015-07-16/20150716115605_322.jpg', '0', './upload/2015-07-16/20150716115622_809.mp3');
INSERT INTO `lk_case_detail` VALUES ('146', '38', '史前文明', '', './upload/2015-07-16/20150716115635_231.jpg', '0', './upload/2015-07-16/20150716115646_968.mp3');
INSERT INTO `lk_case_detail` VALUES ('147', '38', '阳光海岸', '', './upload/2015-07-16/20150716115655_658.jpg', '0', './upload/2015-07-16/20150716115709_630.mp3');
INSERT INTO `lk_case_detail` VALUES ('148', '38', '废弃工厂', '', './upload/2015-07-16/20150716115719_694.jpg', '0', './upload/2015-07-16/20150716115728_633.mp3');
INSERT INTO `lk_case_detail` VALUES ('149', '39', '登陆主题', '', './upload/2015-07-16/20150716115901_212.jpg', '0', './upload/2015-07-16/20150716115928_806.mp3');
INSERT INTO `lk_case_detail` VALUES ('150', '39', '选关界面', '', './upload/2015-07-16/20150716115944_580.jpg', '0', './upload/2015-07-16/20150716115956_955.mp3');
INSERT INTO `lk_case_detail` VALUES ('151', '39', '新手关卡', '', './upload/2015-07-16/20150716120010_905.jpg', '0', './upload/2015-07-16/20150716120024_703.mp3');
INSERT INTO `lk_case_detail` VALUES ('152', '39', '冰面关卡', '', './upload/2015-07-16/20150716120039_928.jpg', '0', './upload/2015-07-16/20150716120050_289.mp3');
INSERT INTO `lk_case_detail` VALUES ('153', '7', '向快乐飞翔-片头曲', '', '', '0', './upload/vedio music/xiangkuailefeixiang.m4v');
INSERT INTO `lk_case_detail` VALUES ('154', '7', '彩虹色的天空-片尾曲', '', '', '0', './upload/vedio music/caihongsedetiankong.m4v');
INSERT INTO `lk_case_detail` VALUES ('155', '41', '功夫无界', '', './upload/2015-07-16/13464700435776.jpg', '0', './upload/vedio music/gongfu.mp3');
INSERT INTO `lk_case_detail` VALUES ('156', '42', '心灵就是战场-主题曲', '', '', '0', './upload/vedio music/saierhao.m4v');
INSERT INTO `lk_case_detail` VALUES ('157', '40', '摩尔欢乐颂-片头曲', '', '', '0', './upload/vedio music/moerhuanlesong.m4v');
INSERT INTO `lk_case_detail` VALUES ('158', '40', '旅途中的稻草人-片尾曲', '', '', '0', './upload/vedio music/lvtuzhongdedaocaoren.m4v');
INSERT INTO `lk_case_detail` VALUES ('159', '43', '刀魂赋-主题曲', '', './upload/2015-07-16/20150716124237_778.jpg', '0', './upload/vedio music/daohunfu.mp3');
INSERT INTO `lk_case_detail` VALUES ('160', '44', '情字何戒-主题曲', '', './upload/2015-07-16/20150716124446_414.png', '0', './upload/vedio music/qingzihejie.mp3');
INSERT INTO `lk_case_detail` VALUES ('161', '4', '石巨人', '', '', '0', './upload/Audio/jineng/yanshijuren.m4v');
INSERT INTO `lk_case_detail` VALUES ('162', '4', '女魔法师', '', '', '0', './upload/Audio/jineng/nvmofashi.m4v');
INSERT INTO `lk_case_detail` VALUES ('163', '4', '骷髅怪', '', '', '0', './upload/Audio/jineng/kulouguai.m4v');
INSERT INTO `lk_case_detail` VALUES ('164', '4', '矿工', '', '', '0', './upload/Audio/jineng/kuanggong.m4v');
INSERT INTO `lk_case_detail` VALUES ('165', '46', '赤炎魔', '', '', '0', './upload/Audio/guaiwu/chiyanmozhongji.m4v');
INSERT INTO `lk_case_detail` VALUES ('166', '46', '食尸兽', '', '', '0', './upload/Audio/guaiwu/shishishou.m4v');
INSERT INTO `lk_case_detail` VALUES ('167', '47', 'Boss攻击', '', '', '0', './upload/Audio/pugong/BOSS.m4v');
INSERT INTO `lk_case_detail` VALUES ('168', '47', '怪物普攻', '', '', '0', './upload/Audio/pugong/xiaoguai.m4v');
INSERT INTO `lk_case_detail` VALUES ('169', '48', '界面音效', '', '', '0', './upload/Audio/UI/ziyouzhizhan.m4v');
INSERT INTO `lk_case_detail` VALUES ('170', '5', '魔法学院校长', '', '', '0', './upload/Vox/woerxueyuan/yuanzhang.m4v');
INSERT INTO `lk_case_detail` VALUES ('171', '5', '猫头鹰助教士', '', '', '0', './upload/Vox/woerxueyuan/maotouying.m4v');
INSERT INTO `lk_case_detail` VALUES ('172', '5', '邪恶女巫', '', '', '0', './upload/Vox/woerxueyuan/nvwu.m4v');
INSERT INTO `lk_case_detail` VALUES ('173', '5', '魔法学院的大婶', '', '', '0', './upload/Vox/woerxueyuan/laotaipo.m4v');
INSERT INTO `lk_case_detail` VALUES ('174', '5', '火女', '', '', '0', './upload/Vox/woerxueyuan/huonv.m4v');
INSERT INTO `lk_case_detail` VALUES ('175', '5', '青蛙博士', '', '', '0', './upload/Vox/woerxueyuan/qingwaboshi.m4v');
INSERT INTO `lk_case_detail` VALUES ('176', '49', '艾希', '', '', '0', './upload/Vox/ziyouzhizhan/aixi.m4v');
INSERT INTO `lk_case_detail` VALUES ('177', '49', '萨姆亚', '', '', '0', './upload/Vox/ziyouzhizhan/samuya.m4v');
INSERT INTO `lk_case_detail` VALUES ('178', '49', '潮汐圣女', '', '', '0', './upload/Vox/ziyouzhizhan/chaoxishengnv.m4v');
INSERT INTO `lk_case_detail` VALUES ('179', '49', '深渊之王', '', '', '0', './upload/Vox/ziyouzhizhan/shenyuanzhiwang.m4v');
INSERT INTO `lk_case_detail` VALUES ('180', '49', '合金终结者', '', '', '0', './upload/Vox/ziyouzhizhan/hejinzhongjiezhe.m4v');
INSERT INTO `lk_case_detail` VALUES ('181', '49', '伽尔', '', '', '0', './upload/Vox/ziyouzhizhan/jiaer.m4v');
INSERT INTO `lk_case_detail` VALUES ('182', '49', '孙悟空', '', '', '0', './upload/Vox/ziyouzhizhan/sunwukong.m4v');
INSERT INTO `lk_case_detail` VALUES ('183', '51', '各类坐骑展示', '', '', '0', './upload/Audio/zuoqi/zuoqi.m4v');
INSERT INTO `lk_case_detail` VALUES ('184', '52', '奥林匹斯之路宣传片', '', '', '0', './upload/cg/lost.m4v');
INSERT INTO `lk_case_detail` VALUES ('185', '53', '赛尔号登陆动画', '', '', '0', './upload/cg/seer1.m4v');
INSERT INTO `lk_case_detail` VALUES ('186', '54', '赛尔号资料片宣传动画', '', '', '0', './upload/cg/seer2.m4v');
INSERT INTO `lk_case_detail` VALUES ('187', '55', '淘米活动片头视频', '', '', '0', './upload/cg/go.m4v');
INSERT INTO `lk_case_detail` VALUES ('188', '50', '卡牌英雄配音展示', '', '', '0', './upload/Vox/sanguo/sanguo.m4v');
INSERT INTO `lk_case_detail` VALUES ('189', '57', '音频', '', '', '0', './upload/2017-06-20/20170620112445_626.mp3');

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

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

-- ----------------------------
-- Table structure for `lk_job`
-- ----------------------------
DROP TABLE IF EXISTS `lk_job`;
CREATE TABLE `lk_job` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL DEFAULT '' COMMENT '职位',
  `content` text COMMENT '具体描述',
  `add_time` datetime DEFAULT '0000-00-00 00:00:00',
  `order` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lk_job
-- ----------------------------
INSERT INTO `lk_job` VALUES ('4', '游戏音乐制作助理', '<p><strong>职位描述：<br style=\"white-space: normal; color: rgb(128, 128, 128); font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, &#39;Hiragino Sans GB&#39;, 宋体, sans-serif; font-size: 12px; line-height: 18px;\"/>1、热爱音乐，热爱网络游戏，对游戏音乐的制作有高度热诚。<br style=\"white-space: normal; color: rgb(128, 128, 128); font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, &#39;Hiragino Sans GB&#39;, 宋体, sans-serif; font-size: 12px; line-height: 18px;\"/>2、熟悉游戏基本常识，对游戏音频具有一定的了解及认知。<br style=\"white-space: normal; color: rgb(128, 128, 128); font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, &#39;Hiragino Sans GB&#39;, 宋体, sans-serif; font-size: 12px; line-height: 18px;\"/>3、根据研发需求进行游戏内音效，音乐编辑的制作。具有较高的音乐素质、较强的音乐悟性和较高音效的制作水平。<br style=\"white-space: normal; color: rgb(128, 128, 128); font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, &#39;Hiragino Sans GB&#39;, 宋体, sans-serif; font-size: 12px; line-height: 18px;\"/>4、熟悉相关音频编辑流程，精通音频编辑软件，善于尝试、运用新技术。<br style=\"white-space: normal; color: rgb(128, 128, 128); font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, &#39;Hiragino Sans GB&#39;, 宋体, sans-serif; font-size: 12px; line-height: 18px;\"/>5、诚信正直，积极主动，能承受高强度工作压力。<br style=\"white-space: normal; color: rgb(128, 128, 128); font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, &#39;Hiragino Sans GB&#39;, 宋体, sans-serif; font-size: 12px; line-height: 18px;\"/>6、良好的表达、沟通、协调能力，团队意识强。</strong></p><p><strong><br/></strong></p>', '2015-07-24 15:00:33', '0');
INSERT INTO `lk_job` VALUES ('5', '多媒体/动画设计', '<p style=\"white-space: normal;\"><strong>岗位职责:<br/>1.设计制作卡通形象，完善动画图案设计、角色造型、场景设计、人物上色、3D模型建造、动画制作，以及部分后期处理工作；<br/>2.参与表现多媒体展示项目中三维部分的创意策划；<br/>3.测试动画场景，组织协调同期动漫音效、书写测试报告。</strong></p><p style=\"white-space: normal;\"><strong>任职条件:</strong><br/></p><p style=\"white-space: normal;\"><strong>1.教育培训： 大专以上美术、动画专业。<br/>2.工作经验： 精通3Dmax及相关插件的应用，并具备MAYA设计能力；熟练使用AE、Fusion等辅助合成软件；具备扎实的美术功底，具有良好的创意能力和设计表达能力。</strong></p><p style=\"white-space: normal;\"><strong><br/></strong></p>', '2015-07-24 15:00:53', '0');
INSERT INTO `lk_job` VALUES ('6', '资深游戏配乐师', '<p><strong style=\"white-space: normal;\"><span style=\"font-family: 微软雅黑; word-wrap: break-word; color: rgb(68, 68, 68); font-size: 15px; line-height: 30px; background-color: rgb(255, 255, 255);\"><span style=\"font-size: 2px; word-wrap: break-word;\">职位应具备的资格要求：<br style=\"word-wrap: break-word;\"/>1、<span style=\"word-wrap: break-word;\">良好的沟通能力</span>，我们从事的工作是艺术创作，但首先是为游戏产品服务，具备良好的沟通能力，是确保与项目协作顺畅的基本前提。</span></span><span style=\"font-family: 微软雅黑; word-wrap: break-word; color: rgb(68, 68, 68); font-size: 15px; line-height: 30px; background-color: rgb(255, 255, 255);\"><span style=\"font-size: 2px; word-wrap: break-word;\"><br style=\"word-wrap: break-word;\"/>2、<span style=\"word-wrap: break-word;\">有良好的音乐制作功底及对不同风格的诠释</span>，这点很重要，一是牵涉到音乐制作的品质，二是游戏中音乐的情绪需要随着画面场景变化而变，先前还在非洲某部落，此刻又跳到了外太空星球，对制作人<span style=\"word-wrap: break-word;\">音乐视野，专业功底，创作能力和音乐灵气</span>的考验也在于此。<br style=\"word-wrap: break-word;\"/>3、熟悉音频业内软件的常用操作，<span style=\"word-wrap: break-word;\">精通管弦乐编配与混音</span>者更佳。<br style=\"word-wrap: break-word;\"/>4、深入玩过大量游戏，或者饱视过大量的动画片最佳，再强调一下，这个太重要了，这个职位不仅创作音乐，还需要懂游戏。<br style=\"word-wrap: break-word;\"/><br style=\"word-wrap: break-word;\"/>你获得这个职位会做到的工作：<br style=\"word-wrap: break-word;\"/>1、游戏音乐的制作，公司会根据你的音乐能力和兴趣，尽量分配适合你个人风格的产品类型，你就负责相关产品的游戏音乐的创作。<br style=\"word-wrap: break-word;\"/>2、一些视频的配乐工作，基本上是一些游戏资料片的宣传片，放心，要求不会是暴雪级别，但是你能做得越棒我们会越为你高兴。<br style=\"word-wrap: break-word;\"/>3、跟策划，音效设计师，一起沟通音乐的情绪设定和实现，并保证相关音乐最终的测试及体验效果。<br style=\"word-wrap: break-word;\"/>4、部分厂牌音乐制作，偶尔我们也会创作一些主题音乐，可能会让你担任编曲，以及监棚录制等事宜，很真心的说，这是一件非常有趣的工作。<br style=\"word-wrap: break-word;\"/>5、可能还有其他我没想到的。<br style=\"word-wrap: break-word;\"/>别灰心，说白了就是音乐、音乐、音乐、音乐、音乐、沟通、制作、体验、跟进这些事。</span></span></strong></p>', '2015-07-24 15:02:15', '0');

-- ----------------------------
-- Table structure for `lk_news`
-- ----------------------------
DROP TABLE IF EXISTS `lk_news`;
CREATE TABLE `lk_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT '' COMMENT '标题',
  `order` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `source` varchar(100) DEFAULT '' COMMENT '来源',
  `description` varchar(200) DEFAULT '' COMMENT '描述',
  `type` int(11) NOT NULL DEFAULT '0' COMMENT '文章类型',
  `link` varchar(200) DEFAULT '' COMMENT '连接地址',
  `content` text COMMENT '内容',
  `add_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lk_news
-- ----------------------------
INSERT INTO `lk_news` VALUES ('1', '游戏音乐和游戏音效的区别', '0', '乐开音乐', '', '1', '', '<p>&nbsp; 作为一个音效制作人员常常会遇到策划或者程序员无法分清游戏音乐和音效的区别，其实要分清楚很简单，游戏音乐就是有旋律的，有音高的能够被哼唱的音乐，而游戏音效即是一种声音效果，是指无特定音高的，一般用于UI按钮点击、人物打击声音，作用为增加场景的真实感和带入感。</p><p>&nbsp; 游戏音乐的分类，根据游戏内的场景、情绪、时代背景，可以分为主题音乐、关卡音乐、战斗音乐等。主题音乐，可以放在游戏登陆欢迎页播放，代表游戏主旨、世界观和时代背景，此类音乐力求能够被玩家记忆和哼唱，所以在制作这类音乐时要求旋律清晰好听，也是所有游戏音乐中最需要推敲和打磨的一类作品之一。关卡音乐，可以放在玩家进入关卡或场景时播放，此类音乐主要作为游戏的背景音乐，要求能够烘托该场景的风格和环境气氛，力求给玩家带来身临其境的感受，同时也不易旋律性过强而造成玩家听觉疲劳，所以需要重视音乐本身的节奏、和声进行、织体等方面，尽量弱化旋律性。战斗音乐，一般用在Boss出现或打斗激烈的场景，这类音乐节奏性强，给人热血沸腾，激情无限的感受，犹如亲历叱咤沙场、战无不胜的热情，这类重视节奏的律动、配器的精妙，也是相当考验作曲者的“功夫”的一类音乐。</p><p>&nbsp; 游戏音效，实为一种声音效果，和音乐要求一样，也需要根据游戏的风格、世界观、时代背景等要素进行设计和制作，游戏内的功能性分为UI界面音效、人物普通动作（如走路、跑跳等）、技能音效、怪物人物语音、环境气氛音效等。UI界面音效，即点击界面中各种按钮的声音，不要小看的UI界面音效，好的音效力求在玩家反复聆听后，还是感到贴切、生动而不产生厌烦的感觉，这类音效主要考验音效师的想象力、制作处理音效的能力。人物普通动作，这类音效主要根据人物的装备材质等配置，如有特殊材质的音效，还需要音效师找实物拟音，再加上后期处理制作得到。技能音效，根据游戏内技能的属性分类，常见的有火系、水系、电光、毒物、魔法等属性，这类音效具有比较丰富的原始音效样本，主要考验音效师的制作、想象力、画面感等制作能力。怪物人物语音，主要用于游戏中角色的个性口头禅，这部分需要专业的配音人员完成，根据角色的性别，年龄段，性格等录制，音效师的职责在于描述需求和监督录制过程，对语音的音色、情绪、语气等要素整体把控。环境气氛类音效，是近十年中慢慢形成并流行的制作手段，这类音效与环境音乐的区别在于，更重视对游戏客观环境的描述，比如风声、雨声、危机四伏的丛林声等等。游戏音效师还作为整体游戏声音系统的设</p><p><br/></p>', '2015-07-23 17:28:15', '2015-07-23 17:28:15');
INSERT INTO `lk_news` VALUES ('2', '游戏音乐外包须知1-如何选择外包团队', '0', '乐开音乐', '', '1', '', '<p>现如今，随着手游市场的竞争的日益激烈，音乐外包市场也正面临着前所未有的迅速发展时代，作为需求方，如何从复杂繁多的信息中汲取最适合自己的那部分则变的越来越重要，如何能够快速有效的认识音乐外包团队，并快速的锁定目标，小编这里给那些需要寻找音乐外包团队又多少有点盲目的需求方支几招。</p><p>首先，如何认识音乐外包团队，作品胜于广告。<br/></p><p>音乐是一种语言，真正合适的音乐作品能够在第一时间抓住每个人的心，这是音乐的魅力，而现在市场中也不乏有很多过度宣传的团队，用大篇幅的广告版面和刷屏式的出现频率，混淆着大众的视听，使用着一成不变的模板和套路，跑量式的生产音频文件，也背弃音乐创作的初衷，而乐开音乐是，由一群对音乐有着异常执着热爱和天赋的人们所组成的，团队中的每个成员，不但拥有多年知名游戏公司音乐制作经验，成员分别来自金山，完美，盛大，淘米等知名游戏公司，而且也都是拥有数十年游戏玩家身份的资深玩家，也不乏在游戏世界中的佼佼者，比如魔兽世界英雄榜成就点数排名前100名，帝国时代全球排行前十名等等，对每一个游戏项目，乐开要求每个制作人在成为该游戏音乐人之前，首先要成为游戏的玩家，了解游戏产品的世界观，背景，游戏玩法及风格，并且了解每一个场景和副本设置和功能，只有做到如此的投入，才能创作出玩家需要爱听热血沸腾同时又符合音乐功能性音乐作品，这也正是乐开音乐的宗旨，追求高品质游戏音乐制作！</p><p>其次，如何快速锁定适合本产品的游戏音乐音效风格。</p><p>游戏音乐是根据游戏产品本身的风格而定的，大致可分为有休闲类，动作类，史诗类，Q萌类，或者还会有文艺小清新气质的制作人独特风格而定的其他类，如此繁多的风格该怎样选择呢？乐开音乐的资料库中，包含了各种各样音乐试听库大大小小十几个分类文件，客户只需要提交所需配置游戏的原画或者场景概念图，专业的乐开音效师会快速提取出气质相符的音乐作品，提供试听，如果客户可以提供游戏相关的视频资料，乐开音乐会为您直接配置音乐音效到视频中，以便更加直观、便捷的体验到量身定做的声音解决方案。<br/></p><p>最后，懂得有效及时的沟通，使交流零成本。<br/></p><p>有的时候寻找音乐外包团队总是苦于无法表述清晰，就算自己可以理解，但传达到对方又可能是另一种感觉，这样往往会出现多次往返沟通修改，成本很大。乐开音乐决不回避问题的存在，经过多年的实践经验，总结规划出了一套完整的、具有实践意义的音乐外包沟通系统。您可以：<br/></p><p>1、 发送完整的游戏安装软件给乐开音乐团队。而您接下来要做的就是耐心的等待乐开音乐团队为您搭建的整个游戏世界的主题音乐、UI音效、人物语音、环境音效、战斗音乐、打击音效等等，而在声音创作中，乐开音乐也绝不停止与客户的沟通，我们会按制作进程，实时录制并发送给客户进展小样视频，无需添加无需配置，只要查看视频就能看到完整的声画统一的效果。<br/></p><p>2、 除了发送安装软件之外，还可以提供相关的关卡设计策划文档和游戏背景等参考图文信息。乐开音乐团队，会根据策划文档编制完整的音乐音效需求表，反馈给客户并进行制作，让客户可以清晰的明白乐开团队要制作的内容，当然我们非常乐意获得客户的反馈意见并尽全力达到客户要求的最终效果。<br/></p><p>3、 另外，乐开音乐团队也接受客户提供的音乐音效设计策划文档，或者乐开团队还提供音乐音效策划文档模板供客户填制。乐开音乐团队会根据客户的需求全面的、合理的、专业的评估声音的艺术性和功能性，并提出优化意见供客户参考。乐开团队不是接单跑量的生产者，而是高品质游戏声音系统的缔造者。<br/></p><p>&nbsp; 我们不是宣传最多的，因为我们专注音乐的魅力，我们不是商务最多的，因为我们希望客户的每一份支出都将换来实实在在的高性价比，高品质音乐音效作品。乐开团队是游戏的爱好者，更是音乐的创造者，能够聚拢如此针对性专业的人员实属不易，就因为一份不变热血情怀，一种执着的创作热情。<br/></p><p><br/></p>', '2015-07-23 17:32:45', '2015-07-23 17:32:44');
INSERT INTO `lk_news` VALUES ('3', '给游戏创业者书：如何控制游戏研发成本—音乐篇', '0', '乐开音乐', '关于游戏开发成本中的音乐预算技巧', '1', '', '<p>随着游戏从20世纪初发展至今，造就了众多值得回味的经典之作，曾经的热血传奇打宝极装，热血PVP，魔兽世界的各种经典副本，激情战场，梦幻西游的跑商师徒等经典玩法，那时的场景那是的BGM都是值得回忆的部分，如今玩家，在对于游戏玩法重视的同时，对游戏艺术范畴的欣赏要求也越来越高，于是越来越多的游戏厂商开始追求大制作、高水平的声画体验，就如美术，各种2D、3D动画，粒子效果等特效也直逼电影画质制作水平，而价格也是扶摇直上，使很多游戏创业厂商望成莫及，相较于画面，另一个声音部分，以其价格上相对画面低廉，同时又能够具有较强的带入感、快速调动玩家情绪、即时互动性效果等优势，受到众多游戏创业者的重视和青睐，但由于这个新兴市场还缺乏规范，加之很多游戏开发者对这个领域的陌生，使这个简单的诉求的实现，困难重重，很多制作人朋友反应，由于对声音方面不专业总是被别人忽悠，即使可以感觉到问题也无法很好的表述，这样的疑惑让乐开音乐的创始人越来越觉得需要组建一个即专业又有丰富经验的音乐音效团队来协助创业者快速、准确、又节约成本的完成游戏声音部分的制作的重要性，缔造更多未来的经典游戏。<br/></p><p>那么，还是最初的问题，如何得到适合游戏的音乐音效呢？</p><p>误区一：招聘音乐音效制作人员。</p><p>这一定不是能节约成本的办法，因为根据游戏音乐音效的特殊性，一个音乐制作人一周能做很多场景的音乐音效，而制作完成后，成果又可以被使用很久，久而久之就会造成人员的冗余，一方面人员的开支还一直存在，最终可能还会造成人事问题，所以此方法不可取。</p><p>误区二：被各种花哨的推广的音乐外包团队所吸引。</p><p>既然招聘人员不可取，就只能寻求外包团队的帮助，于是问题又来了，各种闪闪惹人爱的广告和推广，该如何选择？小编想说，各位制作人请把握找音乐外包的初衷，需要找的是一个适合游戏的声音解决方案，而不是为这些花哨推广买单。</p><p>经过多年与项目人员的沟通和多样游戏的制作经验，乐开音乐的制作人，总结出了一套快捷高效的沟通方案，乐开团队内部减少中间环节，没有所谓的产品经理和项目经理，没有口若悬河的客服人员等冗余职位，所谓拷贝不走样，往往拷贝到最后则是大相径庭，既然这样就，那就让您与制作人直接交流，更直接更贴近产品本身。乐开音乐会为每个项目配备2-3人的特定制作团队，而其中会有一位音效师会负责对接工作，整个制作过程沟通和试听版本会源源不断地、不限量的供应，以配合您版本的任何改动，最后乐开音乐团队还会做出品质承诺的保证，如对最终作品不满意，没有被客户使用，乐开音乐团队不收一分钱。有这样的品质保证，创业这们不要犹豫了，把需求狠狠的砸过来吧！</p><p><br/></p>', '2016-06-23 13:38:35', '2016-06-23 13:38:32');
INSERT INTO `lk_news` VALUES ('4', '​儿童学习音乐之乐开建议', '0', '乐开音乐', '关于儿童音乐启蒙学习的认知', '1', '', '<p style=\"margin-bottom: 30px;line-height: 30px;background: white\"><span style=\"font-family: 宋体\">&nbsp; &nbsp;爸爸妈妈都希望自己的孩子能够多才多艺，舞蹈、绘画、唱歌什么都想让孩子去学，学钢琴也就是其中一项,许多人认为学钢琴的最佳年龄是越早越好。的确，音乐史上许多名家都是从小学习钢琴的：莫扎特3岁学琴、贝多芬4岁学琴、肖邦6岁学琴，舒曼、李斯特、勃拉姆斯等西方许多伟大的音乐家都是从幼儿开始学习钢琴的。目前，风靡世界乐坛的我国青年钢琴家朗朗也是从3岁学习钢琴。那么，孩子真的学习钢琴越早越好吗？孩子学钢琴的最佳年龄是几岁呢？ _______________________________________________________________________________</span></p><p style=\"margin-bottom: 30px;line-height: 30px;background: white\"><span style=\"font-family: 宋体\"><img src=\"http://www.lkmusic.cn/js/ueditor/php/upload/57541466658992.jpg\" title=\"picture3.jpg\"/>　</span></p><p style=\"margin-bottom: 30px;line-height: 30px;background: white\"><strong><span style=\"font-family: 宋体\">&nbsp; &nbsp;孩子学钢琴的好处？</span></strong></p><p style=\"margin-bottom: 30px;line-height: 30px;background: white\"><strong><span style=\"font-family: 宋体\">&nbsp;&nbsp;</span></strong><span style=\"font-family: 宋体\">在学习钢琴的过程中，孩子可以学习乐谱，学习演奏技巧，可以学习许许多多的音乐知识。除此之外，还能学得三种能力，即注意力、协调力与自信力。无论从哪个角度来说，这三种能力都是孩子健康成长所需要的。注意力、协调力与自信力是怎样随孩子的钢琴学习不断深入而得到发展与提高的？对此，美国音乐教师鲍德温先生曾做过简明而透彻的分析：</span></p><p style=\"margin-bottom: 30px;line-height: 30px;background: white\"><span style=\"font-family: 宋体;\">　　①眼看单行乐谱，手弹单指旋律——训练孩子的一般注意力。</span></p><p style=\"margin-bottom: 30px;line-height: 30px;background: white\"><span style=\"font-family: 宋体\">　　②眼看单行乐谱，用右手弹奏两三个音符组成的旋律——训练孩子较强的注意力。</span></p><p style=\"margin-bottom: 30px;line-height: 30px;background: white\"><span style=\"font-family: 宋体\">　　③眼看两行乐谱，用左右手弹奏出各自不同的声部——训练孩子高度注意力与协调力。</span></p><p style=\"margin-bottom: 30px;line-height: 30px;background: white\"><span style=\"font-family: 宋体\">　　④眼看两行乐谱，用脑同时兼顾到双耳、双臂、十指、双腿及双脚的动作，以弹奏出乐曲——训练孩子高度精确的注意力、协调力，从而产生自信力。</span></p><p style=\"margin-bottom: 30px;line-height: 30px;background: white\"><strong><span style=\"font-family: 宋体\">　　孩子真的学习钢琴越早越好吗？</span></strong></p><p style=\"margin-bottom: 30px;line-height: 30px;background: white\"><span style=\"font-family: 宋体\">　　一个伟大的艺术家的成功与否，不仅需要个人的努力及卓越的自身条件，还受到家庭环境、社会环境、人文环境等多方面因素的制约。据非正式统计，在重大国际比赛中获奖者开始学钢琴的年龄是5～15岁左右。因为儿童的生长发育是先由大肌肉活动开始，再到小肌肉的细腻动作，而弹琴需要的是很具技巧性的小肌肉动作，需要相当的耐性，年龄太小的宝宝协调性稍差且坐不住，此时学琴无异于拔苗助长。因此，过早送宝宝去学钢琴、电子琴、小提琴等乐器是不适宜的。</span></p><p style=\"margin-bottom: 30px;line-height: 30px;background: white\"><span style=\"font-family: 宋体\">　　另外，钢琴的结构与手风琴、电子琴不同，手风琴和电子琴的琴键属触模式的，只需手指轻按便能发出音来，而钢琴每弹奏一个音大约需要30克的力(低音区需要的力度则更大)，如果孩子学琴年龄太小，就无法达到这一力度要求，这不仅不能很好地学习钢琴的演奏，而且时间一长还会对孩子的手指的正常发育有损害。</span></p><p style=\"margin-bottom: 30px;line-height: 30px;background: white\"><strong><span style=\"font-family: 宋体\">　　孩子学钢琴的最佳年龄是几岁？</span></strong></p><p style=\"margin-bottom: 30px;line-height: 30px;background: white\"><span style=\"font-family: 宋体\">　　从生理学、心理学角度考虑，孩子在4、5岁以后，无论大脑的发育，还是注意力、认知能力、理解力等方面都具备了良好的前提。在教学实践中也发现，年龄稍大的孩子接受能力更强、自觉性更高、学习进度更快，甚至于学一年可以超过3、4岁的孩子学几年。到了5岁，孩子的皮质细胞已大致分化完成，中枢神经系统更趋成熟，肌肉的发育也更加完善，这为学习钢琴提供了良好的生理条件。因此，通常认为女孩在4-5周岁，男孩在5-6周岁就可以开始学琴了。</span></p><p style=\"margin-bottom: 30px;line-height: 30px;background: white\"><span style=\"font-family: 宋体\">　　不过，因为儿童之间存在着很大的个体差异，身体条件和智力发育情况不尽相同，因此对于孩子几岁开始学钢琴最为适宜并没有严格界定，这要看具体条件，不能抽象地认定孩子学钢琴的最佳年龄。比如三岁孩子，年龄虽然不大，但是手的骨骼发育较好，身体发育得也很好了，辨别能力、智力、听力也可以，这样的孩子就可以学；反过来，一个五岁的孩子，如果这些条件都不具备，那就要等具备了这些条件再开始学琴。这就要求家长应结合自己孩子的具体情况，并进行专业咨询来决定。</span></p><p><br/></p>', '2016-09-16 14:02:05', '2016-09-16 14:02:03');
INSERT INTO `lk_news` VALUES ('5', '这2点让你知道，“走心”音乐的套路', '0', '乐开音乐', '音乐虽然相当抽象，但是它的某些形式其实模仿着情绪反应，因此能够让我们体验情绪。高亢的歌声应该会让我们提升注意力，变得比较紧张、亢奋。', '1', '', '<p style=\"margin-top: 0px; margin-bottom: 14px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6000003814697px; border: none;\"><span style=\"margin: 0px; padding: 0px; color: rgb(62, 62, 62); font-family: 宋体; font-size: 15px; line-height: 28px;\">在我们的日常生活里，总会有音乐传入耳中，这些音乐的使用与功能经常跟音乐的情绪特质有关。许多人会听音乐，是为了改变自己的情绪，特别是为了纾解生活压力；另一方面，餐厅、大卖场或百货公司的背景音乐，也可能是想引起消费者亢奋或轻松的情绪，以种种方式来促进购买。</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 26px;\"><span style=\"color: rgb(62, 62, 62); font-family: 宋体; font-size: 15px; line-height: 28px;\">聆听音乐会引起情绪反应，相信许多读者都有亲身经验。不过，这个现象背后的原理是什么呢？</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 28px; border: none;\"><strong style=\"margin: 0px; padding: 0px;\"><span style=\"margin: 0px; padding: 0px; font-size: 19px; font-family: 宋体; color: rgb(0, 32, 96);\"><br style=\"margin: 0px; padding: 0px;\"/></span></strong></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 28px; border: none;\"><strong style=\"margin: 0px; padding: 0px;\"><span style=\"margin: 0px; padding: 0px; font-size: 19px; font-family: 宋体; color: rgb(0, 32, 96);\">音乐模仿情绪反应</span></strong></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 28px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">首先，让我们思考一下歌唱的情绪表达。试问，“高亢的歌声”会让我们感受到什么情绪呢？若是跟低沉的歌声相比，</span><strong style=\"margin: 0px; padding: 0px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(0, 112, 192);\">高亢的歌声应该会让我们提升注意力，变得比较紧张、亢奋</span></strong><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">。令人好奇的是，听别人唱歌，自己为什么会紧张？是担心这么高的歌声会在下一秒钟破音，因而提心吊胆吗？没错，这是一个可能的因素，不过即使你知道这位歌手的技巧高超，不会破音，</span><strong style=\"margin: 0px; padding: 0px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(0, 112, 192);\">你的情绪还是会被高音带起来，变得比较“嗨”。</span></strong><span style=\"color: rgb(62, 62, 62); font-family: 宋体; font-size: 15px;\">高亢跟高音这两个词里面都有个“高”字，这两者究竟如何产生关联呢？仔细想想，自己平常情绪高亢时也会发出高音，特别是极度兴奋或害怕时的尖叫反应。这个时候声带紧绷，导致它的振动频率变高，因此会发出高音。由于高亢的嗓音总是跟“刻意拉紧声带”这个感觉连在一起，因此，当我们听到别人唱出高亢的歌声时，也容易感受到紧张亢奋的情绪。</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 28px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">音乐让我们感受到种种情绪，最重要的机制就是体感认知（embodied cognition）。一般而言，体感认知的学习始于孩提阶段，我们在探索世界的过程中，建立了心理概念与身体经验、物理世界的关联。举例来说，“紧张”这个情绪概念很容易跟肌肉紧张这个身体经验连在一起，而充满张力的声音（包括嗓音）则具有频率偏高的物理特质。在潜移默化下所学习到的这种意象基模（image–schema），提供了人们理解与推理所需的型态。</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 28px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">我们的各种身体运动都会造成感觉回馈，这些感觉回馈与运动时的心情状态、社会脉络一再同时发生，让我们建立了心理概念与身体经验之间的关联。例如当我们心情雀跃时，脚步变得轻快而不规则，这种半走半跳的方式所造成的感觉，便跟快乐的情绪紧密相连，等到以后再听到这种型态的音乐时，也会觉得这段音乐表现出快乐的情绪。&nbsp;</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 28px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">音乐做为抽象的声响，它并非跟真实世界毫无关系。它其实经常模仿自然界中的各种运动型态，特别是生物的运动型态，或者是我们自己的运动型态。在各种身体运动形式里面，步态（gait）跟音乐的关联特别密切，由走路或跑步所造成的动觉，便成了我们认知音乐所需的基模。当我们聆听缓慢的音乐与快速的音乐时，可以分别感受到平静与激动的情绪，原因可能是这两种音乐的节奏速度型态分别唤起了我们在行走与跑步时的身体感觉，从而引发相应的情绪状态。</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 28px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">脚步声不仅隐含着情绪，也透露着意图。例如音乐剧《悲惨世界》（Les Misérables）的歌曲〈你可听到人民的歌声〉（Do You HearThe People Sing）里面，就隐含着万众一心、逐渐逼近的脚步声，听众似乎可以感受到音乐里面所蕴含的坚定信念。</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 28px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">在许多乐曲里面，</span><strong style=\"margin: 0px; padding: 0px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(0, 112, 192);\">音乐所模仿的并非引起情绪的刺激物，而是人们的情绪反应及感觉回馈</span></strong><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">。除了步态之外，心肺活动的感觉也能够由音乐再现。例如</span><strong style=\"margin: 0px; padding: 0px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(0, 112, 192);\">有些游戏里面的战斗音乐，增强的音量与打击乐的低沉音色似乎可以对应到玩家的粗重呼吸和剧烈心跳</span></strong><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">。</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 28px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">音乐还有另一个非常重要的模仿对象，那就是情绪的口头表达。举例来说，我们在悲伤的时候，可能会有哭泣或叹息等反应，在音乐中可以听到这类的口头表达。流行歌曲中有所谓的“</span><strong style=\"margin: 0px; padding: 0px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(0, 112, 192);\">哭腔”，这可以说是把哭泣时的哽咽嗓音予以艺术化，成为一种演唱风格</span></strong><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">。叹息的声音特质之一是音高往下掉，这种“叹息音形”在音乐中也可以找到一些例子。</span></p><p style=\"margin-top: 0px; margin-bottom: 15px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; text-align: center; line-height: 26px;\"><span style=\"margin: 0px; padding: 0px; font-family: Helvetica, sans-serif; color: rgb(62, 62, 62);\">&nbsp;</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 28px; border: none;\"><strong style=\"margin: 0px; padding: 0px;\"><span style=\"margin: 0px; padding: 0px; font-size: 19px; font-family: 宋体; color: rgb(0, 32, 96);\">音乐导致生理反应</span></strong></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 28px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">借由以上的分析，我们知道音乐的某些形式特性其实是模仿人们的情绪反应，因此能够让听众理解音乐中所表达的情绪，甚至进一步产生情绪反应。当听者被音乐引发强烈情绪时，身体的变化会显示在某些生理指标上面。</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 28px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">由外界刺激所导致的警醒与亢奋状态，会促进手部汗腺的分泌，皮肤导电度随即上升，这就是肤电反应。外界刺激传入后1到3秒内的任何肤电反应，都属于这刺激所造成的结果。什么样的音乐可以造成肤电反应呢？这个问题的答案虽然因人而异，甚至同一位听众在不同情境下的反应也不尽相同。但是根据近年的实验研究，可</span><strong style=\"margin: 0px; padding: 0px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(0, 112, 192);\">以引起听众肤电反应的音乐特征多半跟音乐转折有关</span></strong><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">，包括：音量或音域的改变、特殊的和声或旋律进行、新的声部或乐器进入、从乐团伴奏衔接至独奏（独唱）之处、新的段落开始。</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 28px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">举例来说，</span><strong style=\"margin: 0px; padding: 0px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(0, 112, 192);\">流行歌曲的第三次副歌通常会忽然变小声，歌词也可能跟前两次副歌略有差异，这样的转折经常可以让听众提高注意力</span></strong><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">，仔细聆听第三次副歌的情绪变化，这时候可能会产生肤电反应。</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 28px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">在歌曲的前两次副歌让听众熟悉其强烈情绪及音量之后，第三次副歌巧妙打破这个规律，这样的转折通常可以让听众十分“有感”，产生深刻的体会。</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 28px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">由于音乐可以影响空间氛围与人们的心情，因此在医疗机构里面，以音乐来辅助照护病患的工作，近年已经相当普遍，其中病患的生理指标是评估音乐效果的重要依据。有研究指出，</span><strong style=\"margin: 0px; padding: 0px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(0, 112, 192);\">接受手术的病患若是在手术前后数日聆听自己喜欢的音乐，可以降低呼吸速率与血压的收缩压，并且改善心情</span></strong><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">。另外，音乐也可以应用在早产儿的照护。有实验指出，</span><strong style=\"margin: 0px; padding: 0px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(0, 112, 192);\">播放摇篮曲能够改变早产儿的心跳速率，提升活动力与血氧饱和浓度，增进对于能量和营养的摄取</span></strong><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">。</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 28px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">有些音乐可以舒缓压力、减低焦虑，其感人力量可能是作用在催产素系统上。有一项实验显示，在手术前让病患聆听纾压音乐，可以提升血液中的催产素，使他们放松心情。另一项实验发现，歌唱课程可以提升血液中的催产素。以上这些实验显示，音乐就像是隐形的亲友，给予支持、带来温暖，音乐的效果似乎类似于亲友的陪伴或拥抱。</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 28px;\"><strong style=\"margin: 0px; padding: 0px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(0, 112, 192);\">音乐虽然相当抽象，但是它的某些形式其实模仿着情绪反应，因此能够让我们体验情绪</span></strong><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">。人们借由音乐活动以及活动中的身体动作，促进人际情感交流，这样的交流可以弥补语言沟通的不足，并且支持着人与人之间的爱与合作。</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; clear: both; white-space: pre-wrap; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 28px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">诚如哲学家尼采所说“</span><strong style=\"margin: 0px; padding: 0px;\"><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(0, 112, 192);\">没有音乐，生活会是一种错误</span></strong><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\">”。<br style=\"margin: 0px; padding: 0px;\"/></span></p><p><span style=\"margin: 0px; padding: 0px; font-size: 15px; font-family: 宋体; color: rgb(62, 62, 62);\"><br/></span></p><p><br/></p>', '2016-09-16 14:01:56', '2016-09-16 14:01:54');

-- ----------------------------
-- Table structure for `lk_news_category`
-- ----------------------------
DROP TABLE IF EXISTS `lk_news_category`;
CREATE TABLE `lk_news_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lk_news_category
-- ----------------------------
INSERT INTO `lk_news_category` VALUES ('1', '新闻');

-- ----------------------------
-- Table structure for `lk_photo`
-- ----------------------------
DROP TABLE IF EXISTS `lk_photo`;
CREATE TABLE `lk_photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL DEFAULT '' COMMENT '职位',
  `content` text COMMENT '具体描述',
  `add_time` datetime DEFAULT '0000-00-00 00:00:00',
  `order` int(11) NOT NULL DEFAULT '0',
  `img` varchar(200) NOT NULL DEFAULT '' COMMENT '活动图片',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

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
