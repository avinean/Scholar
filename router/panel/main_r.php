<?php

namespace App\Model;

use \App\Model\Main;
use \App\Model\User;

$app->map('POST', '/main/reg', function() {
    print_r( Main::c()->registration() );
});

$app->map('POST', '/main/auth', function() {
    print_r( Main::c()->authorization() );
});

$app->map('GET', '/main/user', function() {
    print_r( User::c()->getUser() );
});