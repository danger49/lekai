<?php

/**
 * Created by IntelliJ IDEA.
 * User: DJ
 * Date: 13-12-5
 * Time: 下午12:18
 */
class CourseController extends BControllerModel {
    public function init() {
        parent::init();
        if (!session_id()) {
            session_start();
        }
        if (empty($_SESSION['memberinfo'])) {
            $this->redirect('/admin/index/index');
        }
    }
    
    public function indexAction() {
        $courseModel = CourseModel::getInstance();
        $list = $courseModel->getCourseList();
        $this->_view->assign('list', $list);
        return true;
    }

    public function addAction() {
        return true;
    }
    
    public function saveAction() {
        $id = isset($_POST['id']) ? $_POST['id'] : '';
        $name = $_POST['name'];
        $order = $_POST['order'];
        $description = $_POST['description'];
        $media = 'media';
        $labels = $_POST['labels'];
        $title_1 = $_POST['title_1'];
        $content_1 = $_POST['content_1'];
        $title_2 = $_POST['title_2'];
        $content_2 = $_POST['content_2'];
        $upImg = '';
        $up = new Fileupload();
        //设置属性(上传的位置， 大小， 类型， 名是是否要随机生成)
        $up -> set("path", "./upload/" . date('Y-m-d'));
        $up -> set("maxsize", 200000000);
        $up -> set("allowtype", array("gif", "png", "jpg","jpeg","wmv","mp3","mp4"));
        $up -> set("israndname", true);
        //使用对象中的upload方法， 就可以上传文件， 方法需要传一个上传表单的名子 pic, 如果成功返回true, 失败返回false
        if($up->upload($media)) {
            //获取上传后文件名子
            $media = $up->getFileName();
            $upImg = isset($media[0]) ? $up->getPath() . '/' . $media[0] : '';
        } else {
            echo '<pre>';
            print_r($up->getErrorMsg());exit;
            $this->redirect('/admin/course/index');
            return false;
        }
        $courseModle = CourseModel::getInstance();
        $courseData = array(
            'name' => $name,
            'order' => $order,
            'description' => $description,
            'labels' => $labels,
            'title_1' => $title_1,
            'content_1' => $content_1,
            'title_2' => $title_2,
            'content_2' => $content_2,
        );
        if ($upImg) $courseData['media'] = $upImg;
        if ($id) {
            $courseModle->updateCourse($courseData, $id);
        } else {
            $courseModle->insertCourse($courseData);
        }
        $this->redirect('/admin/course/index');
        return false;
    }
    
    public function editAction() {
        $id = $_GET['id'];
        $courseModle = CourseModel::getInstance();
        $course = $courseModle->getCourse($id);
        $this->_view->assign('course', $course);
        return true;
    }

    public function delAction() {
        $id = $_GET['id'];
        $courseModle = CourseModel::getInstance();
        $courseModle->deleteCourse($id);
        $this->redirect('/admin/course/index');
        return false;
    }
}
