<?php

namespace App\Core;

class Security {

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
        $this->home = '/';
    }

    public function json($arr = []) {
        return json_encode($arr);
    }

    public function regNewUser() {
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
            (`first_name`, `last_name`, `email`, `password`, `role`, `school`)
            VALUES ("
            .$this->db->quote($p->first_name).","
            .$this->db->quote($p->last_name).","
            .$this->db->quote($p->email).","
            .$this->db->quote($p->password).","
            .$this->db->quote($p->status).","
            .$this->db->quote($p->school).")";

            return $this->json(
                $this->db->query($query)->response 
            );
        }
    }

    public function authUser() {
        $p = $this->req->get;
        $s = $this->req->server;
        
        if ( isset($p->email) && isset($p->password)) {
            
            $query = "SELECT `id` FROM `scholar`.`users` 
            WHERE email = ".$this->db->quote($p->email)."
            AND password = ".$this->db->quote($p->password);

            $res = $this->db->query($query);
            $num = $res->rowsNum();
            $rows = $res->fetchSingleRow();

            if (empty($num)) {
                return 0;
            }
            else {
                
                session_start();

                $_SESSION['family'] = 1;
                $_SESSION['user_id'] = $rows['id'];
                $_SESSION['user_agent'] = md5($s->HTTP_USER_AGENT);
                $_SESSION['user_ip'] = md5($s->REMOTE_ADDR);
                $_SESSION['user_secret'] = md5($p->email.$p->password);
                $_SESSION['session_id'] = explode('=', SID)[1];

                $query = "
                REPLACE INTO `scholar`.`sessions_store`
                (`user_id`, `user_agent`, `user_ip`, `user_secret`, `session_id`)
                VALUES ('"
                .$rows['id']."','"
                .md5($s->HTTP_USER_AGENT)."','"
                .md5($s->REMOTE_ADDR)."','"
                .md5($p->email.$p->password)."','"
                .explode('=', SID)[1]."')";
   
                setcookie(
                    'scholar_familia',
                    'idu='.$_SESSION['user_id'].'&'.SID,
                    time()+60*60*24*365,
                    'path=/'
                );
            
                return $this->db->query($query)->response;
            }
        }
    }    

    public function checkAuth() {
        if (isset($this->req->cookie->scholar_familia)) {
            $cookie = $this->req->cookie->scholar_familia;
            $user_id = explode('&', $cookie)[0];
            $session_id = explode('&', $cookie)[1];

            $user_id = explode('=', $user_id)[1];
            $session_id = explode('=', $session_id)[1];

            $query = "
            SELECT * FROM `scholar`.`sessions_store`
            WHERE user_id = ".$this->db->quote($user_id)." AND
            session_id = ".$this->db->quote($session_id).
            "LIMIT 1";

            $res = $this->db->query($query)->fetchSingleRow();
            
            session_id($session_id);
            session_start();

            $_SESSION['family'] = 1;
            $_SESSION['user_id'] = $res['user_id'];
            $_SESSION['user_agent'] = $res['user_agent'];
            $_SESSION['user_ip'] = $res['user_ip'];
            $_SESSION['user_secret'] = $res['user_secret'];
            $_SESSION['session_id'] = $res['session_id'];
        }
        else {
            header('Location: /');
        }
    }

    public function checkCookie() {
        if (isset($this->req->cookie->scholar_familia)) {
            header('Location: /profile');
        }
    }
}