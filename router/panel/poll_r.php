<?php

namespace App\Model;

use \App\Model\Poll;
use \App\Model\User;


getLayout();

$app->respond('GET', '/get_form', function($req, $res, $ser) {
	return Poll::c()->getReadyTest($req->param('id'));
});

$app->respond('POST', '/set_form_result', function($req, $res, $ser) {
	return Poll::c()->setFormResult([
		'resList' => json_decode($req->param('data')),
		'idp' => json_decode($req->param('idp')),
		'idu' => User::c()->currentUser()->id,
		'ip' => $req->ip()
	]);
});