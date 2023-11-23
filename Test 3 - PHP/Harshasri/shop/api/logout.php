<?php
error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('log_errors', '1');
ini_set("error_log", "error.log");
require_once "dbConfig.php";

$response = ["status" => false, "message" => ""];

if (!isset($_POST["token"])) {
  $response["status"] = false;
  $response["message"] = "Token is Required";
  echo json_encode($response);
  exit;
}


$token = $_POST["token"];

try {
  $query = "UPDATE users SET token='' WHERE token=?";
  $stmt = $pdo->prepare($query);
  $stmt->execute([$token]);
  $response["status"] = true;
  $response["message"] = "Logout Successful";
  echo json_encode($response);
} catch (Exception $e) {
  error_log($e->getMessage());
  $response['message'] = "Error Occurred While Logout";
  echo json_encode($response);
  exit;
}
