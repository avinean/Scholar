<?php

namespace App\Model;

use \App\Model\Former;
use \App\Core\Security;


$app->respond('GET', '', function($req, $res, $ser) {
	$cookies = $req->cookies()->all();
	Security::c()->checkAuth((array) $cookies, $req->userAgent());
	require_once ROOT.'/app.php';
});

$app->respond('POST', '/set_form', function($req, $res, $ser) {
	$id = $req->cookies()->all()['scholar_id'];
	$data = $req->paramsPost()->all()['data'];
    return Former::c()->setTest($data, $id);
});