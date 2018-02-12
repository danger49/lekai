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
        $list = $photoModel->getPhotoList(null, $page, 6);

        $listConfig = ConfigModel::getInstance()->getPageConfig(ConfigModel::PAGE_PHOTO);
        foreach ($listConfig as $config) {
            $pageConfigs[$config['key']] = $config['value'];
        }
        $this->_view->assign('pageConfig', $pageConfigs);

        $this->_view->assign('list', $list);
		return true;
	}

}
