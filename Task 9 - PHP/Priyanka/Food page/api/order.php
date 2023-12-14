<?php
require "./dbConfig.php";

if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    $response = ["status" => false, "message" => ""];

    if (!isset($_POST["user_id"])) {
        $response["message"] = "User ID is required!";
        echo json_encode($response);
        exit;
    }
    $userId = $_POST["user_id"];

    if (!isset($_POST["restaurant_id"])) {
        $response["message"] = "Restaurant ID is required!";
        echo json_encode($response);
        exit;
    }
    $restaurantId = $_POST["restaurant_id"];

    if (!isset($_POST["order_total"])) {
        $response["message"] = "Order total is required!";
        echo json_encode($response);
        exit;
    }
    $orderTotal = $_POST["order_total"];

    if (!isset($_POST["delivery_status"])) {
        $response["message"] = "Delivery status is required!";
        echo json_encode($response);
        exit;
    }
    $deliveryStatus = $_POST["delivery_status"];

    $pdo = getPDO();

    if (!$pdo) {
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }

    $query = "INSERT INTO Orders (id, id, Order_total, Delivery_status, Created_at, Updated_at) 
              VALUES (?, ?, ?, ?, now(), now())";

    $statement = $pdo->prepare($query);
    $result = $statement->execute([$userId, $restaurantId, $orderTotal, $deliveryStatus]);

    if (!$result) {
        $response["message"] = $statement->errorInfo();
        echo json_encode($response);
    } else {
        $response["status"] = true;
        $response["message"] = "Order information successfully recorded!";
        echo json_encode($response);
    }
    exit;
}

$response["message"] = "ONLY POST method Accepted";
echo json_encode($response);
