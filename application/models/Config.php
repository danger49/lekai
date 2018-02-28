<?php

class ConfigModel extends BaseModel
{
    const PAGE_BASE = 1;//基础通用配置
    const PAGE_INDEX = 2;//首页配置
    const PAGE_COURSE = 3;//课程页配置
    const PAGE_PHOTO = 4;//活动页配置
    const PAGE_NEWS = 5;//文章页配置
    const PAGE_ABOUT = 6;//关于我们页配置
    public static $pageTitles = array(
        '1' => '网站配置',
        '2' => '首页配置',
        '3' => '课程页面',
        '4' => '活动页面',
        '5' => '分享页面',
        '6' => '关于我们页面'
    );
    private static $_instance;
    public $_table = 'lk_config';

    public static function getInstance()
    {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function insertConfig($data)
    {
        $this->db->insert($this->_table, $data);
    }

    public function updateConfig($data, $ConfigId)
    {
        $where = ' id = ' . $ConfigId;
        return $this->db->update($this->_table, $data, $where);
    }

    public function deleteConfig($ConfigId)
    {
        $where = ' id = ' . $ConfigId;
        $this->db->delete($this->_table, $where);
    }

    public function getConfig($ConfigId)
    {
        $sql = 'select * from ' . $this->_table . ' where id = ' . $ConfigId;
        return $this->db->getRow($sql);
    }

    public function getAllConfig()
    {
        $sql = 'select * from ' . $this->_table;
        return $this->db->executeS($sql);
    }

    public function getPageConfig($page = 1)
    {
        $sql = 'select * from ' . $this->_table . ' where page = ' . $page;
        return $this->db->executeS($sql);
    }
}
