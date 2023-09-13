<?php
require_once './dbconfig.php';
$pdo = getPDO();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['Name'];
    $password = $_POST['password'];
    $response = ["status" => false, 'message' => ''];
    $query = "SELECT * FROM users where name=? and password=?";
    $smt = $pdo->prepare($query);
    $smt->execute([$name, $password]);
    $result = $smt->fetchAll(PDO::FETCH_ASSOC);
    if (count($result) > 0) {
        $response['status'] = true;
        echo json_encode($response);
        exit;
    } else {
        $response['message'] = "No result are found";
        echo json_encode($response);
        exit;
    }

} else {
    $response = ['status' => 'false', 'message' => ''];
    $response['message'] = "its not a post method";
    echo json_encode($response);
}
