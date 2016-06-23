<?php
$mysqli = new mysqli($host, $login, $senha, $db);
// Caso algo tenha dado errado, exibe uma mensagem de erro
if (mysqli_connect_errno())
    trigger_error(mysqli_connect_error());
