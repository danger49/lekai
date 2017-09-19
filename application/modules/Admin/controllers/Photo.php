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
        $img = $_POST['img'];
        $photoData = array(
            'title' => $title,
            'content' => $content,
            'img' => $img,
        );
        $photoModel = PhotoModel::getInstance();
        if ($id) {
            $photoModel->updatePhoto($photoData, $id);
        } else {
            $PhotoData['add_time'] = date('Y-m-d H:i:s');
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
