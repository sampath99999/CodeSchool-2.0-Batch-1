<?php

require_once "./dbConfig.php";

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $response = ["status" => false, "message" => "", "data" => null];
    if (empty($_REQUEST["role"])) {
        http_response_code(400);
        echo "*Role is not configured in your call";
        exit;
    }


    $role = $_GET["role"];

    try {
        $pdo = getPDO();
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->beginTransaction();
        $getUsersQuery = "select id,name from users where role_type_id=?";
        $statement1 = $pdo->prepare($getUsersQuery);
        $statement1->execute([2]);
        $result1 = $statement1->fetchAll(PDO::FETCH_ASSOC);
        if (!$result1) {
            $pdo->rollBack();
            $response["status"] = false;
            $response["message"] = "Users didn't exist";
            echo json_encode($response);
            exit;
        } else {
            $pdo->commit();
            $response["status"] = true;
            $response["message"] = "Users fetched successfully";
            $response["data"] = $result1;
            echo json_encode($response);
            exit;
        }
    } catch (PDOException $e) {
        http_response_code(400);
        error_log($e->getMessage());
        echo "*An unexpected error occurred. Please try again later.";
        // echo $e->getMessage();
        exit;
    }
} else {
    http_response_code(400);
    echo "*Sorry for the inconvenience, we will get back to you post";
    exit;
}
