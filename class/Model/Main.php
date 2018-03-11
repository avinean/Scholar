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
  
    public function registration() {
        $p = $this->req->post;

        $query = "SELECT * FROM `scholar`.`users` 
        WHERE email = ".$this->db->quote($p->email);

        $rows = $this->db->query($query)->rowsNum();

        if ($rows > 0) {
            return $this->json([
                'status' => 0,
                'message' => 'Email is already registered'
            ]);
        }
        else {
            $query = "
            INSERT INTO `scholar`.`users`
            (`first_name`, `last_name`, `email`, `password`, `hash`, `role`, `school`)
            VALUES ("
            .$this->db->quote($p->first_name).","
            .$this->db->quote($p->last_name).","
            .$this->db->quote($p->email).","
            .$this->db->quote($p->password).","
            .$this->db->quote(md5($p->password)).","
            .$this->db->quote($p->status).","
            .$this->db->quote($p->school).")";

            return $this->json(
                $this->db->query($query)->response 
            );
        }
    }

    public function authorization() {
        $p = $this->req->post;

        if ( isset($p->email) && isset($p->password)) {
            
            $query = "SELECT `hash` FROM `scholar`.`users` 
            WHERE email = ".$this->db->quote($p->email)."
            AND password = ".$this->db->quote($p->password);

            $res = $this->db->query($query);
            $num = $res->rowsNum();
            $rows = $res->fetchSingleRow();

            if (empty($num)) {
                return 0;
            }
            else {
                setcookie('scholar_hash', $rows['hash'], time()+60*60*24*365, '/');
                setcookie('scholar_email', $p->email, time()+60*60*24*365, '/');
                return 1;
            }
        }
    }
}