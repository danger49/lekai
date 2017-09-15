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
        $this->css['jplayer'] = 'http://192.168.1.200/jplayer/index/jplayer.css';
        $this->_view->assign('css_files', $this->css);
        $this->_view->assign('js_files', $this->js);
    }

    public function indexAction() {
        $newsModel = NewsModel::getInstance();
        $newsList = $newsModel->getLatestNews();
        $casedetailModel = CasedetailModel::getInstance();
        $caseList = $casedetailModel->getLatestCase();
        foreach ($caseList as &$case) {
            if (strpos($case['src'], '.mp3')) {
                $case['mp3'] = $case['src'];
            } else if (strpos($case['src'], '.m4v')) {
                $case['m4v'] = $case['src'];
            } else if (strpos($case['src'], '.webm')) {
                $case['webm'] = $case['src'];
            } else if (strpos($case['src'], '.ogv')) {
                $case['ogv'] = $case['src'];
            } else if (strpos($case['src'], '.ogg')) {
                $case['oga'] = $case['src'];
            } else if (strpos($case['src'], '.jpg') or strpos($case['src'], '.png') or strpos($case['src'], '.bmp')) {
                $case['poster'] = $case['src'];
            }
        }
        unset($case);
        $this->_view->assign('caseList', $caseList);
        $this->_view->assign('newsList', $newsList);
        return true;
    }
}
