<?php
require_once "./dbConfig.php";
$response = ["status" => false, "message" => "", "data" => null];

if (!isset($_POST["email"])) {
    $response["message"] = "email ID not provided";
} else {
    $email = $_POST["email"];
    $pdo = getPDO();

    try {
        $checkQuery = "SELECT * FROM users WHERE email=?";
        $checkStatement = $pdo->prepare($checkQuery);
        $checkStatement->execute([$email]);
        $getDetails = $checkStatement->fetchAll(PDO::FETCH_ASSOC);

        if (empty($getDetails)) {
            $response["message"] = "User not found";
        } else {
            $response["status"] = true;
            $response["data"] = $getDetails;
        }
    } catch (PDOException $e) {
        $response["message"] = "Database error: " . $e->getMessage();
    }
}

echo json_encode($response);
