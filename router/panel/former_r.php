<?php

namespace App\Model;

use \App\Model\Fromer;

$app->map('GET', '/former/get_form', function() {
    print_r( Former::c()->getReadyTest() );
});

$app->map('POST', '/former/set_form', function() {
    print_r( Former::c()->setTest() );
});