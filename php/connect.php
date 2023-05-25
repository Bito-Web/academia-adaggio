<?php
    $host = "191.96.56.103";
    $user = "u706526344_adaggio_db";
    $pwd = "8Bf;Ik]aX^7b";
    $db = "u706526344_adaggio";

    $dsn = "mysql:host=$host;dbname=$db";
    $pdo = new PDO($dsn, $user, $pwd);

    if (!$pdo) {
        die("Connection failed: " . $pdo -> errorInfo()[2]);
    }
