<?php

require_once "./dbConfig.php";

if ($_SERVER["REQUEST_METHOD"] == 'GET') {
    $response = ["status" => false, "message" => "", "data" => null];
    // if (!isset($_GET["show_id"])) {
    //     $response["message"] = "Show ID is missing!";
    //     echo json_encode($response);
    //     exit;
    // }

    $cinemaHallId = $_GET['cinema_hall_id'];
    settype($cinemaHallId, "integer");
    $movieId = $_GET['movie_id'];
    settype($movieId, "integer");
    $showId = $_GET["show_id"];
    settype($showId, "integer");
    $pdo = getPDO();
    $query = "SELECT * FROM cinema_seat where cinema_hall_id = ? AND movie_id= ? AND show_id= ? ORDER BY seat_number;";

    $statment = $pdo->prepare($query);
    $statment->execute([$cinemaHallId,$movieId,$showId]);
    $user = $statment->fetchAll(PDO::FETCH_ASSOC);
    $response["message"] = "Success";
    $response["status"] = true;
    $response["data"] = $user;
    echo json_encode($user);
    exit;
    echo json_encode($response);
    exit;

    if (count($user) >= 1) {
        $response["message"] = "Success";
        $response["status"] = true;
        $response["data"] = $user;
        echo json_encode($response);
        exit;
    } else {
        $response["status"] = false;
        $response["message"] = "House Full found!";
        echo json_encode($response);
        exit;
    }
}


else if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    $response = ["status" => false, "message" => ""];

    // if (!isset($_POST["username"])) {
    //     $response["message"] = "Username is required!";
    //     echo json_encode($response);
    //     exit;
    // }
    // if (!isset($_POST["password"])) {
    //     $response["message"] = "Password is required!";
    //     echo json_encode($response);
    //     exit;
    // }
    // if (!isset($_POST["name"])) {
    //     $response["message"] = "Name is required!";
    //     echo json_encode($response);
    //     exit;
    // }
    // if (!isset($_POST["mail"])) {
    //     $response["message"] = "Mail is required!";
    //     echo json_encode($response);
    //     exit;
    // }

    $selectedSeats = $_POST["selectedSeats"];
    $showId= $_POST['showId'];
    $cinemaHallId = $_POST["cinemaHallId"];
    $movieId = $_POST['movieId'];
    $status = 1;

    // if ($userName == '' || $password == '') {
    //     $response["message"] = "Username & Password shouldn't be empty";
    //     echo json_encode($response);
    //     exit;
    // }

    $pdo = new PDO("pgsql:host=localhost;port=5432;dbname=bookmyshow;user=postgres;password=postgres");
    if (!$pdo) {
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }

    // $query = "SELECT id FROM users WHERE user_name = ?";
    // $stmt = $pdo->prepare($query);
    // $stmt->execute([$userName]);
    // $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    // if (count($result) == 1) {
    //     $response["message"] = "Username already Taken!";
    //     echo json_encode($response);
    //     exit;
    // }
    foreach ($selectedSeats as $property => $value){

        $query = "UPDATE cinema_seat
        SET status= 1
        where  seat_number = ? AND show_id = ? AND  movie_id = ? AND cinema_hall_id = ?;";
        $statment = $pdo->prepare($query);
        $result = $statment->execute([$value,$showId,$movieId,$cinemaHallId]);

        
        $response["status"] = true;
        $response["message"] = "Successfully Registered!";
        echo json_encode($response);
    }

    // 

    // if (!$result) {
    //     $response["message"] = $statment->errorInfo();
    //     echo json_encode($response);
    // }

    // $response["status"] = true;
    // $response["message"] = "Successfully Registered!";
    // echo json_encode($response);
    exit;
}



$response["message"] = "ONLY POST method Accepted";
echo json_encode($response);

?>

