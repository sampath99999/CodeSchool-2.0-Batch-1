<?php
    $response = ["message" => ""];

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $firstname = $_POST["firstname"];
        $lastname = $_POST["lastname"];
        $title = $_POST["title"];
        $company = $_POST["company"];
        $phone = $_POST["phone"];
        $email = $_POST["email"];
        $contact_method = $_POST["contact_method"];
        $comment = $_POST["comments"];
        $status = "Inprogress";


        $pdo = new PDO("pgsql:host=localhost;port=5432;dbname=contact_managementapp;user=postgres;password=postgres");
        if (!$pdo) {
            $response["message"] = "Database Not Connected!";
        } else {
            $query = "INSERT INTO leads (first_name, last_name, title, company, phone, email, contact_method, comments, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $statement = $pdo->prepare($query);
            $result = $statement->execute([$firstname, $lastname, $title, $company, $phone, $email, $contact_method, $comment, $status]);

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
