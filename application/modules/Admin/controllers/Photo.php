<?php

/**
 * Created by IntelliJ IDEA.
 * User: DJ
 * Date: 13-12-5
 * Time: 下午12:18
 */
class PhotoController extends BControllerModel {
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
        $p = isset($_GET['p']) ? $_GET['p'] : 1;
        $photoModel = PhotoModel::getInstance();
        $list = $photoModel->getPhotoList(null, $p, 100);
        $this->_view->assign('list', $list);
        return true;
    }

    public function addAction() {
        return true;
    }

    public function saveAction() {
        $id = isset($_POST['id']) ? $_POST['id'] : '';
        $title = $_POST['title'];
        $content = $_POST['content'];
        $photoData = array(
            'title' => $title,
            'content' => $content,
            'add_time' => date('Y-m-d H:i:s'),
        );

        $src = 'img';
        $up = new Fileupload();
        //设置属性(上传的位置， 大小， 类型， 名是是否要随机生成)
        $up -> set("path", "./upload/" . date('Y-m-d'));
        $up -> set("maxsize", 2000000);
        $up -> set("allowtype", array("gif", "png", "jpg","jpeg","wmv","mp3",));
        $up -> set("israndname", true);

        //使用对象中的upload方法， 就可以上传文件， 方法需要传一个上传表单的名子 pic, 如果成功返回true, 失败返回false
        if($up -> upload($src)) {
            //获取上传后文件名子
            $src = $up->getFileName();
            $upImg = isset($src[0]) ? $up->getPath() . '/' . $src[0] : '';
            if ($upImg) {
                $photoData['img'] = $upImg;
            }
        }


        $photoModel = PhotoModel::getInstance();
        if ($id) {
            $photoModel->updatePhoto($photoData, $id);
        } else {
            $photoModel->insertPhoto($photoData);
        }
        $this->redirect('/admin/photo/index');
        return false;
    }

    public function editAction() {
        $id = $_GET['id'];
        $photoModel = PhotoModel::getInstance();
        $photo = $photoModel->getPhoto($id);
        $this->_view->assign('photo', $photo);
        return true;
    }

    public function delAction() {
        $id = $_GET['id'];
        $photoModel = PhotoModel::getInstance();
        $photoModel->deletePhoto($id);
        $this->redirect('/admin/photo/index');
        return false;
    }
}
