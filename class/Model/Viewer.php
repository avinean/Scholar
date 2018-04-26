<?php

namespace App\Model;
use App\Core\Model;

class Viewer extends Model {

    public function getReadyTest() {
        $test_id = intval(basename($this->req->server->HTTP_REFERER));
        $res = $this->db->query('SELECT * FROM tests WHERE id='.$test_id)->fetchAssoc();
        return json_encode($res);
    }

    public function getTestList($user_id) {
		$res = $this->db->query('SELECT id FROM tests WHERE id_auth='.intval($user_id))->fetchArray();
		$ids = [];
		foreach ($res as $val) {
			$ids[] = $val[0];
		}
        return json_encode($ids);
    }
}