<?php

namespace App\Model;

use \App\Core\Security;

$app->respond('POST', '/reg', function() {
    Security::c()->regNewUser();
});

$app->respond('POST', '/auth', function() {
    Security::c()->authUser();
});