<?php

class JobModel extends BaseModel{
    private static $_instance;
    public $_table = 'lk_job';

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function insertJob($data) {
        $this->db->insert($this->_table, $data);
    }

    public function updateJob($data, $JobId) {
        $where = ' id = ' . $JobId;
        $this->db->update($this->_table, $data, $where);
    }

    public function deleteJob($JobId) {
        $where = ' id = ' . $JobId;
        $this->db->delete($this->_table, $where);
    }

    public function getJob($JobId) {
        $sql = 'select * from ' . $this->_table . ' where id = ' . $JobId;
        return $this->db->getRow($sql);
    }

    public function getJobList($type = null, $page = 1, $pageSize = 5, $order='`order` desc') {
        $start = ($page - 1) * $pageSize;
        $where = '';
        if ($type) {
            $where = ' `type` = ' . $type;
        }
        $sql = 'select * from ' . $this->_table . $where . ' order by ' . $order .' LIMIT ' . $start . ',' . $pageSize;
        return $this->db->executeS($sql);
    }

    public function getJobCount($type = null)
    {
        $where = '';
        if ($type) {
            $where = ' `type` = ' . $type;
        }
        $sql = 'select count(1) as total from ' . $this->_table . $where . ' order by `order`';
        $rs = $this->db->getRow($sql);
        return isset($rs['total']) ? $rs['total'] : 0;
    }

    public function getLatestJob($count = 2) {
        $sql = 'select * from ' . $this->_table . ' ORDER BY id DESC LIMIT ' . $count;
        return $this->db->executeS($sql);
    }
}
