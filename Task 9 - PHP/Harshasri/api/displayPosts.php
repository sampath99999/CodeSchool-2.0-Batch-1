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

$query = "SELECT p.*, u.username FROM posts p
INNER JOIN users u ON p.user_id = u.id

ORDER BY p.created_date DESC";

$stmt = $pdo->prepare($query);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
// print_r($result);

if ($result) {
    $response["status"] = true;
    $response["message"] = "All Posts Fetched";
    $response["data"] = $result;
    echo json_encode($response);
} else {
    $response["status"] = false;
    $response["message"] = $e->getMessage();
    echo json_encode($response);
}
