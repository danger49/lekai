<?php

/**
 * @name AboutController
 * @author dj
 * @desc   默认控制器
 * @see    http://www.php.net/manual/en/class.yaf-controller-abstract.php
 */
class AboutController extends FControllerModel {
    public function indexAction() {
        $page = $this->getParam('page', 1);
		$jobModel = JobModel::getInstance();
        $list = $jobModel->getJobList(null, $page, 100);

        $this->_view->assign('list', $list);
		return true;
	}

	public function contactAction() {
        return true;
    }

}
