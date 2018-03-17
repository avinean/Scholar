<?php 

    define('ROOT', $_SERVER['DOCUMENT_ROOT']);
    define('URI', explode('/', $_SERVER['REQUEST_URI'])[1]);

    require_once ROOT.'/../vendor/autoload.php';
  
    $app = \App\Core\AltoRouter::c();

    require_once ROOT.'/../router/index_r.php';

    $match = $app->match();
    
    if( $match && is_callable( $match['target'] ) ) {
        call_user_func_array( $match['target'], $match['params'] ); 
    } else {
        // no route was matched
        header( $_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
    }

    // $HOST = "localhost";
    // $USER = "root";
    // $PASS = "";
    // $DB = "";

    // $conn = mysqli_connect($HOST, $USER, $PASS, $DB);

    // print_r(mysqli_query($conn, 
    // "INSERT INTO `scholar`.`sessions_store` (`session_id`, `user_id`, `user_agent`, `user_ip`, `user_secret`) 
    // VALUES ('qwerty', '1', 'qwert', 'wqert', 'wert')"));

    