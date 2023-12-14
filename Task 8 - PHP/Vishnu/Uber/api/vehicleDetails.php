<?php

require_once "./dbConfig.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $response = ["status" => false, "message" => "", "data" => null];

    if (!isset($_REQUEST["userEmail"])) {
        http_response_code(400);
        echo "*User email is not configured in your call";
        exit;
    }

    if (!isset($_REQUEST["driverRideTypeResult"])) {
        http_response_code(400);
        echo "*Driver ride type is not configured in your call";
        exit;
    }

    if (!isset($_REQUEST["driverVehicleNameResult"])) {
        http_response_code(400);
        echo "*Driver vehicle name is not configured in your call";
        exit;
    }

    if (!isset($_REQUEST["driverVehicleNumberResult"])) {
        http_response_code(400);
        echo "*Driver vehicle number is not configured in your call";
        exit;
    }

    if (!isset($_REQUEST["driverVehicleTypeResult"])){
        http_response_code(400);
        echo "*Driver vehicle type is not configured in your call";
        exit;
    }

    $userEmail = $_POST["userEmail"];
    $driverRideTypeResult = $_POST["driverRideTypeResult"];
    $driverVehicleNameResult = $_POST["driverVehicleNameResult"];
    $driverVehicleNumberResult = $_POST["driverVehicleNumberResult"];
    $driverVehicleTypeResult = $_POST["driverVehicleTypeResult"];
    $response = ["status" => true, "message" => "", "data" => null];

    if ($userEmail === ''  || $driverRideTypeResult==='' || $driverVehicleNameResult==='' || $driverVehicleNumberResult==='' || $driverVehicleTypeResult==='' ) {
        http_response_code(400);
        $response["status"] = false;
        $response["message"] = "*Please fill the required details";
        echo json_encode($response);
        exit;
    }

    try {
        $pdo = getPDO();
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $query = "select id from users where email = ?";
        $statement = $pdo->prepare($query);
        $statement->execute([$userEmail]);
        $result = $statement->fetch(PDO::FETCH_ASSOC);
        $params = [];
        $query="";
        $roleCreation=0;
        if(count($result)===1){
                $query = "insert into vehicles(name,type,number,ride_types_id,users_id)values(?,?,?,?,?);";
                $statement = $pdo->prepare($query);
                $roleCreation=$statement->execute([$driverVehicleNameResult,$driverVehicleTypeResult,$driverVehicleNumberResult,$driverRideTypeResult,$result["id"]]);
            if($roleCreation){
                $response["status"] = true;
                $response["message"] = "*Driver vehicle details created successfully";
                echo json_encode($response);
            }
            else{
                $response["status"] = true;
                $response["message"] = "*Driver vehicle details creation failed";
                echo json_encode($response);
            }
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
