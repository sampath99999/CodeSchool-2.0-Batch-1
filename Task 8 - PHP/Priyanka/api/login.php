<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
require_once "./dbConfig.php";

if ($_SERVER["REQUEST_METHOD"] == 'GET') {
    $response = ["status" => false, "message" => "", "data" => null];
    
    if (!isset($_GET["email"])) {
        $response["message"] = "Email is missing!";
        echo json_encode($response);
        exit;
    }

    $email = $_GET["email"];
    // $pdo = getPDO();
    $query = "SELECT * FROM register WHERE email = ?";

    $statement = $pdo->prepare($query);
    $statement->execute([$email]);
    $user = $statement->fetchAll(PDO::FETCH_ASSOC);
    
    if (count($user) == 1) {
        $response["message"] = "Success";
        $response["status"] = true;
        $response["data"] = $user[0];
        echo json_encode($response);
        exit;
    } else {
        $response["status"] = false;
        $response["message"] = "User not found!";
        echo json_encode($response);
        exit;
    }
}
?>
