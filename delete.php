<?php

require_once 'connection.php';

$id = $_POST['broj_indeksa'];

$q = "DELETE FROM `student` WHERE `broj_indeksa` =" . $id . ";";
$r = $conn->prepare($q);
$r->execute();
