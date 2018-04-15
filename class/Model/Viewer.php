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
        $test_id = intval(basename($this->req->server->HTTP_REFERER));
        $res = $this->db->query('SELECT * FROM tests WHERE id='.$test_id)->fetchSingleRow();
        return json_encode($res);
    }
}