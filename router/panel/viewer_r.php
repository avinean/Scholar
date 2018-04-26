<?php

namespace App\Model;

use \App\Model\Viewer;

getLayout();

$app->respond('GET', '/get_test_list', function($req, $res, $ser) {
	$user_id = $req->cookies()->all()['scholar_id'];
	return Viewer::c()->getTestList($user_id);
});