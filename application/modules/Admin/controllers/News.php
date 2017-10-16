<?php

/**
 * Created by IntelliJ IDEA.
 * User: DJ
 * Date: 13-12-5
 * Time: 下午12:18
 */
class NewsController extends BControllerModel {
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
        $p = isset($_GET['p']) ? $_GET['p'] : 1;
        $newsModel = NewsModel::getInstance();
        $list = $newsModel->getNewsList(null, $p, self::PAGE_SIZE);
        $count = $newsModel->getNewsCount();
        $pagebar = new Pagination(self::PAGE_SIZE, $count, $p, self::SUB_PAGES,'/admin/news/index/?p=');
        $this->_view->assign('list', $list);
        $this->_view->assign('pagebar', $pagebar->GetContent(self::PAGE_STYLE));
        return true;
    }
    
    public function addAction() {
        $newsModel = NewsModel::getInstance();
        $newsCategory = $newsModel->getAllNewsType();
        $this->_view->assign('newsCategory', $newsCategory);
        return true;
    }
    
    public function saveAction() {
        $id = isset($_POST['id']) ? $_POST['id'] : '';
        $title = $_POST['title'];
        $order = $_POST['order'];
        $source = $_POST['source'];
        $description = $_POST['description'];
        $type = $_POST['type'];
        $link = $_POST['link'];
        $content = $_POST['content'];
        $newsData = array(
            'title' => $title,
            'order' => $order,
            'source' => $source,
            'description' => $description,
            'type' => $type,
            'link' => $link,
            'content' => $content,
        );
        $newsModel = NewsModel::getInstance();
        if ($id) {
            $newsModel->updateNews($newsData, $id);
        } else {
            $newsData['add_time'] = date('Y-m-d H:i:s');
            $newsModel->insertNews($newsData);
        }
        $this->redirect('/admin/news/index');
        return false;
    }
    
    public function editAction() {
        $id = $_GET['id'];
        $newsModel = NewsModel::getInstance();
        $newsCategory = $newsModel->getAllNewsType();
        $news = $newsModel->getNews($id);
        $this->_view->assign('newsCategory', $newsCategory);
        $this->_view->assign('news', $news);
        return true;
    }

    public function delAction() {
        $id = $_GET['id'];
        $newsModel = NewsModel::getInstance();
        $newsModel->deleteNews($id);
        $this->redirect('/admin/news/index');
        return false;
    }
}
