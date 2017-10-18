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
        $this->css['jplayer'] = 'http://www.lkmusic.cn/jplayer/index/jplayer.css';
        $this->_view->assign('css_files', $this->css);
        $this->_view->assign('js_files', $this->js);
    }

    public function indexAction() {
        $newsModel = NewsModel::getInstance();
        $newsList1 = $newsModel->getLatestNews(1);
        $newsList2 = $newsModel->getLatestNews(2);
        $photoModel = PhotoModel::getInstance();
        $photos = $photoModel->getLatestPhoto(8);
        $casedetailModel = CasedetailModel::getInstance();
        $caseList = $casedetailModel->getLatestCase(10);
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
        $this->_view->assign('newsList1', $newsList1);
        $this->_view->assign('newsList2', $newsList2);
        $this->_view->assign('photos', $photos);
        return true;
    }

    public function mapAction() {
        $this->_view->assign();
        return true;
    }
}
