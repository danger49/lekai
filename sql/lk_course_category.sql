/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : lk

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-02-27 15:54:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `lk_course_category`
-- ----------------------------
DROP TABLE IF EXISTS `lk_course_category`;
CREATE TABLE `lk_course_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '',
  `order` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `display_flag` tinyint(1) DEFAULT '1' COMMENT '是否显示',
  `media` varchar(100) DEFAULT '' COMMENT '课程图片介绍或者视频介绍',
  `description` varchar(255) DEFAULT '' COMMENT '课程简短描述',
  `title_1` varchar(20) DEFAULT '' COMMENT '课程特色标题',
  `content_1` varchar(255) DEFAULT '' COMMENT '课程特色描述',
  `title_2` varchar(20) DEFAULT '' COMMENT '课程效果标题',
  `content_2` varchar(255) DEFAULT '' COMMENT '课程效果描述',
  `labels` varchar(100) DEFAULT '' COMMENT '标签 逗号隔开',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='课程类型表';

-- ----------------------------
-- Records of lk_course_category
-- ----------------------------
INSERT INTO `lk_course_category` VALUES ('1', '乐队王国', '5', '1', 'images/course/5.png', '8-12岁亲子乐队；没错，我们可以组乐队了，甚至可以和爸爸妈妈一起真正的享受音乐', '课程特色', '亲子家庭乐队是乐开音乐王国的最高呈现形式，旨在孩子们及家庭拥有良好的音乐能力及乐器基础之上，进行的音乐最高形态的结合，为成员们定制的不同梯度的乐队练习曲目，定制化的总谱及伴奏体系，系统的音乐讲解，全面的音乐知识分享，让父母和孩子一起因为音乐而牵手腾飞。', '课程效果', '自我展示能力的培养；和睦的家庭亲子关系；舞台及演讲能力，领导力的培养；极好的音乐专综合能力； 扩充音乐及艺术视野', '成长,快乐,互动,情感');
INSERT INTO `lk_course_category` VALUES ('2', '合唱之旅', '4', '1', 'images/course/4.png', '5-9岁儿童合唱，天籁之音就此开启，美妙童声演绎经典', '课程特色', '乐开合唱团是乐开音乐教委会针对5-9岁孩子研发的合唱教学体系，希望让中国的孩子拥有专业的声唱培养，尤其针对过往的经典作品全部进行全新编配，让音乐更符合现代的时代审美，让孩子能拥有国际化的审美能力及作品演唱。', '课程效果', '良好的节奏及音准能力；专业的发声及气息控制；优秀的舞台表现能力；个体自信心的培养；良好的艺术审美', '自如,控制,稳定,情绪');
INSERT INTO `lk_course_category` VALUES ('3', '乐器学习', '3', '1', 'images/course/3.png', '6-12岁乐器学习，用最钟爱的乐器去感知音乐的真谛', '课程特色', '在传统乐器学习基础之上，结合英国rock\r\n                        school考级研发的专门针对现代音乐的学习体系，旨在让孩子们学习乐器不再感受枯燥，而是学以致用，本着务实快乐的方式感受音乐真正的魅力。', '课程效果', '乐器学习的阶段性成果明显；极好的实用性；随时保持对乐器学习良好的兴趣度；良好的音乐理解能力', '体会,畅想,行动,释放');
INSERT INTO `lk_course_category` VALUES ('4', '音乐素养', '2', '1', 'images/course/2.jpg', '4-6岁音乐素养教育；\r\n                        用音乐和律动的方式提升国民儿童的音乐素养；\r\n                        音乐素养-所谓由律动训练和音乐实践而获得的一种音乐修养；', '课程特色', 'LK课程内容涵盖读谱、视唱听音、节奏训练、乐器合奏，音乐赏析等多方面的综合理论基础，用音乐律动的方式帮助儿童一起建立良好的节奏级音准能力，其中所有儿歌作品词曲编配全部进行原创。', '课程效果', '良好的音乐审美；良好的艺术感知力；良好的节奏感及音准能力；未来学习音乐以及乐器将不再轻易放弃', '思考,参与,交互,创造');
INSERT INTO `lk_course_category` VALUES ('5', '音乐启蒙', '1', '1', 'images/course/1.png', '2-4岁音乐启蒙教学系统；用趣味游戏的方式开启音乐感知之门', '课程特色', '音乐启蒙是乐开音乐王国教研委员会历时2年，针对2-4岁宝宝及托班孩子精心打磨的启蒙课程，旨在孩子的听觉敏感期，用音乐游戏的方式开启宝宝的音乐感知能力，开发左右脑的协调性，建立良好的律动基础，而这也是未来感知音乐的基础能力。', '课程效果', '敏锐的听觉感知能力；良好的肢体律动及协调能力；良好的亲子关系', '聆听,感知,同化,模仿');
