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
        $query = "select id from users where access_token = ?";
        $statement = $pdo->prepare($query);
        $statement->execute([$userToken]);
        $result = $statement->fetch(PDO::FETCH_ASSOC);
        if($result!==false && count($result)===1){
            $query="SELECT
            trips.id,
            users.name,
            c.name as driver,
            users.phone,
            a.area as location,
            b.area as destination,
            trips.trip_start_date,
            trips.trip_end_date
        from users
            INNER JOIN trips ON trips.users_id = users.id
            INNER JOIN address a ON trips.pickup=a.id
            INNER JOIN address b ON trips.destination=b.id
            INNER JOIN users c ON trips.drivers_id=c.id
        where
            users.id =?
            and trips.status='completed';";
            $statement = $pdo->prepare($query);
            $statement->execute([$result["id"]]);
            $result = $statement->fetchAll(PDO::FETCH_ASSOC);
            $response["status"] = true;
            $response["message"] = "Fetched user trip history";
            $response["data"]=$result;
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
        // echo "*An unexpected error occurred. Please try again later.";
        echo $e->getMessage();
        exit;
    }

    exit; // Move the exit statement here
} else {
    http_response_code(400);
    echo "*Sorry for the inconvenience, we will get back to you";
    exit;
}
