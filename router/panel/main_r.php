<?php

use \App\Model\Main;

$app->map('GET', '/r/main/get', function() {
    Main::c()->registration();
});