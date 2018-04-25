<?php

namespace App\Model;
use App\Core\Model;

class Former extends Model {

    public function setTest() {
        $data = $this->req->post->data;
        $id = $this->req->cookie->scholar_id;
        $query = "
            INSERT INTO tests (`data_form`, `id_auth`) 
            VALUES (".$this->db->quote($data).", ".intval($id).")
            ";
        $res = $this->db->query($query)->ID();
        return $res;
    }
}