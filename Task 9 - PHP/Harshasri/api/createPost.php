<?php

require_once "./dbConfig.php";
$response = ["status" => false, "message" => ""];



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // var_dump($_POST["post_img"]);
  // var_dump($_POST["user_id"]);
  $content = $_POST['content'];
  $post_img = $_POST['post_img'];
  $user_id = $_POST['user_id'];


  $pdo = getPDO();
  if (!$pdo) {
    $response["status"] = false;
    $response["message"] = "Database Not Connected!";
    echo json_encode($response);
    exit;
  }

  $query = "INSERT INTO posts (user_id,content,created_date,updated_date,post_img) VALUES(?,?,now(),now(),?)";
  $stmt = $pdo->prepare($query);
  $result = $stmt->execute([$user_id, $content, $post_img]);

  if ($result) {
    $response["status"] = true;
    $response["message"] = "Post created successfully.";
    echo json_encode($response);

    exit;
  } else {
    $response["status"] = false;
    $response["message"] = "Error creating the post.";
    echo json_encode($response);
    exit;
  }
} else {
  $response["status"] = false;
  $response["message"] = "Invalid request method.";
  echo json_encode($response);
  exit;
}
