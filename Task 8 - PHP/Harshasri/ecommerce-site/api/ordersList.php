<?php

error_reporting(E_ALL);
ini_set("display_errors", "1");
include 'dbConfig.php';

$response = ["status" => false, "message" => "", "data" => ""];
$pdo = getPDO();
if (!$pdo) {
  $response["message"] = "Database Not Connected!";
  echo json_encode($response);
  exit;
}
$query = "select * from orders";
$stmt = $pdo->prepare($query);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

if ($result) {

  $response['status'] = true;
  $response['message'] = "successfully fetched all orders";



  foreach ($result as $row) {
    $response["orderId"][] = $row["order_id"];
    $response["userId"][] = $row["user_id"];
    $response["orderDate"][] = $row["ordered_at"];
    $response["shippedDate"][] = $row["shipped_date"];
  }

  echo json_encode($response);
  exit;
} else {
  $response['status'] = false;
  $response['message'] = "failed to fetch orders";
  echo json_encode($response);
  exit;
}
