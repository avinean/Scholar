<?php

function route($path, $space) {
	global $app;
	$app->with($path, function () use ($app, $space) {
		require_once ROOT.'/../router/panel/'.$space;
	});
}

route('/', 'security_r.php');
route('/viewer', 'viewer_r.php');
route('/former', 'former_r.php');
route('/profile', 'profile_r.php');
route('/poll', 'poll_r.php');