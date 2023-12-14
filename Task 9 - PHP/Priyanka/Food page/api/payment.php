<?php
require "./dbConfig.php";

if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    $response = ["status" => false, "message" => ""];

    if (!isset($_POST["users_id"])) {
        $response["message"] = "User ID is required!";
        echo json_encode($response);
        exit;
    }
    $users_id = $_POST["users_id"];

    if (!isset($_POST["orders_id"])) {
        $response["message"] = "Orders ID is required!";
        echo json_encode($response);
        exit;
    }
    $orders_id = $_POST["orders_id"];

    if (!isset($_POST["payment_method"])) {
        $response["message"] = "Payment method is required!";
        echo json_encode($response);
        exit;
    }
    $payment_method = $_POST["payment_method"];

    if (!isset($_POST["amount"])) {
        $response["message"] = "Amount is required!";
        echo json_encode($response);
        exit;
    }
    $amount = $_POST["amount"];


    if (!isset($_POST["status"])) {
        $response["message"] = "Payment status is required!";
        echo json_encode($response);
        exit;
    }
    $status = $_POST["status"];

    $pdo = getPDO();

    if (!$pdo) {
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }

    $query = "INSERT INTO Payment (users_id, orders_id, payment_method, amount, status, created_at, updated_at) 
              VALUES (?, ?, ?, ?, ?, now(), now())";

    $statement = $pdo->prepare($query);

    $result = $statement->execute([$users_id, $orders_id, $payment_method, $amount, $status]);

    if (!$result) {
        $response["message"] = $statement->errorInfo();
        echo json_encode($response);
    } else {
        $response["status"] = true;
        $response["message"] = "Payment information successfully recorded!";
        echo json_encode($response);
    }
    exit;
}

$response["message"] = "ONLY POST method Accepted";
echo json_encode($response);
