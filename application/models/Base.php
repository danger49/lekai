<?php

class BaseModel{
    protected $db;
    protected function __construct()
    {
        $this->db = Db::getInstance();
    }
}
