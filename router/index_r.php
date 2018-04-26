<?php


$app->with('/', function () use ($app) {
	require_once ROOT.'/../router/panel/security_r.php';
});

$app->with('/viewer', function () use ($app) {
	require_once ROOT.'/../router/panel/viewer_r.php';
});

$app->with('/former', function () use ($app) {
	require_once ROOT.'/../router/panel/former_r.php';
});

$app->with('/profile', function () use ($app) {
	require_once ROOT.'/../router/panel/profile_r.php';
});