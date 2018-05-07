<?php

namespace App\Model;

use App\Core\Model;
use App\Model\User;

class Poll extends Model {

	public function getReadyTest($test_id) {
		$res = $this->db->query('SELECT * FROM scholar.tests WHERE id='.$test_id)->fetchAssoc();
		return json_encode($res);
	}

	public function setFormResult($data = []) {
		if (empty($data['resList'])) return;

		$keys =[];
		$values = [];

		foreach ($data['resList'] as $key => $val) {
			$keys[] = $this->db->escape($key);
			$values[] = $this->db->quote($val);
		}

		$query = '
			INSERT INTO test_results.form' . intval($data['idp']) . '
				(idu, 
				'. implode(',', $keys).', 
				location)
			VALUES (
				'.$data['idu'].', 
				'.implode(',', $values).', 
				"'.$data['ip'].'")
		';

		$this->db->query($query);
	}
}