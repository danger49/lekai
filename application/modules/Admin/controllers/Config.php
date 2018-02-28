<?php

/**
 * @name ConfigController
 * @author dj
 * @desc   默认控制器
 * @see    http://www.php.net/manual/en/class.yaf-controller-abstract.php
 */
class ConfigController extends BControllerModel {
	public function init() {
        parent::init();
        if (!session_id()) {
            session_start();
        }
        if (empty($_SESSION['memberinfo'])) {
            $this->redirect('/admin/index/index');
        }
    }
    
    public function indexAction() {
        $page = isset($_GET['page']) ? $_GET['page'] : 1;
		$configModel = ConfigModel::getInstance();
        $list = $configModel->getPageConfig($page);
        $pageTitle = ConfigModel::$pageTitles[$page];

        $this->_view->assign('list', $list);
        $this->_view->assign('pageTitle', $pageTitle);
		return true;
	}

    public function saveAction() {
        $id = $_POST['id'];
        $key = $_POST['key'];
        $value = $_POST['value'];
        $type = $_POST['type'];
        $configModel = ConfigModel::getInstance();
        $res = false;
        $msg = '更新失败';
        if ($type == 'file') {
            $src = substr($key, 0, -2);
            $up = new Fileupload();
            //设置属性(上传的位置， 大小， 类型， 名是是否要随机生成)
            $up -> set("path", "./upload/" . date('Y-m-d'));
            $up -> set("maxsize", 200000000);
            $up -> set("allowtype", array("gif", "png", "jpg","jpeg","wmv","mp3","mp4"));
            $up -> set("israndname", true);

            //使用对象中的upload方法， 就可以上传文件， 方法需要传一个上传表单的名子 pic, 如果成功返回true, 失败返回false
            if($up -> upload($src)) {
                //获取上传后文件名子
                $src = $up->getFileName();
                $value = isset($src[0]) ? $up->getPath() . '/' . $src[0] : '';
            } else {
                //获取上传失败以后的错误提示
                $this->ajax(array('msg' => "图片上传失败:" . implode($up->getErrorMsg(), ' ')));
            }
        }
        $res = $configModel->updateConfig(array('value'=>$value), $id);
        if ($res != false) {
            $msg = '更新成功';
        }
        $this->ajax(array('msg' => $msg));
    }
}
