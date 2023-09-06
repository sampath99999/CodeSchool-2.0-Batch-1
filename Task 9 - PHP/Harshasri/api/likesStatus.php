<?php

require_once "./dbConfig.php";



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $response = ["status" => false, "message" => ""];

    if (!isset($_POST["post_id"])) {
        $response["status"] = false;
        $response["message"] = "Post id required!";
        exit;
    }
    if (!isset($_POST["user_id"])) {
        $response["status"] = false;
        $response["message"] = "User id required!";
        exit;
    }
    if (!isset($_POST["like_status"])) {
        $response["status"] = false;
        $response["message"] = "like status is required!";
        exit;
    }

    $postId = $_POST['post_id'];
    $userId = $_POST['user_id'];
    $status = $_POST["like_status"];
    // settype($status,"boolean");
    // var_dump($postId);
    // var_dump($userId);
    // var_dump($status);



    $pdo = getPDO();
    if (!$pdo) {
        $response["status"] = false;
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }

    $query = "UPDATE likes
        SET like_status=?
        WHERE post_id=? and user_id=?";

    $stmt = $pdo->prepare($query);
    $stmt->execute([$status, $postId, $userId]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);


    if (!$result) {
        $response["message"] = $stmt->errorInfo();
        echo json_encode($response);
    }

    $response["status"] = true;
    $response["message"] = "Like status Changed SuccessFully";
    echo json_encode($response);
    exit;
}
