<?php

namespace App\Model;
use App\Core\Model;

class Former extends Model {

    public function setTest($data, $cnt, $id ) {
        $query = "
            INSERT INTO scholar.tests (`data_form`, `id_auth`) 
            VALUES (".$this->db->quote($data).", ".intval($id).")
            ";
        $res = $this->db->query($query);

        if (!isset($res->errno)) {
        	$formId = $res->ID();

			$results = [];

			for ($i = 0; $i < $cnt; $i++) {
				$results[] = '`r' . $i . '` VARCHAR(1) NOT NULL';
			}

			$tableQuery = '
			CREATE TABLE `test_results`.`form' . intval($formId) . '` ( 
				`idu` INT NOT NULL , 
				`datetime` DATETIME NOT NULL , 
				' . implode(',', $results) . ', 
				`location` VARCHAR(40) NOT NULL , 
			PRIMARY KEY (`idu`, `datetime`), 
			INDEX (`location`))';

			$res = $this->db->query($tableQuery);

			if (!isset($res->errno)) {
				return $formId;
			}
		}
    }
}