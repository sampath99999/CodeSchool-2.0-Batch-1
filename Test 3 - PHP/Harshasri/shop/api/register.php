<?php
require("./dbConfig.php");
$response = ["status" => false, "message" => ""];

if ($_SERVER["REQUEST_METHOD"] == 'POST') {


    if (!isset($_POST["name"])) {
        $response["message"] = "Name is required!";
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["password"])) {
        $response["message"] = "Password is required!";
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["email"])) {
        $response["message"] = "Email is required!";
        echo json_encode($response);
        exit;
    }

    if (!isset($_POST["phone"])) {
        $response["message"] = "Phone Number is required!";
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["role_id"])) {
        $response["message"] = "role_id is required!";
        echo json_encode($response);
        exit;
    }

    $name = $_POST["name"];
    $password = md5($_POST["password"]);
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $roleId = $_POST["role_id"];

    if ($name == '') {
        $response["message"] = "Name shouldn't be empty";
        echo json_encode($response);
        exit;
    }
    if ($password == '') {
        $response["message"] = "Password shouldn't be empty";
        echo json_encode($response);
        exit;
    }

    if ($email == '') {
        $response["message"] = "Email shouldn't be empty";
        echo json_encode($response);
        exit;
    }
    if ($phone == '') {
        $response["message"] = "Phone Number shouldn't be empty";
        echo json_encode($response);
        exit;
    }
    $pdo = getPDO();

    if (!$pdo) {
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }

    $query = "SELECT id FROM users WHERE email = ?";
    $stmt = $pdo->prepare($query);
    $stmt->execute([$email]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if (count($result) == 1) {
        $response["message"] = "Email already Taken!";
        echo json_encode($response);
        exit;
    }



    $query = "INSERT INTO users (name, password, email, phone,role_id,created_at,token) VALUES (?, ?,?,?,?, now(),?)";
    $statment = $pdo->prepare($query);
    $result = $statment->execute([$name, $password, $email, $phone, $roleId, $token]);

    if (!$result) {
        $response["message"] = $statment->errorInfo();
        echo json_encode($response);
    }

    $response["status"] = true;
    $response["message"] = "Successfully Registered!";
    echo json_encode($response);
    exit;
}

$response["message"] = "ONLY POST method Accepted";
echo json_encode($response);
