<?php

namespace App\Core;

use App\Core\Singleton;

class Model extends Singleton {

    function __construct() {
        $this->db = new \App\DataBase\MySQL;
        $this->req = new \App\Core\Request;
		$this->home = '/';
    }

    public function json($arr = []) {
        return json_encode($arr);
    }
}