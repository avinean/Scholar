<?php

namespace App\Core;

class Response {

    public function Setrespose($res) {
        $this->response = $res;
    }

    public function outRes() {
        print_r($this->response);
    }

    public function fetchSingleRow() {
        return mysqli_fetch_assoc($this->response);
        // first row assoc
    }

    public function fetch() {
        return mysqli_fetch_all($this->response, MYSQLI_ASSOC);
        //assoc array
    }

    public function fetchFields() {
        return mysqli_fetch_fields($this->response);
        //тупо індексний масив
    }
}