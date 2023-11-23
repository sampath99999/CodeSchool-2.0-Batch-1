<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

require_once('./dbConfig.php');

$response =  ["status" => false, "message" => "", "data" => ""];
if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    if (!isset($_POST['email'])) {

        $response['status'] = false;
        $response['message'] = "Email is not present";
        echo json_encode($response);
        exit;
    }

    if (!isset($_POST['password'])) {

        $response['status'] = false;
        $response['message'] = "Password is not present";
        echo json_encode($response);
        exit;
    }

    $email = $_POST['email'];
    $password = md5($_POST["password"]);


    if ($email == '' || $password == '') {
        $response["status"] = false;
        $response["message"] = "Email & Password shouldn't be empty";
        echo json_encode($response);
        exit;
    }

    $pdo = getPDO();
    if (!$pdo) {
        $response["status"] = false;
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }

    $query = "SELECT * FROM users WHERE email = ? AND password = ?";

    $statment = $pdo->prepare($query);
    $statment->execute([$email, $password]);
    $user = $statment->fetchAll(PDO::FETCH_ASSOC);
    if (count($user) == 1) {
        $response['status'] = true;
        $response["message"] = "LoggedIn Successfully!";
        $response["data"] = [$user[0]["token"], $user[0]["role_id"]];
        echo json_encode($response);
        exit;
    } else {
        $response["status"] = false;
        $response["message"] = "No user with this email & Password!";
        echo json_encode($response);
        exit;
    }
}

$response["message"] = "ONLY POST method Accepted";
echo json_encode($response);
