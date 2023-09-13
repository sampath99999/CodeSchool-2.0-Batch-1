<?php

require_once "./dbConfig.php";
$response = ["status" => false, "message" => "", "data" => null];

if ($_SERVER["REQUEST_METHOD"] == 'GET') {


    try {
        $pdo = getPDO();
        if (!$pdo) {
            $response["message"] = "Database Not Connected!";
            echo json_encode($response);
            exit;
        }
        
        $query = "SELECT * FROM subscribers";

        $statement = $pdo->prepare($query);
        $statement->execute();
        $user = $statement->fetchAll(PDO::FETCH_ASSOC);

        $response["message"] = "Success";
        $response["status"] = true;
        $response["data"] = $user;
        echo json_encode($response);
        exit;
    } catch (PDOException $e) {
        $response["message"] = "Database Error: " . $e->getMessage();
        echo json_encode($response);
        exit;
    }
} else if ($_SERVER["REQUEST_METHOD"] == 'POST') {


  
    if (!isset($_POST["name"])) {
        $response["message"] = "Name field is not included!";
        $response["status"] = false;
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["email"])) {
        $response["message"] = "email field is not included!";
        $response["status"] = false;
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["phone"])) {
        $response["message"] = "phone Number field is not included!";
        $response["status"] = false;
        echo json_encode($response);
        exit;
    }

        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
    
    try{
        $pdo = getPDO();
        if (!$pdo) {
            $response["status"] = false;
            $response["message"] = "Database Not Connected!";
            echo json_encode($response);
            exit;
        }
        $query = "INSERT INTO subscribers (name,email,phone) VALUES(?,?,?)";
        $stmt = $pdo->prepare($query);
        $stmt->execute([$name,$email,$phone]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
        if ($result) {
            $response["status"] = true;
            $response["message"] = "Subscriber created successfully.";
            echo json_encode($response);
            exit;
        } else {
            $response["status"] = false;
            $response["message"] = "Error creating the Comment.";
            echo json_encode($response);
            exit;
        }
    } catch (PDOException $e) {
        $response["status"] = false;
        $response["message"] = "Database Error: " . $e->getMessage();
        echo json_encode($response);
        exit;
    }
}  else {
    $response["status"] = false;
    $response["message"] = "Invalid request method.";
    echo json_encode($response);
    exit;
}
