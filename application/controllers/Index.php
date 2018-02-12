<?php

/**
 * @name IndexController
 * @author dj
 * @desc   默认控制器
 * @see    http://www.php.net/manual/en/class.yaf-controller-abstract.php
 */
class IndexController extends FControllerModel {

    public function init() {
        parent::init();
        $this->_view->assign('css_files', $this->css);
        $this->_view->assign('js_files', $this->js);
    }

    public function indexAction() {
        $listConfig = ConfigModel::getInstance()->getPageConfig(ConfigModel::PAGE_INDEX);
        foreach ($listConfig as $config) {
            $pageConfigs[$config['key']] = $config['value'];
        }
        $this->_view->assign('pageConfig', $pageConfigs);
        return true;
    }

    public function mapAction() {
        $this->_view->assign();
        return true;
    }
}
