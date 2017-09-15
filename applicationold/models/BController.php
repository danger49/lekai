<?php

/**
 * 管理后台Controller
 * Created by IntelliJ IDEA.
 * User: chenzhidong
 * Date: 13-12-5
 * Time: 下午12:16
 */
class BControllerModel extends Yaf_Controller_Abstract {
    const PAGE_SIZE = 10;//每页显示的条数
    const SUB_PAGES = 5;//每次显示的页数
    const PAGE_STYLE = 2;//分页式样
	public function init() {
		//设置Controller的模板位置为模块目录下的views文件夹
		$this->setViewpath(APPLICATION_PATH . '/application/modules/' . $this->getModuleName() . '/views');
		$views = $this->initView();
	}
}
