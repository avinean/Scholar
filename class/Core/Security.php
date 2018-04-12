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
        $p = $this->req->post;
        $s = $this->req->server;

        if ( isset($p->email) && isset($p->password)) {
            
            $query = "SELECT `id` FROM `id3784881_scholar`.`users` 
            WHERE email = ".$this->db->quote($p->email)."
            AND password = ".$this->db->quote($p->password);

            $res = $this->db->query($query);
            $num = $res->rowsNum();
            $rows = $res->fetchSingleRow();

            if (empty($num)) {
                return 0;
            }
            else {                
                setcookie('scholar_id', $rows['id'], time()+60*60*24*365, 'path=/');   
                setcookie('scholar_hash', md5($rows['id'].$p->email.$p->password.$s->HTTP_USER_AGENT),
                    time()+60*60*24*365, 'path=/');            
                return 1;
            }
        }
    }    

    public function checkAuth() {
        if (isset($this->req->cookie->scholar_id) && isset($this->req->cookie->scholar_hash)) {

            $s = $this->req->server;
            $id = $this->req->cookie->scholar_id;       
            
            $query = "
            SELECT password, email FROM `id3784881_scholar`.`users`
            WHERE id = ".$this->db->quote($id)."LIMIT 1";

            $res = $this->db->query($query)->fetchSingleRow();

            $true_hash = md5($id.$res['email'].$res['password'].$s->HTTP_USER_AGENT);
            $hash = $this->req->cookie->scholar_hash;

            if ($true_hash !== $hash) {
                header('Location: /');
            }
        }
        else {
            header('Location: /');
        }
    }

    public function checkCookie() {
        if (isset($this->req->cookie->scholar_id) && isset($this->req->cookie->scholar_hash)) {
			$s = $this->req->server;
			$id = $this->req->cookie->scholar_id;

			$query = "
            SELECT password, email FROM `id3784881_scholar`.`users`
            WHERE id = ".$this->db->quote($id)."LIMIT 1";

			$res = $this->db->query($query)->fetchSingleRow();

			$true_hash = md5($id.$res['email'].$res['password'].$s->HTTP_USER_AGENT);
			$hash = $this->req->cookie->scholar_hash;

			if ($true_hash === $hash) {
				header('Location: /profile');
			}
		}
    }

    public function logOut() {
        setcookie(
            'scholar_id',
            '',
            time()-1,
            'path=/'
        );

        setcookie(
            'scholar_hash',
            '',
            time()-1,
            'path=/'
        );
    }
}