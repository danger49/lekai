<?php

/**
 * Created by IntelliJ IDEA.
 * User: DJ
 * Date: 13-12-5
 * Time: 下午12:18
 */
class IndexController extends BControllerModel {
    public function init() {
        parent::init();
        if (!session_id()) {
            session_start();
        }
    }
    
    public function indexAction() {
        $this->_view->assign('content', '您现在在管理后台');
        return true;
    }
    
    public function loginAction() {
        if (isset($_POST['name']) && isset($_POST['password'])) {
            $name = $_POST['name'];
            $password = md5(md5($_POST['password']));
            $adminModel = AdminModel::getInstance();
            $member = $adminModel->getAdminByNamePwd($name, $password);
            if ($member) {
                $_SESSION['memberinfo'] = $member;
                $this->redirect('main');
            } else {
                unset($_POST);
                session_destroy ();
                $this->redirect('index');
            }
        } else {
            $this->redirect('index');
        }
        return false;
    }
    
    public function mainAction() {
        if (empty($_SESSION['memberinfo'])) {
            $this->redirect('index');
        }
        return true;
    }
    
    public function outAction() {
        session_destroy ();
        $this->redirect('index');
        return false;
    }

    public function adminAction() {
        if (empty($_SESSION['memberinfo'])) {
            $this->redirect('index');
        }
        $this->_view->assign('admin', $_SESSION['memberinfo']);
        return true;
    }

    public function adminsaveAction() {
        $password = $_POST['password'];
        $newpassword = $_POST['newpassword'];
        $confirmpassword = $_POST['confirmpassword'];
        if (empty($password) || empty($newpassword) || empty($confirmpassword)
            || $newpassword != $confirmpassword
            || md5(md5($password)) != $_SESSION['memberinfo']['password']) {
            $this->redirect('/admin/index/admin');
            return true;
        }
        $data = array(
            'password' => md5(md5($newpassword)),
        );
        AdminModel::getInstance()->updateAdmin($data, $_SESSION['memberinfo']['id']);
        $this->redirect('/admin/index/main');
        return false;
    }
}
