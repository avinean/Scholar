<?php

namespace App\DataBase;

use App\Core\Response;
use App\Core\Request;

class MySQL {


    private static $instance = null;

    public static function c() {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

	public function getMySQL($db) {

        switch ($db) {
            case 'local':
            $HOST = "localhost";
            $USER = "root";
            $PASS = "";
            $DB = "id3784881_scholar";
            break;
			case 'prod':
			$HOST = "localhost";
			$USER = "id3784881_avinean";
			$PASS = "Coba1953";
			$DB = "id3784881_scholar";
			break;
            default:
            break;
        }

        $res = [
            "h" => $HOST,
            "u" => $USER,
            "p" => $PASS,
            "d" => $DB,
        ];

        return $res;
    }
    
    private function open_conn() {
        $i = $this->getMySQL('prod');
        return mysqli_connect( $i['h'], $i['u'], $i['p'], $i['d']); 
    }

    private function close_conn($conn) {
        mysqli_close($conn);
    }

    public function query($query) {
        $this->conn = $this->open_conn();

        $result = mysqli_query($this->conn, $query.' --');

        $response = new Response;
        $response->Set('response', $result);
        $response->Set('conn', $this->conn);
		if ($response->conn->errno || $response->conn->connect_errno) {
			print_r($response->conn);
		}
        return $response;
    }

    public function quote($str) {
        return "'".mysqli_real_escape_string($this->open_conn(), $str)."'";
    }

    public function escape($str) {
        return mysqli_real_escape_string($this->open_conn(), $str);
    }
}