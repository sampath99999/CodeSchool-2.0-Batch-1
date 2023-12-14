<?php

require_once "./dbConfig.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $response = ["status" => false, "message" => "", "data" => null];

    if (!isset($_REQUEST["userEmail"])) {
        http_response_code(400);
        echo "*User email is not configured in your call";
        exit;
    }

    if (!isset($_REQUEST["roleId"])) {
        http_response_code(400);
        echo "*User role is not configured in your call";
        exit;
    }

    $userEmail = $_POST["userEmail"];
    $roleId = $_POST["roleId"];
    $response = ["status" => true, "message" => "", "data" => null];

    if ($userEmail === '' || $roleId === '') {
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
            if($roleId==1){
                $query = "insert into user_roles_mapping(user_id,role_type_id)values(?,?);";
                $statement = $pdo->prepare($query);
                $roleCreation=$statement->execute([$result["id"],$roleId]);
            }
            else{
                $query = "insert into user_roles_mapping(user_id,role_type_id)values(?,?),(?,?);";
                $statement = $pdo->prepare($query);
                $roleCreation=$statement->execute([$result["id"],1,$result["id"],$roleId]);
            }
            if($roleCreation){
                $response["status"] = true;
                $response["message"] = "*User roles created successfully";
                echo json_encode($response);
            }
            else{
                $response["status"] = true;
                $response["message"] = "*User roles creation failed";
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
