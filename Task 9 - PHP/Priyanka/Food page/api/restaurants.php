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
        strlen($name) > 100
    ) {
        $response["message"] = "Name must be between 2 and 100 characters.";
        echo json_encode($response);
        exit;
    }

    if (!isset($_POST["address"])) {
        $response["message"] = "Address is required!";
        echo json_encode($response);
        exit;
    }
    $address = $_POST["address"];
    if (strlen($address) < 2 || strlen($address) > 100) {
        $response["message"] = "Address must be between 2 and 100 characters.";
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

    if (!isset($_POST["phone"])) {
        $response["message"] = "Phone is required!";
        echo json_encode($response);
        exit;
    }
    $phone = $_POST["phone"];
    if (!ctype_digit($phone) || strlen($phone) !== 10) {
        $response["message"] = "Phone number must be a 10-digit numeric value!";
        echo json_encode($response);
        exit;
    }

    $pdo = getPDO();

    if (!$pdo) {
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }

    $query = "SELECT id FROM restaurants WHERE email = ?";
    $stmt = $pdo->prepare($query);
    $stmt->execute([$email]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (count($result) > 0) {
        $response["message"] = "Email already exists in the database!";
        echo json_encode($response);
        exit;
    }

    $query = "INSERT INTO restaurants (name, address, email, phone, created_at, updated_at) VALUES (?, ?, ?, ?, now(), now())";

    $statement = $pdo->prepare($query);
    $result = $statement->execute([$name, $address, $email, $phone]);

    if (!$result) {
        $response["message"] = $statement->errorInfo();
        echo json_encode($response);
    }

    $response["status"] = true;
    $response["message"] = "Successfully received restaurant details!";
    echo json_encode($response);
    exit;
}

$response["message"] = "ONLY POST method Accepted";
echo json_encode($response);
