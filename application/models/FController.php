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
        $list = ConfigModel::getInstance()->getPageConfig(ConfigModel::PAGE_BASE);
        foreach ($list as $config) {
            $configs[$config['key']] = $config['value'];
        }
        $this->_view->assign('config', $configs);
        $this->_view->assign('meta_title', $configs['title']);
        $this->_view->assign('meta_description', $configs['description']);
        $this->_view->assign('meta_keywords', $configs['keywords']);
        $this->css = array(
            'index' => 'http://' . $configs['host'] . '/css/newstyle.css',
            'bootstrap' => 'http://' . $configs['host'] . '/css/bootstrap.css',
        );
        $this->js = array(
            'http://' . $configs['host'] . '/js/popper.min.js',
            'http://' . $configs['host'] . '/js/jquery1.4.2.min.js',
            'http://' . $configs['host'] . '/js/bootstrap.min.js',
        );
        $this->_view->assign('css_files', $this->css);
        $this->_view->assign('js_files', $this->js);
        $isMobile = $this->isMobile();
        $this->_view->assign('is_mobile', $isMobile ? 1 : 0);
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

	public function isMobile()
	{ 
	    // 如果有HTTP_X_WAP_PROFILE则一定是移动设备
	    if (isset ($_SERVER['HTTP_X_WAP_PROFILE'])) {
	        return true;
	    } 
	    // 如果via信息含有wap则一定是移动设备
	    if (isset ($_SERVER['HTTP_VIA'])){ 
	        // 找不到为flase,否则为true
	        return stristr($_SERVER['HTTP_VIA'], "wap") ? true : false;
	    } 
	    // 脑残法，判断手机发送的客户端标志,兼容性有待提高
	    if (isset ($_SERVER['HTTP_USER_AGENT'])) {
	        $clientkeywords = array ('nokia',
	            'sony',
	            'ericsson',
	            'mot',
	            'samsung',
	            'htc',
	            'sgh',
	            'lg',
	            'sharp',
	            'sie-',
	            'philips',
	            'panasonic',
	            'alcatel',
	            'lenovo',
	            'iphone',
	            'ipod',
	            'blackberry',
	            'meizu',
	            'android',
	            'netfront',
	            'symbian',
	            'ucweb',
	            'windowsce',
	            'palm',
	            'operamini',
	            'operamobi',
	            'openwave',
	            'nexusone',
	            'cldc',
	            'midp',
	            'wap',
	            'mobile'
	            ); 
	        // 从HTTP_USER_AGENT中查找手机浏览器的关键字
	        if (preg_match("/(" . implode('|', $clientkeywords) . ")/i", strtolower($_SERVER['HTTP_USER_AGENT']))) {
	            return true;
	        } 
	    } 
	    // 协议法，因为有可能不准确，放到最后判断
	    if (isset ($_SERVER['HTTP_ACCEPT'])) { 
	        // 如果只支持wml并且不支持html那一定是移动设备
	        // 如果支持wml和html但是wml在html之前则是移动设备
	        if ((strpos($_SERVER['HTTP_ACCEPT'], 'vnd.wap.wml') !== false) && (strpos($_SERVER['HTTP_ACCEPT'], 'text/html') === false || (strpos($_SERVER['HTTP_ACCEPT'], 'vnd.wap.wml') < strpos($_SERVER['HTTP_ACCEPT'], 'text/html')))) {
	            return true;
	        } 
	    } 
	    return false;
	} 

}
