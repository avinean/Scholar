<?php

namespace App\Model;

use \App\Core\Security;

getLayout();

$app->respond('POST', 'reg', function($req, $res, $ser) {
    Security::c()->regNewUser();
});

$app->respond('POST', 'auth', function($req, $res, $ser) {
	$post = $req->paramsPost()->all();
    return Security::c()->authUser((array) $post, $req->userAgent());
});
