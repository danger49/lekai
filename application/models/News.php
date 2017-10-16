<?php

class NewsModel extends BaseModel{
    private static $_instance;
    public $_table = 'lk_news';

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function insertNews($data) {
        $this->db->insert($this->_table, $data);
    }

    public function updateNews($data, $newsId) {
        $where = ' id = ' . $newsId;
        $this->db->update($this->_table, $data, $where);
    }

    public function deleteNews($newsId) {
        $where = ' id = ' . $newsId;
        $this->db->delete($this->_table, $where);
    }

    public function getNews($newsId) {
        $sql = 'select * from ' . $this->_table . ' where id = ' . $newsId;
        return $this->db->getRow($sql);
    }

    public function getNewsList($type = null, $page = 1, $pageSize = 5, $order='`id` desc') {
        $start = ($page - 1) * $pageSize;
        $where = '';
        if ($type) {
            $where = ' where `type` = ' . $type;
        }
        $sql = 'select * from ' . $this->_table . $where . ' order by ' . $order .' limit ' . $start . ',' . $pageSize;
        return $this->db->executeS($sql);
    }

    public function getNewsCount($type = null)
    {
        $where = '';
        if ($type) {
            $where = ' where `type` = ' . $type;
        }
        $sql = 'select count(1) as total from ' . $this->_table . $where . ' order by `order`';
        $rs = $this->db->getRow($sql);
        return isset($rs['total']) ? $rs['total'] : 0;
    }

    public function getLatestNews($type = 1, $count = 2) {
        $sql = 'select * from ' . $this->_table . ' where `type` = ' . $type . ' order by id desc limit ' . $count;
        return $this->db->executeS($sql);
    }

    public function getNewsType($type) {
        $sql = 'select * from ' . $this->_table . '_category where id = ' . $type;
        return $this->db->getRow($sql);
    }

    public function getAllNewsType() {
        $sql = 'select * from ' . $this->_table . '_category  order by id asc';
        return $this->db->executeS($sql);
    }
}
