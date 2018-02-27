<?php

class CourseModel extends BaseModel{
    private static $_instance;
    public $_table = 'lk_course_category';

    public static function getInstance() {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function insertCourse($data) {
        return $this->db->insert($this->_table, $data);
    }

    public function updateCourse($data, $CourseId) {
        $where = ' id = ' . $CourseId;
        $this->db->update($this->_table, $data, $where);
    }

    public function deleteCourse($CourseId) {
        $where = ' id = ' . $CourseId;
        $this->db->delete($this->_table, $where);
    }

    public function getCourse($CourseId) {
        $sql = 'select * from ' . $this->_table . ' where `id` = ' . $CourseId;
        return $this->db->getRow($sql);
    }

    public function getCourseList($order='`order` asc') {
        $where = ' where `display_flag` = ' . 1;

        $sql = 'select * from ' . $this->_table . $where . ' order by ' . $order;
        return $this->db->executeS($sql);
    }
}
