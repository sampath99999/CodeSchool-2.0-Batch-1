<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

error_reporting(E_ALL);
ini_set('display_errors', '1');
include 'databaseconfig.php';

$response = ["status" => false, "message" => ""];

if (!isset($_POST["firstName"]) || !isset($_POST["lastName"]) || !isset($_POST["email"]) || !isset($_POST["password"])) {
    $response["message"] = "All fields are required";
    echo json_encode($response);
    exit;
}

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$password = $_POST['password'];

$passwordHash = password_hash($password, PASSWORD_DEFAULT);

$query = "SELECT id FROM register WHERE email = ?";
$stmt = $pdo->prepare($query);
$stmt->execute([$email]);
$res = $stmt->fetch();

if ($res && $res['id']) {
    $response["message"] = $email . " already exists";
    echo json_encode($response);
    exit;
}

$insertQuery = "INSERT INTO register (firstname, lastname, email, password) VALUES (?,?,?,?);";
$stmt = $pdo->prepare($insertQuery);
$insertRes = $stmt->execute([$firstName, $lastName, $email, $passwordHash]);

if ($insertRes) {
    $response["status"] = true;
    $response["message"] = "Email Registered Successfully";
    echo json_encode($response);
    exit;
} else {
    $response["message"] = "Database error: Unable to register Email";
    echo json_encode($response);
    exit;
}
?>

