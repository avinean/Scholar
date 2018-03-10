<?php

namespace App\Model;

use \App\Model\Main;

$app->map('POST', '/r/main/reg', function() {
    print_r( Main::c()->registration() );
});

$app->map('POST', '/r/main/auth', function() {
    print_r( Main::c()->authorization() );
});