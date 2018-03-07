<?php

$app->map('GET', '/r/main', function() {
    require_once ROOT.'/app.php';
});

$app->map('GET', '/r/profile', function() {
    require_once ROOT.'/app.php';
});

require_once ROOT.'/../router/panel/main_r.php';