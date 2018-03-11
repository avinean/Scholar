<?php

use \App\Core\Model;

function route($app, $arr = []) {
    $app->map('GET', '/', function() {
        require_once ROOT.'/text.php';
    });
    foreach ($arr as $val) {
        $app->map('GET', '/'.$val, function() {
            require_once ROOT.'/text.php';
        });
        require_once ROOT.'/../router/panel/'.$val.'_r.php';
    }
}

route($app, [
    'main', 
    'profile', 
    'admin'
]);