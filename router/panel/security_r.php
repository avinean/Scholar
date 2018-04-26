<?php

namespace App\Model;

use \App\Core\Security;

$app->respond('GET', '', function($req, $res, $ser) {
	$cookies = $req->cookies()->all();
	Security::c()->checkCookie((array) $cookies, $req->userAgent());
	require_once ROOT.'/app.php';
});

$app->respond('POST', 'reg', function($req, $res, $ser) {
    Security::c()->regNewUser();
});

$app->respond('POST', 'auth', function($req, $res, $ser) {
	$post = $req->paramsPost()->all();
    return Security::c()->authUser((array) $post, $req->userAgent());
});
