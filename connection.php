<?php
$servername = "localhost";
$username = "root";
$password = "";
$databasename = "proba";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$databasename", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    $e->getMessage();
}
$query = "SELECT * FROM `student`;";
$result = $conn->query($query);
$result->execute();
