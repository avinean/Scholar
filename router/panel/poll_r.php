<?php

namespace App\Model;

use \App\Model\Viewer;
use \App\Core\Security;


$app->respond('GET', '', function($req, $res, $ser) {
	$cookies = $req->cookies()->all();
	Security::c()->checkAuth((array) $cookies, $req->userAgent());
	require_once ROOT.'/app.php';
});

$app->respond('GET', '/get_form', function() {
//	print_r( Viewer::c()->getReadyTest() );
});

$app->respond('GET', '/get_test_list', function($req, $res, $ser) {
	$user_id = $req->cookies()->all()['scholar_id'];
	return Viewer::c()->getTestList($user_id);
});