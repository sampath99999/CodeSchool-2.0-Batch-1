<?php
require_once "./dbConfig.php";
$response = ["status" => false, "message" => ""];


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (!isset($_GET["user_id"])) {
        $response["message"] = "User ID is missing!";
        echo json_encode($response);
        exit;
    }
    $user_id = $_GET["user_id"];

    $pdo = getPDO();
    if (!$pdo) {
        $response["status"] = false;
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }

    $query = "SELECT users.id, users.username
            FROM friendships
            JOIN users ON friendships.user2_id = users.id
            WHERE friendships.user1_id = $user_id
            AND friendships.status = 'accepted'";


    $stmt = $pdo->prepare($query);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    // print_r($result);

    if ($result) {
        $response["status"] = true;
        $response["message"] = "All Friends Fetched";
        $response["data"] = $result;
        echo json_encode($response);
    } else {
        $response["status"] = false;
        $response["message"] = $e->getMessage();
        echo json_encode($response);
    }
}
