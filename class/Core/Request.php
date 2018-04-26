<?php

namespace App\Core;

class Request {

    function __construct() {

    	$temp = (object)'';
    	foreach ($_GET as $key => $val) $temp->$key = (string) $val;
    	$this->get = $temp;

		$temp = (object)'';
		foreach ($_POST as $key => $val) $temp->$key = (string) $val;
		$this->post = $temp;

		$temp = (object)'';
		foreach ($_REQUEST as $key => $val) $temp->$key = (string) $val;
		$this->request = $temp;

		$temp = (object)'';
		foreach ($_SERVER as $key => $val) $temp->$key =  $val;
		$this->server = $temp;

		$temp = (object)'';
		foreach ($_COOKIE as $key => $val) $temp->$key = (string) $val;
		$this->cookie = $temp;

//		unset($_GET);
//		unset($_POST);
//		unset($_REQUEST);
//		unset($_COOKIE);
//		unset($_SERVER);
	}
}