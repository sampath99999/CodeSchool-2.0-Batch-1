<?php
if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    if (!isset($_POST["username"])) {
        echo "Username is required!";
        exit;
    }
    if (!isset($_POST["password"])) {
        echo "Password is required!";
        exit;
    }
    $pdo = new PDO("pgsql:host=localhost;port=5432;dbname=sameerhrms;user=postgres;password=postgres");
    if (!$pdo) {
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }

    $username = $_POST["username"];
    $password = md5($_POST["password"]);
    $response = ["status" => true, "message" => "", "data" => null];

    if ($username == '' || $password == '') {
        $response["status"] = false;
        $response["message"] = "Username & Password shouldn't be empty";
        echo json_encode($response);
        exit;
    }

   
    $query = "SELECT * FROM users WHERE username = ? AND password = ?";

    $statment = $pdo->prepare($query);
    $statment->execute([$username, $password]);
    $user = $statment->fetchAll(PDO::FETCH_ASSOC);
    if (count($user) == 1) {
        $response["message"] = "LoggedIn Successfully!";
        $response["status"] = true;
        $response["data"] = $user[0]["id"];
        echo json_encode($response);
        exit;
    } else {
        $response["status"] = false;
        $response["message"] = "Username & Password shouldn't be empty";
        echo json_encode($response);
        exit;
    }
}
echo "Only POST request is accepted!";