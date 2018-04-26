<?php

namespace App\Model;

use \App\Model\Viewer;

$app->respond('GET', '/viewer/get_form', function() {
	print_r( Viewer::c()->getReadyTest() );
});

$app->respond('GET', '/viewer/get_test_list', function() {
	print_r( Viewer::c()->getTestList() );
});