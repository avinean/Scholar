<?php

namespace App\Model;

use \App\Model\Viewer;


getLayout();

$app->respond('GET', '/get_form', function($req, $res, $ser) {
	return Viewer::c()->getReadyTest($req->param('id'));
});