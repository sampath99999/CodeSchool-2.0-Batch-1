<?php

require_once "./dbConfig.php";

if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    $response = ["status" => false, "message" => ""];

    if (!isset($_POST["category"])) {
        $response["message"] = "category is required!................";
        echo json_encode($response);
        exit;
    }

    $category = $_POST["category"];

    $pdo = getPDO();
    if (!$pdo) {
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }

    $query = "SELECT * FROM categories WHERE name = ?";
    $stmt = $pdo->prepare($query);
    $stmt->execute([$category]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if (count($result) == 1) {
        $response["message"] = "category is already Taken!";
        echo json_encode($response);
        exit;
    }

    $query = "INSERT INTO categories (name,created_at,updated_at) VALUES (?, now(), now())";

    $statment = $pdo->prepare($query);
    $result = $statment->execute([$category]);

    if (!$result) {
        $response["message"] = $statment->errorInfo();
        echo json_encode($response);
    }

    $response["status"] = true;
    $response["message"] = "Successfully Entered!";
    echo json_encode($response);
    exit;

    $response["message"] = "ONLY POST method Accepted";
    echo json_encode($response);
} else if ($_SERVER["REQUEST_METHOD"] == 'GET') {
    $response = ["status" => false, "message" => "", "data" => null];

    $pdo = getPDO();
    if (!$pdo) {
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }
    $query = "SELECT * FROM categories";

    $statment = $pdo->prepare($query);
    $statment->execute();
    $user = $statment->fetchAll(PDO::FETCH_ASSOC);


    $response["message"] = "Success";
    $response["status"] = true;
    $response["data"] = $user;
    echo json_encode($response);
    exit;
}
