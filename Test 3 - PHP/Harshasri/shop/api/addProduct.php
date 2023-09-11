
<?php

require("./dbConfig.php");
$response = ["status" => false, "message" => ''];

if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    var_dump($_POST["product_price"]);
    if (!isset($_POST["name"])) {
        $response['message'] = "Product Name is required!";
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["product_price"])) {
        $response['message'] = "Product Price is required!";
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["product_image"])) {
        $response['message'] = "Product image is required!";
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["rating"])) {
        $response['message'] = "Product rating is required!";
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["reviews"])) {
        $response['message'] = "Product review is required!";
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["size"])) {
        $response['message'] = "Product size is required!";
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["category_id"])) {
        $response['message'] = "Product category is required!";
        echo json_encode($response);
        exit;
    }

    $productName = $_POST['name'];
    $productPrice = $_POST['product_price'];
    $size = $_POST['size'];
    $rating = $_POST['rating'];
    $reviews = $_POST['reviews'];
    $productImage = $_POST['product_image'];
    $categoryId = $_POST['category_id'];


    $pdo = getPDO();
    if (!$pdo) {
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }


    $query = "INSERT INTO products (product_image,name, product_price, rating,reviews,size,category_id) VALUES (?,?,?,?,?,?,?)";
    $statment = $pdo->prepare($query);
    $result = $statment->execute([$productImage, $productName, $productPrice, $rating, $reviews, $size, $categoryId]);

    if ($result) {

        $response["status"] = true;
        $response["message"] = "Successfully Added product!";
        echo json_encode($response);
        exit;
    } else {
        $response["status"] = false;
        $response["message"] = $statment->errorInfo();
        echo json_encode($response);
    }
} else {
    $response["status"] = false;
    $response["message"] = "Invalid request method.";
    echo json_encode($response);
    exit;
}
?>