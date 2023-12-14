<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
include './config.php';

$response = ["status" => false, "message" => "", "data" => ""];

if (!isset($_POST['email']) || !isset($_POST['password'])) {
    $response['message'] = "Invalid input";
    echo json_encode($response);
    exit;
}

$email = $_POST['email'];
$password = $_POST['password'];

$query = "SELECT email, password FROM admins WHERE email = ?";
$stmt = $pdo->prepare($query);
$stmt->execute([$email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);
if ($user && password_verify($password, $user['password'])) {
    $response['status'] = true;
    $response['message'] = "Login successful";
} else {
    $response['message'] = "Invalid credentials";
}

echo json_encode($response);
?>
