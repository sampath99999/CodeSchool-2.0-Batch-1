<?php

require_once "./dbConfig.php";
$response = ["status" => false, "message" => "", "data" => []];


$pdo = getPDO();
if (!$pdo) {
    $response["status"] = false;
    $response["message"] = "Database Not Connected!";
    echo json_encode($response);
    exit;
}

$query = "SELECT * from products";

$stmt = $pdo->prepare($query);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
// print_r($result);

if ($result) {
    $response["status"] = true;
    $response["message"] = "All Products Fetched";
    $response["data"] = $result;
    echo json_encode($response);
} else {
    $response["status"] = false;
    $response["message"] = $e->getMessage();
    echo json_encode($response);
}
?>