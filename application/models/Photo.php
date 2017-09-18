<?php

class PhotoModel extends BaseModel{
    private static $_instance;
    public $_table = 'lk_photo';

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function insertPhoto($data) {
        $this->db->insert($this->_table, $data);
    }

    public function updatePhoto($data, $PhotoId) {
        $where = ' id = ' . $PhotoId;
        $this->db->update($this->_table, $data, $where);
    }

    public function deletePhoto($PhotoId) {
        $where = ' id = ' . $PhotoId;
        $this->db->delete($this->_table, $where);
    }

    public function getPhoto($PhotoId) {
        $sql = 'select * from ' . $this->_table . ' where id = ' . $PhotoId;
        return $this->db->getRow($sql);
    }

    public function getPhotoList($type = null, $page = 1, $pageSize = 5, $order='`order` desc') {
        $start = ($page - 1) * $pageSize;
        $where = '';
        if ($type) {
            $where = ' `type` = ' . $type;
        }
        $sql = 'select * from ' . $this->_table . $where . ' order by ' . $order .' LIMIT ' . $start . ',' . $pageSize;
        return $this->db->executeS($sql);
    }

    public function getPhotoCount($type = null)
    {
        $where = '';
        if ($type) {
            $where = ' `type` = ' . $type;
        }
        $sql = 'select count(1) as total from ' . $this->_table . $where . ' order by `order`';
        $rs = $this->db->getRow($sql);
        return isset($rs['total']) ? $rs['total'] : 0;
    }

    public function getLatestPhoto($count = 2) {
        $sql = 'select * from ' . $this->_table . ' ORDER BY id DESC LIMIT ' . $count;
        return $this->db->executeS($sql);
    }
}
