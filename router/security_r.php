<?php

namespace App\Model;

use \App\Core\Security;

$app->map('POST', '/reg', function() {
    print_r( Security::c()->regNewUser() );
});

$app->map('POST', '/auth', function() {
    print_r( Security::c()->authUser() );
});