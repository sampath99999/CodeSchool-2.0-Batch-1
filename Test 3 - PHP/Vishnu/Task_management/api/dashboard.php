<?php

require_once "./dbConfig.php";

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $response = ["status" => false, "message" => "", "data" => null, "tasks" => null];
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

    try {
        $pdo = getPDO();
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->beginTransaction();
        $getUserQuery = "select name from users where id=(select users_id from token where token=?);";
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
            $taskQuery = "select status.description,count(*) as no_of_tasks from tasks inner join status on tasks.status_id=status.id group by status.description;";
            $statement2 = $pdo->prepare($taskQuery);
            $statement2->execute();
            $result2 = $statement2->fetchAll(PDO::FETCH_ASSOC);

            if (!$result2) {
                $pdo->rollBack();
                $response["status"] = false;
                $response["message"] = "*Unable to fetch tasks";
                $response["data"] = $result2;
                echo json_encode($response);
                exit;
            } else {
                $pdo->commit();
                $response["status"] = true;
                $response["message"] = "Fetched assigned tasks";
                $response["tasks"] = $result2;
                $response["data"] = $result1;
                echo json_encode($response);
                exit;
            }
        } else {
            $pdo->commit();
            $response["status"] = true;
            $response["message"] = "Fetched user name";
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
