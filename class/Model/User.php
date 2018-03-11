<?php

namespace App\Model;

use \App\Core\Model;

class User extends Model {

    private static $instance = null;

    public static function c() {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }
  
    public function getUser() {
        $cookie = $this->req->cookie;
        return $cookie;
    }
}