<?php

namespace App\Model;

use \App\Model\Former;

getLayout();

$app->respond('POST', '/set_form', function($req, $res, $ser) {
	$id = $req->cookies()->all()['scholar_id'];
	$data = $req->paramsPost()->all()['data'];
    return Former::c()->setTest($data, $id);
});