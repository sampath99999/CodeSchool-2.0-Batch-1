<?php

require_once "./dbConfig.php";
$response = ["status" => false, "message" => "", "data" => []];


try {

    $pdo = getPDO();
    if (!$pdo) {
        $response["status"] = false;
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }

    $query = "SELECT count(*) from subscribers";
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);


    if ($result) {
        $response["status"] = true;
        $response["message"] = "Subscribers are fetched successfully";
        $response["data"] = $result;
        echo json_encode($response);
    } else {
        $response["status"] = false;
        $response["message"] = "Error while fetching Subscribers!";
        echo json_encode($response);
    }
} catch (PDOException $e) {
    $response["status"] = false;
    $response["message"] = $e->getMessage();
    echo json_encode($response);
}
