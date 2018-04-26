<?php

namespace App\Model;

use \App\Model\Viewer;
use \App\Core\Security;

$app->respond('GET', '', function($req, $res, $ser) {
	$cookies = $req->cookies()->all();
	Security::c()->checkAuth((array) $cookies, $req->userAgent());
});

$app->respond('GET', '/[i:id]', function($req, $res, $ser) {
	$cookies = $req->cookies()->all();
	Security::c()->checkAuth((array) $cookies, $req->userAgent());
	require_once ROOT.'/app.php';
});

$app->respond('GET', '/[i:id]/get_form', function($req, $res, $ser) {
	return Viewer::c()->getReadyTest($req->param('id'));
});