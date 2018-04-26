<?php

namespace App\Model;

use \App\Core\Security;

$app->respond('GET', '', function($req, $res, $ser) {
	$cookies = $req->cookies()->all();
	Security::c()->checkAuth((array) $cookies, $req->userAgent());
	require_once ROOT.'/app.php';
});