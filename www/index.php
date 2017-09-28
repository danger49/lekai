<?php
//server
define('APPLICATION_PATH', dirname(dirname(__FILE__)) . '/myfolder/');
//本地
//define('APPLICATION_PATH', dirname(dirname(__FILE__)));
if (!extension_loaded("yaf"))
{
	include(APPLICATION_PATH . '/framework/loader.php');
}

$application = new Yaf_Application(APPLICATION_PATH . "/conf/application.ini");
$application->bootstrap()->run();
?>
