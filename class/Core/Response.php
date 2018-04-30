<?php

namespace App\Core;

class Response {

    public function Set($name, $val) {
        $this->$name = $val;
    }

    public function outRes() {
        print_r($this->response);
    }

    public function fetchAssoc() {
        if (gettype($this->response) === 'boolean') return $this->response;
        else return mysqli_fetch_assoc($this->response);
    }

    public function fetchArray() {
        if (gettype($this->response) === 'boolean') return $this->response;
        else return mysqli_fetch_all($this->response);
    }

    public function fetch() {
        if ($this->response === true) return true;
        else return mysqli_fetch_all($this->response, MYSQLI_ASSOC);
    }

    public function fetchFields() {
        if ($this->response === true) return true;
        else return mysqli_fetch_fields($this->response);
    }

    public function rowsNum() {
        if ($this->response === true) return true;
        else return $this->response->num_rows;
    }

	public function lastConnErrNum() {echo mysqli_connect_errno();}
	public function connErrN() {$this->lastConnErrNum();}

	public function lastConnError() {echo mysqli_connect_error();}
	public function connErr() {$this->lastConnError();}

	public function lastQueryErrNum() {echo mysqli_errno($this->conn);}
	public function errN() {$this->lastQueryErrNum();}

	public function lastQueryError() {echo mysqli_error($this->conn);}
	public function error() {$this->lastQueryError();}

	public function lastQueryInfo() {echo mysqli_info($this->conn);}
	public function info() {$this->lastQueryInfo();}

	public function ID() {return mysqli_insert_id($this->conn);}
}