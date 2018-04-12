<?php

namespace App\Model;

use \App\Model\Viewer;

$app->map('GET', '/viewer/get_form', function() {
    print_r( Viewer::c()->getReadyTest() );
});