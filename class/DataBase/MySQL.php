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

    public function getMySQL($user) {

        switch ($user) {
            case 'avinean':
            $HOST = "localhost";
            $USER = "id3784881_avinean";
            $PASS = "Coba1953";
            $DB = "";
            break;
            case 'root':
            $HOST = "localhost";
            $USER = "root";
            $PASS = "";
            $DB = "";
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
        $i = $this->getMySQL('root');
        return mysqli_connect( $i['h'], $i['u'], $i['p'], $i['d']); 
    }

    private function close_conn($conn) {
        mysqli_close($conn);
    }

    public function query($query) {
        $this->conn = $this->open_conn();

        $result = mysqli_query($this->conn, $query.' --');

        $response = new Response;
        $response->Setrespose($result);

        // $this->close_conn($this->conn);
        return $response;
    }

    public function q($str) {
        return mysqli_real_escape_string($this->open_conn(), $str);
    }

    public function lastConnErrNum() {
        return mysqli_connect_errno();
    }

    public function lastConnError() {
        return mysqli_connect_error();
    }

    public function lastQueryErrNum() {
        return mysqli_errno($this->conn);
    }

    public function 3
    () {
        return mysqli_error($this->conn);
    }

    public function lastQueryInfo() {
        echo mysqli_info($this->conn);
    }
}