<?php

namespace App\Core;

class Security extends Model {

    public function json($arr = []) {
        return json_encode($arr);
    }

    public function regNewUser() {
        $p = $this->req->post;

        $query = "SELECT * FROM scholar.users
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
            INSERT INTO scholar.users
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

    public function authUser($par = [], $userAgent) {
        if ( isset($par['email']) && isset($par['password'])) {
            
            $query = "SELECT `id` FROM scholar.`users` 
            WHERE email = ".$this->db->quote($par['email'])."
            AND password = ".$this->db->quote($par['password']);

            $res = $this->db->query($query);
            $num = $res->rowsNum();
            $rows = $res->fetchAssoc();

            if (empty($num)) {
                return 0;
            }
            else {                
                setcookie('scholar_id', $rows['id'], time()+60*60*24*365, 'path=/');   
                setcookie('scholar_hash', md5($rows['id'].$par['email'].$par['password'].$userAgent),
                    time()+60*60*24*365, 'path=/');            
                return 1;
            }
        }
    }    

    public function checkAuth($par = [], $userAgent, $uri) {
		if (isset($par['scholar_id']) && isset($par['scholar_hash'])) {
			$query = "
				SELECT password, email 
				FROM scholar.`users`
				WHERE id = ".$this->db->quote($par['scholar_id'])."
				LIMIT 1";

			$res = $this->db->query($query)->fetchAssoc();

			$true_hash = md5($par['scholar_id'].$res['email'].$res['password'].$userAgent);
			$hash = $par['scholar_hash'];

			if ($true_hash === $hash && $uri === '/') {
				header('Location: /profile');
			}
			if ($true_hash !== $hash && $uri !== '/') {
				header('Location: /');
			}
		} else {
			if ($uri !== '/') {
				header('Location: /');
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