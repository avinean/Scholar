<?php

use \App\Core\Model;

function route($app, $arr = ['/']) {
    foreach ($arr as $key => $val) {
        $app->map('GET', '/'.$val.'/'.$key, function() {
            require_once ROOT.'/text.php';
        });
        require_once ROOT.'/../router/panel/'.$key.'_r.php';
    }
}

route($app, [
    'main' => 'r',
    'profile' => 'r',
    'admin' => 'a'
]);