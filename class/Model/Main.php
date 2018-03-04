<?php

namespace App\Model;

use \App\Core\Model;

class Main extends Model {

    private static $instance = null;

    public static function c() {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function run($fun) {
        $this->$fun();
    }

    
    public function registration() {
        $p = $this->req->get;
        $query = "
        INSERT INTO `scholar`.`users`
        (`first_name`, `last_name`, `email`, `password`, `role`, `school`)
        VALUES ('"
          .$this->db->q($p->first_name)."','"
          .$this->db->q($p->last_name)."','"
          .$this->db->q($p->email)."','"
          .$this->db->q($p->password)."','"
          .$this->db->q($p->status)."','"
          .$this->db->q($p->school)."')";

        echo $this->db->query($query)->result;
        $this->db->lastQueryError();
    }
}