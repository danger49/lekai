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
        $this->_view->assign('css_files', $this->css);
        $this->_view->assign('js_files', $this->js);
    }

    public function indexAction() {
        $listConfig = ConfigModel::getInstance()->getPageConfig(ConfigModel::PAGE_CAUSE);
        foreach ($listConfig as $config) {
            $pageConfigs[$config['key']] = $config['value'];
        }
        $this->_view->assign('pageConfig', $pageConfigs);
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
