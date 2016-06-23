<?php

if ($_SERVER["HTTP_HOST"] != "localhost") {
    $host = "127.0.0.1";
    $login = "root";
    $senha = "";
    $db = "aprenda_online";

    ini_set('display_errors', 'On');
    error_reporting(E_ERROR);
} else {
    $host = "179.188.16.41";
    $login = "portalaprendao2";
    $senha = "mundodos12";
    $db = "portalaprendao2";

    ini_set('display_errors', 'Off');
}

ob_start();
session_start();

$_SESSION['authstation'] = (isset($_SESSION['authstation']) ? $_SESSION['authstation'] : null);
if (!isset($_SESSION['authstation'])) {
    $_SESSION['authstation'] = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
}