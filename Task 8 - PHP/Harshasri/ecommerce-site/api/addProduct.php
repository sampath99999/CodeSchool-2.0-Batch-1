

<?php

require("./dbConfig.php");

if ($_SERVER["REQUEST_METHOD"] == 'POST') {
  $response = ["status"=>false ,"message"=>''];
    if (!isset($_POST["productName"])) { 
        $response['message'] = "Product Name is required!";
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["price"])) {      
        $response['message'] = "Product Price is required!";
        echo json_encode($response);
        exit;
    }

    $productName = $_POST['productName'];
    $productPrice = $_POST['price'];
    
    $productDescription=$_POST['description'];

    $pdo = getPDO();
    if (!$pdo) {
      $response["message"] = "Database Not Connected!";
      echo json_encode($response);
      exit;
    }
    $query = "SELECT * FROM products WHERE product_name=?";
    $stmt = $pdo->prepare($query);
    $stmt->execute([$productName]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if (count($result) == 1) {
        $response["message"] = "product already Taken!";
        echo json_encode($response);
        exit;
    }

    

    $query = "INSERT INTO products (product_name, price, product_description) VALUES (?,?,?)";
    $statment = $pdo->prepare($query);
    $result = $statment->execute([$productName,$productPrice,$productDescription]);

    if (!$result) {
        $response["message"] = $statment->errorInfo();
        echo json_encode($response);
    }

    $response["status"] = true;
    $response["message"] = "Successfully Added product!";
    echo json_encode($response);
    exit;
}

$response["message"] = "ONLY POST method Accepted";
echo json_encode($response);
 
