<?php

require_once './dbconfig.php';
$pdo = getPDO();

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $response = ['status' => 'false', 'message' => ''];
    if (empty($_POST['name'])) {
        $response["message"] = "Name is required";
        echo json_encode($response);
        exit;
    }
    if (empty($_POST['email'])) {
        $response["message"] = "email is required";
        echo json_encode($response);
        exit;
    }
    if (empty($_POST['phone_number'])) {
        $response["message"] = "Phone number is required";
        echo json_encode($response);
        exit;
    } else {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone_number = $_POST['phone_number'];
        $status = "Registered";
        try {
            $query = "INSERT INTO subscriptions(name,email,phone_no,status) VALUES(?,?,?,?)";
            $smt = $pdo->prepare($query);
            $result = $smt->execute([$name, $email, $phone_number, $status]);
            if ($result) {
                $response['status'] = true;
                echo json_encode($response);
                exit;
            } else {
                $response['message'] = "Database connection error !";
                echo json_encode($response);
                exit;
            }

        } catch (Exception $e) {
            $response['message'] = $e;
            echo json_encode($response);
            exit;
        }
    }
    echo json_encode($response);
} else {
    $response = ['status' => 'false', 'message' => ''];
    $response['message'] = "its not a post method";
    echo json_encode($response);
}
