<?php

/**
 * Created by IntelliJ IDEA.
 * User: DJ
 * Date: 13-12-5
 * Time: 下午12:18
 */
class CaseController extends BControllerModel {
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
        $caseModel = CaseModel::getInstance();
        $list = $caseModel->getCaseList(null, $p, self::PAGE_SIZE);
        $count = $caseModel->getCaseCount();
        $pagebar = new Pagination(self::PAGE_SIZE, $count, $p, self::SUB_PAGES,'/admin/case/index/?p=');
        $this->_view->assign('list', $list);
        $this->_view->assign('pagebar', $pagebar->GetContent(self::PAGE_STYLE));
        return true;
    }
    
    public function detailsAction() {
        $id = $_GET['id'];
        $caseDetailModel = CasedetailModel::getInstance();
        $list = $caseDetailModel->getCasedetailList($id);
        $caseModel = CaseModel::getInstance();
        $case = $caseModel->getCase($id);
        $this->_view->assign('list', $list);
        $this->_view->assign('case', $case);
        return true;
    }

    public function addAction() {
        $caseCategory = array(
            array(
                'id' => '1',
                'name' => '游戏配乐'
            ),
            array(
                'id' => '2',
                'name' => '游戏音效'
            ),
            array(
                'id' => '3',
                'name' => '游戏配音'
            ),
            array(
                'id' => '4',
                'name' => 'CG视频'
            ),
            array(
                'id' => '5',
                'name' => '影视动漫'
            ),
        );
        $this->_view->assign('caseCategory', $caseCategory);
        return true;
    }
    
    public function saveAction() {
        $id = isset($_POST['id']) ? $_POST['id'] : '';
        $name = $_POST['name'];
        $order = $_POST['order'];
        $description = $_POST['description'];
        $src = 'src';
        $lable = $_POST['lable'];
        $client = $_POST['client'];
        $type = $_POST['type'];
        
        $up = new Fileupload();
        //设置属性(上传的位置， 大小， 类型， 名是是否要随机生成)
        $up -> set("path", "./upload/" . date('Y-m-d'));
        $up -> set("maxsize", 2000000);
        $up -> set("allowtype", array("gif", "png", "jpg","jpeg"));
        $up -> set("israndname", true);
        $icon = '';
        $img = '';
        $video = '';
        //使用对象中的upload方法， 就可以上传文件， 方法需要传一个上传表单的名子 pic, 如果成功返回true, 失败返回false
        if($up->upload($src)) {
            //获取上传后文件名子
            $src = $up->getFileName();
            $icon = isset($src[0]) ? $up->getPath() . '/' . $src[0] : '';
            $img = isset($src[1]) ? $up->getPath() . '/' . $src[1] : '';
            $video = isset($src[2]) ? $up->getPath() . '/' . $src[2] : '';
        } else {
            echo '<pre>';
            print_r($up->getErrorMsg());exit;
            $this->redirect('/admin/case/index');
            return false;
        }
        $caseModle = CaseModel::getInstance();
        $caseData = array(
            'name' => $name,
            'order' => $order,
            'description' => $description,
            'lable' => $lable,
            'client' => $client,
            'type' => $type,
        );
        if ($icon) $caseData['icon'] = $icon;
        if ($img) $caseData['img'] = $img;
        if ($video) $caseData['video'] = $video;
        if ($id) {
            $caseModle->updateCase($caseData, $id);
        } else {
            $caseData['add_time'] = date('Y-m-d H:i:s');
            $caseModle->insertCase($caseData);
        }
        $this->redirect('/admin/case/index');
        return false;
    }
    
    public function editAction() {
        $id = $_GET['id'];
        $caseModle = CaseModel::getInstance();
        $case = $caseModle->getCase($id);
        $caseCategory = array(
            array(
                'id' => '1',
                'name' => '游戏配乐'
            ),
            array(
                'id' => '2',
                'name' => '游戏音效'
            ),
            array(
                'id' => '3',
                'name' => '游戏配音'
            ),
            array(
                'id' => '4',
                'name' => 'CG视频'
            ),
            array(
                'id' => '5',
                'name' => '影视动漫'
            ),
        );
        $this->_view->assign('caseCategory', $caseCategory);
        $this->_view->assign('case', $case);
        return true;
    }

    public function delAction() {
        $id = $_GET['id'];
        $caseModle = CaseModel::getInstance();
        $caseModle->deleteCase($id);
        $this->redirect('/admin/case/index');
        return false;
    }

    public function addDetailAction()
    {
        $id = $_GET['id'];
        $caseModel = CaseModel::getInstance();
        $case = $caseModel->getCase($id);
        $this->_view->assign('case', $case);
        return true;
    }

    public function editDetailAction()
    {
        $id = $_GET['id'];
        $caseId = $_GET['case_id'];
        $caseDetailModel = CasedetailModel::getInstance();
        $caseModel = CaseModel::getInstance();
        $case = $caseModel->getCase($caseId);
        $caseDetail = $caseDetailModel->getCasedetail($id);
        $this->_view->assign('case', $case);
        $this->_view->assign('caseDetail', $caseDetail);
        return true;
    }
    
    public function saveDetailAction()
    {
        $id = isset($_POST['id']) ? $_POST['id'] : '';
        $caseId = $_POST['case_id'];
        $name = $_POST['name'];
        $lable = $_POST['lable'];
        $link = $_POST['link'];
        $src = 'src';
        $up = new Fileupload();
        //设置属性(上传的位置， 大小， 类型， 名是是否要随机生成)
        $up -> set("path", "./upload/" . date('Y-m-d'));
        $up -> set("maxsize", 2000000);
        $up -> set("allowtype", array("gif", "png", "jpg","jpeg","wmv","mp3",));
        $up -> set("israndname", true);
      
        //使用对象中的upload方法， 就可以上传文件， 方法需要传一个上传表单的名子 pic, 如果成功返回true, 失败返回false
        $upImg = '';
        if($up -> upload($src)) {
            //获取上传后文件名子
            $src = $up->getFileName();
            $upImg = isset($src[0]) ? $up->getPath() . '/' . $src[0] : '';
        } else {
            //获取上传失败以后的错误提示
            $this->redirect('/admin/case/details/?id=' . $caseId);
        }
        $caseDetailModle = CasedetailModel::getInstance();
        $detailData = array(
            'case_id' => $caseId,
            'name' => $name,
            'lable' => $lable,
            'link' => $link,
        );
        if ($upImg) $detailData['src'] = $upImg;
        if (empty($id)) {
            $caseDetailModle->insertCasedetail($detailData);
        } else {
            $caseDetailModle->updateCasedetail($detailData, $id);
        }
        $this->redirect('/admin/case/details/?id=' . $caseId);
        return false;
    }

    public function delDetailAction()
    {
        $id = $_REQUEST['id'];
        $caseId = $_REQUEST['case_id'];
        $caseDetailModle = CasedetailModel::getInstance();
        $caseDetailModle->deleteCasedetail($id);
        $this->redirect('/admin/case/details/?id=' . $caseId);
        return false;
    }
}
