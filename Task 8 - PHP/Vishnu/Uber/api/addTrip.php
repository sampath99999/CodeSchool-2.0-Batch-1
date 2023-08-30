<?php

require_once "./dbConfig.php";

if($_SERVER['REQUEST_METHOD']==='POST'){
    $response=["status"=>false,"message"=>"","data"=>null,"driverId"=>null];

    if(!isset($_REQUEST["location"])){
        http_response_code(400);
        echo "*Location is not configured in your call";
        exit;
    }

    if(!isset($_REQUEST["destination"])){
        http_response_code(400);
        echo "*Destination number is not configured in your call";
        exit;
    }

    if(!isset($_REQUEST["rideType"])){
        http_response_code(400);
        echo "*Ride Type is not configured in your call";
        exit;
    }

    if(!isset($_REQUEST["token"])){
        http_response_code(400);
        echo "*Token is not configured in your call";
        exit;
    }

    $location = $_POST["location"];
    $destination = $_POST["destination"];
    $rideType = $_POST["rideType"];
    $token = $_POST["token"];
    
    $response = ["status" => true, "message" => "", "data" => null,"driverId"=>null];
    
    if (empty($location) || empty($destination) || empty($rideType)) {
        http_response_code(400);
        $response["status"] = false;
        $response["message"] = "*Please fill the required details";
        echo json_encode($response);
        exit;
    }
    
    try {
        $pdo = getPDO();
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $query = "INSERT INTO address (state, city, area, pincode, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?),(?, ?, ?, ?, ?, ?) RETURNING id;";
        $statement = $pdo->prepare($query);
        $statement->execute([$location["state"], $location["city"], $location["area"], $location["pincode"], $location["latitude"], $location["longitude"],$destination["state"], $destination["city"], $destination["area"], $destination["pincode"], $destination["latitude"], $destination["longitude"]]);
        $generatedIDs = $statement->fetchAll(PDO::FETCH_COLUMN);
        $response["data"] = $generatedIDs;

        $query = "select id from users where access_token = ?";
        $statement = $pdo->prepare($query);
        $statement->execute([$token]);
        $userIdResult = $statement->fetch(PDO::FETCH_ASSOC);

        $driverAssignQuery = "SELECT users.id
        FROM users
        INNER JOIN vehicles ON users.id = vehicles.users_id
        WHERE vehicles.ride_types_id = ?
        ORDER BY random()
        LIMIT 1;";
        $statement = $pdo->prepare($driverAssignQuery);
        $statement->execute([$rideType]);
        $result=$statement->fetch(PDO::FETCH_ASSOC);

        $tripQuery = "INSERT INTO trips (drivers_id, users_id, pickup, destination, price, trip_start_date, trip_start_time, trip_end_date, trip_end_time, duration, status, ride_types_id) 
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $tripStartTime = new DateTime();
        $tripEndTime = clone $tripStartTime;
        $tripEndTime->add(new DateInterval('PT1H'));
        $statement = $pdo->prepare($tripQuery);
        $trip=$statement->execute([
            $result["id"],
            $userIdResult["id"],
            $generatedIDs[0],
            $generatedIDs[1],
            500,
            $tripStartTime->format('Y-m-d'),          
            $tripStartTime->format('H:i:s'),        
            $tripEndTime->format('Y-m-d'),           
            $tripEndTime->format('H:i:s'),            
            '01:00:00',                                
            'completed',                                 
            $rideType                                
        ]);

        if($trip){
            echo json_encode($response);
        }
        else{
            $response["status"]=false;
            echo json_encode(($response));
        } 

    } catch (PDOException $e) {
        http_response_code(400);
        $response["status"] = false;
        // $response["message"] = $e->getMessage();
        $response["message"] = "*An unexpected error occurred. Please try again later.";
        echo json_encode($response);
    }
    
}
else{
    http_response_code(400);
    echo "*Sorry for the inconvience we will get back to you";
}



