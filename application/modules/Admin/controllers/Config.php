<?php

/**
 * @name ConfigController
 * @author dj
 * @desc   默认控制器
 * @see    http://www.php.net/manual/en/class.yaf-controller-abstract.php
 */
class ConfigController extends BControllerModel {
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
		$configModel = ConfigModel::getInstance();
        $list = $configModel->getAllConfig();

        $this->_view->assign('list', $list);
		return true;
	}

    public function saveAction() {
        $id = $_POST['id'];
        $key = $_POST['key'];
        $value = $_POST['value'];
        $type = $_POST['type'];
        // var_dump($value);exit;
        $configModel = ConfigModel::getInstance();
        $res = false;
        $msg = '更新失败';
        if ($type != 'file') {
            $res = $configModel->updateConfig(array('value'=>$value),$id);
        }
        if ($res != false) {
            $msg = '更新成功';
        }
        $this->ajax(array('msg' => $msg));
    }
}
