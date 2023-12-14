<?php
$response = ["message" => ""];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $lead_id=$_POST["lead_id"];
    $firstname = $_POST["first_name"];
    $lastname = $_POST["last_name"];
    $address = $_POST["addres"];
    $addressLine2 = $_POST["addressline2"];
    $city = $_POST["city"];
    $state = $_POST["state"];
    $title = $_POST["titlel"];
    $company = $_POST["company"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    

    $status = "Inprogress";


    $pdo = new PDO("pgsql:host=localhost;port=5432;dbname=contact_managementapp;user=postgres;password=postgres");
    if (!$pdo) {
        $response["message"] = "Database Not Connected!";
    } else {
        $query = "UPDATE leads SET first_name = ?, last_name = ?, title = ?, company = ?, phone = ?, email = ?, status = ?, address = ?, addressLine2 = ?, city = ?, state = ? WHERE lead_id = ?";
        $statement = $pdo->prepare($query);
        $result = $statement->execute([$firstname, $lastname, $title, $company, $phone, $email, $status, $address, $addressLine2, $city, $state, $lead_id]);
        

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
