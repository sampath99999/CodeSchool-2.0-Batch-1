<?php

require_once "./dbConfig.php";

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $response = ["status" => false, "message" => "", "data" => null];

    if (empty($_REQUEST["role"])) {
        http_response_code(400);
        echo "*Role is not configured in your call";
        exit;
    }

    if (empty($_REQUEST["token"])) {
        http_response_code(400);
        echo "*Token is not configured in your call";
        exit;
    }



    $token = $_GET["token"];
    $role = $_GET["role"];
    $getUserTasksQuery = "";
    try {
        $pdo = getPDO();
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->beginTransaction();

        $getUserQuery = "select id from users where id=(select users_id from token where token=?);";
        $statement1 = $pdo->prepare($getUserQuery);
        $statement1->execute([$token]);
        $result1 = $statement1->fetchColumn();
        if (!$result1) {
            $pdo->rollBack();
            $response["status"] = false;
            $response["message"] = "User didn't exist";
            echo json_encode($response);
            exit;
        }

        if ($role == 1) {
            $getUserTasksQuery = "select *,tasks.name as task,tasks.id as taskId from tasks inner join status on tasks.status_id=status.id inner join users on tasks.users_id=users.id;";
            $statement1 = $pdo->prepare($getUserTasksQuery);
            $statement1->execute();
        } else {
            $getUserTasksQuery = "select *,tasks.name as task,tasks.id as taskId from tasks inner join status on tasks.status_id=status.id inner join users on tasks.users_id=users.id where users.id=?";
            $statement1 = $pdo->prepare($getUserTasksQuery);
            $statement1->execute([$result1]);
        }

        $result1 = $statement1->fetchAll(PDO::FETCH_ASSOC);
        if (!$result1) {
            $pdo->rollBack();
            $response["status"] = false;
            $response["message"] = "tasks didn't exist";
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
