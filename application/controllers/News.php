<?php

/**
 * @name IndexController
 * @author dj
 * @desc   默认控制器
 * @see    http://www.php.net/manual/en/class.yaf-controller-abstract.php
 */
class NewsController extends FControllerModel {
    public function indexAction() {
        $page = $this->getParam('page', 1);
        $type = $this->getParam('type', 1);
		$newsModel = NewsModel::getInstance();
        $list = $newsModel->getNewsList($type, $page, self::PAGE_SIZE);
        $newsType = $newsModel->getNewsType($type);
        if ($list) {
            $classes = array(
                'yellow',
                'red',
                'blue',
                ''
            );
            foreach ($list as &$news) {
                $news['class'] = $classes[array_rand($classes)];
            }
            unset($news);
        }
        $count = $newsModel->getNewsCount($type);
        $pagebar = new Pagination(self::PAGE_SIZE, $count, $page, self::SUB_PAGES,'/index/news/index/page/');
        $this->_view->assign('list', $list);
        $this->_view->assign('type', $newsType);
        $this->_view->assign('pagebar', $pagebar->GetContent(self::PAGE_STYLE));
		return true;
	}
	
    public function detailAction() {
        $newsId = $this->getParam('id');
        $newsModel = NewsModel::getInstance();
        $news = $newsModel->getNews($newsId);
		$this->_view->assign('news', $news);
		return true;
	}
}
