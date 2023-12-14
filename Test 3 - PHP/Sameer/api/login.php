<?php
error_reporting(E_ALL);
ini_set("display_errors", "1");
include "config.php";

$response = ['status' => false, 'message' => '',];

if (!isset($_POST["email"])) {
  $response["status"] = false;
  $response["message"] = "Email required";
  echo json_encode($response);
  exit;
}
if (!isset($_POST["password"])) {
  $response["status"] = false;
  $response["message"] = "Password required";
  echo json_encode($response);
  exit;
}

$email = $_POST["email"];

$password = md5($_POST["password"]);

$query = "SELECT * FROM users WHERE email='$email' AND password='$password' ";

$stmt = $pdo->prepare($query);

$stmt->execute();

$result = $stmt->fetch(PDO::FETCH_ASSOC);

if ($result){
  $response["status"] = false;
  $response["message"] = "Email or password is invalid";
  echo json_encode($response);
}else{
  
}

