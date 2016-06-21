<?php
include '../config/configQuemFaz.php';
include 'conexao.php';

$controller = filter_input(INPUT_POST, 'controller', FILTER_SANITIZE_STRING);
$action = filter_input(INPUT_POST, 'action', FILTER_SANITIZE_STRING);

include "$controller.php";

$classe = new $controller();
$classe->$action();