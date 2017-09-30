<?php

class CaseModel extends BaseModel{
    private static $_instance;
    public $_table = 'lk_case';

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function insertCase($data) {
        return $this->db->insert($this->_table, $data);
    }

    public function updateCase($data, $CaseId) {
        $where = ' id = ' . $CaseId;
        $this->db->update($this->_table, $data, $where);
    }

    public function deleteCase($CaseId) {
        $where = ' id = ' . $CaseId;
        $this->db->delete($this->_table, $where);
    }

    public function getCase($CaseId) {
        $sql = 'select * from ' . $this->_table . ' where `id` = ' . $CaseId;
        return $this->db->getRow($sql);
    }

    public function getCaseList($type = null, $page = 1, $gap = 0, $order=' `id` desc') {
        $where = '';
        $limit = '';
        if ($gap) {
            $start = ($page - 1) * $gap;
            $limit = ' limit ' . $start .',' . $gap;
        }        
        if ($type) {
            $where = ' where `type` = ' . $type;
        }
        $sql = 'select * from ' . $this->_table . $where . ' order by ' . $order . $limit;
        return $this->db->executeS($sql);
    }

    public function getCaseCount($type = null)
    {
        $where = '';
        if ($type) {
            $where = ' where `type` = ' . $type;
        }
        $sql = 'select count(1) as total from ' . $this->_table . $where;
        $rs = $this->db->getRow($sql);
        return isset($rs['total']) ? $rs['total'] : 0;
    }
}
