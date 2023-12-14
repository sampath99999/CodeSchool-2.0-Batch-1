<?php
$response = ["message" => ""];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = $_POST["firstName"];
    $lastname = $_POST["lastName"];
    $address = $_POST["address"];
    $addressLine2 = $_POST["addressLine2"];
    $city = $_POST["city"];
    $zipCode = $_POST["zipCode"];
    $websiteUrl = $_POST["websiteUrl"];
    $state = $_POST["state"];
    $followUp = $_POST["followUp"];
    $title = $_POST["title"];
    $company = $_POST["company"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    

    $status = "Inprogress";


    $pdo = new PDO("pgsql:host=localhost;port=5432;dbname=contact_managementapp;user=postgres;password=postgres");
    if (!$pdo) {
        $response["message"] = "Database Not Connected!";
    } else {
        $query = "INSERT INTO leads (first_name, last_name, title, company, phone, email, status,address,addressLine2,city,zipCode,websiteUrl,state,followUp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?)";
        $statement = $pdo->prepare($query);
        $result = $statement->execute([$firstname, $lastname, $title, $company, $phone, $email, $status,$address,$addressLine2,$city,$zipCode,$websiteUrl,$state,$followUp]);

        if ($result) {
            $response["message"] = "Data inserted successfully.";
        } else {
            $response["message"] = "Error inserting data: " . $statement->errorInfo()[2];
        }
    }
} else {
    $response["message"] = "Invalid request method.";
}

echo json_encode($response);
