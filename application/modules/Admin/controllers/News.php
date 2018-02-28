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
        $newsCategory = array(
            array(
                'id' => 1,
                'name' => '新闻',
            ),
        );
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
        $img = 'img';
        $upImg = '';
        $up = new Fileupload();
        //设置属性(上传的位置， 大小， 类型， 名是是否要随机生成)
        $up -> set("path", "./upload/" . date('Y-m-d'));
        $up -> set("maxsize", 2000000);
        $up -> set("allowtype", array("gif", "png", "jpg","jpeg"));
        $up -> set("israndname", true);
        //使用对象中的upload方法， 就可以上传文件， 方法需要传一个上传表单的名子 pic, 如果成功返回true, 失败返回false
        if($up->upload($img)) {
            //获取上传后文件名子
            $img = $up->getFileName();
            $upImg = isset($img[0]) ? $up->getPath() . '/' . $img[0] : '';
        } else {
            echo '<pre>';
            print_r($up->getErrorMsg());exit;
            $this->redirect('/admin/news/index');
            return false;
        }
        $newsData = array(
            'title' => $title,
            'order' => $order,
            'source' => $source,
            'description' => $description,
            'type' => $type,
            'link' => $link,
            'content' => $content,
        );
        if ($upImg) $newsData['img'] = $upImg;
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
        $newsCategory = array(
            array(
                'id' => 1,
                'name' => '新闻',
            ),
        );
        $newsModel = NewsModel::getInstance();
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
