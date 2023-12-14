<?php
require "./dbConfig.php";

if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    $response = ["status" => false, "message" => ""];

    // Validate Email
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

    // Validate Password
    if (!isset($_POST["password"])) {
        $response["message"] = "Password is required!";
        echo json_encode($response);
        exit;
    }
    $password = md5($_POST["password"]);

    $pdo = getPDO();

    if (!$pdo) {
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }

    $query = "SELECT id FROM users WHERE email = ? AND password = ?";
    $stmt = $pdo->prepare($query);
    $stmt->execute([$email, $password]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (count($result) == 1) {
        $response["status"] = true;
        $response["message"] = "Logged In Successfully!";
        echo json_encode($response);
        exit;
    } else {
        $response["message"] = "Invalid email or password!";
        echo json_encode($response);
        exit;
    }
}

echo "Only POST request is accepted!";
