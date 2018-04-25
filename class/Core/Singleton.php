<?php

namespace App\Core;

abstract class Singleton {

	private static $instances = [];

	public static function c($data = null)
	{
		$calledClass = get_called_class();
		if (!isset(self::$instances[$calledClass])) {
			self::$instances[$calledClass] = new $calledClass($data);
		}
		return self::$instances[$calledClass];
	}

}