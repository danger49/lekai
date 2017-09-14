<?php

/**
 * Created by IntelliJ IDEA.
 * User: DJ
 * Date: 13-12-5
 * Time: 下午12:18
 */
class JobController extends BControllerModel {
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
        $JobModel = JobModel::getInstance();
        $list = $JobModel->getJobList(null, $p, 100);
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
        $JobData = array(
            'title' => $title,
            'content' => $content,
        );
        $JobModel = JobModel::getInstance();
        if ($id) {
            $JobModel->updateJob($JobData, $id);
        } else {
            $JobData['add_time'] = date('Y-m-d H:i:s');
            $JobModel->insertJob($JobData);
        }
        $this->redirect('/admin/Job/index');
        return false;
    }

    public function editAction() {
        $id = $_GET['id'];
        $JobModel = JobModel::getInstance();
        $Job = $JobModel->getJob($id);
        $this->_view->assign('job', $Job);
        return true;
    }

    public function delAction() {
        $id = $_GET['id'];
        $JobModel = JobModel::getInstance();
        $JobModel->deleteJob($id);
        $this->redirect('/admin/Job/index');
        return false;
    }
}
