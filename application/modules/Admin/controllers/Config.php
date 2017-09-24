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

}
