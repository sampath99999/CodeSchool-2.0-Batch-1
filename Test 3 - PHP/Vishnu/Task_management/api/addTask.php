<?php

require_once "./dbConfig.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $response = ["status" => false, "message" => "", "data" => null];
    if (empty($_REQUEST["taskName"])) {
        http_response_code(400);
        echo "*Task name is not configured in the call";
        exit;
    }

    if (empty($_REQUEST["userNameId"])) {
        http_response_code(400);
        echo "*User id is not configured in the call";
        exit;
    }



    $taskName = $_POST["taskName"];
    $userNameId = $_POST["userNameId"];

    function getToken()
    {
        return bin2hex(random_bytes(26));
    }

    try {
        $pdo = getPDO();
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->beginTransaction();
        $userTaskQuery = "insert into tasks(name,users_id,status_id)values(?,?,?) returning id";
        $statement1 = $pdo->prepare($userTaskQuery);
        $statement1->execute([$taskName, $userNameId, 1]);
        $result1 = $statement1->fetchColumn();

        if (!$result1) {
            $response["message"] = "*Insertion failed";
            $response["status"] = false;
            $pdo->rollBack();
            echo json_encode($response);
            exit;
        } else {
            $userTaskQuery = "select * from tasks where id=?";
            $statement2 = $pdo->prepare($userTaskQuery);
            $statement2->execute([$result1]);
            $result2 = $statement2->fetchAll(PDO::FETCH_ASSOC);

            if (!$result2) {
                $response["message"] = "*Unable to select task";
                $response["status"] = false;
                $pdo->rollBack();
                echo json_encode($response);
                exit;
            } else {
                $response["message"] = "Successful";
                $response["data"] = $result2;
                $response["status"] = true;
                $pdo->commit();
                echo json_encode($response);
                exit;
            }
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
