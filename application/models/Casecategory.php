<?php

class CasecategoryModel extends BaseModel{
    private static $_instance;
    public $_table = 'lk_case_category';

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function insertCasecategory($data) {
        return $this->db->insert($this->_table, $data);
    }

    public function updateCasecategory($data, $CasecategoryId) {
        $where = ' id = ' . $CasecategoryId;
        $this->db->update($this->_table, $data, $where);
    }

    public function deleteCasecategory($CasecategoryId) {
        $where = ' id = ' . $CasecategoryId;
        $this->db->delete($this->_table, $where);
    }

    public function getCasecategory($CasecategoryId) {
        $sql = 'select * from ' . $this->_table . ' where `id` = ' . $CasecategoryId;
        return $this->db->getRow($sql);
    }

    public function getCasecategoryList($page = 1, $gap = 0, $order=' `order` desc') {
        $where = '';
        $limit = '';
        if ($gap) {
            $start = ($page - 1) * $gap;
            $limit = ' limit ' . $start .',' . $gap;
        }
        $sql = 'select * from ' . $this->_table . $where . ' order by ' . $order . $limit;
        return $this->db->executeS($sql);
    }
}
