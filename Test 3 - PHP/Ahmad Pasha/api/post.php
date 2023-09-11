<?php

require_once "./dbConfig.php";

if ($_SERVER["REQUEST_METHOD"] == 'GET') {
    $response = ["status" => false, "message" => "", "data" => null];

    $pdo = getPDO();
    if (!$pdo) {
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }
    $query = "SELECT * FROM posts";

    $statment = $pdo->prepare($query);
    $statment->execute();
    $user = $statment->fetchAll(PDO::FETCH_ASSOC);

    $response["message"] = "Success";
    $response["status"] = true;
    $response["data"] = $user;
    echo json_encode($response);
    exit;
} else if ($_SERVER["REQUEST_METHOD"] == 'POST') {

    $postData = $_POST;

    $postName = strval($postData['post_name']);
    $image = $_FILES['image_url']['name'];
    $description = strval($postData['description']);
    $category = strval($postData['category']);
    session_start();
    $userID = $_SESSION['user_id'];

    if (!isset($postName)) {
        echo "postName is required!";
        exit;
    }
    if (!isset($description)) {
        echo "description is required!";
        exit;
    }

    if (!isset($category)) {
        echo "category is required!";
        exit;
    }
    if (!isset($image)) {
        echo "imageUrl is required!";
        exit;
    }

    $response = ["status" => true, "message" => "", "data" => null];

    $pdo = getPDO();
    if (!$pdo) {
        $response["status"] = false;
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }

    if ($postName == '') {

        $response["status"] = false;
        $response["message"] = "PostName should not be Empty!";
        echo json_encode($response);
        exit;
    } else if (strlen($postName) < 3 || strlen($postName) > 55) {

        $response["status"] = false;
        $response["message"] =  "postName length should be between 3 to 55 character!";
        echo json_encode($response);
        exit;
    } else if (strlen($description) < 5 || strlen($description) > 500) {
        $response["status"] = false;
        $response["message"] =  "description length should be between 5 to 500 character!";
        echo json_encode($response);
        exit;
    }


    $imageLocation = '../assets/images/' . $image;
    // On successful storing image to path.
    if (move_uploaded_file($_FILES['image_url']['tmp_name'], $imageLocation)) {

        $query = "INSERT INTO posts (name,description,category,image_url,created_at,updated_at,user_id) VALUES (?, ?, ?, ?, now(), now(), ?)";
        $statement = $pdo->prepare($query);
        $statement->execute([
            $postName,
            $description,
            $category,
            $imageLocation,
            $userID
        ]);
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);

        if (!$result) {
            $response["message"] = $statment->errorInfo();
            echo json_encode($response);
        }

        $response["status"] = true;
        $response["message"] = "Successfully Entered!";
        $response["data"] = $result;
        echo json_encode($response);
        exit;
    }
    echo "Only POST request is accepted!";
}
