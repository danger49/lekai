<?php

class AdminModel extends BaseModel{
    private static $_instance;
    public $_table = 'lk_admin';

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function insertAdmin($data) {
        $this->db->insert($this->_table, $data);
    }

    public function updateAdmin($data, $id) {
        $where = ' id = ' . $id;
        $this->db->update($this->_table, $data, $where);
    }

    public function deleteAdmin($id) {
        $where = ' id = ' . $id;
        $this->db->delete($this->_table, $where);
    }

    public function getAdmin($id) {
        $sql = 'select * from ' . $this->_table . ' where id = ' . $id;
        return $this->db->getRow($sql);
    }

    public function getAdminList($page = 1, $pageSize = 30) {
        $start = ($page - 1) * $pageSize;
        $sql = 'select * from ' . $this->_table . ' LIMIT ' . $start . ',' . $pageSize;
        return $this->db->executeS($sql);
    }

    public function getAdminByNamePwd($name, $password, $count = 1) {
        $sql = 'select * from ' . $this->_table . ' where `name` = \'' . $name . '\' AND `password` =  \'' . $password . '\' ORDER BY id DESC LIMIT ' . $count;
        return $this->db->getRow($sql);
    }
}
