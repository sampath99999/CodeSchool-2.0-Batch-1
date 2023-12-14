<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');
include 'databaseconfig.php';

$response = ["status" => false, "message" => "", "data" => ""];
$email = $_POST['email'];


$query = "select * from register where email =?";
$stmt = $pdo->prepare($query);
$stmt->execute([$email]);
$result = $stmt->fetch(PDO::FETCH_ASSOC);

if ($result && $result['email']) {

    $response['status'] = true;
    $response['message'] = "Welcome " . $result['email'];
    echo json_encode($response);
    exit;
} else {
    $response['status'] = false;
    $response['message'] = "User Not Authenticated";
    echo json_encode($response);
    exit;
}

?>