<?php

namespace App\Model;

use App\Core\Model;

class User extends Model {

    public function currentUser() {
		$id = $this->req->cookie->scholar_id;
		$query = 'SELECT * FROM scholar.users WHERE id='.intval($id);
		return (object) $this->db->query($query)->fetchAssoc();
    }

    public function getUserById($id) {
		$query = 'SELECT * FROM scholar.users WHERE id='.intval($id);
		return (object) $this->db->query($query)->fetchAssoc();
    }

}