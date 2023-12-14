<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

require_once('./dbConfig.php');

$response =  ["status" => false, "message" => ""];


$pdo = getPDO();
if (!$pdo) {
  $response["message"] = "Database Not Connected!";
  echo json_encode($response);
  exit;
}
$query = "select p.product_id,p.product_name,p.price,od.order_id,od.quantity,(p.price*od.quantity) as total_price from products p
    inner join order_details od
    on od.product_id=p.product_id";
$stmt = $pdo->prepare($query);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);
