<?php

require_once "./dbConfig.php";

if ($_SERVER["REQUEST_METHOD"] == 'GET') {
    session_start();
    $response = ["status" => false, "message" => "", "data" => null];
    if (!isset($_SESSION['user_id'])) {
        $response["message"] = "User ID is missing!";
        echo json_encode($response);
        exit;
    }

    $userId = $_SESSION['user_id'];
    $pdo = getPDO();
    if (!$pdo) {
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }
    $query = "SELECT * FROM users WHERE id = ?";

    $statment = $pdo->prepare($query);
    $statment->execute([$userId]);
    $user = $statment->fetchAll(PDO::FETCH_ASSOC);


    if (count($user) == 1) {
        $response["message"] = "Success";
        $response["status"] = true;
        $response["data"] = $user[0];
        echo json_encode($response);
        exit;
    } else {
        $response["status"] = false;
        $response["message"] = "Please Login again!";
        echo json_encode($response);
        exit;
    }
}
