<?php
$pdo = new PDO("pgsql:host=localhost;port=5432;dbname=contact_managementapp;user=postgres;password=postgres");
$response = ["status" => true, "message" => "", "data" => null];

if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    $response = ["status" => false, "message" => "", "data" => null];
   



    $userCompany = $_POST["userCompany"];
    
    $query = "SELECT first_name,last_name,company,email FROM leads WHERE company = ?";

    $statment = $pdo->prepare($query);
    $statment->execute([$userCompany]);
    $user = $statment->fetchAll(PDO::FETCH_ASSOC);

    
        
        

    header('Content-Type: application/json');

       
        echo json_encode($user);
    
    
}
