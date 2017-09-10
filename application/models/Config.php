<?php

class ConfigModel extends BaseModel{
    private static $_instance;
    public $_table = 'lk_config';

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function insertConfig($data) {
        $this->db->insert($this->_table, $data);
    }

    public function updateConfig($data, $ConfigId) {
        $where = ' id = ' . $ConfigId;
        $this->db->update($this->_table, $data, $where);
    }

    public function deleteConfig($ConfigId) {
        $where = ' id = ' . $ConfigId;
        $this->db->delete($this->_table, $where);
    }

    public function getConfig($ConfigId) {
        $sql = 'select * from ' . $this->_table . ' where id = ' . $ConfigId;
        return $this->db->getRow($sql);
    }

    public function getAllConfig() {
        $sql = 'select * from ' . $this->_table;
        return $this->db->executeS($sql);
    }
}
