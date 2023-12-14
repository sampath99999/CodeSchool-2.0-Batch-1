<?php

require_once "./dbConfig.php";
$response = ["status" => false, "message" => ""];


if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["id"])) {
    $postId = $_POST["id"];

    $pdo = getPDO();
    if (!$pdo) {
        $response["status"] = false;
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }
    $query = "DELETE from posts WHERE id = ?";
    $stmt = $pdo->prepare($query);
    $result = $stmt->execute([$postId]);

    if ($result) {

        $response["status"] = true;
        $response["message"] = "Post deleted successfully.";
        echo json_encode($response);
        exit;
    } else {
        $response["status"] = false;
        $response["message"] = "Error deleting the post.";
        echo json_encode($response);
    }
} else {
    $response["status"] = false;
    $response["message"] = "Invalid request method.";
    echo json_encode($response);
}
