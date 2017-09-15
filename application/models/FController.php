<?php

/**
 * 前台Controller
 * Created by IntelliJ IDEA.
 * User: DJ
 * Date: 13-12-5
 * Time: 下午12:17
 */
class FControllerModel extends Yaf_Controller_Abstract {
    const PAGE_SIZE = 20;//每页显示的条数
    const SUB_PAGES = 5;//每次显示的页数
    const PAGE_STYLE = 0;//分页式样
    protected $css;
    protected $js;
	public function init() {
		$view = $this->initView();
	    $configs = array();
        $list = ConfigModel::getInstance()->getAllConfig();
        foreach ($list as $config) {
            $configs[$config['key']] = $config['value'];
        }
        $this->_view->assign('config', $configs);
        $this->_view->assign('meta_title', $configs['title']);
        $this->_view->assign('meta_description', $configs['description']);
        $this->_view->assign('meta_keywords', $configs['keywords']);
        $this->css = array(
            'index' => 'http://www.lkmusic.cn/css/index.css',
        );
        $this->js = array(
            'http://www.lkmusic.cn/js/jquery1.4.2.min.js',
            'http://www.lkmusic.cn/js/jquery-1.js',
            'http://www.lkmusic.cn/js/jquery-migrate.js',
            'http://www.lkmusic.cn/js/jplayer.js',
            'http://www.lkmusic.cn/js/jquery_003.js',
            'http://www.lkmusic.cn/js/index.js',
        );
        $this->_view->assign('css_files', $this->css);
        $this->_view->assign('js_files', $this->js);
	}

	public function getParams()
	{
	    return $this->getRequest()->getParams();
	}

	public function getParam($key, $default = '')
	{
	    $params = $this->getParams();
	    if (isset($params[$key])) {
	        $param = $params[$key];
	        return $param ? $param : $default;
	    }
	    return $default;
	}

	public function ajax($response)
	{
	    header('Content-type: application/json');
	    header("Pragma:no-cache"); 
	    $response = array(
	        'code' => 200,
	        'rep' => $response
	    );
	    $response = json_encode($response);
	    exit($response);
	}
}
