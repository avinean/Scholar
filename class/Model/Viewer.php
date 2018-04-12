<?php

namespace App\Model;
use App\Core\Model;

class Viewer extends Model {

    private static $instance = null;

    public static function c() {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function getReadyTest() {
        $res = $this->db->query('SELECT * FROM tests WHERE id=15')->fetchSingleRow();
        $res = json_encode($res);        
        return $res;
    }
}