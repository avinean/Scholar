<?php

namespace App\Core;

class Model {

    private static $instance = null;

    public static function c() {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    function __construct() {
        $this->db = new \App\DataBase\MySQL;
        $this->req = new \App\Core\Request;
    }
}