<?php


use \App\Core\Security;

function route($path, $space) {
	global $app;
	$app->with($path, function () use ($app, $space) {
		require_once ROOT.'/../router/panel/'.$space;
	});
}

function getLayout($path = '') {
	global $app;
	$app->respond('GET', $path, function($req, $res, $ser) {
		require_once ROOT.'/app.php';
	});
}

$app->respond(function($req, $res, $ser) {
	$cookies = $req->cookies()->all();
	Security::c()->checkAuth((array) $cookies, $req->userAgent(), $req->uri());
});

route('/', 'security_r.php');
route('/viewer', 'viewer_r.php');
route('/former', 'former_r.php');
route('/profile', 'profile_r.php');
route('/poll/[i:id]', 'poll_r.php');