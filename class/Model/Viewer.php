<?php

namespace App\Model;
use App\Core\Model;

class Viewer extends Model {

	public function getTestList($user_id) {
		$res = $this->db->query('SELECT id FROM scholar.tests WHERE id_auth='.intval($user_id))->fetchArray();
		$ids = [];
		foreach ($res as $val) {
			$ids[] = $val[0];
		}
        return json_encode($ids);
    }
}