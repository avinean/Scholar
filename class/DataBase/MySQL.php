<?php

namespace App\DataBase;

use App\Core\Response;

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
            case 'id3784881_scholar':
            $HOST = "localhost";
            $USER = "root";
            $PASS = "";
            $DB = "id3784881_scholar";
            break;
            case 'scholar':
            $HOST = "localhost";
            $USER = "root";
            $PASS = "";
            $DB = "scholar";
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
        $i = $this->getMySQL('scholar');
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