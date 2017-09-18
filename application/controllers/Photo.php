<?php

/**
 * @name PhotoController
 * @author dj
 * @desc   默认控制器
 * @see    http://www.php.net/manual/en/class.yaf-controller-abstract.php
 */
class PhotoController extends FControllerModel {
    public function indexAction() {
        $page = $this->getParam('page', 1);
		$photoModel = PhotoModel::getInstance();
        $list = $photoModel->getPhotoList(null, $page, 100);

        $this->_view->assign('list', $list);
		return true;
	}

}
