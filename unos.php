<?php

include "connection.php";

$data = json_decode(file_get_contents('php://input'), true);



$fime = $data['fime'];
$fprezime = $data['fprezime'];
$fprosek = $data['fprosek'];

#$post_query = "INSERT INTO `student`(`ime`, `prezime`, `prosek`) VALUES ( '$fime','$fprezime','$fprosek');";
#$insert = mysqli_query($conn, $post_query);
if ($fime != "" & $fprezime != "" & $fprosek != "") {
    $pdquery = $conn->prepare("INSERT INTO `student`(`ime`, `prezime`, `prosek`) VALUES ( '$fime','$fprezime','$fprosek');");
    $pdquery->execute();

    if (!$pdquery) {
        echo "Error";
    } else {
        echo json_encode([
            'id' => $conn->lastInsertId(),
            'ime' => $fime,
            'prezime' => $fprezime,
            'prosek' => $fprosek
        ]);
    }
} else {
    echo "Nisu uneti parametri.";
}


#if (!$insert) {
#    echo "Error inserting data";
#} else {
 #   echo "Data inserted successfuly";
#}
