<?php
require_once "./dbConfig.php";
$response = ["status" => false, "message" => "", "data" => null];

if (!isset($_POST["user_id"])) {
    $response["message"] = "User ID not provided";
} else {
    $id = $_POST["user_id"];
    $pdo = getPDO();
    
    $checkQuery = "SELECT role_id FROM users WHERE id=?";
    $checkStatement = $pdo->prepare($checkQuery);
    $checkStatement->execute([$id]);
    $getRole = $checkStatement->fetchColumn();

    if ($getRole === false) {
        $response["message"] = "User ID not found";
    } elseif ($getRole == 1) {
        $response["message"] = "User Is Already Admin";
    } else {
        $updateQuery = "UPDATE users SET role_id = 1 WHERE id = ?";
        $updateStatement = $pdo->prepare($updateQuery);
        $updateResult = $updateStatement->execute([$id]);
        if ($updateResult == 1) {
            $response["status"] = true;
            $response["message"] = "User type changed successfully";
        } else {
            $response["message"] = "Failed to update user type";
        }
    }
}

echo json_encode($response);
?>
