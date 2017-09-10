<?php

/**
 * @name IndexController
 * @author dj
 * @desc   默认控制器
 * @see    http://www.php.net/manual/en/class.yaf-controller-abstract.php
 */
class CaseController extends FControllerModel {
    const SITE_URL = 'http://www.lkmusic.cn/';
    const SITE_NAME = "乐开音乐";

    public function init() {
        parent::init();
        $this->css['jplayer'] = 'http://www.lkmusic.cn/jplayer/case/jplayer.css';
        $this->js = array(
            'http://www.lkmusic.cn/js/jquery1.4.2.min.js',
            'http://www.lkmusic.cn/js/jquery.easing.1.3.js',
            'http://www.lkmusic.cn/js/allOneScroll.js',
            'http://www.lkmusic.cn/jplayer/jquery.jplayer.min.js',
            'http://www.lkmusic.cn/js/case.js',
        );
        $this->_view->assign('css_files', $this->css);
        $this->_view->assign('js_files', $this->js);
    }

    public function indexAction() {
        $caseModle = CaseModel::getInstance();
        $listTemp1 = $caseModle->getCaseList(1);
        $list1['list'] = $listTemp1;
        $list1['case'] = isset($listTemp1[0]['id']) ? $this->info($listTemp1[0]['id']) : '';
        $listTemp2 = $caseModle->getCaseList(2);
        $list2['list'] = $listTemp2;
        $list2['case'] = isset($listTemp2[0]['id']) ? $this->info($listTemp2[0]['id']) : '';
        $listTemp3 = $caseModle->getCaseList(3);
        $list3['list'] = $listTemp3;
        $list3['case'] = isset($listTemp3[0]['id']) ? $this->info($listTemp3[0]['id']) : '';
        $listTemp4 = $caseModle->getCaseList(4);
        $list4['list'] = $listTemp4;
        $list4['case'] = isset($listTemp4[0]['id']) ? $this->info($listTemp4[0]['id']) : '';
        $listTemp5 = $caseModle->getCaseList(5);
        $list5['list'] = $listTemp5;
        $list5['case'] = isset($listTemp5[0]['id']) ? $this->info($listTemp5[0]['id']) : '';
		$this->_view->assign('list1', $list1);
		$this->_view->assign('list2', $list2);
		$this->_view->assign('list3', $list3);
		$this->_view->assign('list4', $list4);
		$this->_view->assign('list5', $list5);
		return true;
	}

	public function info($caseId)
	{
	    $caseModel = CaseModel::getInstance();
	    $case = $caseModel->getCase($caseId);
	    $caseDetailModel = CasedetailModel::getInstance();
	    $list = $caseDetailModel->getCasedetailList($case['id']);
	    if ($case) {
            if (strpos($case['video'], '.mp3')) {
                $case['mp3'] = $case['video'];
            } else if (strpos($case['video'], '.m4v')) {
                $case['m4v'] = $case['video'];
            } else if (strpos($case['video'], '.webm')) {
                $case['webm'] = $case['video'];
            } else if (strpos($case['video'], '.ogv')) {
                $case['ogv'] = $case['video'];
            } else if (strpos($case['video'], '.ogg')) {
                $case['oga'] = $case['video'];
            } else if (strpos($case['video'], '.jpg') or strpos($case['video'], '.png') or strpos($case['video'], '.bmp')) {
                $case['poster'] = $case['video'];
            }
            if ($case['img']) {
                $case['poster'] = $case['img'];
            }
	        if (is_array($list) && !empty($list)) {
	            foreach ($list as &$detail) {
	                $detail['title'] = $detail['name'];
                    $detail['artist'] = self::SITE_NAME;
                    if (strpos($detail['src'], '.mp3')) {
                        $detail['mp3'] = $detail['src'];
                    } else if (strpos($detail['src'], '.m4v')) {
                        $detail['m4v'] = $detail['src'];
                    } else if (strpos($detail['src'], '.webm')) {
                        $detail['webm'] = $detail['src'];
                    } else if (strpos($detail['src'], '.ogv')) {
                        $detail['ogv'] = $detail['src'];
                    } else if (strpos($detail['src'], '.ogg')) {
                        $detail['oga'] = $detail['src'];
                    } else if (strpos($detail['src'], '.jpg') or strpos($detail['src'], '.png') or strpos($detail['src'], '.bmp')) {
                        $detail['poster'] = $detail['src'];
                    }
	            }
	            unset($detail);
	        }
	        $case['list'] = $list;
	    }
	    return $case;
	}

	public function detailAction()
	{
	    $caseId = $this->getParam('id');
	    $caseId = $_GET['id'];
	    $caseModel = CaseModel::getInstance();
	    $case = $caseModel->getCase($caseId);
        if ($case) {
            if (strpos($case['video'], '.mp3')) {
                $case['mp3'] = $case['video'];
            } else if (strpos($case['video'], '.m4v')) {
                $case['m4v'] = $case['video'];
            } else if (strpos($case['video'], '.webm')) {
                $case['webm'] = $case['video'];
            } else if (strpos($case['video'], '.ogv')) {
                $case['ogv'] = $case['video'];
            } else if (strpos($case['video'], '.ogg')) {
                $case['oga'] = $case['video'];
            } else if (strpos($case['video'], '.jpg') or strpos($case['video'], '.png') or strpos($case['video'], '.bmp')) {
                $case['poster'] = $case['video'];
            }
            if ($case['img']) {
                $case['poster'] = $case['img'];
            }
        }
	    $caseDetailModel = CasedetailModel::getInstance();
	    $list = $caseDetailModel->getCasedetailList($case['id']);
	    if (is_array($list) && !empty($list)) {
            foreach ($list as &$detail) {
                $detail['title'] = $detail['name'];
                $detail['artist'] = self::SITE_NAME;
                if (strpos($detail['src'], '.mp3')) {
                    $detail['mp3'] = $detail['src'];
                } else if (strpos($detail['src'], '.m4v')) {
                    $detail['m4v'] = $detail['src'];
                } else if (strpos($detail['src'], '.webm')) {
                    $detail['webm'] = $detail['src'];
                } else if (strpos($detail['src'], '.ogv')) {
                    $detail['ogv'] = $detail['src'];
                } else if (strpos($detail['src'], '.ogg')) {
                    $detail['oga'] = $detail['src'];
                } else if (strpos($detail['src'], '.jpg') or strpos($detail['src'], '.png') or strpos($detail['src'], '.bmp')) {
                    $detail['poster'] = $detail['src'];
                }
            }
            unset($detail);
        }
	    $this->ajax(array(
	        'caseInfo' => $case,
	        'list' => $list,
	    ));
//	    $this->_view->assign('case', $case);
//		$this->_view->assign('list', $list);
		return false;
	}
}
