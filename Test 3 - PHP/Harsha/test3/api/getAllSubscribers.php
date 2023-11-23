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
}
