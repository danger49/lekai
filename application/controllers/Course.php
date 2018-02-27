<?php

/**
 * @name IndexController
 * @author dj
 * @desc   默认控制器
 * @see    http://www.php.net/manual/en/class.yaf-controller-abstract.php
 */
class CourseController extends FControllerModel {
    public function init() {
        parent::init();
        $this->_view->assign('css_files', $this->css);
        $this->_view->assign('js_files', $this->js);
    }

    public function indexAction() {
        $listConfig = ConfigModel::getInstance()->getPageConfig(ConfigModel::PAGE_COURSE);
        foreach ($listConfig as $config) {
            $pageConfigs[$config['key']] = $config['value'];
        }
        $courseModel = CourseModel::getInstance();
        $list = $courseModel->getCourseList();
        foreach ($list as &$item) {
            $item['labels'] = $item['labels'] ? explode(',', $item['labels']) : [];
        }
        unset($item);
        $this->_view->assign('list', $list);
        $this->_view->assign('pageConfig', $pageConfigs);
		return true;
	}
}
