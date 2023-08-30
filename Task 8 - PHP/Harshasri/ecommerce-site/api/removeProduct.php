<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

require_once('./dbConfig.php');

$response =  ["status" => false, "message" => ""];

$productIds = $_POST['productIds'];
// echo ($productIds);
$count = 1;
$pdo = getPDO();
if (!$pdo) {
    $response["message"] = "Database Not Connected!";
    echo json_encode($response);
    exit;
}


foreach ($productIds as $productId) {
    $query = "delete from products where product_id = ?;";
    $stmt = $pdo->prepare($query);
    $stmt->execute([$productId]);
    $count = +1;
}
// echo $count;
if ($count == count($productIds)) {
    $response["status"] = True;

    echo json_encode($response);
} else {
    $response["status"] = false;
    $response["message"] = "Error No Products to remove";
    echo json_encode($response);
}
