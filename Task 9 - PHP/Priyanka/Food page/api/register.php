<?php
require "./dbConfig.php";

if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    $response = ["status" => false, "message" => ""];

    if (!isset($_POST["name"])) {
        $response["message"] = "Name is required!";
        echo json_encode($response);
        exit;
    }
    $name = $_POST["name"];
    if (
        strlen($name) < 2 || 
        strlen($name) > 50 || 
        !ctype_alpha($name) || 
        !preg_match('/^[A-Z][a-z]*$/', $name)
    ) {
        $response["message"] = "Name must be between 2 and 50 characters, and in title case (e.g., John, Alice).";
        echo json_encode($response);
        exit;
    }

    if (!isset($_POST["phone"])) {
        $response["message"] = "Phone number is required!";
        echo json_encode($response);
        exit;
    }
    $phone = $_POST["phone"];
    if (!ctype_digit($phone) || strlen($phone) !== 10) {
        $response["message"] = "Phone number must be a 10-digit numeric value!";
        echo json_encode($response);
        exit;
    }

    if (!isset($_POST["email"])) {
        $response["message"] = "Email is required!";
        echo json_encode($response);
        exit;
    }
    $email = $_POST["email"];
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response["message"] = "Invalid email format!";
        echo json_encode($response);
        exit;
    }

    if (!isset($_POST["password"])) {
        $response["message"] = "Password is required!";
        echo json_encode($response);
        exit;
    }
    $password = $_POST["password"];
    if (
        strlen($password) < 5 || 
        strlen($password) > 25 || 
        !preg_match('/[A-Z]/', $password) || 
        !preg_match('/[a-z]/', $password) || 
        !preg_match('/[0-9]/', $password) || 
        !preg_match('/[!@#\$%^&*()\-_=+{};:,<.>]/', $password) ||
        preg_match('/\s/', $password) ||
        preg_match('/(.)\\1{1,}/', $password)
    ) {
        $response["message"] = "Invalid password format!";
        echo json_encode($response);
        exit;
    }

    $password = md5($password);

    $pdo = getPDO();

    if (!$pdo) {
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }

    $pdo->beginTransaction();

    $query = "INSERT INTO users (name, phone, email, password, created_at, updated_at) VALUES (?, ?, ?, ?, current_timestamp, current_timestamp) RETURNING id";

    $statement = $pdo->prepare($query);
    $result = $statement->execute([$name, $phone, $email, $password]);

    if (!$result) {
        $pdo->rollback();
        $response["message"] = $statement->errorInfo();
        echo json_encode($response);
        exit;
    }

    $users_id = $statement->fetchColumn();

    $token = generateUniqueToken();

    $expiry = date("Y-m-d H:i:s", strtotime("+24 hours"));

$users_id = $pdo->lastInsertId();

$query = "INSERT INTO Session (id,users_id, Token, Created_at, Updated_at, Expiry) VALUES (DEFAULT, ?, ?, current_timestamp, current_timestamp, ?)";

$insertStatement = $pdo->prepare($query);
$insertResult = $insertStatement->execute([$users_id, $token, $expiry]);


    if (!$insertResult) {
        $pdo->rollback();
        $response["message"] = $insertStatement->errorInfo();
        echo json_encode($response);
    } else {
        $pdo->commit();
        $response["status"] = true;
        $response["message"] = "User registered successfully with token!";
        echo json_encode($response);
    }
    exit;
} 

$response["message"] = "ONLY POST method Accepted";
echo json_encode($response);

function generateUniqueToken($length = 15) {
    return bin2hex(random_bytes($length));
}
