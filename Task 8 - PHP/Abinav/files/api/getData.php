<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $pdo = new PDO("pgsql:host=localhost;port=5432;dbname=contact_managementapp;user=postgres;password=postgres");

    $response = ["status" => true, "message" => "", "data" => null];

    $query = "SELECT * FROM leads"; // Replace "your_table" with the actual table name

    $stmt = $pdo->prepare($query); // Changed $conn to $pdo
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($result);
}
?>

