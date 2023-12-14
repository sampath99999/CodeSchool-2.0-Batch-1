<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

require_once('./dbConfig.php');
$pdo = getPDO();
// $pdo = new PDO("pgsql:host=localhost;port=5432;dbname=login_register;user=postgres;password=postgres");
if (!$pdo) {
    $response["message"] = "Database Not Connected!";
    echo json_encode($response);
    exit;
}

$query = "select * from products;";
$stmt = $pdo->prepare($query);
$stmt->execute();
$result = $stmt->fetchAll();

echo json_encode($result);
