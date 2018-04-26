<?php

use \App\Core\Model;
use \App\Core\Security;
use \App\Model\User;

//function route($app, $arr = []) {
//    $app->respond('GET', '/', function() {
//        Security::c()->checkCookie();
//        require_once ROOT.'/app.php';
//    });
//    foreach ($arr as $val) {
//        $app->respond('GET', '/'.$val, function() {
//            Security::c()->checkAuth();
//            require_once ROOT.'/app.php';
//        });
//    }
//}
//
//route($app, [
//    'profile',
//    'former',
//    'viewer',
//    'poll/[i:id]'
//]);


function route($path, $space) {
	global $app;
	$app->with($path, function () use ($app, $space, $path) {
		if ($path === '/') Security::c()->checkCookie();
		else Security::c()->checkAuth();
		require_once ROOT.'/../router/panel/'.$space;
		require_once ROOT.'/app.php';
	});
}

route('/', 'security_r.php');
route('/former', 'former_r.php');
route('/viewer', 'viewer_r.php');