<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

require_once('./dbConfig.php');
$pdo = getPDO();
if (!$pdo) {
    $response["message"] = "Database Not Connected!";
    echo json_encode($response);
    exit;
}

$query = "select order_id,user_id,shipped_date,ordered_at,status from orders;";
$stmt = $pdo->prepare($query);
$stmt->execute();
$result = $stmt->fetchAll();



echo json_encode($result);
