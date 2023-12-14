<?php

require_once "./dbConfig.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $response = ["status" => false, "message" => "", "data" => null];

    if (empty($_REQUEST["userName"])) {
        http_response_code(400);
        echo "*User name is not configured in your call";
        exit;
    }

    if (empty($_REQUEST["userPhone"])) {
        http_response_code(400);
        echo "*User phone number is not configured in your call";
        exit;
    }

    if (empty($_REQUEST["userEmail"])) {
        http_response_code(400);
        echo "*User email is not configured in your call";
        exit;
    }

    if (empty($_REQUEST["userPassword"])) {
        http_response_code(400);
        echo "*User password is not configured in your call";
        exit;
    }

    if (empty($_REQUEST["userGender"])) {
        http_response_code(400);
        echo "*User gender is not configured in your call";
        exit;
    }

    if (empty($_REQUEST["userConfirmPassword"])) {
        http_response_code(400);
        echo "*Confirm password is not configured in your call";
        exit;
    }




    $userName = $_POST["userName"];
    $userPhone = $_POST["userPhone"];
    $userEmail = $_POST["userEmail"];
    $userPassword = $_POST["userPassword"];
    $userGender = $_POST["userGender"];
    $userConfirmPassword = $_POST["userConfirmPassword"];

    function validateInput($input, $pattern, $errorMessage)
    {
        if (!preg_match($pattern, $input)) {
            http_response_code(400);
            echo $errorMessage;
            exit;
        }
    }

    validateInput($userName, '/^[A-Z][a-z\s]{1,20}$/', "*Incorrect username");
    validateInput($userPhone, '/^[0-9]{10}$/', "*Invalid phone number");
    validateInput($userEmail, '/^[a-zA-Z0-9]+(?:[._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/', "*Incorrect email");
    validateInput($userPassword, '/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$%#@!~&^()])[a-zA-Z0-9$%#@!~&^()]+$/', "*Password didn't meet criteria.");

    if ($userPassword !== $userConfirmPassword) {
        http_response_code(400);
        echo "*Password didn't match";
        exit;
    }



    //password hashing
    $userPassword = password_hash($userPassword, PASSWORD_DEFAULT);

    try {
        $pdo = getPDO();
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->beginTransaction();
        //check user exists or not
        $checkUserquery = "select count(*) from users where email=?";
        $statement1 = $pdo->prepare($checkUserquery);
        $statement1->execute([$userEmail]);
        $result1 = $statement1->fetchColumn();

        if ($result1 > 0) {
            $response["message"] = "User account already existed";
            $response["status"] = false;
            echo json_encode($response);
            $pdo->rollBack();
            exit;
        }

        //insert user into database
        $insertUserquery = "insert into users(name,phone,email,password,gender) values (?,?,?,?,?);";
        $statement2 = $pdo->prepare($insertUserquery);
        $result2 = $statement2->execute([$userName, $userPhone, $userEmail, $userPassword, $userGender]);

        if (!$result2) {
            $response["message"] = "User creation failed";
            $response["status"] = false;
            echo json_encode($response);
            $pdo->rollBack();
            exit;
        } else {
            $response["message"] = "User account created successfully";
            $response["status"] = true;
            echo json_encode($response);
            $pdo->commit();
            exit;
        }
    } catch (PDOException $e) {
        http_response_code(400);
        error_log($e->getMessage());
        // echo $e->getMessage();
        echo "*An unexpected error occurred. Please try again later.";
        exit;
    }
} else {
    http_response_code(400);
    echo "*Sorry for the inconvience we will get back to you";
    exit;
}
