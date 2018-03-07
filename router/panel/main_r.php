<?php

use \App\Model\Main;

$app->map('POST', '/r/main/reg', function() {
    Main::c()->registration();
});

$app->map('GET', '/r/main/auth', function() {
    Main::c()->registration();
});

$app->map('GET', '/test', function() {
    print_r($_GET);
});


