<?php

/**
 * @name IndexController
 * @author dj
 * @desc   默认控制器
 * @see    http://www.php.net/manual/en/class.yaf-controller-abstract.php
 */
class AboutController extends FControllerModel {
    public function indexAction() {
        $listConfig = ConfigModel::getInstance()->getPageConfig(ConfigModel::PAGE_ABOUT);
        foreach ($listConfig as $config) {
            $pageConfigs[$config['key']] = $config['value'];
        }
        $this->_view->assign('pageConfig', $pageConfigs);
		return true;
	}

}
