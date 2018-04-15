<?php

use \App\Core\Model;
use \App\Core\Security;

function route($app, $arr = []) {
    $app->map('GET', '/', function() {
        Security::c()->checkCookie();
        require_once ROOT.'/app.php';
    });
    foreach ($arr as $val) {
        $app->map('GET', '/'.$val, function() {
            Security::c()->checkAuth();
            require_once ROOT.'/app.php';
        });
    }
}

route($app, [
    'profile',
    'faq',
    'restore',
    'reg',
    'former',
    'viewer',
    'poll/[i:id]'
]);

require_once ROOT.'/../router/security_r.php';
require_once ROOT.'/../router/panel/former_r.php';
require_once ROOT.'/../router/panel/viewer_r.php';