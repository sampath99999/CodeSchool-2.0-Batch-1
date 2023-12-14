<?php
$pdo = new PDO("pgsql:host=localhost;port=5432;dbname=contact_managementapp;user=postgres;password=postgres");
$response = ["status" => true, "message" => "", "data" => null];

if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    $response = ["status" => false, "message" => "", "data" => null];
    if (!isset($_POST["lead_id"])) {
        $response["message"] = "User ID is missing!";
        echo json_encode($response);
        exit;
    }



    $leadId = $_POST["lead_id"];
    
    $query = "SELECT * FROM leads WHERE lead_id = ?";

    $statment = $pdo->prepare($query);
    $statment->execute([$leadId]);
    $user = $statment->fetchAll(PDO::FETCH_ASSOC);

    
        
        

    header('Content-Type: application/json');

       
        echo json_encode($user);
    
    
}
