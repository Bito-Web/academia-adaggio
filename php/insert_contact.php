<?php
    include_once ('connect.php');
    
    date_default_timezone_set('America/Caracas');

    // Values
    $name = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $message = $_POST['message'];
    $date = date('Y-m-d');
    $time = date('H:i:s');

    // SQL
    $sql = "INSERT INTO u706526344_adaggio.consultas ";
    $sql .= "(name, email, tel, message, date, time) ";
    $sql .= "VALUES ";
    $sql .= "(?, ?, ?, ?, ?, ?)";

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(1, $name);
    $stmt->bindParam(2, $email);
    $stmt->bindParam(3, $tel);
    $stmt->bindParam(4, $message);
    $stmt->bindParam(5, $date);
    $stmt->bindParam(6, $time);

    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $pdo->errorInfo();
    }

    $stmt->closeCursor();
    $pdo = null;
?>
