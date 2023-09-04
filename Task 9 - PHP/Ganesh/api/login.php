<?php

require_once "./dbConfig.php";

$response = ["status" => false, "message" => "", "data" => ""];

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get individual values.
    $name = $_POST['username'];
    $password = $_POST['password'];

    if (empty($name)) {
        $response["status"] = false;
        $response["message"] = "Please use Email or Phone number !";
        echo json_encode($response);
        exit;
    }
    if (empty($password)) {
        $response["status"] = false;
        $response["message"] = "Please provide the password !";
        echo json_encode($response);
        exit;
    }

    // On success.
    // Connect DB.
    $pdo = getPDO();

    // Check the connection.
    if (!$pdo) {
        $response["status"] = false;
        $response["message"] = "Database is not connected, please try again !";
        echo json_encode($response);
        exit;
    }

    // On successful connection.
    if(gettype($name) == gettype("string")){
        $query = "SELECT (id,
        name,
        email,
        phone,
        password, 
        role_id)
        FROM users_master 
        WHERE email = :username AND password = :password ";
    } else {
        $query = "SELECT (id,
        name,
        email,
        phone,
        password, 
        role_id)
        FROM users_master 
        WHERE phone = :username AND password = :password ";
    }
    
    $statement = $pdo->prepare($query);
    $statement->execute([
        "username" => $name,
        "password" => $password
    ]);
    $result = $statement->fetchAll(PDO::FETCH_ASSOC);

    // Check whether user already exist in the DB.
    if (count($result) != 1) {
        $response["status"] = false;
        $response["message"] = "Username or password is incorrect! Please try again.";
        echo json_encode($response);
        exit;
    } else {
        // On successful data insertion.
        $response["status"] = true;
        $response["message"] = "Login Successful. You are redirected to home page in 3 seconds please wait.";
        echo json_encode($response);
        exit;
    }
}

?>
