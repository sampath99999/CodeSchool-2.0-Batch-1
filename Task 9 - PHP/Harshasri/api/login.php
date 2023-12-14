<?php

require("./dbConfig.php");
$response = ["status" => true, "message" => "", "data" => null];


if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    if (!isset($_POST["login"])) {
        $response["message"] = "The email address or mobile number or username field is not included!";
        $response["status"] = false;
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["password"])) {
        $response["message"] = "Password field is not included!";
        $response["status"] = false;
        echo json_encode($response);
        exit;
    }

    $userInput = $_POST["login"];
    $password = ($_POST["password"]);


    if ($userInput == '' || $password == '') {
        $response["status"] = false;
        $response["message"] = "Username & Password shouldn't be empty";
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
    $query = "SELECT * FROM users WHERE (username=:login OR email=:login  OR phone_no=:login) AND password=:password";
    $stmt = $pdo->prepare(($query));
    $stmt->bindValue(":login", $_POST['login']);
    $stmt->bindValue(":password", $_POST['password']);
    $stmt->execute([$userInput, $password]);
    $user = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if (count($user) == 1) {
        $response["message"] = "LoggedIn Successfully!";
        $response["data"] = $user[0]["id"];
        echo json_encode($response);
        exit;
    } else {
        $response["status"] = false;
        $response["message"] = "No user with this Username & Password";
        echo json_encode($response);
        exit;
    }
} else {
    $response["status"] = false;
    $response["message"] = "Only POST request are accepted.";
    echo json_encode($response);
    exit;
}
