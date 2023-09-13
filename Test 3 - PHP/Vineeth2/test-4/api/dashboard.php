<?php
require_once './dbconfig.php';
$pdo = getPDO();
$response = ['status' => false, 'message' => ''];
try {

    $query = "SELECT * FROM subscriptions";
    $smt = $pdo->prepare($query);
    $smt->execute();
    $result = $smt->fetchAll(PDO::FETCH_ASSOC);
    if (count($result) > 0) {
        echo json_encode($result);
        exit;
    } else {
        $response['message'] = 'No data is available !';
        echo json_encode($response);
        exit;
    }
} catch (Exception $e) {
    $response['message'] = $e;
    echo json_encode($response);
    exit;
}
