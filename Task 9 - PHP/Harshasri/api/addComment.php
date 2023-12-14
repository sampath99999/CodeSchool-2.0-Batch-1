<?php

require_once "./dbConfig.php";
$response = ["status" => false, "message" => ""];


if ($_SERVER['REQUEST_METHOD'] === 'POST') {


    $post_id = $_POST['post_id'];
    $content = $_POST['content'];
    $user_id = $_POST['user_id'];


    $pdo = getPDO();
    if (!$pdo) {
        $response["status"] = false;
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }
    $query = "INSERT INTO comments ( user_id,content,post_id,created_date,updated_date) VALUES(?,?,?,now(),now())";
    $stmt = $pdo->prepare($query);
    $stmt->execute([$user_id, $content, $post_id]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($result) {
        $response["status"] = true;
        $response["message"] = "Comment created successfully.";
        echo json_encode($response);
        exit;
    } else {
        $response["status"] = false;
        $response["message"] = "Error creating the Comment.";
        echo json_encode($response);
        exit;
    }
} else {
    $response["status"] = false;
    $response["message"] = "Invalid request method.";
    echo json_encode($response);
    exit;
}
