<?php
include "connection.php";

//DELETE

$data = json_decode(file_get_contents('php://input'), true);
if (isset($data['broj_indeksa'])) {

    $id = $data['broj_indeksa'];
}

if ($id != null) {
    $deletequery = $conn->prepare("DELETE FROM 'student' WHERE 'student_id' = '$id';");
    $deletequery->execute();
}
