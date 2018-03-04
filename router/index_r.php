<?php

$app->map('GET', '/r/main', function() {
    require_once ROOT.'/text.php';
});

require_once ROOT.'/../router/panel/main_r.php';