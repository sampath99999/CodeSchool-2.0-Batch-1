<?php

require("./dbConfig.php");
$response = ["status"=>false,"message"=>""];
$pdo = getPDO();
if (!$pdo) {
    $response["status"] = false;
    $response["message"] = "Database Not Connected!";
    echo json_encode($response);
    exit;
}

$response = [];
$query = "select * from products";
$stmt = $pdo->prepare($query);
$stmt->execute();
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $response[]=$row;
}

echo json_encode($response);
?>