<?php
require "./dbConfig.php";

if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    $response = ["status" => false, "message" => ""];

    if (isset($_POST["action"])) {
        $action = $_POST["action"];
        if ($action === "login") {
    
        } elseif ($action === "sharePost") {
        
            if (!isset($_SESSION['user_id'])) {
                $response["message"] = "User not connected!";
                echo json_encode($response);
                exit;
            }

            if (!isset($_POST["content"])) {
                $response["message"] = "Post content is required!";
                echo json_encode($response);
                exit;
            }
           
            $pdo = getPDO();

            if (!$pdo) {
                $response["message"] = "Database Not Connected!";
                echo json_encode($response);
                exit;
            }

            $query = "INSERT INTO posts (users_id, content) VALUES (?, ?)";
            $stmt = $pdo->prepare($query);
            $userId = $_SESSION['user_id'];

            if ($stmt->execute([$userId, $content])) {
                $response["status"] = true;
                $response["message"] = "Post shared successfully!";
                echo json_encode($response);
                exit;
            } else {
                $response["message"] = "Failed to share the post!";
                echo json_encode($response);
                exit;
            }
        }
    } else {
        $response["message"] = "Invalid action!";
        echo json_encode($response);
        exit;
    }
}

echo "Only POST request is accepted!";
