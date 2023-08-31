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

    $username = $_POST["username"];
    $password = md5($_POST["password"]);
    $response = ["status" => true, "message" => "", "data" => null];

    if ($username == '' || $password == '') {
        $response["status"] = false;
        $response["message"] = "Username & Password shouldn't be empty";
        echo ($response);
        exit;
    }
    function getPDO() {
         $pdo= new PDO("pgsql:host=localhost;port=5432;dbname=pixelvidehrms;user=postgres;password=postgres");
    return $pdo; 
}

    $pdo = getPDO();
    // if (!$pdo) {
    //     $response["status"] = false;
    //     $response["message"] = "Database Not Connected!";
    //     echo json_encode($response);
    //     exit;
    // }

    $query = "SELECT * FROM admin WHERE username = ? AND password = ?";

    $statment = $pdo->prepare($query);
    $statment->execute([$username, $password]);
    $user = $statment->fetchAll(PDO::FETCH_ASSOC);
    if (count($user) == 1) {
        $response["message"] = "LoggedIn Successfully!";
        echo ("Valid");
        exit;
    } else {
        $response["status"] = false;
        $response["message"] = "Username & Password shouldn't be empty";
        echo ("Invalid");
        exit;
    }
    header('Content-Type: application/json');
    echo json_encode($response);
}
echo "Only POST request is accepted!";