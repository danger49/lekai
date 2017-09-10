<?php

class CasedetailModel extends BaseModel{
    private static $_instance;
    public $_table = 'lk_case_detail';

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function insertCasedetail($data) {
        $this->db->insert($this->_table, $data);
    }

    public function updateCasedetail($data, $CasedetailId) {
        $where = ' id = ' . $CasedetailId;
        $this->db->update($this->_table, $data, $where);
    }

    public function deleteCasedetail($CasedetailId) {
        $where = ' id = ' . $CasedetailId;
        $this->db->delete($this->_table, $where);
    }

    public function getCasedetail($CasedetailId) {
        $sql = 'select * from ' . $this->_table . ' where id = ' . $CasedetailId;
        return $this->db->getRow($sql);
    }

    public function getCasedetailList($caseId) {
        $sql = 'SELECT * FROM ' . $this->_table . ' WHERE `case_id` = ' . $caseId . ' ORDER BY `order` DESC';
        return $this->db->executeS($sql);
    }

    public function getLatestCase($count = 20) {
        //$sql = 'SELECT * FROM ' . $this->_table . ' GROUP BY `case_id` ORDER BY id DESC LIMIT ' . $count;
		$sql = 'select a.* from lk_case_detail a LEFT JOIN lk_case b on a.case_id = b.id where b.type = 1 group by a.case_id ORDER BY a.id ASC LIMIT ' . $count;
        return $this->db->executeS($sql);
    }
}
