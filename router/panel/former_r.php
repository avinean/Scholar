<?php

namespace App\Model;

use \App\Model\Fromer;

$app->respond('GET', '/former/get_form', function() {
    print_r( Former::c()->getReadyTest() );
});

$app->respond('POST', '/former/set_form', function() {
    print_r( Former::c()->setTest() );
});