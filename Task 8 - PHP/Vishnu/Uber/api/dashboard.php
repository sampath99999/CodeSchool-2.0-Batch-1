<?php

require_once "./dbConfig.php";

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $response = ["status" => false, "message" => "", "data" => null];

    if (!isset($_REQUEST["token"])) {
        http_response_code(400);
        echo "*Access token is not configured in your call";
        exit;
    }

    $userToken = $_GET["token"]; 
    $response = ["status" => true, "message" => "", "data" => null];

    if ($userToken === '') {
        http_response_code(400);
        $response["status"] = false;
        $response["message"] = "*Access denied";
        echo json_encode($response);
        exit;
    }

    try {
        $pdo = getPDO();
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $query = "select name from users where access_token = ?";
        $statement = $pdo->prepare($query);
        $statement->execute([$userToken]);
        $result = $statement->fetch(PDO::FETCH_ASSOC);
        if($result!==false && count($result)===1){
            $response["status"] = true;
            $response["message"] = "Fetched user details successfully";
            $response["data"]=$result["name"];
            echo json_encode($response);
        }
        else{
            $response["status"] = false;
            $response["message"] = "*User didn't exist";
            echo json_encode($response);
        }
    } catch (PDOException $e) {
        http_response_code(400);
        // error_log($e->getMessage());
        echo "*An unexpected error occurred. Please try again later.";
        exit;
    }

    exit; // Move the exit statement here
} else {
    http_response_code(400);
    echo "*Sorry for the inconvenience, we will get back to you";
    exit;
}
