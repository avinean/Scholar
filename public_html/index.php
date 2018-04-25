<?php

	error_reporting(E_ALL);
	ini_set('display_errors', 1);

    define('ROOT', $_SERVER['DOCUMENT_ROOT']);
    define('URI', explode('/', $_SERVER['REQUEST_URI'])[1]);

    require_once ROOT.'/../vendor/autoload.php';
//  foreach($_SERVER as $k => $v) {
//    	echo $k.' => '.$v.'<br>';
//	}
    $app = \App\Core\AltoRouter::c();

    require_once ROOT.'/../router/index_r.php';

    $match = $app->match();
    
    if( $match && is_callable( $match['target'] ) ) {
        call_user_func_array( $match['target'], $match['params'] ); 
    } else {
        // no route was matched
        header( $_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
    }