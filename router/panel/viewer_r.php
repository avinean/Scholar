<?php

namespace App\Model;

use \App\Model\Viewer;

$app->map('GET', '/viewer/get_form', function() {
	print_r( Viewer::c()->getReadyTest() );
});

$app->map('GET', '/viewer/get_test_list', function() {
	print_r( Viewer::c()->getTestList() );
});