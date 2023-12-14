<?php

require_once "./dbConfig.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $response = ["status" => false, "message" => "", "data" => null, "token" => null];
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



    $userEmail = $_POST["userEmail"];
    $userPassword = $_POST["userPassword"];

    function getToken()
    {
        return bin2hex(random_bytes(26));
    }

    try {
        $pdo = getPDO();
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->beginTransaction();
        $userCheckQuery = "select id,password,role_type_id from users where email=?";
        $statement1 = $pdo->prepare($userCheckQuery);
        $statement1->execute([$userEmail]);
        $result1 = $statement1->fetch(PDO::FETCH_ASSOC);

        if (!$result1) {
            $response["message"] = "*User account didn't exist";
            $response["status"] = false;
            $pdo->rollBack();
            echo json_encode($response);
            exit;
        } else if ($result1 && password_verify($userPassword, $result1["password"])) {
            $token = getToken();
            $userTokenQuery = "insert into token(users_id,token)values(?,?);";
            $statement2 = $pdo->prepare($userTokenQuery);
            $result2 = $statement2->execute([$result1["id"], $token]);

            if (!$result2) {
                $response["message"] = "*Token not created";
                $response["status"] = false;
                $pdo->rollBack();
                echo json_encode($response);
                exit;
            } else {
                $response['token'] = $token;
                $response["message"] = "Logged In Successfully";
                $response["data"] = $result1["role_type_id"];
                $response["status"] = true;
                $pdo->commit();
                echo json_encode($response);
                exit;
            }
        } else {
            $response["message"] = "*Username and password didn't match";
            $response["status"] = false;
            $pdo->rollBack();
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
    echo "*Sorry for the inconvience we will get back to you";
    exit;
}
