<?php

    include_once ('connect.php');

    date_default_timezone_set('America/Caracas');

    if (!isset($_COOKIE['device_id'])) {
        $device_id = uniqid();
        setcookie('device_id', $device_id, time() + 60*60*24*365);
    } else {
        $device_id = $_COOKIE['device_id'];
    }
      
    // Values
    $id = $device_id;
    $accept = $_POST['accept'];
    $ipaddress = $_SERVER['REMOTE_ADDR'];
    $latitude = $_POST['latitude'];
    $longitude = $_POST['longitude'];
    $timezone = $_POST['timezone'];
    $date = date('d-m-Y');
    $time = date('H:i:s');

    // SQL
    $sql = "INSERT INTO u706526344_adaggio.cookies ";
    $sql .= "(id, accept, ipaddress, latitude, longitude, timezone, date, time) ";
    $sql .= "VALUES ";
    $sql .= "(?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(1 , $id);
    $stmt->bindParam(2 , $accept);
    $stmt->bindParam(3, $ipaddress);
    $stmt->bindParam(4, $latitude);
    $stmt->bindParam(5, $longitude);
    $stmt->bindParam(6, $timezone);
    $stmt->bindParam(7, $date);
    $stmt->bindParam(8, $time);

    if ($stmt->execute()) {
        header("Location: https://www.academia-adaggio.com/prueba.html");
        exit();
    } else {
        header("Location: https://www.academia-adaggio.com/prueba.html");
        echo "Error: " . $sql . "<br>" . $pdo->errorInfo();
    }
    
    $stmt->closeCursor();
    $pdo = null;
?>
